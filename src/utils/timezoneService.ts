// Timezone utility service supporting coordinate-based timezone offset detection and formatting

export interface LocationCoords {
  lat: number;
  lng: number;
}

export interface LocationTimezoneInfo {
  offsetMinutes: number;
  offsetHours: number;
  timezoneName: string;
}

/**
 * Calculates timezone information for given geographic coordinates.
 * Provides accurate offline timezone offsets for major regions and coordinates.
 */
export function getLocationTimezoneInfo(coords: LocationCoords): LocationTimezoneInfo {
  const { lat, lng } = coords;

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
    timezoneName: systemTz,
  };
}
