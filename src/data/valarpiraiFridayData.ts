import { Jama } from '../types';

export const VALARPIRAI_FRIDAY_CONFIG = {
  dayTotalMinutes: 719,
  nightTotalMinutes: 723,
  sunriseToday: '06:01',
  sunsetToday: '18:00',
  nextSunriseTomorrow: '06:03',
  dayRuleMinutes: 48,
  dayEatMinutes: 30,
  dayWalkMinutes: 36,
  daySleepMinutes: 18,
  dayDieMinutes: 12,
  nightRuleMinutes: 24,
  nightEatMinutes: 30,
  nightWalkMinutes: 30,
  nightSleepMinutes: 24,
  nightDieMinutes: 36,
  dayRulingBird: 'Cock',
  dayDyingBird: 'Owl',
  nightRulingBird: 'Vulture',
  nightDyingBird: 'Owl',
};

// Complete 10 Jamas for Valarpirai Friday encoded faithfully from the uploaded spreadsheet
export const VALARPIRAI_FRIDAY_JAMAS: Jama[] = [
  // --- JAMA 1 (6:01 AM - 8:25 AM) --- 144 mins (Day)
  // Main Activities: Vulture (Rule), Owl Sleep, Crow (Die), Cock (Eat), Peacock (Walk)
  {
    jamaNumber: 1,
    isDay: true,
    title: 'Valar Pirai Jama 1',
    startTime: '6:01 AM',
    endTime: '8:25 AM',
    startMinutesFromMidnight: 361,
    endMinutesFromMidnight: 505,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '6:01 AM', durationMinutes: 48, endTime: '6:49 AM', startMinutesFromMidnight: 361, endMinutesFromMidnight: 409 },
          { birdId: 'owl', star: 5, activity: 'Sleep', startTime: '6:49 AM', durationMinutes: 18, endTime: '7:07 AM', startMinutesFromMidnight: 409, endMinutesFromMidnight: 427 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:07 AM', durationMinutes: 12, endTime: '7:19 AM', startMinutesFromMidnight: 427, endMinutesFromMidnight: 439 },
          { birdId: 'cock', star: 7, activity: 'Eat', startTime: '7:19 AM', durationMinutes: 30, endTime: '7:49 AM', startMinutesFromMidnight: 439, endMinutesFromMidnight: 469 },
          { birdId: 'peacock', star: 7, activity: 'Walk', startTime: '7:49 AM', durationMinutes: 36, endTime: '8:25 AM', startMinutesFromMidnight: 469, endMinutesFromMidnight: 505 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '6:01 AM', durationMinutes: 18, endTime: '6:19 AM', startMinutesFromMidnight: 361, endMinutesFromMidnight: 379 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '6:19 AM', durationMinutes: 12, endTime: '6:31 AM', startMinutesFromMidnight: 379, endMinutesFromMidnight: 391 },
          { birdId: 'cock', star: 2, activity: 'Eat', startTime: '6:31 AM', durationMinutes: 30, endTime: '7:01 AM', startMinutesFromMidnight: 391, endMinutesFromMidnight: 421 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '7:01 AM', durationMinutes: 36, endTime: '7:37 AM', startMinutesFromMidnight: 421, endMinutesFromMidnight: 457 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '7:37 AM', durationMinutes: 48, endTime: '8:25 AM', startMinutesFromMidnight: 457, endMinutesFromMidnight: 505 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '6:01 AM', durationMinutes: 12, endTime: '6:13 AM', startMinutesFromMidnight: 361, endMinutesFromMidnight: 373 },
          { birdId: 'cock', star: 3, activity: 'Eat', startTime: '6:13 AM', durationMinutes: 30, endTime: '6:43 AM', startMinutesFromMidnight: 373, endMinutesFromMidnight: 403 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '6:43 AM', durationMinutes: 36, endTime: '7:19 AM', startMinutesFromMidnight: 403, endMinutesFromMidnight: 439 },
          { birdId: 'vulture', star: 1, activity: 'Rule', startTime: '7:19 AM', durationMinutes: 48, endTime: '8:07 AM', startMinutesFromMidnight: 439, endMinutesFromMidnight: 487 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '8:07 AM', durationMinutes: 18, endTime: '8:25 AM', startMinutesFromMidnight: 487, endMinutesFromMidnight: 505 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '6:01 AM', durationMinutes: 30, endTime: '6:31 AM', startMinutesFromMidnight: 361, endMinutesFromMidnight: 391 },
          { birdId: 'peacock', star: 6, activity: 'Walk', startTime: '6:31 AM', durationMinutes: 36, endTime: '7:07 AM', startMinutesFromMidnight: 391, endMinutesFromMidnight: 427 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '7:07 AM', durationMinutes: 48, endTime: '7:55 AM', startMinutesFromMidnight: 427, endMinutesFromMidnight: 475 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '7:55 AM', durationMinutes: 18, endTime: '8:13 AM', startMinutesFromMidnight: 475, endMinutesFromMidnight: 493 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '8:13 AM', durationMinutes: 12, endTime: '8:25 AM', startMinutesFromMidnight: 493, endMinutesFromMidnight: 505 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '6:01 AM', durationMinutes: 36, endTime: '6:37 AM', startMinutesFromMidnight: 361, endMinutesFromMidnight: 397 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '6:37 AM', durationMinutes: 48, endTime: '7:25 AM', startMinutesFromMidnight: 397, endMinutesFromMidnight: 445 },
          { birdId: 'owl', star: 1, activity: 'Sleep', startTime: '7:25 AM', durationMinutes: 18, endTime: '7:43 AM', startMinutesFromMidnight: 445, endMinutesFromMidnight: 463 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:43 AM', durationMinutes: 12, endTime: '7:55 AM', startMinutesFromMidnight: 463, endMinutesFromMidnight: 475 },
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '7:55 AM', durationMinutes: 30, endTime: '8:25 AM', startMinutesFromMidnight: 475, endMinutesFromMidnight: 505 },
        ],
      },
    },
  },

  // --- JAMA 2 (8:25 AM - 10:49 AM) --- 144 mins (Day)
  // Main Activities: Vulture (Sleep), Owl (Die), Crow Eat, Cock (Walk), Peacock Rule
  {
    jamaNumber: 2,
    isDay: true,
    title: 'Valar Pirai Jama 2',
    startTime: '8:25 AM',
    endTime: '10:49 AM',
    startMinutesFromMidnight: 505,
    endMinutesFromMidnight: 649,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '8:25 AM', durationMinutes: 18, endTime: '8:43 AM', startMinutesFromMidnight: 505, endMinutesFromMidnight: 523 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '8:43 AM', durationMinutes: 12, endTime: '8:55 AM', startMinutesFromMidnight: 523, endMinutesFromMidnight: 535 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '8:55 AM', durationMinutes: 30, endTime: '9:25 AM', startMinutesFromMidnight: 535, endMinutesFromMidnight: 565 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '9:25 AM', durationMinutes: 36, endTime: '10:01 AM', startMinutesFromMidnight: 565, endMinutesFromMidnight: 601 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '10:01 AM', durationMinutes: 48, endTime: '10:49 AM', startMinutesFromMidnight: 601, endMinutesFromMidnight: 649 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '8:25 AM', durationMinutes: 12, endTime: '8:37 AM', startMinutesFromMidnight: 505, endMinutesFromMidnight: 517 },
          { birdId: 'crow', star: 3, activity: 'Eat', startTime: '8:37 AM', durationMinutes: 30, endTime: '9:07 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 547 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '9:07 AM', durationMinutes: 36, endTime: '9:43 AM', startMinutesFromMidnight: 547, endMinutesFromMidnight: 583 },
          { birdId: 'peacock', star: 1, activity: 'Rule', startTime: '9:43 AM', durationMinutes: 48, endTime: '10:31 AM', startMinutesFromMidnight: 583, endMinutesFromMidnight: 631 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '10:31 AM', durationMinutes: 18, endTime: '10:49 AM', startMinutesFromMidnight: 631, endMinutesFromMidnight: 649 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '8:25 AM', durationMinutes: 30, endTime: '8:55 AM', startMinutesFromMidnight: 505, endMinutesFromMidnight: 535 },
          { birdId: 'cock', star: 6, activity: 'Walk', startTime: '8:55 AM', durationMinutes: 36, endTime: '9:31 AM', startMinutesFromMidnight: 535, endMinutesFromMidnight: 571 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '9:31 AM', durationMinutes: 48, endTime: '10:19 AM', startMinutesFromMidnight: 571, endMinutesFromMidnight: 619 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '10:19 AM', durationMinutes: 18, endTime: '10:37 AM', startMinutesFromMidnight: 619, endMinutesFromMidnight: 637 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '10:37 AM', durationMinutes: 12, endTime: '10:49 AM', startMinutesFromMidnight: 637, endMinutesFromMidnight: 649 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '8:25 AM', durationMinutes: 36, endTime: '9:01 AM', startMinutesFromMidnight: 505, endMinutesFromMidnight: 541 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '9:01 AM', durationMinutes: 48, endTime: '9:49 AM', startMinutesFromMidnight: 541, endMinutesFromMidnight: 589 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '9:49 AM', durationMinutes: 18, endTime: '10:07 AM', startMinutesFromMidnight: 589, endMinutesFromMidnight: 607 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '10:07 AM', durationMinutes: 12, endTime: '10:19 AM', startMinutesFromMidnight: 607, endMinutesFromMidnight: 619 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '10:19 AM', durationMinutes: 30, endTime: '10:49 AM', startMinutesFromMidnight: 619, endMinutesFromMidnight: 649 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '8:25 AM', durationMinutes: 48, endTime: '9:13 AM', startMinutesFromMidnight: 505, endMinutesFromMidnight: 553 },
          { birdId: 'vulture', star: 5, activity: 'Sleep', startTime: '9:13 AM', durationMinutes: 18, endTime: '9:31 AM', startMinutesFromMidnight: 553, endMinutesFromMidnight: 571 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '9:31 AM', durationMinutes: 12, endTime: '9:43 AM', startMinutesFromMidnight: 571, endMinutesFromMidnight: 583 },
          { birdId: 'crow', star: 7, activity: 'Eat', startTime: '9:43 AM', durationMinutes: 30, endTime: '10:13 AM', startMinutesFromMidnight: 583, endMinutesFromMidnight: 613 },
          { birdId: 'cock', star: 7, activity: 'Walk', startTime: '10:13 AM', durationMinutes: 36, endTime: '10:49 AM', startMinutesFromMidnight: 613, endMinutesFromMidnight: 649 },
        ],
      },
    },
  },

  // --- JAMA 3 (10:49 AM - 1:13 PM) --- 144 mins (Day)
  // Main Activities: Vulture (Die), Owl Eat, Crow Walk, Cock (Rule), Peacock Sleep
  {
    jamaNumber: 3,
    isDay: true,
    title: 'Valar Pirai Jama 3',
    startTime: '10:49 AM',
    endTime: '1:13 PM',
    startMinutesFromMidnight: 649,
    endMinutesFromMidnight: 793,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '10:49 AM', durationMinutes: 12, endTime: '11:01 AM', startMinutesFromMidnight: 649, endMinutesFromMidnight: 661 },
          { birdId: 'owl', star: 3, activity: 'Eat', startTime: '11:01 AM', durationMinutes: 30, endTime: '11:31 AM', startMinutesFromMidnight: 661, endMinutesFromMidnight: 691 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '11:31 AM', durationMinutes: 36, endTime: '12:07 PM', startMinutesFromMidnight: 691, endMinutesFromMidnight: 727 },
          { birdId: 'cock', star: 1, activity: 'Rule', startTime: '12:07 PM', durationMinutes: 48, endTime: '12:55 PM', startMinutesFromMidnight: 727, endMinutesFromMidnight: 775 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '12:55 PM', durationMinutes: 18, endTime: '1:13 PM', startMinutesFromMidnight: 775, endMinutesFromMidnight: 793 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '10:49 AM', durationMinutes: 30, endTime: '11:19 AM', startMinutesFromMidnight: 649, endMinutesFromMidnight: 679 },
          { birdId: 'crow', star: 6, activity: 'Walk', startTime: '11:19 AM', durationMinutes: 36, endTime: '11:55 AM', startMinutesFromMidnight: 679, endMinutesFromMidnight: 715 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '11:55 AM', durationMinutes: 48, endTime: '12:43 PM', startMinutesFromMidnight: 715, endMinutesFromMidnight: 763 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '12:43 PM', durationMinutes: 18, endTime: '1:01 PM', startMinutesFromMidnight: 763, endMinutesFromMidnight: 781 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '1:01 PM', durationMinutes: 12, endTime: '1:13 PM', startMinutesFromMidnight: 781, endMinutesFromMidnight: 793 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '10:49 AM', durationMinutes: 36, endTime: '11:25 AM', startMinutesFromMidnight: 649, endMinutesFromMidnight: 685 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '11:25 AM', durationMinutes: 48, endTime: '12:13 PM', startMinutesFromMidnight: 685, endMinutesFromMidnight: 733 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '12:13 PM', durationMinutes: 18, endTime: '12:31 PM', startMinutesFromMidnight: 733, endMinutesFromMidnight: 751 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '12:31 PM', durationMinutes: 12, endTime: '12:43 PM', startMinutesFromMidnight: 751, endMinutesFromMidnight: 763 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '12:43 PM', durationMinutes: 30, endTime: '1:13 PM', startMinutesFromMidnight: 763, endMinutesFromMidnight: 793 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '10:49 AM', durationMinutes: 48, endTime: '11:37 AM', startMinutesFromMidnight: 649, endMinutesFromMidnight: 697 },
          { birdId: 'peacock', star: 5, activity: 'Sleep', startTime: '11:37 AM', durationMinutes: 18, endTime: '11:55 AM', startMinutesFromMidnight: 697, endMinutesFromMidnight: 715 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '11:55 AM', durationMinutes: 12, endTime: '12:07 PM', startMinutesFromMidnight: 715, endMinutesFromMidnight: 727 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '12:07 PM', durationMinutes: 30, endTime: '12:37 PM', startMinutesFromMidnight: 727, endMinutesFromMidnight: 757 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '12:37 PM', durationMinutes: 36, endTime: '1:13 PM', startMinutesFromMidnight: 757, endMinutesFromMidnight: 793 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '10:49 AM', durationMinutes: 18, endTime: '11:07 AM', startMinutesFromMidnight: 649, endMinutesFromMidnight: 667 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '11:07 AM', durationMinutes: 12, endTime: '11:19 AM', startMinutesFromMidnight: 667, endMinutesFromMidnight: 679 },
          { birdId: 'owl', star: 2, activity: 'Eat', startTime: '11:19 AM', durationMinutes: 30, endTime: '11:49 AM', startMinutesFromMidnight: 679, endMinutesFromMidnight: 709 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '11:49 AM', durationMinutes: 36, endTime: '12:25 PM', startMinutesFromMidnight: 709, endMinutesFromMidnight: 745 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '12:25 PM', durationMinutes: 48, endTime: '1:13 PM', startMinutesFromMidnight: 745, endMinutesFromMidnight: 793 },
        ],
      },
    },
  },

  // --- JAMA 4 (1:13 PM - 3:37 PM) --- 144 mins (Day)
  // Main Activities: Vulture (Eat), Owl (Walk), Crow Rule, Cock (Sleep), Peacock Die
  {
    jamaNumber: 4,
    isDay: true,
    title: 'Valar Pirai Jama 4',
    startTime: '1:13 PM',
    endTime: '3:37 PM',
    startMinutesFromMidnight: 793,
    endMinutesFromMidnight: 937,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '1:13 PM', durationMinutes: 30, endTime: '1:43 PM', startMinutesFromMidnight: 793, endMinutesFromMidnight: 823 },
          { birdId: 'owl', star: 6, activity: 'Walk', startTime: '1:43 PM', durationMinutes: 36, endTime: '2:19 PM', startMinutesFromMidnight: 823, endMinutesFromMidnight: 859 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '2:19 PM', durationMinutes: 48, endTime: '3:07 PM', startMinutesFromMidnight: 859, endMinutesFromMidnight: 907 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '3:07 PM', durationMinutes: 18, endTime: '3:25 PM', startMinutesFromMidnight: 907, endMinutesFromMidnight: 925 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '3:25 PM', durationMinutes: 12, endTime: '3:37 PM', startMinutesFromMidnight: 925, endMinutesFromMidnight: 937 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '1:13 PM', durationMinutes: 36, endTime: '1:49 PM', startMinutesFromMidnight: 793, endMinutesFromMidnight: 829 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '1:49 PM', durationMinutes: 48, endTime: '2:37 PM', startMinutesFromMidnight: 829, endMinutesFromMidnight: 877 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '2:37 PM', durationMinutes: 18, endTime: '2:55 PM', startMinutesFromMidnight: 877, endMinutesFromMidnight: 895 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '2:55 PM', durationMinutes: 12, endTime: '3:07 PM', startMinutesFromMidnight: 895, endMinutesFromMidnight: 907 },
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '3:07 PM', durationMinutes: 30, endTime: '3:37 PM', startMinutesFromMidnight: 907, endMinutesFromMidnight: 937 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '1:13 PM', durationMinutes: 48, endTime: '2:01 PM', startMinutesFromMidnight: 793, endMinutesFromMidnight: 841 },
          { birdId: 'cock', star: 5, activity: 'Sleep', startTime: '2:01 PM', durationMinutes: 18, endTime: '2:19 PM', startMinutesFromMidnight: 841, endMinutesFromMidnight: 859 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '2:19 PM', durationMinutes: 12, endTime: '2:31 PM', startMinutesFromMidnight: 859, endMinutesFromMidnight: 871 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '2:31 PM', durationMinutes: 30, endTime: '3:01 PM', startMinutesFromMidnight: 871, endMinutesFromMidnight: 901 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '3:01 PM', durationMinutes: 36, endTime: '3:37 PM', startMinutesFromMidnight: 901, endMinutesFromMidnight: 937 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '1:13 PM', durationMinutes: 18, endTime: '1:31 PM', startMinutesFromMidnight: 793, endMinutesFromMidnight: 811 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '1:31 PM', durationMinutes: 12, endTime: '1:43 PM', startMinutesFromMidnight: 811, endMinutesFromMidnight: 823 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '1:43 PM', durationMinutes: 30, endTime: '2:13 PM', startMinutesFromMidnight: 823, endMinutesFromMidnight: 853 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '2:13 PM', durationMinutes: 36, endTime: '2:49 PM', startMinutesFromMidnight: 853, endMinutesFromMidnight: 889 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '2:49 PM', durationMinutes: 48, endTime: '3:37 PM', startMinutesFromMidnight: 889, endMinutesFromMidnight: 937 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '1:13 PM', durationMinutes: 12, endTime: '1:25 PM', startMinutesFromMidnight: 793, endMinutesFromMidnight: 805 },
          { birdId: 'vulture', star: 3, activity: 'Eat', startTime: '1:25 PM', durationMinutes: 30, endTime: '1:55 PM', startMinutesFromMidnight: 805, endMinutesFromMidnight: 835 },
          { birdId: 'owl', star: 1, activity: 'Walk', startTime: '1:55 PM', durationMinutes: 36, endTime: '2:31 PM', startMinutesFromMidnight: 835, endMinutesFromMidnight: 871 },
          { birdId: 'crow', star: 1, activity: 'Rule', startTime: '2:31 PM', durationMinutes: 48, endTime: '3:19 PM', startMinutesFromMidnight: 871, endMinutesFromMidnight: 919 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '3:19 PM', durationMinutes: 18, endTime: '3:37 PM', startMinutesFromMidnight: 919, endMinutesFromMidnight: 937 },
        ],
      },
    },
  },

  // --- JAMA 5 (3:37 PM - 6:01 PM) --- 144 mins (Day)
  // Main Activities: Vulture (Walk), Owl Rule, Crow Sleep, Cock (Die), Peacock (Eat)
  {
    jamaNumber: 5,
    isDay: true,
    title: 'Valar Pirai Jama 5',
    startTime: '3:37 PM',
    endTime: '6:01 PM',
    startMinutesFromMidnight: 937,
    endMinutesFromMidnight: 1081,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '3:37 PM', durationMinutes: 36, endTime: '4:13 PM', startMinutesFromMidnight: 937, endMinutesFromMidnight: 973 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '4:13 PM', durationMinutes: 48, endTime: '5:01 PM', startMinutesFromMidnight: 973, endMinutesFromMidnight: 1021 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '5:01 PM', durationMinutes: 18, endTime: '5:19 PM', startMinutesFromMidnight: 1021, endMinutesFromMidnight: 1039 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '5:19 PM', durationMinutes: 12, endTime: '5:31 PM', startMinutesFromMidnight: 1039, endMinutesFromMidnight: 1051 },
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '5:31 PM', durationMinutes: 30, endTime: '6:01 PM', startMinutesFromMidnight: 1051, endMinutesFromMidnight: 1081 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '3:37 PM', durationMinutes: 48, endTime: '4:25 PM', startMinutesFromMidnight: 937, endMinutesFromMidnight: 985 },
          { birdId: 'crow', star: 5, activity: 'Sleep', startTime: '4:25 PM', durationMinutes: 18, endTime: '4:43 PM', startMinutesFromMidnight: 985, endMinutesFromMidnight: 1003 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '4:43 PM', durationMinutes: 12, endTime: '4:55 PM', startMinutesFromMidnight: 1003, endMinutesFromMidnight: 1015 },
          { birdId: 'peacock', star: 7, activity: 'Eat', startTime: '4:55 PM', durationMinutes: 30, endTime: '5:25 PM', startMinutesFromMidnight: 1015, endMinutesFromMidnight: 1045 },
          { birdId: 'vulture', star: 7, activity: 'Walk', startTime: '5:25 PM', durationMinutes: 36, endTime: '6:01 PM', startMinutesFromMidnight: 1045, endMinutesFromMidnight: 1081 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '3:37 PM', durationMinutes: 18, endTime: '3:55 PM', startMinutesFromMidnight: 937, endMinutesFromMidnight: 955 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '3:55 PM', durationMinutes: 12, endTime: '4:07 PM', startMinutesFromMidnight: 955, endMinutesFromMidnight: 967 },
          { birdId: 'peacock', star: 2, activity: 'Eat', startTime: '4:07 PM', durationMinutes: 30, endTime: '4:37 PM', startMinutesFromMidnight: 967, endMinutesFromMidnight: 997 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '4:37 PM', durationMinutes: 36, endTime: '5:13 PM', startMinutesFromMidnight: 997, endMinutesFromMidnight: 1033 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '5:13 PM', durationMinutes: 48, endTime: '6:01 PM', startMinutesFromMidnight: 1033, endMinutesFromMidnight: 1081 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '3:37 PM', durationMinutes: 12, endTime: '3:49 PM', startMinutesFromMidnight: 937, endMinutesFromMidnight: 949 },
          { birdId: 'peacock', star: 3, activity: 'Eat', startTime: '3:49 PM', durationMinutes: 30, endTime: '4:19 PM', startMinutesFromMidnight: 949, endMinutesFromMidnight: 979 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '4:19 PM', durationMinutes: 36, endTime: '4:55 PM', startMinutesFromMidnight: 979, endMinutesFromMidnight: 1015 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '4:55 PM', durationMinutes: 48, endTime: '5:43 PM', startMinutesFromMidnight: 1015, endMinutesFromMidnight: 1063 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '5:43 PM', durationMinutes: 18, endTime: '6:01 PM', startMinutesFromMidnight: 1063, endMinutesFromMidnight: 1081 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '3:37 PM', durationMinutes: 30, endTime: '4:07 PM', startMinutesFromMidnight: 937, endMinutesFromMidnight: 967 },
          { birdId: 'vulture', star: 6, activity: 'Walk', startTime: '4:07 PM', durationMinutes: 36, endTime: '4:43 PM', startMinutesFromMidnight: 967, endMinutesFromMidnight: 1003 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '4:43 PM', durationMinutes: 48, endTime: '5:31 PM', startMinutesFromMidnight: 1003, endMinutesFromMidnight: 1051 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '5:31 PM', durationMinutes: 18, endTime: '5:49 PM', startMinutesFromMidnight: 1051, endMinutesFromMidnight: 1069 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '5:49 PM', durationMinutes: 12, endTime: '6:01 PM', startMinutesFromMidnight: 1069, endMinutesFromMidnight: 1081 },
        ],
      },
    },
  },

  // --- JAMA 6 (6:00 PM - 8:24 PM) --- 144 mins (Night)
  // Main Activities: Vulture - Eat, Owl - Sleep, Crow (Walk), Cock (Die), Peacock (Rule)
  {
    jamaNumber: 6,
    isDay: false,
    title: 'Valar Pirai Jama 6',
    startTime: '6:00 PM',
    endTime: '8:24 PM',
    startMinutesFromMidnight: 1080,
    endMinutesFromMidnight: 1224,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '6:00 PM', durationMinutes: 30, endTime: '6:30 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1110 },
          { birdId: 'peacock', star: 9, activity: 'Rule', startTime: '6:30 PM', durationMinutes: 24, endTime: '6:54 PM', startMinutesFromMidnight: 1110, endMinutesFromMidnight: 1134 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '6:54 PM', durationMinutes: 36, endTime: '7:30 PM', startMinutesFromMidnight: 1134, endMinutesFromMidnight: 1170 },
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '7:30 PM', durationMinutes: 30, endTime: '8:00 PM', startMinutesFromMidnight: 1170, endMinutesFromMidnight: 1200 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '8:00 PM', durationMinutes: 24, endTime: '8:24 PM', startMinutesFromMidnight: 1200, endMinutesFromMidnight: 1224 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '6:00 PM', durationMinutes: 24, endTime: '6:24 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1104 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '6:24 PM', durationMinutes: 30, endTime: '6:54 PM', startMinutesFromMidnight: 1104, endMinutesFromMidnight: 1134 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '6:54 PM', durationMinutes: 24, endTime: '7:18 PM', startMinutesFromMidnight: 1134, endMinutesFromMidnight: 1158 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '7:18 PM', durationMinutes: 36, endTime: '7:54 PM', startMinutesFromMidnight: 1158, endMinutesFromMidnight: 1194 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '7:54 PM', durationMinutes: 30, endTime: '8:24 PM', startMinutesFromMidnight: 1194, endMinutesFromMidnight: 1224 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '6:00 PM', durationMinutes: 30, endTime: '6:30 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1110 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '6:30 PM', durationMinutes: 24, endTime: '6:54 PM', startMinutesFromMidnight: 1110, endMinutesFromMidnight: 1134 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '6:54 PM', durationMinutes: 30, endTime: '7:24 PM', startMinutesFromMidnight: 1134, endMinutesFromMidnight: 1164 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '7:24 PM', durationMinutes: 24, endTime: '7:48 PM', startMinutesFromMidnight: 1164, endMinutesFromMidnight: 1188 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '7:48 PM', durationMinutes: 36, endTime: '8:24 PM', startMinutesFromMidnight: 1188, endMinutesFromMidnight: 1224 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '6:00 PM', durationMinutes: 36, endTime: '6:36 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1116 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '6:36 PM', durationMinutes: 30, endTime: '7:06 PM', startMinutesFromMidnight: 1116, endMinutesFromMidnight: 1146 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '7:06 PM', durationMinutes: 24, endTime: '7:30 PM', startMinutesFromMidnight: 1146, endMinutesFromMidnight: 1170 },
          { birdId: 'vulture', star: 1, activity: 'Eat', startTime: '7:30 PM', durationMinutes: 30, endTime: '8:00 PM', startMinutesFromMidnight: 1170, endMinutesFromMidnight: 1200 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '8:00 PM', durationMinutes: 24, endTime: '8:24 PM', startMinutesFromMidnight: 1200, endMinutesFromMidnight: 1224 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '6:00 PM', durationMinutes: 24, endTime: '6:24 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1104 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '6:24 PM', durationMinutes: 36, endTime: '7:00 PM', startMinutesFromMidnight: 1104, endMinutesFromMidnight: 1140 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '7:00 PM', durationMinutes: 30, endTime: '7:30 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1170 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '7:30 PM', durationMinutes: 24, endTime: '7:54 PM', startMinutesFromMidnight: 1170, endMinutesFromMidnight: 1194 },
          { birdId: 'vulture', star: 9, activity: 'Eat', startTime: '7:54 PM', durationMinutes: 30, endTime: '8:24 PM', startMinutesFromMidnight: 1194, endMinutesFromMidnight: 1224 },
        ],
      },
    },
  },

  // --- JAMA 7 (8:24 PM - 10:48 PM) --- 144 mins (Night)
  // Main Activities: Vulture - Rule, Owl - Eat, Crow (Sleep), Cock (Walk), Peacock (Die)
  {
    jamaNumber: 7,
    isDay: false,
    title: 'Valar Pirai Jama 7',
    startTime: '8:24 PM',
    endTime: '10:48 PM',
    startMinutesFromMidnight: 1224,
    endMinutesFromMidnight: 1368,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '8:24 PM', durationMinutes: 24, endTime: '8:48 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1248 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '8:48 PM', durationMinutes: 36, endTime: '9:24 PM', startMinutesFromMidnight: 1248, endMinutesFromMidnight: 1284 },
          { birdId: 'cock', star: 5, activity: 'Walk', startTime: '9:24 PM', durationMinutes: 30, endTime: '9:54 PM', startMinutesFromMidnight: 1284, endMinutesFromMidnight: 1314 },
          { birdId: 'crow', star: 3, activity: 'Sleep', startTime: '9:54 PM', durationMinutes: 24, endTime: '10:18 PM', startMinutesFromMidnight: 1314, endMinutesFromMidnight: 1338 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '10:18 PM', durationMinutes: 30, endTime: '10:48 PM', startMinutesFromMidnight: 1338, endMinutesFromMidnight: 1368 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '8:24 PM', durationMinutes: 30, endTime: '8:54 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1254 },
          { birdId: 'vulture', star: 9, activity: 'Rule', startTime: '8:54 PM', durationMinutes: 24, endTime: '9:18 PM', startMinutesFromMidnight: 1254, endMinutesFromMidnight: 1278 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '9:18 PM', durationMinutes: 36, endTime: '9:54 PM', startMinutesFromMidnight: 1278, endMinutesFromMidnight: 1314 },
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '9:54 PM', durationMinutes: 30, endTime: '10:24 PM', startMinutesFromMidnight: 1314, endMinutesFromMidnight: 1344 },
          { birdId: 'crow', star: 4, activity: 'Sleep', startTime: '10:24 PM', durationMinutes: 24, endTime: '10:48 PM', startMinutesFromMidnight: 1344, endMinutesFromMidnight: 1368 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '8:24 PM', durationMinutes: 24, endTime: '8:48 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1248 },
          { birdId: 'owl', star: 4, activity: 'Eat', startTime: '8:48 PM', durationMinutes: 30, endTime: '9:18 PM', startMinutesFromMidnight: 1248, endMinutesFromMidnight: 1278 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '9:18 PM', durationMinutes: 24, endTime: '9:42 PM', startMinutesFromMidnight: 1278, endMinutesFromMidnight: 1302 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '9:42 PM', durationMinutes: 36, endTime: '10:18 PM', startMinutesFromMidnight: 1302, endMinutesFromMidnight: 1338 },
          { birdId: 'cock', star: 3, activity: 'Walk', startTime: '10:18 PM', durationMinutes: 30, endTime: '10:48 PM', startMinutesFromMidnight: 1338, endMinutesFromMidnight: 1368 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '8:24 PM', durationMinutes: 30, endTime: '8:54 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1254 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '8:54 PM', durationMinutes: 24, endTime: '9:18 PM', startMinutesFromMidnight: 1254, endMinutesFromMidnight: 1278 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '9:18 PM', durationMinutes: 30, endTime: '9:48 PM', startMinutesFromMidnight: 1278, endMinutesFromMidnight: 1308 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '9:48 PM', durationMinutes: 24, endTime: '10:12 PM', startMinutesFromMidnight: 1308, endMinutesFromMidnight: 1332 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '10:12 PM', durationMinutes: 36, endTime: '10:48 PM', startMinutesFromMidnight: 1332, endMinutesFromMidnight: 1368 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '8:24 PM', durationMinutes: 36, endTime: '9:00 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1260 },
          { birdId: 'cock', star: 2, activity: 'Walk', startTime: '9:00 PM', durationMinutes: 30, endTime: '9:30 PM', startMinutesFromMidnight: 1260, endMinutesFromMidnight: 1290 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '9:30 PM', durationMinutes: 24, endTime: '9:54 PM', startMinutesFromMidnight: 1290, endMinutesFromMidnight: 1314 },
          { birdId: 'owl', star: 1, activity: 'Eat', startTime: '9:54 PM', durationMinutes: 30, endTime: '10:24 PM', startMinutesFromMidnight: 1314, endMinutesFromMidnight: 1344 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '10:24 PM', durationMinutes: 24, endTime: '10:48 PM', startMinutesFromMidnight: 1344, endMinutesFromMidnight: 1368 },
        ],
      },
    },
  },

  // --- JAMA 8 (10:48 PM - 1:12 AM) --- 144 mins (Night)
  // Main Activities: Vulture - Die, Owl - Rule, Crow Eat, Cock (Sleep), Peacock (Walk)
  {
    jamaNumber: 8,
    isDay: false,
    title: 'Valar Pirai Jama 8',
    startTime: '10:48 PM',
    endTime: '1:12 AM',
    startMinutesFromMidnight: 1368,
    endMinutesFromMidnight: 1512,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '10:48 PM', durationMinutes: 36, endTime: '11:24 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1404 },
          { birdId: 'peacock', star: 2, activity: 'Walk', startTime: '11:24 PM', durationMinutes: 30, endTime: '11:54 PM', startMinutesFromMidnight: 1404, endMinutesFromMidnight: 1434 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '11:54 PM', durationMinutes: 24, endTime: '12:18 AM', startMinutesFromMidnight: 1434, endMinutesFromMidnight: 1458 },
          { birdId: 'crow', star: 1, activity: 'Eat', startTime: '12:18 AM', durationMinutes: 30, endTime: '12:48 AM', startMinutesFromMidnight: 1458, endMinutesFromMidnight: 1488 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '12:48 AM', durationMinutes: 24, endTime: '1:12 AM', startMinutesFromMidnight: 1488, endMinutesFromMidnight: 1512 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '10:48 PM', durationMinutes: 24, endTime: '11:12 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1392 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '11:12 PM', durationMinutes: 36, endTime: '11:48 PM', startMinutesFromMidnight: 1392, endMinutesFromMidnight: 1428 },
          { birdId: 'peacock', star: 5, activity: 'Walk', startTime: '11:48 PM', durationMinutes: 30, endTime: '12:18 AM', startMinutesFromMidnight: 1428, endMinutesFromMidnight: 1458 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '12:18 AM', durationMinutes: 24, endTime: '12:42 AM', startMinutesFromMidnight: 1458, endMinutesFromMidnight: 1482 },
          { birdId: 'crow', star: 9, activity: 'Eat', startTime: '12:42 AM', durationMinutes: 30, endTime: '1:12 AM', startMinutesFromMidnight: 1482, endMinutesFromMidnight: 1512 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '10:48 PM', durationMinutes: 30, endTime: '11:18 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1398 },
          { birdId: 'owl', star: 9, activity: 'Rule', startTime: '11:18 PM', durationMinutes: 24, endTime: '11:42 PM', startMinutesFromMidnight: 1398, endMinutesFromMidnight: 1422 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '11:42 PM', durationMinutes: 36, endTime: '12:18 AM', startMinutesFromMidnight: 1422, endMinutesFromMidnight: 1458 },
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '12:18 AM', durationMinutes: 30, endTime: '12:48 AM', startMinutesFromMidnight: 1458, endMinutesFromMidnight: 1488 },
          { birdId: 'cock', star: 4, activity: 'Sleep', startTime: '12:48 AM', durationMinutes: 24, endTime: '1:12 AM', startMinutesFromMidnight: 1488, endMinutesFromMidnight: 1512 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '10:48 PM', durationMinutes: 24, endTime: '11:12 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1392 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '11:12 PM', durationMinutes: 30, endTime: '11:42 PM', startMinutesFromMidnight: 1392, endMinutesFromMidnight: 1422 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '11:42 PM', durationMinutes: 24, endTime: '12:06 AM', startMinutesFromMidnight: 1422, endMinutesFromMidnight: 1446 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '12:06 AM', durationMinutes: 36, endTime: '12:42 AM', startMinutesFromMidnight: 1446, endMinutesFromMidnight: 1482 },
          { birdId: 'peacock', star: 3, activity: 'Walk', startTime: '12:42 AM', durationMinutes: 30, endTime: '1:12 AM', startMinutesFromMidnight: 1482, endMinutesFromMidnight: 1512 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '10:48 PM', durationMinutes: 30, endTime: '11:18 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1398 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '11:18 PM', durationMinutes: 24, endTime: '11:42 PM', startMinutesFromMidnight: 1398, endMinutesFromMidnight: 1422 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '11:42 PM', durationMinutes: 30, endTime: '12:12 AM', startMinutesFromMidnight: 1422, endMinutesFromMidnight: 1452 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '12:12 AM', durationMinutes: 24, endTime: '12:36 AM', startMinutesFromMidnight: 1452, endMinutesFromMidnight: 1476 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '12:36 AM', durationMinutes: 36, endTime: '1:12 AM', startMinutesFromMidnight: 1476, endMinutesFromMidnight: 1512 },
        ],
      },
    },
  },

  // --- JAMA 9 (1:12 AM - 3:36 AM) --- 144 mins (Night)
  // Main Activities: Vulture - Walk, Owl - Die, Crow Rule, Cock (Eat), Peacock (Sleep)
  {
    jamaNumber: 9,
    isDay: false,
    title: 'Valar Pirai Jama 9',
    startTime: '1:12 AM',
    endTime: '3:36 AM',
    startMinutesFromMidnight: 1512,
    endMinutesFromMidnight: 1656,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '1:12 AM', durationMinutes: 30, endTime: '1:42 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1542 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '1:42 AM', durationMinutes: 24, endTime: '2:06 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1566 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '2:06 AM', durationMinutes: 30, endTime: '2:36 AM', startMinutesFromMidnight: 1566, endMinutesFromMidnight: 1596 },
          { birdId: 'crow', star: 5, activity: 'Rule', startTime: '2:36 AM', durationMinutes: 24, endTime: '3:00 AM', startMinutesFromMidnight: 1596, endMinutesFromMidnight: 1620 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '3:00 AM', durationMinutes: 36, endTime: '3:36 AM', startMinutesFromMidnight: 1620, endMinutesFromMidnight: 1656 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '1:12 AM', durationMinutes: 36, endTime: '1:48 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1548 },
          { birdId: 'vulture', star: 2, activity: 'Walk', startTime: '1:48 AM', durationMinutes: 30, endTime: '2:18 AM', startMinutesFromMidnight: 1548, endMinutesFromMidnight: 1578 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '2:18 AM', durationMinutes: 24, endTime: '2:42 AM', startMinutesFromMidnight: 1578, endMinutesFromMidnight: 1602 },
          { birdId: 'cock', star: 1, activity: 'Eat', startTime: '2:42 AM', durationMinutes: 30, endTime: '3:12 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1632 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '3:12 AM', durationMinutes: 24, endTime: '3:36 AM', startMinutesFromMidnight: 1632, endMinutesFromMidnight: 1656 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '1:12 AM', durationMinutes: 24, endTime: '1:36 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1536 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '1:36 AM', durationMinutes: 36, endTime: '2:12 AM', startMinutesFromMidnight: 1536, endMinutesFromMidnight: 1572 },
          { birdId: 'vulture', star: 5, activity: 'Walk', startTime: '2:12 AM', durationMinutes: 30, endTime: '2:42 AM', startMinutesFromMidnight: 1572, endMinutesFromMidnight: 1602 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '2:42 AM', durationMinutes: 24, endTime: '3:06 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1626 },
          { birdId: 'cock', star: 9, activity: 'Eat', startTime: '3:06 AM', durationMinutes: 30, endTime: '3:36 AM', startMinutesFromMidnight: 1626, endMinutesFromMidnight: 1656 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '1:12 AM', durationMinutes: 30, endTime: '1:42 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1542 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '1:42 AM', durationMinutes: 24, endTime: '2:06 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1566 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '2:06 AM', durationMinutes: 36, endTime: '2:42 AM', startMinutesFromMidnight: 1566, endMinutesFromMidnight: 1602 },
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '2:42 AM', durationMinutes: 30, endTime: '3:12 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1632 },
          { birdId: 'peacock', star: 4, activity: 'Sleep', startTime: '3:12 AM', durationMinutes: 24, endTime: '3:36 AM', startMinutesFromMidnight: 1632, endMinutesFromMidnight: 1656 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '1:12 AM', durationMinutes: 24, endTime: '1:36 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1536 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '1:36 AM', durationMinutes: 30, endTime: '2:06 AM', startMinutesFromMidnight: 1536, endMinutesFromMidnight: 1566 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '2:06 AM', durationMinutes: 24, endTime: '2:30 AM', startMinutesFromMidnight: 1566, endMinutesFromMidnight: 1590 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '2:30 AM', durationMinutes: 36, endTime: '3:06 AM', startMinutesFromMidnight: 1590, endMinutesFromMidnight: 1626 },
          { birdId: 'vulture', star: 3, activity: 'Walk', startTime: '3:06 AM', durationMinutes: 30, endTime: '3:36 AM', startMinutesFromMidnight: 1626, endMinutesFromMidnight: 1656 },
        ],
      },
    },
  },

  // --- JAMA 10 (3:36 AM - 6:00 AM) --- 144 mins (Night)
  // Main Activities: Vulture - Sleep, Owl - Walk, Crow Die, Cock (Rule), Peacock (Eat)
  {
    jamaNumber: 10,
    isDay: false,
    title: 'Valar Pirai Jama 10',
    startTime: '3:36 AM',
    endTime: '6:00 AM',
    startMinutesFromMidnight: 1656,
    endMinutesFromMidnight: 1800,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '3:36 AM', durationMinutes: 24, endTime: '4:00 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1680 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '4:00 AM', durationMinutes: 30, endTime: '4:30 AM', startMinutesFromMidnight: 1680, endMinutesFromMidnight: 1710 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '4:30 AM', durationMinutes: 24, endTime: '4:54 AM', startMinutesFromMidnight: 1710, endMinutesFromMidnight: 1734 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '4:54 AM', durationMinutes: 36, endTime: '5:30 AM', startMinutesFromMidnight: 1734, endMinutesFromMidnight: 1770 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '5:30 AM', durationMinutes: 30, endTime: '6:00 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1800 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '3:36 AM', durationMinutes: 30, endTime: '4:06 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1686 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '4:06 AM', durationMinutes: 24, endTime: '4:30 AM', startMinutesFromMidnight: 1686, endMinutesFromMidnight: 1710 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '4:30 AM', durationMinutes: 30, endTime: '5:00 AM', startMinutesFromMidnight: 1710, endMinutesFromMidnight: 1740 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '5:00 AM', durationMinutes: 24, endTime: '5:24 AM', startMinutesFromMidnight: 1740, endMinutesFromMidnight: 1764 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '5:24 AM', durationMinutes: 36, endTime: '6:00 AM', startMinutesFromMidnight: 1764, endMinutesFromMidnight: 1800 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '3:36 AM', durationMinutes: 36, endTime: '4:12 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1692 },
          { birdId: 'owl', star: 2, activity: 'Walk', startTime: '4:12 AM', durationMinutes: 30, endTime: '4:42 AM', startMinutesFromMidnight: 1692, endMinutesFromMidnight: 1722 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '4:42 AM', durationMinutes: 24, endTime: '5:06 AM', startMinutesFromMidnight: 1722, endMinutesFromMidnight: 1746 },
          { birdId: 'peacock', star: 1, activity: 'Eat', startTime: '5:06 AM', durationMinutes: 30, endTime: '5:36 AM', startMinutesFromMidnight: 1746, endMinutesFromMidnight: 1776 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '5:36 AM', durationMinutes: 24, endTime: '6:00 AM', startMinutesFromMidnight: 1776, endMinutesFromMidnight: 1800 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '3:36 AM', durationMinutes: 24, endTime: '4:00 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1680 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '4:00 AM', durationMinutes: 36, endTime: '4:36 AM', startMinutesFromMidnight: 1680, endMinutesFromMidnight: 1716 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '4:36 AM', durationMinutes: 30, endTime: '5:06 AM', startMinutesFromMidnight: 1716, endMinutesFromMidnight: 1746 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '5:06 AM', durationMinutes: 24, endTime: '5:30 AM', startMinutesFromMidnight: 1746, endMinutesFromMidnight: 1770 },
          { birdId: 'peacock', star: 9, activity: 'Eat', startTime: '5:30 AM', durationMinutes: 30, endTime: '6:00 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1800 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '3:36 AM', durationMinutes: 30, endTime: '4:06 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1686 },
          { birdId: 'cock', star: 9, activity: 'Rule', startTime: '4:06 AM', durationMinutes: 24, endTime: '4:30 AM', startMinutesFromMidnight: 1686, endMinutesFromMidnight: 1710 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '4:30 AM', durationMinutes: 36, endTime: '5:06 AM', startMinutesFromMidnight: 1710, endMinutesFromMidnight: 1746 },
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '5:06 AM', durationMinutes: 30, endTime: '5:36 AM', startMinutesFromMidnight: 1746, endMinutesFromMidnight: 1776 },
          { birdId: 'vulture', star: 4, activity: 'Sleep', startTime: '5:36 AM', durationMinutes: 24, endTime: '6:00 AM', startMinutesFromMidnight: 1776, endMinutesFromMidnight: 1800 },
        ],
      },
    },
  },
];
