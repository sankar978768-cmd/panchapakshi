import { PakshaType, DayOfWeek, DayCalculationMeta, Jama } from '../types';
import { JAMAS_DATA } from './panchaPakshiData';
import { VALARPIRAI_MONDAY_JAMAS, VALARPIRAI_MONDAY_CONFIG } from './valarpiraiMondayData';
import { VALARPIRAI_TUESDAY_JAMAS, VALARPIRAI_TUESDAY_CONFIG } from './valarpiraiTuesdayData';
import { VALARPIRAI_WEDNESDAY_JAMAS, VALARPIRAI_WEDNESDAY_CONFIG } from './valarpiraiWednesdayData';
import { VALARPIRAI_THURSDAY_JAMAS, VALARPIRAI_THURSDAY_CONFIG } from './valarpiraiThursdayData';
import { VALARPIRAI_FRIDAY_JAMAS, VALARPIRAI_FRIDAY_CONFIG } from './valarpiraiFridayData';
import { VALARPIRAI_SATURDAY_JAMAS, VALARPIRAI_SATURDAY_CONFIG } from './valarpiraiSaturdayData';
import { THEIPIRAI_SUNDAY_JAMAS, THEIPIRAI_SUNDAY_CONFIG } from './theipiraiSundayData';
import { THEIPIRAI_MONDAY_JAMAS, THEIPIRAI_MONDAY_CONFIG } from './theipiraiMondayData';
import { THEIPIRAI_TUESDAY_JAMAS, THEIPIRAI_TUESDAY_CONFIG } from './theipiraiTuesdayData';
import { THEIPIRAI_WEDNESDAY_JAMAS, THEIPIRAI_WEDNESDAY_CONFIG } from './theipiraiWednesdayData';
import { THEIPIRAI_THURSDAY_JAMAS, THEIPIRAI_THURSDAY_CONFIG } from './theipiraiThursdayData';
import { THEIPIRAI_FRIDAY_JAMAS, THEIPIRAI_FRIDAY_CONFIG } from './theipiraiFridayData';
import { THEIPIRAI_SATURDAY_JAMAS, THEIPIRAI_SATURDAY_CONFIG } from './theipiraiSaturdayData';

export const PANCHA_PAKSHI_DAYS: DayCalculationMeta[] = [
  // Valarpirai (Shukla Paksha - 7 Days)
  {
    id: 'valarpirai_sunday',
    paksha: 'valarpirai',
    dayOfWeek: 'sunday',
    name: 'Valarpirai Sunday',
    tamilName: 'வளர்பிறை ஞாயிறு',
    isReady: true,
    dayRulingBird: 'vulture',
    nightRulingBird: 'crow',
    dayDyingBird: 'owl',
    nightDyingBird: 'owl',
    dyingBird: 'owl',
    notes: 'Valar Pirai Sunday: Day Ruler Vulture (Jama 1-5), Night Ruler Crow (Jama 6-10), Dying Bird Owl (Jama 1-10).',
  },
  {
    id: 'valarpirai_monday',
    paksha: 'valarpirai',
    dayOfWeek: 'monday',
    name: 'Valarpirai Monday',
    tamilName: 'வளர்பிறை திங்கள்',
    isReady: true,
    dayRulingBird: 'owl',
    nightRulingBird: 'cock',
    dayDyingBird: 'crow',
    nightDyingBird: 'crow',
    dyingBird: 'crow',
    notes: 'Valar Pirai Monday: Day Ruler Owl (Jama 1-5), Night Ruler Cock (Jama 6-10), Dying Bird Crow (Jama 1-10).',
  },
  {
    id: 'valarpirai_tuesday',
    paksha: 'valarpirai',
    dayOfWeek: 'tuesday',
    name: 'Valarpirai Tuesday',
    tamilName: 'வளர்பிறை செவ்வாய்',
    isReady: true,
    dayRulingBird: 'vulture',
    nightRulingBird: 'crow',
    dayDyingBird: 'cock',
    nightDyingBird: 'cock',
    dyingBird: 'cock',
    notes: 'Valar Pirai Tuesday: Day Ruler Vulture (Jama 1-5), Night Ruler Crow (Jama 6-10), Dying Bird Cock (Jama 1-10).',
  },
  {
    id: 'valarpirai_wednesday',
    paksha: 'valarpirai',
    dayOfWeek: 'wednesday',
    name: 'Valarpirai Wednesday',
    tamilName: 'வளர்பிறை புதன்',
    isReady: true,
    dayRulingBird: 'owl',
    nightRulingBird: 'cock',
    dayDyingBird: 'peacock',
    nightDyingBird: 'peacock',
    dyingBird: 'peacock',
    notes: 'Valar Pirai Wednesday: Day Ruler Owl (Jama 1-5), Night Ruler Cock (Jama 6-10), Dying Bird Peacock (Jama 1-10).',
  },
  {
    id: 'valarpirai_thursday',
    paksha: 'valarpirai',
    dayOfWeek: 'thursday',
    name: 'Valarpirai Thursday',
    tamilName: 'வளர்பிறை வியாழன்',
    isReady: true,
    dayRulingBird: 'crow',
    nightRulingBird: 'peacock',
    dayDyingBird: 'vulture',
    nightDyingBird: 'vulture',
    dyingBird: 'vulture',
    notes: 'Valar Pirai Thursday: Day Ruler Crow (Jama 1-5), Night Ruler Peacock (Jama 6-10), Dying Bird Vulture (Jama 1-10).',
  },
  {
    id: 'valarpirai_friday',
    paksha: 'valarpirai',
    dayOfWeek: 'friday',
    name: 'Valarpirai Friday',
    tamilName: 'வளர்பிறை வெள்ளி',
    isReady: true,
    dayRulingBird: 'cock',
    nightRulingBird: 'vulture',
    dayDyingBird: 'owl',
    nightDyingBird: 'owl',
    dyingBird: 'owl',
    notes: 'Valar Pirai Friday: Day Ruler Cock (Jama 1-5), Night Ruler Vulture (Jama 6-10), Dying Bird Owl (Jama 1-10).',
  },
  {
    id: 'valarpirai_saturday',
    paksha: 'valarpirai',
    dayOfWeek: 'saturday',
    name: 'Valarpirai Saturday',
    tamilName: 'வளர்பிறை சனி',
    isReady: true,
    dayRulingBird: 'peacock',
    nightRulingBird: 'owl',
    dayDyingBird: 'vulture',
    nightDyingBird: 'vulture',
    dyingBird: 'vulture',
    notes: 'Valar Pirai Saturday: Day Ruler Peacock (Jama 1-5), Night Ruler Owl (Jama 6-10), Dying Bird Vulture (Jama 1-10).',
  },

  // Theipirai (Krishna Paksha - 7 Days)
  {
    id: 'theipirai_sunday',
    paksha: 'theipirai',
    dayOfWeek: 'sunday',
    name: 'Theipirai Sunday',
    tamilName: 'தேய்பிறை ஞாயிறு',
    isReady: true,
    dayRulingBird: 'cock',
    nightRulingBird: 'vulture',
    dayDyingBird: 'crow',
    nightDyingBird: 'crow',
    dyingBird: 'crow',
    notes: 'Theipirai Sunday: Day Ruler Cock (Jama 1-5), Night Ruler Vulture (Jama 6-10), Dying Bird Crow (Jama 1-10).',
  },
  {
    id: 'theipirai_monday',
    paksha: 'theipirai',
    dayOfWeek: 'monday',
    name: 'Theipirai Monday',
    tamilName: 'தேய்பிறை திங்கள்',
    isReady: true,
    dayRulingBird: 'peacock',
    nightRulingBird: 'cock',
    dayDyingBird: 'owl',
    nightDyingBird: 'owl',
    dyingBird: 'owl',
    notes: 'Theipirai Monday: Day Ruler Peacock (Jama 1-5), Night Ruler Cock (Jama 6-10), Dying Bird Owl (Jama 1-10).',
  },
  {
    id: 'theipirai_tuesday',
    paksha: 'theipirai',
    dayOfWeek: 'tuesday',
    name: 'Theipirai Tuesday',
    tamilName: 'தேய்பிறை செவ்வாய்',
    isReady: true,
    dayRulingBird: 'cock',
    nightRulingBird: 'vulture',
    dayDyingBird: 'vulture',
    nightDyingBird: 'vulture',
    dyingBird: 'vulture',
    notes: 'Theipirai Tuesday: Day Ruler Cock (Jama 1-5), Night Ruler Vulture (Jama 6-10), Dying Bird Vulture (Jama 1-10).',
  },
  {
    id: 'theipirai_wednesday',
    paksha: 'theipirai',
    dayOfWeek: 'wednesday',
    name: 'Theipirai Wednesday',
    tamilName: 'தேய்பிறை புதன்',
    isReady: true,
    dayRulingBird: 'crow',
    nightRulingBird: 'owl',
    dayDyingBird: 'peacock',
    nightDyingBird: 'peacock',
    dyingBird: 'peacock',
    notes: 'Theipirai Wednesday: Day Ruler Crow (Jama 1-5), Night Ruler Owl (Jama 6-10), Dying Bird Peacock (Jama 1-10).',
  },
  {
    id: 'theipirai_thursday',
    paksha: 'theipirai',
    dayOfWeek: 'thursday',
    name: 'Theipirai Thursday',
    tamilName: 'தேய்பிறை வியாழன்',
    isReady: true,
    dayRulingBird: 'owl',
    nightRulingBird: 'crow',
    dayDyingBird: 'cock',
    nightDyingBird: 'cock',
    dyingBird: 'cock',
    notes: 'Theipirai Thursday: Day Ruler Owl (Jama 1-5), Night Ruler Crow (Jama 6-10), Dying Bird Cock (Jama 1-10).',
  },
  {
    id: 'theipirai_friday',
    paksha: 'theipirai',
    dayOfWeek: 'friday',
    name: 'Theipirai Friday',
    tamilName: 'தேய்பிறை வெள்ளி',
    isReady: true,
    dayRulingBird: 'vulture',
    nightRulingBird: 'peacock',
    dayDyingBird: 'peacock',
    nightDyingBird: 'peacock',
    dyingBird: 'peacock',
    notes: 'Theipirai Friday: Day Ruler Vulture (Jama 1-5), Night Ruler Peacock (Jama 6-10), Dying Bird Peacock (Jama 1-10).',
  },
  {
    id: 'theipirai_saturday',
    paksha: 'theipirai',
    dayOfWeek: 'saturday',
    name: 'Theipirai Saturday',
    tamilName: 'தேய்பிறை சனி',
    isReady: true,
    dayRulingBird: 'peacock',
    nightRulingBird: 'cock',
    dayDyingBird: 'cock',
    nightDyingBird: 'cock',
    dyingBird: 'cock',
    notes: 'Theipirai Saturday: Day Ruler Peacock (Jama 1-5), Night Ruler Cock (Jama 6-10), Dying Bird Cock (Jama 1-10).',
  },
];

// Helper to retrieve custom user-uploaded tables from local storage
export function getSavedCustomDayJamas(dayId: string): Jama[] | null {
  try {
    const raw = localStorage.getItem(`pancha_day_data_${dayId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as Jama[];
      }
    }
  } catch (e) {
    console.error(`Failed to parse custom jamas for ${dayId}:`, e);
  }
  return null;
}

// Save a custom uploaded day calculation
export function saveCustomDayJamas(dayId: string, jamas: Jama[]): void {
  try {
    localStorage.setItem(`pancha_day_data_${dayId}`, JSON.stringify(jamas));
  } catch (e) {
    console.error(`Failed to save custom jamas for ${dayId}:`, e);
  }
}

// Get the base default Jamas for a day
export function getBaseJamasForDay(dayId: string): { jamas: Jama[]; isPreloaded: boolean; defaultSunrise?: string; defaultSunset?: string; defaultNextSunrise?: string } {
  // Check if user uploaded a custom version for this day
  const custom = getSavedCustomDayJamas(dayId);
  if (custom) {
    return { jamas: custom, isPreloaded: true };
  }

  // Preloaded Valarpirai Sunday
  if (dayId === 'valarpirai_sunday') {
    return {
      jamas: JAMAS_DATA,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '18:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Valarpirai Monday
  if (dayId === 'valarpirai_monday') {
    return {
      jamas: VALARPIRAI_MONDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Valarpirai Tuesday
  if (dayId === 'valarpirai_tuesday') {
    return {
      jamas: VALARPIRAI_TUESDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '18:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Valarpirai Wednesday
  if (dayId === 'valarpirai_wednesday') {
    return {
      jamas: VALARPIRAI_WEDNESDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Valarpirai Thursday
  if (dayId === 'valarpirai_thursday') {
    return {
      jamas: VALARPIRAI_THURSDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '07:01',
      defaultSunset: '18:38',
      defaultNextSunrise: '07:03',
    };
  }

  // Preloaded Valarpirai Friday
  if (dayId === 'valarpirai_friday') {
    return {
      jamas: VALARPIRAI_FRIDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:01',
      defaultSunset: '18:00',
      defaultNextSunrise: '06:03',
    };
  }

  // Preloaded Valarpirai Saturday
  if (dayId === 'valarpirai_saturday') {
    return {
      jamas: VALARPIRAI_SATURDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '07:01',
      defaultSunset: '18:38',
      defaultNextSunrise: '07:03',
    };
  }

  // Preloaded Theipirai Sunday
  if (dayId === 'theipirai_sunday') {
    return {
      jamas: THEIPIRAI_SUNDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Theipirai Monday
  if (dayId === 'theipirai_monday') {
    return {
      jamas: THEIPIRAI_MONDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Theipirai Tuesday
  if (dayId === 'theipirai_tuesday') {
    return {
      jamas: THEIPIRAI_TUESDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Theipirai Wednesday
  if (dayId === 'theipirai_wednesday') {
    return {
      jamas: THEIPIRAI_WEDNESDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Theipirai Thursday
  if (dayId === 'theipirai_thursday') {
    return {
      jamas: THEIPIRAI_THURSDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Theipirai Friday
  if (dayId === 'theipirai_friday') {
    return {
      jamas: THEIPIRAI_FRIDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Preloaded Theipirai Saturday
  if (dayId === 'theipirai_saturday') {
    return {
      jamas: THEIPIRAI_SATURDAY_JAMAS,
      isPreloaded: true,
      defaultSunrise: '06:00',
      defaultSunset: '19:00',
      defaultNextSunrise: '06:00',
    };
  }

  // Not yet loaded: return Valarpirai Sunday as fallback template but with flag false
  return { jamas: JAMAS_DATA, isPreloaded: false };
}
