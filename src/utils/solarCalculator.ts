// Accurate offline Solar Calculator based on standard NOAA Solar Equations
// Computes local Sunrise and Sunset for any latitude, longitude and date

export interface CityPreset {
  name: string;
  tamilName: string;
  lat: number;
  lng: number;
  timezoneOffset?: number; // hours from UTC, optional if using device local
}

export const CITY_PRESETS: CityPreset[] = [
  { name: 'Chennai', tamilName: 'சென்னை', lat: 13.0827, lng: 80.2707 },
  { name: 'Madurai', tamilName: 'மதுரை', lat: 9.9252, lng: 78.1198 },
  { name: 'Coimbatore', tamilName: 'கோயம்புத்தூர்', lat: 11.0168, lng: 76.9558 },
  { name: 'Tiruchirappalli', tamilName: 'திருச்சிராப்பள்ளி', lat: 10.7905, lng: 78.7047 },
  { name: 'Salem', tamilName: 'சேலம்', lat: 11.6643, lng: 78.1460 },
  { name: 'Tirunelveli', tamilName: 'திருநெல்வேலி', lat: 8.7139, lng: 77.7567 },
  { name: 'Thanjavur', tamilName: 'தஞ்சாவூர்', lat: 10.7870, lng: 79.1378 },
  { name: 'Bengaluru', tamilName: 'பெங்களூரு', lat: 12.9716, lng: 77.5946 },
  { name: 'Hyderabad', tamilName: 'ஹைதராபாத்', lat: 17.3850, lng: 78.4867 },
  { name: 'Mumbai', tamilName: 'மும்பை', lat: 19.0760, lng: 72.8777 },
  { name: 'New Delhi', tamilName: 'புது தில்லி', lat: 28.6139, lng: 77.2090 },
  { name: 'Singapore', tamilName: 'சிங்கப்பூர்', lat: 1.3521, lng: 103.8198 },
  { name: 'Kuala Lumpur', tamilName: 'கோலாலம்பூர்', lat: 3.1390, lng: 101.6869 },
  { name: 'Colombo', tamilName: 'கொழும்பு', lat: 6.9271, lng: 79.8612 },
  { name: 'London', tamilName: 'லண்டன்', lat: 51.5074, lng: -0.1278 },
  { name: 'New York', tamilName: 'நியூயார்க்', lat: 40.7128, lng: -74.0060 },
];

/**
 * Calculates Sunrise and Sunset in local HH:MM (24h) format using NOAA algorithm
 */
export function calculateSolarTimes(
  lat: number,
  lng: number,
  date: Date = new Date(),
  explicitTimezoneOffsetMin?: number
): { sunrise: string; sunset: string; nextSunrise: string } {
  const calcForDate = (d: Date): { sunriseMinutes: number; sunsetMinutes: number } => {
    // Day of the year
    const startOfYear = new Date(d.getFullYear(), 0, 0);
    const diff = d.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Fractional year in radians
    const gamma = (2 * Math.PI / 365) * (dayOfYear - 1 + (d.getHours() - 12) / 24);

    // Equation of time in minutes
    const eqtime = 229.18 * (
      0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma)
    );

    // Solar declination in radians
    const decl = 0.006918 -
      0.399912 * Math.cos(gamma) +
      0.070257 * Math.sin(gamma) -
      0.006758 * Math.cos(2 * gamma) +
      0.000907 * Math.sin(2 * gamma) -
      0.002697 * Math.cos(3 * gamma) +
      0.00148 * Math.sin(3 * gamma);

    // Zenith for sunrise/sunset is 90.833° (standard atmospheric refraction)
    const zenithRad = 90.833 * (Math.PI / 180);
    const latRad = lat * (Math.PI / 180);

    // Hour angle calculation
    const cosHA = (Math.cos(zenithRad) / (Math.cos(latRad) * Math.cos(decl))) - (Math.tan(latRad) * Math.tan(decl));

    // Handle polar day/night if extreme
    if (cosHA > 1) {
      // Sun never rises
      return { sunriseMinutes: 360, sunsetMinutes: 1080 };
    }
    if (cosHA < -1) {
      // Sun never sets
      return { sunriseMinutes: 360, sunsetMinutes: 1080 };
    }

    const ha = Math.acos(cosHA) * (180 / Math.PI); // degrees

    // Local timezone offset in minutes from UTC (negative for east of UTC in JS getTimezoneOffset)
    const timezoneOffsetMin = typeof explicitTimezoneOffsetMin === 'number'
      ? explicitTimezoneOffsetMin
      : -d.getTimezoneOffset();

    // Solar noon in minutes from local midnight
    const solarNoon = 720 - 4 * lng - eqtime + timezoneOffsetMin;

    const sunriseMinutes = solarNoon - ha * 4;
    const sunsetMinutes = solarNoon + ha * 4;

    return {
      sunriseMinutes: Math.round(sunriseMinutes),
      sunsetMinutes: Math.round(sunsetMinutes),
    };
  };

  const today = calcForDate(date);

  const tomorrowDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  const tomorrow = calcForDate(tomorrowDate);

  const formatMin = (m: number): string => {
    let normalized = (m % 1440 + 1440) % 1440;
    const hrs = Math.floor(normalized / 60);
    const mins = normalized % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  return {
    sunrise: formatMin(today.sunriseMinutes),
    sunset: formatMin(today.sunsetMinutes),
    nextSunrise: formatMin(tomorrow.sunriseMinutes),
  };
}
