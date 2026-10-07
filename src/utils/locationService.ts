import { calculateSolarTimes } from './solarCalculator';
import { getLocationTimezoneInfo, getTargetLocationCurrentMoment, LocationTimezoneInfo } from './timezoneService';

export interface LocationSearchResult {
  id: string;
  name: string;
  tamilName?: string;
  country?: string;
  admin1?: string;
  lat: number;
  lng: number;
  timezone?: string;
  timezoneOffset?: number;
}

export interface RecentLocationSearch {
  id: string;
  name: string;
  tamilName?: string;
  country?: string;
  admin1?: string;
  lat: number;
  lng: number;
  timezone?: string;
  timezoneOffset?: number;
  sunrise: string;
  sunset: string;
  nextSunrise: string;
  timestamp: number;
}

// Built-in high-precision instant offline database of prominent cities (with Tamil & English names & IANA timezones)
export const OFFLINE_CITIES: LocationSearchResult[] = [
  // Tamil Nadu
  { id: 'chennai', name: 'Chennai', tamilName: 'சென்னை', admin1: 'Tamil Nadu', country: 'India', lat: 13.0827, lng: 80.2707, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'madurai', name: 'Madurai', tamilName: 'மதுரை', admin1: 'Tamil Nadu', country: 'India', lat: 9.9252, lng: 78.1198, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'coimbatore', name: 'Coimbatore', tamilName: 'கோயம்புத்தூர்', admin1: 'Tamil Nadu', country: 'India', lat: 11.0168, lng: 76.9558, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'tiruchirappalli', name: 'Tiruchirappalli', tamilName: 'திருச்சிராப்பள்ளி', admin1: 'Tamil Nadu', country: 'India', lat: 10.7905, lng: 78.7047, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'salem', name: 'Salem', tamilName: 'சேலம்', admin1: 'Tamil Nadu', country: 'India', lat: 11.6643, lng: 78.1460, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'tirunelveli', name: 'Tirunelveli', tamilName: 'திருநெல்வேலி', admin1: 'Tamil Nadu', country: 'India', lat: 8.7139, lng: 77.7567, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'thanjavur', name: 'Thanjavur', tamilName: 'தஞ்சாவூர்', admin1: 'Tamil Nadu', country: 'India', lat: 10.7870, lng: 79.1378, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'vellore', name: 'Vellore', tamilName: 'வேலூர்', admin1: 'Tamil Nadu', country: 'India', lat: 12.9165, lng: 79.1325, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'erode', name: 'Erode', tamilName: 'ஈரோடு', admin1: 'Tamil Nadu', country: 'India', lat: 11.3410, lng: 77.7172, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'tiruppur', name: 'Tiruppur', tamilName: 'திருப்பூர்', admin1: 'Tamil Nadu', country: 'India', lat: 11.1085, lng: 77.3411, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'dindigul', name: 'Dindigul', tamilName: 'திண்டுக்கல்', admin1: 'Tamil Nadu', country: 'India', lat: 10.3673, lng: 77.9803, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'kanchipuram', name: 'Kanchipuram', tamilName: 'காஞ்சிபுரம்', admin1: 'Tamil Nadu', country: 'India', lat: 12.8342, lng: 79.7036, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'nagercoil', name: 'Nagercoil', tamilName: 'நாகர்கோவில்', admin1: 'Tamil Nadu', country: 'India', lat: 8.1833, lng: 77.4119, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'kumbakonam', name: 'Kumbakonam', tamilName: 'கும்பகோணம்', admin1: 'Tamil Nadu', country: 'India', lat: 10.9602, lng: 79.3845, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'cuddalore', name: 'Cuddalore', tamilName: 'கடலூர்', admin1: 'Tamil Nadu', country: 'India', lat: 11.7480, lng: 79.7714, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'karur', name: 'Karur', tamilName: 'கரூர்', admin1: 'Tamil Nadu', country: 'India', lat: 10.9601, lng: 78.0766, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'thoothukudi', name: 'Thoothukudi', tamilName: 'தூத்துக்குடி', admin1: 'Tamil Nadu', country: 'India', lat: 8.7642, lng: 78.1348, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'hosur', name: 'Hosur', tamilName: 'ஓசூர்', admin1: 'Tamil Nadu', country: 'India', lat: 12.7409, lng: 77.8253, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'pudukkottai', name: 'Pudukkottai', tamilName: 'புதுக்கோட்டை', admin1: 'Tamil Nadu', country: 'India', lat: 10.3833, lng: 78.8001, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'sivakasi', name: 'Sivakasi', tamilName: 'சிவகாசி', admin1: 'Tamil Nadu', country: 'India', lat: 9.4533, lng: 77.7977, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'dharmapuri', name: 'Dharmapuri', tamilName: 'தருமபுரி', admin1: 'Tamil Nadu', country: 'India', lat: 12.1211, lng: 78.1582, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'rameswaram', name: 'Rameswaram', tamilName: 'இராமேஸ்வரம்', admin1: 'Tamil Nadu', country: 'India', lat: 9.2876, lng: 79.3129, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'tiruvannamalai', name: 'Tiruvannamalai', tamilName: 'திருவண்ணாமலை', admin1: 'Tamil Nadu', country: 'India', lat: 12.2253, lng: 79.0747, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'nagapattinam', name: 'Nagapattinam', tamilName: 'நாகப்பட்டினம்', admin1: 'Tamil Nadu', country: 'India', lat: 10.7672, lng: 79.8449, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'puducherry', name: 'Puducherry', tamilName: 'புதுச்சேரி', admin1: 'Puducherry', country: 'India', lat: 11.9416, lng: 79.8083, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },

  // Other India Major Metros
  { id: 'bengaluru', name: 'Bengaluru', tamilName: 'பெங்களூரு', admin1: 'Karnataka', country: 'India', lat: 12.9716, lng: 77.5946, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'hyderabad', name: 'Hyderabad', tamilName: 'ஹைதராபாத்', admin1: 'Telangana', country: 'India', lat: 17.3850, lng: 78.4867, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'mumbai', name: 'Mumbai', tamilName: 'மும்பை', admin1: 'Maharashtra', country: 'India', lat: 19.0760, lng: 72.8777, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'new-delhi', name: 'New Delhi', tamilName: 'புது தில்லி', admin1: 'Delhi', country: 'India', lat: 28.6139, lng: 77.2090, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'kolkata', name: 'Kolkata', tamilName: 'கொல்கத்தா', admin1: 'West Bengal', country: 'India', lat: 22.5726, lng: 88.3639, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'kochi', name: 'Kochi', tamilName: 'கொச்சி', admin1: 'Kerala', country: 'India', lat: 9.9312, lng: 76.2673, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', tamilName: 'திருவனந்தபுரம்', admin1: 'Kerala', country: 'India', lat: 8.5241, lng: 76.9366, timezone: 'Asia/Kolkata', timezoneOffset: 5.5 },

  // International Diaspora Hubs
  { id: 'singapore', name: 'Singapore', tamilName: 'சிங்கப்பூர்', country: 'Singapore', lat: 1.3521, lng: 103.8198, timezone: 'Asia/Singapore', timezoneOffset: 8 },
  { id: 'kuala-lumpur', name: 'Kuala Lumpur', tamilName: 'கோலாலம்பூர்', country: 'Malaysia', lat: 3.1390, lng: 101.6869, timezone: 'Asia/Kuala_Lumpur', timezoneOffset: 8 },
  { id: 'colombo', name: 'Colombo', tamilName: 'கொழும்பு', country: 'Sri Lanka', lat: 6.9271, lng: 79.8612, timezone: 'Asia/Colombo', timezoneOffset: 5.5 },
  { id: 'jaffna', name: 'Jaffna', tamilName: 'யாழ்ப்பாணம்', country: 'Sri Lanka', lat: 9.6615, lng: 80.0255, timezone: 'Asia/Colombo', timezoneOffset: 5.5 },
  { id: 'batticaloa', name: 'Batticaloa', tamilName: 'மட்டக்களப்பு', country: 'Sri Lanka', lat: 7.7170, lng: 81.7000, timezone: 'Asia/Colombo', timezoneOffset: 5.5 },
  { id: 'dubai', name: 'Dubai', tamilName: 'துபாய்', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708, timezone: 'Asia/Dubai', timezoneOffset: 4 },
  { id: 'london', name: 'London', tamilName: 'லண்டன்', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, timezone: 'Europe/London', timezoneOffset: 1 },
  { id: 'paris', name: 'Paris', tamilName: 'பாரிஸ்', country: 'France', lat: 48.8566, lng: 2.3522, timezone: 'Europe/Paris', timezoneOffset: 2 },
  { id: 'new-york', name: 'New York', tamilName: 'நியூயார்க்', country: 'United States', lat: 40.7128, lng: -74.0060, timezone: 'America/New_York', timezoneOffset: -4 },
  { id: 'toronto', name: 'Toronto', tamilName: 'டொராண்டோ', country: 'Canada', lat: 43.6532, lng: -79.3832, timezone: 'America/Toronto', timezoneOffset: -4 },
  { id: 'sydney', name: 'Sydney', tamilName: 'சிட்னி', country: 'Australia', lat: -33.8688, lng: 151.2093, timezone: 'Australia/Sydney', timezoneOffset: 10 },
  { id: 'san-francisco', name: 'San Francisco', tamilName: 'சான் பிரான்சிஸ்கோ', country: 'United States', lat: 37.7749, lng: -122.4194, timezone: 'America/Los_Angeles', timezoneOffset: -7 },
  { id: 'chicago', name: 'Chicago', tamilName: 'சிகாகோ', country: 'United States', lat: 41.8781, lng: -87.6298, timezone: 'America/Chicago', timezoneOffset: -5 },
  { id: 'tokyo', name: 'Tokyo', tamilName: 'டோக்கியோ', country: 'Japan', lat: 35.6762, lng: 139.6503, timezone: 'Asia/Tokyo', timezoneOffset: 9 },
  { id: 'melbourne', name: 'Melbourne', tamilName: 'மெல்போர்ன்', country: 'Australia', lat: -37.8136, lng: 144.9631, timezone: 'Australia/Melbourne', timezoneOffset: 10 },
  { id: 'doha', name: 'Doha', tamilName: 'தோகா', country: 'Qatar', lat: 25.2854, lng: 51.5310, timezone: 'Asia/Qatar', timezoneOffset: 3 },
  { id: 'riyadh', name: 'Riyadh', tamilName: 'ரியாத்', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, timezone: 'Asia/Riyadh', timezoneOffset: 3 },
];

const RECENT_SEARCHES_KEY = 'pancha_recent_location_searches';
const MAX_RECENT_SEARCHES = 5;

export function getRecentSearches(): RecentLocationSearch[] {
  try {
    const data = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return parsed.slice(0, MAX_RECENT_SEARCHES);
    }
    return [];
  } catch (err) {
    console.error('Failed to load recent searches', err);
    return [];
  }
}

export function saveRecentSearch(search: Omit<RecentLocationSearch, 'timestamp'>): RecentLocationSearch[] {
  try {
    const recents = getRecentSearches();
    const newEntry: RecentLocationSearch = {
      ...search,
      timestamp: Date.now(),
    };

    // Filter out if already exists by id or matching name+lat
    const filtered = recents.filter(
      (r) => r.id !== newEntry.id && !(Math.abs(r.lat - newEntry.lat) < 0.05 && Math.abs(r.lng - newEntry.lng) < 0.05)
    );

    // Prepend new search and limit to 5
    const updated = [newEntry, ...filtered].slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save recent search', err);
    return [];
  }
}

export function removeRecentSearch(id: string): RecentLocationSearch[] {
  try {
    const recents = getRecentSearches();
    const updated = recents.filter((r) => r.id !== id);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to remove recent search', err);
    return [];
  }
}

export function clearRecentSearches(): void {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch (err) {
    console.error('Failed to clear recent searches', err);
  }
}

/**
 * Searches locations matching query from offline catalog first,
 * and seamlessly queries Open-Meteo Geocoding API for global locations.
 */
export async function searchLocations(query: string): Promise<LocationSearchResult[]> {
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) return [];

  const lowerQuery = trimmed.toLowerCase();

  // 1. Offline filter
  const localMatches = OFFLINE_CITIES.filter((city) => {
    return (
      city.name.toLowerCase().includes(lowerQuery) ||
      (city.tamilName && city.tamilName.includes(trimmed)) ||
      (city.admin1 && city.admin1.toLowerCase().includes(lowerQuery)) ||
      (city.country && city.country.toLowerCase().includes(lowerQuery))
    );
  });

  // If local results are abundant, return them immediately
  if (localMatches.length >= 4) {
    return localMatches.slice(0, 6);
  }

  // 2. Fetch from Open-Meteo Geocoding API (Fast, Free, CORS enabled)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(trimmed)}&count=6&language=en&format=json`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.results && Array.isArray(data.results)) {
        const apiResults: LocationSearchResult[] = data.results.map((item: any) => ({
          id: `om-${item.id || item.latitude.toFixed(3) + '-' + item.longitude.toFixed(3)}`,
          name: item.name,
          admin1: item.admin1,
          country: item.country,
          lat: item.latitude,
          lng: item.longitude,
          timezone: item.timezone,
        }));

        // Merge without duplicates
        const combined = [...localMatches];
        for (const apiItem of apiResults) {
          const exists = combined.some(
            (c) => Math.abs(c.lat - apiItem.lat) < 0.05 && Math.abs(c.lng - apiItem.lng) < 0.05
          );
          if (!exists) {
            combined.push(apiItem);
          }
        }
        return combined.slice(0, 6);
      }
    }
  } catch (err) {
    // If online search fails (e.g. offline container or network error), gracefully return local matches
  }

  return localMatches;
}

export function computeLocationSolarTimes(
  location: LocationSearchResult | RecentLocationSearch,
  refDate: Date = new Date()
) {
  const tzInfo = getLocationTimezoneInfo(location);
  const localMoment = getTargetLocationCurrentMoment(tzInfo.offsetMinutes, refDate);
  return {
    ...calculateSolarTimes(location.lat, location.lng, localMoment.localDate, tzInfo.offsetMinutes),
    tzInfo,
    localMoment,
  };
}
