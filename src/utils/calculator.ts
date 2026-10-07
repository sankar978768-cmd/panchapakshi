import { BirdId, Jama, SubPeriod, ActivityType } from '../types';
import { JAMAS_DATA, BIRDS } from '../data/panchaPakshiData';

export interface BirdActivitySummary {
  ruleMinutes: number;
  eatMinutes: number;
  walkMinutes: number;
  sleepMinutes: number;
  dieMinutes: number;
  totalMinutes: number;
  bestTimeSlots: { jama: number; time: string; activity: ActivityType; star: number; note: string }[];
  cautionTimeSlots: { jama: number; time: string; activity: ActivityType; star: number; note: string }[];
}

export interface CurrentStatusResult {
  currentMinutesFromMidnight: number;
  timeDisplay: string;
  activeJama: Jama;
  selectedBirdMainActivity: ActivityType;
  activeSubPeriod: SubPeriod;
  subPeriodIndex: number;
  minutesRemainingInSubPeriod: number;
  progressPercent: number;
}

export type PanchaPakshiStatus = CurrentStatusResult;

export function parseTimeToMinutes(timeStr: string): number {
  const [timePart, modifier] = timeStr.trim().split(' ');
  const [hoursStr, minutesStr] = timePart.split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (modifier) {
    if (modifier.toUpperCase() === 'PM' && hours < 12) hours += 12;
    if (modifier.toUpperCase() === 'AM' && hours === 12) hours = 0;
  }
  return hours * 60 + minutes;
}

export function formatMinutesToTime(totalMinutes: number): string {
  let normalized = Math.floor(totalMinutes) % 1440;
  if (normalized < 0) normalized += 1440;

  let hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const period = hours >= 12 ? 'PM' : 'AM';

  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function getCurrentStatus(
  selectedBird: BirdId,
  timeMinutesOrDate?: number | Date,
  customJamas?: Jama[]
): CurrentStatusResult {
  const jamas = customJamas || JAMAS_DATA;

  let minutes: number;
  let timeDisplay: string;

  if (typeof timeMinutesOrDate === 'number') {
    minutes = timeMinutesOrDate % 1440;
    timeDisplay = formatMinutesToTime(minutes);
  } else {
    const d = timeMinutesOrDate instanceof Date ? timeMinutesOrDate : new Date();
    minutes = d.getHours() * 60 + d.getMinutes();
    timeDisplay = formatMinutesToTime(minutes);
  }

  // Determine effective minutes in the cycle [sunriseMin ... nextSunriseMin]
  const cycleStartMin = jamas[0]?.startMinutesFromMidnight ?? 360;
  const effectiveMinutes = minutes < cycleStartMin ? minutes + 1440 : minutes;

  // Find active Jama
  let activeJama = jamas[0];
  for (const j of jamas) {
    if (effectiveMinutes >= j.startMinutesFromMidnight && effectiveMinutes < j.endMinutesFromMidnight) {
      activeJama = j;
      break;
    }
  }

  // In the active Jama, get the selected bird's column
  const birdColumn = activeJama.columns[selectedBird];
  const mainActivity = birdColumn.mainActivity;

  // Find the active sub-period inside this bird's column
  let activeSubPeriod = birdColumn.subPeriods[0];
  let subIndex = 0;

  for (let i = 0; i < birdColumn.subPeriods.length; i++) {
    const sp = birdColumn.subPeriods[i];
    if (effectiveMinutes >= sp.startMinutesFromMidnight && effectiveMinutes < sp.endMinutesFromMidnight) {
      activeSubPeriod = sp;
      subIndex = i;
      break;
    }
  }

  // Calculate elapsed and remaining minutes
  const elapsed = Math.max(0, effectiveMinutes - activeSubPeriod.startMinutesFromMidnight);
  const remaining = Math.max(0, activeSubPeriod.endMinutesFromMidnight - effectiveMinutes);
  const progress = Math.min(100, Math.max(0, (elapsed / (activeSubPeriod.durationMinutes || 1)) * 100));

  return {
    currentMinutesFromMidnight: minutes,
    timeDisplay,
    activeJama,
    selectedBirdMainActivity: mainActivity,
    activeSubPeriod,
    subPeriodIndex: subIndex,
    minutesRemainingInSubPeriod: remaining,
    progressPercent: Math.round(progress),
  };
}

export const getCurrentPanchaStatus = getCurrentStatus;

export function calculateBirdSummary(birdId: BirdId, jamas: Jama[] = JAMAS_DATA): BirdActivitySummary {
  let ruleMin = 0;
  let eatMin = 0;
  let walkMin = 0;
  let sleepMin = 0;
  let dieMin = 0;

  const bestTimeSlots: { jama: number; time: string; activity: ActivityType; star: number; note: string }[] = [];
  const cautionTimeSlots: { jama: number; time: string; activity: ActivityType; star: number; note: string }[] = [];

  // Calculate across all 10 Jamas for this bird's column
  for (const j of jamas) {
    const col = j.columns[birdId];
    for (const sp of col.subPeriods) {
      if (sp.activity === 'Rule') ruleMin += sp.durationMinutes;
      else if (sp.activity === 'Eat') eatMin += sp.durationMinutes;
      else if (sp.activity === 'Walk') walkMin += sp.durationMinutes;
      else if (sp.activity === 'Sleep') sleepMin += sp.durationMinutes;
      else if (sp.activity === 'Die') dieMin += sp.durationMinutes;

      if ((sp.activity === 'Rule' || sp.activity === 'Eat') && sp.star >= 6) {
        bestTimeSlots.push({
          jama: j.jamaNumber,
          time: `${sp.startTime} - ${sp.endTime}`,
          activity: sp.activity,
          star: sp.star,
          note: `${sp.activity === 'Rule' ? 'Ruling Period' : 'Eating Period'} (${sp.star}★ Star Strength)`,
        });
      }

      if (sp.activity === 'Die' || (sp.activity === 'Sleep' && sp.star <= 2)) {
        cautionTimeSlots.push({
          jama: j.jamaNumber,
          time: `${sp.startTime} - ${sp.endTime}`,
          activity: sp.activity,
          star: sp.star,
          note: `${sp.activity === 'Die' ? 'Dying Period - Avoid starts' : 'Sleep Period - Inauspicious'} (${sp.star}★)`,
        });
      }
    }
  }

  return {
    ruleMinutes: ruleMin,
    eatMinutes: eatMin,
    walkMinutes: walkMin,
    sleepMinutes: sleepMin,
    dieMinutes: dieMin,
    totalMinutes: ruleMin + eatMin + walkMin + sleepMin + dieMin,
    bestTimeSlots,
    cautionTimeSlots,
  };
}

// Find all occurrences where this bird acts as the sub-bird across all columns
export function findBirdAsSubBird(birdId: BirdId, jamas: Jama[] = JAMAS_DATA) {
  const occurrences: {
    jamaNumber: number;
    jamaTitle: string;
    parentBird: BirdId;
    startTime: string;
    endTime: string;
    durationMinutes: number;
    star: number;
    activity: ActivityType;
  }[] = [];

  for (const j of jamas) {
    for (const parentKey of Object.keys(j.columns) as BirdId[]) {
      const col = j.columns[parentKey];
      for (const sp of col.subPeriods) {
        if (sp.birdId === birdId) {
          occurrences.push({
            jamaNumber: j.jamaNumber,
            jamaTitle: j.title,
            parentBird: parentKey,
            startTime: sp.startTime,
            endTime: sp.endTime,
            durationMinutes: sp.durationMinutes,
            star: sp.star,
            activity: sp.activity,
          });
        }
      }
    }
  }

  return occurrences;
}

// Dynamic Base Act Durations & Weights Extractor
export function getActBaseDurations(baseJamas: Jama[] = JAMAS_DATA) {
  const dayActBaseDurations: Record<ActivityType, number> = {
    Rule: 48,
    Walk: 36,
    Eat: 30,
    Sleep: 18,
    Die: 12,
  };

  const firstDayJama = baseJamas.find((j) => j.isDay);
  if (firstDayJama) {
    const col = Object.values(firstDayJama.columns)[0];
    if (col && col.subPeriods) {
      col.subPeriods.forEach((sp) => {
        if (sp.activity && sp.durationMinutes > 0) {
          dayActBaseDurations[sp.activity] = sp.durationMinutes;
        }
      });
    }
  }

  const nightActBaseDurations: Record<ActivityType, number> = {
    Rule: 24,
    Walk: 30,
    Eat: 30,
    Sleep: 24,
    Die: 36,
  };

  const firstNightJama = baseJamas.find((j) => !j.isDay);
  if (firstNightJama) {
    const col = Object.values(firstNightJama.columns)[0];
    if (col && col.subPeriods) {
      col.subPeriods.forEach((sp) => {
        if (sp.activity && sp.durationMinutes > 0) {
          nightActBaseDurations[sp.activity] = sp.durationMinutes;
        }
      });
    }
  }

  const dayBaseSum =
    (dayActBaseDurations.Rule || 0) +
    (dayActBaseDurations.Walk || 0) +
    (dayActBaseDurations.Eat || 0) +
    (dayActBaseDurations.Sleep || 0) +
    (dayActBaseDurations.Die || 0) || 144;

  const nightBaseSum =
    (nightActBaseDurations.Rule || 0) +
    (nightActBaseDurations.Walk || 0) +
    (nightActBaseDurations.Eat || 0) +
    (nightActBaseDurations.Sleep || 0) +
    (nightActBaseDurations.Die || 0) || 144;

  return {
    dayActBaseDurations,
    dayBaseSum,
    nightActBaseDurations,
    nightBaseSum,
  };
}

// Dynamic Recalculator for custom Sunrise & Sunset times
export function recalculateJamas(
  sunriseTime: string = '06:00',
  sunsetTime: string = '18:00',
  nextSunriseTime: string = '06:00',
  baseJamas: Jama[] = JAMAS_DATA
): Jama[] {
  // Parse inputs (HH:MM 24h format e.g. "06:00", "18:00")
  const [sHr, sMin] = sunriseTime.split(':').map(Number);
  const [setHr, setMin] = sunsetTime.split(':').map(Number);
  const [nShr, nSmin] = nextSunriseTime.split(':').map(Number);

  const sunriseMin = (sHr || 0) * 60 + (sMin || 0);
  let sunsetMin = (setHr || 0) * 60 + (setMin || 0);
  if (sunsetMin <= sunriseMin) {
    sunsetMin += 1440;
  }

  let nextSunriseMin = (nShr || 0) * 60 + (nSmin || 0);
  while (nextSunriseMin <= sunsetMin) {
    nextSunriseMin += 1440;
  }

  const dayTotalMin = sunsetMin - sunriseMin;
  const nightTotalMin = nextSunriseMin - sunsetMin;

  const dayJamaDuration = dayTotalMin / 5;
  const nightJamaDuration = nightTotalMin / 5;

  const {
    dayActBaseDurations,
    dayBaseSum,
    nightActBaseDurations,
    nightBaseSum,
  } = getActBaseDurations(baseJamas);

  return baseJamas.map((baseJama) => {
    const isDay = baseJama.isDay;
    const jamaIdx = isDay ? baseJama.jamaNumber - 1 : baseJama.jamaNumber - 6;
    const jamaDuration = isDay ? dayJamaDuration : nightJamaDuration;
    const jamaStartMin = isDay
      ? sunriseMin + jamaIdx * dayJamaDuration
      : sunsetMin + jamaIdx * nightJamaDuration;
    const jamaEndMin = jamaStartMin + jamaDuration;

    const newColumns: Record<BirdId, any> = {} as any;

    for (const birdKey of Object.keys(baseJama.columns) as BirdId[]) {
      const baseCol = baseJama.columns[birdKey];
      let subStartMin = jamaStartMin;

      const newSubPeriods: SubPeriod[] = baseCol.subPeriods.map((baseSp, spIdx, arr) => {
        const isLast = spIdx === arr.length - 1;
        const weight = isDay
          ? (dayActBaseDurations[baseSp.activity] / dayBaseSum)
          : (nightActBaseDurations[baseSp.activity] / nightBaseSum);

        let subDuration = jamaDuration * weight;
        let subEndMin = subStartMin + subDuration;

        // Snap last subperiod to end of Jama to guarantee continuity without rounding drift
        if (isLast) {
          subEndMin = jamaEndMin;
          subDuration = subEndMin - subStartMin;
        }

        const sp: SubPeriod = {
          birdId: baseSp.birdId,
          star: baseSp.star,
          activity: baseSp.activity,
          startTime: formatMinutesToTime(subStartMin),
          durationMinutes: Math.round(subDuration * 10) / 10,
          endTime: formatMinutesToTime(subEndMin),
          startMinutesFromMidnight: Math.round(subStartMin * 100) / 100,
          endMinutesFromMidnight: Math.round(subEndMin * 100) / 100,
        };

        subStartMin = subEndMin;
        return sp;
      });

      newColumns[birdKey] = {
        birdId: baseCol.birdId,
        mainActivity: baseCol.mainActivity,
        subPeriods: newSubPeriods,
      };
    }

    return {
      jamaNumber: baseJama.jamaNumber,
      isDay: baseJama.isDay,
      title: baseJama.title,
      startTime: formatMinutesToTime(jamaStartMin),
      endTime: formatMinutesToTime(jamaEndMin),
      startMinutesFromMidnight: Math.round(jamaStartMin * 100) / 100,
      endMinutesFromMidnight: Math.round(jamaEndMin * 100) / 100,
      columns: newColumns,
    };
  });
}
