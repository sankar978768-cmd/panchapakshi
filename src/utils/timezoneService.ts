// Timezone utility service supporting coordinate-based timezone offset detection and formatting

export interface LocationCoords {
  lat: number;
  lng: number;
  timezone?: string;
  timezoneOffset?: number;
}

export interface LocationTimezoneInfo {
  offsetMinutes: number;
  offsetHours: number;
  timezoneName: string;
}

export interface TargetLocationCurrentMoment {
  localDate: Date;
  dateString: string;
  timeString: string;
  timeString24: string;
  hours: number;
  minutes: number;
  seconds: number;
  dayName: string;
  dayOfWeek: number;
  formattedText: string;
  offsetMinutes: number;
}

/**
 * Calculates timezone information for given geographic coordinates.
 * Provides accurate offline timezone offsets for major regions and coordinates.
 */
export function getLocationTimezoneInfo(coords: LocationCoords): LocationTimezoneInfo {
  const { lat, lng } = coords;

  // If explicit timezoneOffset is provided (e.g. from built-in cities list)
  if (typeof coords.timezoneOffset === 'number' && !isNaN(coords.timezoneOffset)) {
    const offsetHours = coords.timezoneOffset;
    const offsetMinutes = Math.round(offsetHours * 60);
    return {
      offsetMinutes,
      offsetHours,
      timezoneName: coords.timezone || 'UTC',
    };
  }

  // Indian subcontinent (India & Sri Lanka: UTC+5:30)
  if (lat >= 5 && lat <= 38 && lng >= 68 && lng <= 98) {
    return {
      offsetMinutes: 330,
      offsetHours: 5.5,
      timezoneName: 'Asia/Kolkata',
    };
  }

  // Singapore & Malaysia (UTC+8:00)
  if (lat >= 0.8 && lat <= 7.5 && lng >= 99 && lng <= 105) {
    return {
      offsetMinutes: 480,
      offsetHours: 8.0,
      timezoneName: 'Asia/Singapore',
    };
  }

  // United Arab Emirates / Gulf (UTC+4:00)
  if (lat >= 22 && lat <= 27 && lng >= 51 && lng <= 57) {
    return {
      offsetMinutes: 240,
      offsetHours: 4.0,
      timezoneName: 'Asia/Dubai',
    };
  }

  // United Kingdom / Western Europe (approx UTC+0 / UTC+1)
  if (lat >= 49 && lat <= 60 && lng >= -8 && lng <= 2) {
    return {
      offsetMinutes: 0,
      offsetHours: 0,
      timezoneName: 'Europe/London',
    };
  }

  // Eastern Australia (UTC+10:00)
  if (lat <= -10 && lat >= -44 && lng >= 140 && lng <= 155) {
    return {
      offsetMinutes: 600,
      offsetHours: 10.0,
      timezoneName: 'Australia/Sydney',
    };
  }

  // Eastern US / Canada (UTC-5:00)
  if (lat >= 24 && lat <= 50 && lng >= -85 && lng <= -65) {
    return {
      offsetMinutes: -300,
      offsetHours: -5.0,
      timezoneName: 'America/New_York',
    };
  }

  // General longitude estimation (15 degrees per hour, rounded to 30 min intervals)
  const estimatedHours = Math.round((lng / 15) * 2) / 2;
  const estimatedMinutes = Math.round(estimatedHours * 60);

  // Fallback system timezone if available
  let systemTz = 'UTC';
  try {
    systemTz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    systemTz = 'UTC';
  }

  return {
    offsetMinutes: estimatedMinutes,
    offsetHours: estimatedHours,
    timezoneName: coords.timezone || systemTz,
  };
}

/**
 * Calculates current moment and date representation in the target location's timezone.
 */
export function getTargetLocationCurrentMoment(
  offsetMinutes: number,
  refDate: Date = new Date()
): TargetLocationCurrentMoment {
  const targetUtcMillis = refDate.getTime() + offsetMinutes * 60 * 1000;
  const targetDateUtc = new Date(targetUtcMillis);

  const year = targetDateUtc.getUTCFullYear();
  const month = targetDateUtc.getUTCMonth();
  const date = targetDateUtc.getUTCDate();
  const hours = targetDateUtc.getUTCHours();
  const minutes = targetDateUtc.getUTCMinutes();
  const seconds = targetDateUtc.getUTCSeconds();
  const dayOfWeek = targetDateUtc.getUTCDay();

  // Create a Date object whose standard date getters match local target time
  const localDate = new Date(year, month, date, hours, minutes, seconds);

  const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
  const timeString24 = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;
  const timeString = `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[dayOfWeek];
  const formattedText = `${timeString}, ${dayName} (${dateString})`;

  return {
    localDate,
    dateString,
    timeString,
    timeString24,
    hours,
    minutes,
    seconds,
    dayName,
    dayOfWeek,
    formattedText,
    offsetMinutes,
  };
}
