import { Jama } from '../types';

export const VALARPIRAI_TUESDAY_CONFIG = {
  dayTotalMinutes: 720,
  nightTotalMinutes: 720,
  sunriseToday: '06:00',
  sunsetToday: '18:00',
  nextSunriseTomorrow: '06:00',
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
  dayRulingBird: 'Vulture',
  dayDyingBird: 'Cock',
  nightRulingBird: 'Crow',
  nightDyingBird: 'Cock',
};

// Complete 10 Jamas for Valarpirai Tuesday encoded faithfully from the uploaded spreadsheet
export const VALARPIRAI_TUESDAY_JAMAS: Jama[] = [
  // --- JAMA 1 (6:00 AM - 8:24 AM) ---
  // Main Activities: Vulture (Eat), Owl (Walk), Crow (Rule), Cock (Sleep), Peacock (Die)
  {
    jamaNumber: 1,
    isDay: true,
    title: 'Valar Pirai Jama 1',
    startTime: '6:00 AM',
    endTime: '8:24 AM',
    startMinutesFromMidnight: 360,
    endMinutesFromMidnight: 504,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '6:00 AM', durationMinutes: 30, endTime: '6:30 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 390 },
          { birdId: 'owl', star: 6, activity: 'Walk', startTime: '6:30 AM', durationMinutes: 36, endTime: '7:06 AM', startMinutesFromMidnight: 390, endMinutesFromMidnight: 426 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '7:06 AM', durationMinutes: 48, endTime: '7:54 AM', startMinutesFromMidnight: 426, endMinutesFromMidnight: 474 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '7:54 AM', durationMinutes: 18, endTime: '8:12 AM', startMinutesFromMidnight: 474, endMinutesFromMidnight: 492 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '8:12 AM', durationMinutes: 12, endTime: '8:24 AM', startMinutesFromMidnight: 492, endMinutesFromMidnight: 504 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '6:00 AM', durationMinutes: 36, endTime: '6:36 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 396 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '6:36 AM', durationMinutes: 48, endTime: '7:24 AM', startMinutesFromMidnight: 396, endMinutesFromMidnight: 444 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '7:24 AM', durationMinutes: 18, endTime: '7:42 AM', startMinutesFromMidnight: 444, endMinutesFromMidnight: 462 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '7:42 AM', durationMinutes: 12, endTime: '7:54 AM', startMinutesFromMidnight: 462, endMinutesFromMidnight: 474 },
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '7:54 AM', durationMinutes: 30, endTime: '8:24 AM', startMinutesFromMidnight: 474, endMinutesFromMidnight: 504 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '6:00 AM', durationMinutes: 48, endTime: '6:48 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 408 },
          { birdId: 'cock', star: 5, activity: 'Sleep', startTime: '6:48 AM', durationMinutes: 18, endTime: '7:06 AM', startMinutesFromMidnight: 408, endMinutesFromMidnight: 426 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '7:06 AM', durationMinutes: 12, endTime: '7:18 AM', startMinutesFromMidnight: 426, endMinutesFromMidnight: 438 },
          { birdId: 'vulture', star: 7, activity: 'Eat', startTime: '7:18 AM', durationMinutes: 30, endTime: '7:48 AM', startMinutesFromMidnight: 438, endMinutesFromMidnight: 468 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '7:48 AM', durationMinutes: 36, endTime: '8:24 AM', startMinutesFromMidnight: 468, endMinutesFromMidnight: 504 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '6:00 AM', durationMinutes: 18, endTime: '6:18 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 378 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '6:18 AM', durationMinutes: 12, endTime: '6:30 AM', startMinutesFromMidnight: 378, endMinutesFromMidnight: 390 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '6:30 AM', durationMinutes: 30, endTime: '7:00 AM', startMinutesFromMidnight: 390, endMinutesFromMidnight: 420 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '7:00 AM', durationMinutes: 36, endTime: '7:36 AM', startMinutesFromMidnight: 420, endMinutesFromMidnight: 456 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '7:36 AM', durationMinutes: 48, endTime: '8:24 AM', startMinutesFromMidnight: 456, endMinutesFromMidnight: 504 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '6:00 AM', durationMinutes: 12, endTime: '6:12 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 372 },
          { birdId: 'vulture', star: 3, activity: 'Eat', startTime: '6:12 AM', durationMinutes: 30, endTime: '6:42 AM', startMinutesFromMidnight: 372, endMinutesFromMidnight: 402 },
          { birdId: 'owl', star: 1, activity: 'Walk', startTime: '6:42 AM', durationMinutes: 36, endTime: '7:18 AM', startMinutesFromMidnight: 402, endMinutesFromMidnight: 438 },
          { birdId: 'crow', star: 1, activity: 'Rule', startTime: '7:18 AM', durationMinutes: 48, endTime: '8:06 AM', startMinutesFromMidnight: 438, endMinutesFromMidnight: 486 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '8:06 AM', durationMinutes: 18, endTime: '8:24 AM', startMinutesFromMidnight: 486, endMinutesFromMidnight: 504 },
        ],
      },
    },
  },

  // --- JAMA 2 (8:24 AM - 10:48 AM) ---
  // Main Activities: Vulture - Walk, Owl Rule, Crow Sleep, Cock (Die), Peacock Eat
  {
    jamaNumber: 2,
    isDay: true,
    title: 'Valar Pirai Jama 2',
    startTime: '8:24 AM',
    endTime: '10:48 AM',
    startMinutesFromMidnight: 504,
    endMinutesFromMidnight: 648,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '8:24 AM', durationMinutes: 36, endTime: '9:00 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 540 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '9:00 AM', durationMinutes: 48, endTime: '9:48 AM', startMinutesFromMidnight: 540, endMinutesFromMidnight: 588 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '9:48 AM', durationMinutes: 18, endTime: '10:06 AM', startMinutesFromMidnight: 588, endMinutesFromMidnight: 606 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '10:06 AM', durationMinutes: 12, endTime: '10:18 AM', startMinutesFromMidnight: 606, endMinutesFromMidnight: 618 },
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '10:18 AM', durationMinutes: 30, endTime: '10:48 AM', startMinutesFromMidnight: 618, endMinutesFromMidnight: 648 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '8:24 AM', durationMinutes: 48, endTime: '9:12 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 552 },
          { birdId: 'crow', star: 5, activity: 'Sleep', startTime: '9:12 AM', durationMinutes: 18, endTime: '9:30 AM', startMinutesFromMidnight: 552, endMinutesFromMidnight: 570 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '9:30 AM', durationMinutes: 12, endTime: '9:42 AM', startMinutesFromMidnight: 570, endMinutesFromMidnight: 582 },
          { birdId: 'peacock', star: 7, activity: 'Eat', startTime: '9:42 AM', durationMinutes: 30, endTime: '10:12 AM', startMinutesFromMidnight: 582, endMinutesFromMidnight: 612 },
          { birdId: 'vulture', star: 7, activity: 'Walk', startTime: '10:12 AM', durationMinutes: 36, endTime: '10:48 AM', startMinutesFromMidnight: 612, endMinutesFromMidnight: 648 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '8:24 AM', durationMinutes: 18, endTime: '8:42 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 522 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '8:42 AM', durationMinutes: 12, endTime: '8:54 AM', startMinutesFromMidnight: 522, endMinutesFromMidnight: 534 },
          { birdId: 'peacock', star: 2, activity: 'Eat', startTime: '8:54 AM', durationMinutes: 30, endTime: '9:24 AM', startMinutesFromMidnight: 534, endMinutesFromMidnight: 564 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '9:24 AM', durationMinutes: 36, endTime: '10:00 AM', startMinutesFromMidnight: 564, endMinutesFromMidnight: 600 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '10:00 AM', durationMinutes: 48, endTime: '10:48 AM', startMinutesFromMidnight: 600, endMinutesFromMidnight: 648 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '8:24 AM', durationMinutes: 12, endTime: '8:36 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 516 },
          { birdId: 'peacock', star: 3, activity: 'Eat', startTime: '8:36 AM', durationMinutes: 30, endTime: '9:06 AM', startMinutesFromMidnight: 516, endMinutesFromMidnight: 546 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '9:06 AM', durationMinutes: 36, endTime: '9:42 AM', startMinutesFromMidnight: 546, endMinutesFromMidnight: 582 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '9:42 AM', durationMinutes: 48, endTime: '10:30 AM', startMinutesFromMidnight: 582, endMinutesFromMidnight: 630 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '10:30 AM', durationMinutes: 18, endTime: '10:48 AM', startMinutesFromMidnight: 630, endMinutesFromMidnight: 648 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '8:24 AM', durationMinutes: 30, endTime: '8:54 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 534 },
          { birdId: 'vulture', star: 6, activity: 'Walk', startTime: '8:54 AM', durationMinutes: 36, endTime: '9:30 AM', startMinutesFromMidnight: 534, endMinutesFromMidnight: 570 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '9:30 AM', durationMinutes: 48, endTime: '10:18 AM', startMinutesFromMidnight: 570, endMinutesFromMidnight: 618 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '10:18 AM', durationMinutes: 18, endTime: '10:36 AM', startMinutesFromMidnight: 618, endMinutesFromMidnight: 636 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '10:36 AM', durationMinutes: 12, endTime: '10:48 AM', startMinutesFromMidnight: 636, endMinutesFromMidnight: 648 },
        ],
      },
    },
  },

  // --- JAMA 3 (10:48 AM - 1:12 PM) ---
  // Main Activities: Vulture (Rule), Owl Sleep, Crow Die, Cock (Eat), Peacock Walk
  {
    jamaNumber: 3,
    isDay: true,
    title: 'Valar Pirai Jama 3',
    startTime: '10:48 AM',
    endTime: '1:12 PM',
    startMinutesFromMidnight: 648,
    endMinutesFromMidnight: 792,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '10:48 AM', durationMinutes: 48, endTime: '11:36 AM', startMinutesFromMidnight: 648, endMinutesFromMidnight: 696 },
          { birdId: 'owl', star: 5, activity: 'Sleep', startTime: '11:36 AM', durationMinutes: 18, endTime: '11:54 AM', startMinutesFromMidnight: 696, endMinutesFromMidnight: 714 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '11:54 AM', durationMinutes: 12, endTime: '12:06 PM', startMinutesFromMidnight: 714, endMinutesFromMidnight: 726 },
          { birdId: 'cock', star: 7, activity: 'Eat', startTime: '12:06 PM', durationMinutes: 30, endTime: '12:36 PM', startMinutesFromMidnight: 726, endMinutesFromMidnight: 756 },
          { birdId: 'peacock', star: 7, activity: 'Walk', startTime: '12:36 PM', durationMinutes: 36, endTime: '1:12 PM', startMinutesFromMidnight: 756, endMinutesFromMidnight: 792 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '10:48 AM', durationMinutes: 18, endTime: '11:06 AM', startMinutesFromMidnight: 648, endMinutesFromMidnight: 666 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '11:06 AM', durationMinutes: 12, endTime: '11:18 AM', startMinutesFromMidnight: 666, endMinutesFromMidnight: 678 },
          { birdId: 'cock', star: 2, activity: 'Eat', startTime: '11:18 AM', durationMinutes: 30, endTime: '11:48 AM', startMinutesFromMidnight: 678, endMinutesFromMidnight: 708 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '11:48 AM', durationMinutes: 36, endTime: '12:24 PM', startMinutesFromMidnight: 708, endMinutesFromMidnight: 744 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '12:24 PM', durationMinutes: 48, endTime: '1:12 PM', startMinutesFromMidnight: 744, endMinutesFromMidnight: 792 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '10:48 AM', durationMinutes: 12, endTime: '11:00 AM', startMinutesFromMidnight: 648, endMinutesFromMidnight: 660 },
          { birdId: 'cock', star: 3, activity: 'Eat', startTime: '11:00 AM', durationMinutes: 30, endTime: '11:30 AM', startMinutesFromMidnight: 660, endMinutesFromMidnight: 690 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '11:30 AM', durationMinutes: 36, endTime: '12:06 PM', startMinutesFromMidnight: 690, endMinutesFromMidnight: 726 },
          { birdId: 'vulture', star: 1, activity: 'Rule', startTime: '12:06 PM', durationMinutes: 48, endTime: '12:54 PM', startMinutesFromMidnight: 726, endMinutesFromMidnight: 774 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '12:54 PM', durationMinutes: 18, endTime: '1:12 PM', startMinutesFromMidnight: 774, endMinutesFromMidnight: 792 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '10:48 AM', durationMinutes: 30, endTime: '11:18 AM', startMinutesFromMidnight: 648, endMinutesFromMidnight: 678 },
          { birdId: 'peacock', star: 6, activity: 'Walk', startTime: '11:18 AM', durationMinutes: 36, endTime: '11:54 AM', startMinutesFromMidnight: 678, endMinutesFromMidnight: 714 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '11:54 AM', durationMinutes: 48, endTime: '12:42 PM', startMinutesFromMidnight: 714, endMinutesFromMidnight: 762 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '12:42 PM', durationMinutes: 18, endTime: '1:00 PM', startMinutesFromMidnight: 762, endMinutesFromMidnight: 780 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '1:00 PM', durationMinutes: 12, endTime: '1:12 PM', startMinutesFromMidnight: 780, endMinutesFromMidnight: 792 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '10:48 AM', durationMinutes: 36, endTime: '11:24 AM', startMinutesFromMidnight: 648, endMinutesFromMidnight: 684 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '11:24 AM', durationMinutes: 48, endTime: '12:12 PM', startMinutesFromMidnight: 684, endMinutesFromMidnight: 732 },
          { birdId: 'owl', star: 1, activity: 'Sleep', startTime: '12:12 PM', durationMinutes: 18, endTime: '12:30 PM', startMinutesFromMidnight: 732, endMinutesFromMidnight: 750 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '12:30 PM', durationMinutes: 12, endTime: '12:42 PM', startMinutesFromMidnight: 750, endMinutesFromMidnight: 762 },
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '12:42 PM', durationMinutes: 30, endTime: '1:12 PM', startMinutesFromMidnight: 762, endMinutesFromMidnight: 792 },
        ],
      },
    },
  },

  // --- JAMA 4 (1:12 PM - 3:36 PM) ---
  // Main Activities: Vulture (Sleep), Owl (Die), Crow Eat, Cock (Walk), Peacock Rule
  {
    jamaNumber: 4,
    isDay: true,
    title: 'Valar Pirai Jama 4',
    startTime: '1:12 PM',
    endTime: '3:36 PM',
    startMinutesFromMidnight: 792,
    endMinutesFromMidnight: 936,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '1:12 PM', durationMinutes: 18, endTime: '1:30 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 810 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '1:30 PM', durationMinutes: 12, endTime: '1:42 PM', startMinutesFromMidnight: 810, endMinutesFromMidnight: 822 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '1:42 PM', durationMinutes: 30, endTime: '2:12 PM', startMinutesFromMidnight: 822, endMinutesFromMidnight: 852 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '2:12 PM', durationMinutes: 36, endTime: '2:48 PM', startMinutesFromMidnight: 852, endMinutesFromMidnight: 888 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '2:48 PM', durationMinutes: 48, endTime: '3:36 PM', startMinutesFromMidnight: 888, endMinutesFromMidnight: 936 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '1:12 PM', durationMinutes: 12, endTime: '1:24 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 804 },
          { birdId: 'crow', star: 3, activity: 'Eat', startTime: '1:24 PM', durationMinutes: 30, endTime: '1:54 PM', startMinutesFromMidnight: 804, endMinutesFromMidnight: 834 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '1:54 PM', durationMinutes: 36, endTime: '2:30 PM', startMinutesFromMidnight: 834, endMinutesFromMidnight: 870 },
          { birdId: 'peacock', star: 1, activity: 'Rule', startTime: '2:30 PM', durationMinutes: 48, endTime: '3:18 PM', startMinutesFromMidnight: 870, endMinutesFromMidnight: 918 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '3:18 PM', durationMinutes: 18, endTime: '3:36 PM', startMinutesFromMidnight: 918, endMinutesFromMidnight: 936 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '1:12 PM', durationMinutes: 30, endTime: '1:42 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 822 },
          { birdId: 'cock', star: 6, activity: 'Walk', startTime: '1:42 PM', durationMinutes: 36, endTime: '2:18 PM', startMinutesFromMidnight: 822, endMinutesFromMidnight: 858 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '2:18 PM', durationMinutes: 48, endTime: '3:06 PM', startMinutesFromMidnight: 858, endMinutesFromMidnight: 906 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '3:06 PM', durationMinutes: 18, endTime: '3:24 PM', startMinutesFromMidnight: 906, endMinutesFromMidnight: 924 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '3:24 PM', durationMinutes: 12, endTime: '3:36 PM', startMinutesFromMidnight: 924, endMinutesFromMidnight: 936 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '1:12 PM', durationMinutes: 36, endTime: '1:48 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 828 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '1:48 PM', durationMinutes: 48, endTime: '2:36 PM', startMinutesFromMidnight: 828, endMinutesFromMidnight: 876 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '2:36 PM', durationMinutes: 18, endTime: '2:54 PM', startMinutesFromMidnight: 876, endMinutesFromMidnight: 894 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '2:54 PM', durationMinutes: 12, endTime: '3:06 PM', startMinutesFromMidnight: 894, endMinutesFromMidnight: 906 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '3:06 PM', durationMinutes: 30, endTime: '3:36 PM', startMinutesFromMidnight: 906, endMinutesFromMidnight: 936 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '1:12 PM', durationMinutes: 48, endTime: '2:00 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 840 },
          { birdId: 'vulture', star: 5, activity: 'Sleep', startTime: '2:00 PM', durationMinutes: 18, endTime: '2:18 PM', startMinutesFromMidnight: 840, endMinutesFromMidnight: 858 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '2:18 PM', durationMinutes: 12, endTime: '2:30 PM', startMinutesFromMidnight: 858, endMinutesFromMidnight: 870 },
          { birdId: 'crow', star: 7, activity: 'Eat', startTime: '2:30 PM', durationMinutes: 30, endTime: '3:00 PM', startMinutesFromMidnight: 870, endMinutesFromMidnight: 900 },
          { birdId: 'cock', star: 7, activity: 'Walk', startTime: '3:00 PM', durationMinutes: 36, endTime: '3:36 PM', startMinutesFromMidnight: 900, endMinutesFromMidnight: 936 },
        ],
      },
    },
  },

  // --- JAMA 5 (3:36 PM - 6:00 PM) ---
  // Main Activities: Vulture (Die), Owl Eat, Crow Walk, Cock (Rule), Peacock (Sleep)
  {
    jamaNumber: 5,
    isDay: true,
    title: 'Valar Pirai Jama 5',
    startTime: '3:36 PM',
    endTime: '6:00 PM',
    startMinutesFromMidnight: 936,
    endMinutesFromMidnight: 1080,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '3:36 PM', durationMinutes: 12, endTime: '3:48 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 948 },
          { birdId: 'owl', star: 3, activity: 'Eat', startTime: '3:48 PM', durationMinutes: 30, endTime: '4:18 PM', startMinutesFromMidnight: 948, endMinutesFromMidnight: 978 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '4:18 PM', durationMinutes: 36, endTime: '4:54 PM', startMinutesFromMidnight: 978, endMinutesFromMidnight: 1014 },
          { birdId: 'cock', star: 1, activity: 'Rule', startTime: '4:54 PM', durationMinutes: 48, endTime: '5:42 PM', startMinutesFromMidnight: 1014, endMinutesFromMidnight: 1062 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '5:42 PM', durationMinutes: 18, endTime: '6:00 PM', startMinutesFromMidnight: 1062, endMinutesFromMidnight: 1080 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '3:36 PM', durationMinutes: 30, endTime: '4:06 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 966 },
          { birdId: 'crow', star: 6, activity: 'Walk', startTime: '4:06 PM', durationMinutes: 36, endTime: '4:42 PM', startMinutesFromMidnight: 966, endMinutesFromMidnight: 1002 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '4:42 PM', durationMinutes: 48, endTime: '5:30 PM', startMinutesFromMidnight: 1002, endMinutesFromMidnight: 1050 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '5:30 PM', durationMinutes: 18, endTime: '5:48 PM', startMinutesFromMidnight: 1050, endMinutesFromMidnight: 1068 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '5:48 PM', durationMinutes: 12, endTime: '6:00 PM', startMinutesFromMidnight: 1068, endMinutesFromMidnight: 1080 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '3:36 PM', durationMinutes: 36, endTime: '4:12 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 972 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '4:12 PM', durationMinutes: 48, endTime: '5:00 PM', startMinutesFromMidnight: 972, endMinutesFromMidnight: 1020 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '5:00 PM', durationMinutes: 18, endTime: '5:18 PM', startMinutesFromMidnight: 1020, endMinutesFromMidnight: 1038 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '5:18 PM', durationMinutes: 12, endTime: '5:30 PM', startMinutesFromMidnight: 1038, endMinutesFromMidnight: 1050 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '5:30 PM', durationMinutes: 30, endTime: '6:00 PM', startMinutesFromMidnight: 1050, endMinutesFromMidnight: 1080 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '3:36 PM', durationMinutes: 48, endTime: '4:24 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 984 },
          { birdId: 'peacock', star: 5, activity: 'Sleep', startTime: '4:24 PM', durationMinutes: 18, endTime: '4:42 PM', startMinutesFromMidnight: 984, endMinutesFromMidnight: 1002 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '4:42 PM', durationMinutes: 12, endTime: '4:54 PM', startMinutesFromMidnight: 1002, endMinutesFromMidnight: 1014 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '4:54 PM', durationMinutes: 30, endTime: '5:24 PM', startMinutesFromMidnight: 1014, endMinutesFromMidnight: 1044 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '5:24 PM', durationMinutes: 36, endTime: '6:00 PM', startMinutesFromMidnight: 1044, endMinutesFromMidnight: 1080 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '3:36 PM', durationMinutes: 18, endTime: '3:54 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 954 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '3:54 PM', durationMinutes: 12, endTime: '4:06 PM', startMinutesFromMidnight: 954, endMinutesFromMidnight: 966 },
          { birdId: 'owl', star: 2, activity: 'Eat', startTime: '4:06 PM', durationMinutes: 30, endTime: '4:36 PM', startMinutesFromMidnight: 966, endMinutesFromMidnight: 996 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '4:36 PM', durationMinutes: 36, endTime: '5:12 PM', startMinutesFromMidnight: 996, endMinutesFromMidnight: 1032 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '5:12 PM', durationMinutes: 48, endTime: '6:00 PM', startMinutesFromMidnight: 1032, endMinutesFromMidnight: 1080 },
        ],
      },
    },
  },

  // --- JAMA 6 (6:00 PM - 8:24 PM) ---
  // Main Activities: Vulture (Die), Owl (Rule), Crow (Eat), Cock (Sleep), Peacock (Walk)
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
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '6:00 PM', durationMinutes: 36, endTime: '6:36 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1116 },
          { birdId: 'peacock', star: 2, activity: 'Walk', startTime: '6:36 PM', durationMinutes: 30, endTime: '7:06 PM', startMinutesFromMidnight: 1116, endMinutesFromMidnight: 1146 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '7:06 PM', durationMinutes: 24, endTime: '7:30 PM', startMinutesFromMidnight: 1146, endMinutesFromMidnight: 1170 },
          { birdId: 'crow', star: 1, activity: 'Eat', startTime: '7:30 PM', durationMinutes: 30, endTime: '8:00 PM', startMinutesFromMidnight: 1170, endMinutesFromMidnight: 1200 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '8:00 PM', durationMinutes: 24, endTime: '8:24 PM', startMinutesFromMidnight: 1200, endMinutesFromMidnight: 1224 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '6:00 PM', durationMinutes: 24, endTime: '6:24 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1104 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '6:24 PM', durationMinutes: 36, endTime: '7:00 PM', startMinutesFromMidnight: 1104, endMinutesFromMidnight: 1140 },
          { birdId: 'peacock', star: 5, activity: 'Walk', startTime: '7:00 PM', durationMinutes: 30, endTime: '7:30 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1170 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '7:30 PM', durationMinutes: 24, endTime: '7:54 PM', startMinutesFromMidnight: 1170, endMinutesFromMidnight: 1194 },
          { birdId: 'crow', star: 9, activity: 'Eat', startTime: '7:54 PM', durationMinutes: 30, endTime: '8:24 PM', startMinutesFromMidnight: 1194, endMinutesFromMidnight: 1224 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '6:00 PM', durationMinutes: 30, endTime: '6:30 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1110 },
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '6:30 PM', durationMinutes: 24, endTime: '6:54 PM', startMinutesFromMidnight: 1110, endMinutesFromMidnight: 1134 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '6:54 PM', durationMinutes: 36, endTime: '7:30 PM', startMinutesFromMidnight: 1134, endMinutesFromMidnight: 1170 },
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '7:30 PM', durationMinutes: 30, endTime: '8:00 PM', startMinutesFromMidnight: 1170, endMinutesFromMidnight: 1200 },
          { birdId: 'cock', star: 4, activity: 'Sleep', startTime: '8:00 PM', durationMinutes: 24, endTime: '8:24 PM', startMinutesFromMidnight: 1200, endMinutesFromMidnight: 1224 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '6:00 PM', durationMinutes: 24, endTime: '6:24 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1104 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '6:24 PM', durationMinutes: 30, endTime: '6:54 PM', startMinutesFromMidnight: 1104, endMinutesFromMidnight: 1134 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '6:54 PM', durationMinutes: 24, endTime: '7:18 PM', startMinutesFromMidnight: 1134, endMinutesFromMidnight: 1158 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '7:18 PM', durationMinutes: 36, endTime: '7:54 PM', startMinutesFromMidnight: 1158, endMinutesFromMidnight: 1194 },
          { birdId: 'peacock', star: 3, activity: 'Walk', startTime: '7:54 PM', durationMinutes: 30, endTime: '8:24 PM', startMinutesFromMidnight: 1194, endMinutesFromMidnight: 1224 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '6:00 PM', durationMinutes: 30, endTime: '6:30 PM', startMinutesFromMidnight: 1080, endMinutesFromMidnight: 1110 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '6:30 PM', durationMinutes: 24, endTime: '6:54 PM', startMinutesFromMidnight: 1110, endMinutesFromMidnight: 1134 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '6:54 PM', durationMinutes: 30, endTime: '7:24 PM', startMinutesFromMidnight: 1134, endMinutesFromMidnight: 1164 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '7:24 PM', durationMinutes: 24, endTime: '7:48 PM', startMinutesFromMidnight: 1164, endMinutesFromMidnight: 1188 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '7:48 PM', durationMinutes: 36, endTime: '8:24 PM', startMinutesFromMidnight: 1188, endMinutesFromMidnight: 1224 },
        ],
      },
    },
  },

  // --- JAMA 7 (8:24 PM - 10:48 PM) ---
  // Main Activities: Vulture - Walk, Owl (Die), Crow (Rule), Cock (Eat), Peacock (Sleep)
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
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '8:24 PM', durationMinutes: 30, endTime: '8:54 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1254 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '8:54 PM', durationMinutes: 24, endTime: '9:18 PM', startMinutesFromMidnight: 1254, endMinutesFromMidnight: 1278 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '9:18 PM', durationMinutes: 30, endTime: '9:48 PM', startMinutesFromMidnight: 1278, endMinutesFromMidnight: 1308 },
          { birdId: 'crow', star: 5, activity: 'Rule', startTime: '9:48 PM', durationMinutes: 24, endTime: '10:12 PM', startMinutesFromMidnight: 1308, endMinutesFromMidnight: 1332 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '10:12 PM', durationMinutes: 36, endTime: '10:48 PM', startMinutesFromMidnight: 1332, endMinutesFromMidnight: 1368 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '8:24 PM', durationMinutes: 36, endTime: '9:00 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1260 },
          { birdId: 'vulture', star: 2, activity: 'Walk', startTime: '9:00 PM', durationMinutes: 30, endTime: '9:30 PM', startMinutesFromMidnight: 1260, endMinutesFromMidnight: 1290 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '9:30 PM', durationMinutes: 24, endTime: '9:54 PM', startMinutesFromMidnight: 1290, endMinutesFromMidnight: 1314 },
          { birdId: 'cock', star: 1, activity: 'Eat', startTime: '9:54 PM', durationMinutes: 30, endTime: '10:24 PM', startMinutesFromMidnight: 1314, endMinutesFromMidnight: 1344 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '10:24 PM', durationMinutes: 24, endTime: '10:48 PM', startMinutesFromMidnight: 1344, endMinutesFromMidnight: 1368 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '8:24 PM', durationMinutes: 24, endTime: '8:48 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1248 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '8:48 PM', durationMinutes: 36, endTime: '9:24 PM', startMinutesFromMidnight: 1248, endMinutesFromMidnight: 1284 },
          { birdId: 'vulture', star: 5, activity: 'Walk', startTime: '9:24 PM', durationMinutes: 30, endTime: '9:54 PM', startMinutesFromMidnight: 1284, endMinutesFromMidnight: 1314 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '9:54 PM', durationMinutes: 24, endTime: '10:18 PM', startMinutesFromMidnight: 1314, endMinutesFromMidnight: 1338 },
          { birdId: 'cock', star: 9, activity: 'Eat', startTime: '10:18 PM', durationMinutes: 30, endTime: '10:48 PM', startMinutesFromMidnight: 1338, endMinutesFromMidnight: 1368 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '8:24 PM', durationMinutes: 30, endTime: '8:54 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1254 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '8:54 PM', durationMinutes: 24, endTime: '9:18 PM', startMinutesFromMidnight: 1254, endMinutesFromMidnight: 1278 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '9:18 PM', durationMinutes: 36, endTime: '9:54 PM', startMinutesFromMidnight: 1278, endMinutesFromMidnight: 1314 },
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '9:54 PM', durationMinutes: 30, endTime: '10:24 PM', startMinutesFromMidnight: 1314, endMinutesFromMidnight: 1344 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '10:24 PM', durationMinutes: 24, endTime: '10:48 PM', startMinutesFromMidnight: 1344, endMinutesFromMidnight: 1368 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '8:24 PM', durationMinutes: 24, endTime: '8:48 PM', startMinutesFromMidnight: 1224, endMinutesFromMidnight: 1248 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '8:48 PM', durationMinutes: 30, endTime: '9:18 PM', startMinutesFromMidnight: 1248, endMinutesFromMidnight: 1278 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '9:18 PM', durationMinutes: 24, endTime: '9:42 PM', startMinutesFromMidnight: 1278, endMinutesFromMidnight: 1302 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '9:42 PM', durationMinutes: 36, endTime: '10:18 PM', startMinutesFromMidnight: 1302, endMinutesFromMidnight: 1338 },
          { birdId: 'vulture', star: 3, activity: 'Walk', startTime: '10:18 PM', durationMinutes: 30, endTime: '10:48 PM', startMinutesFromMidnight: 1338, endMinutesFromMidnight: 1368 },
        ],
      },
    },
  },

  // --- JAMA 8 (10:48 PM - 1:12 AM) ---
  // Main Activities: Vulture - Sleep, Owl - Walk, Crow Die, Cock (Rule), Peacock (Eat)
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
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '10:48 PM', durationMinutes: 24, endTime: '11:12 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1392 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '11:12 PM', durationMinutes: 30, endTime: '11:42 PM', startMinutesFromMidnight: 1392, endMinutesFromMidnight: 1422 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '11:42 PM', durationMinutes: 24, endTime: '12:06 AM', startMinutesFromMidnight: 1422, endMinutesFromMidnight: 1446 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '12:06 AM', durationMinutes: 36, endTime: '12:42 AM', startMinutesFromMidnight: 1446, endMinutesFromMidnight: 1482 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '12:42 AM', durationMinutes: 30, endTime: '1:12 AM', startMinutesFromMidnight: 1482, endMinutesFromMidnight: 1512 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '10:48 PM', durationMinutes: 30, endTime: '11:18 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1398 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '11:18 PM', durationMinutes: 24, endTime: '11:42 PM', startMinutesFromMidnight: 1398, endMinutesFromMidnight: 1422 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '11:42 PM', durationMinutes: 30, endTime: '12:12 AM', startMinutesFromMidnight: 1422, endMinutesFromMidnight: 1452 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '12:12 AM', durationMinutes: 24, endTime: '12:36 AM', startMinutesFromMidnight: 1452, endMinutesFromMidnight: 1476 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '12:36 AM', durationMinutes: 36, endTime: '1:12 AM', startMinutesFromMidnight: 1476, endMinutesFromMidnight: 1512 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '10:48 PM', durationMinutes: 36, endTime: '11:24 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1404 },
          { birdId: 'owl', star: 2, activity: 'Walk', startTime: '11:24 PM', durationMinutes: 30, endTime: '11:54 PM', startMinutesFromMidnight: 1404, endMinutesFromMidnight: 1434 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '11:54 PM', durationMinutes: 24, endTime: '12:18 AM', startMinutesFromMidnight: 1434, endMinutesFromMidnight: 1458 },
          { birdId: 'peacock', star: 1, activity: 'Eat', startTime: '12:18 AM', durationMinutes: 30, endTime: '12:48 AM', startMinutesFromMidnight: 1458, endMinutesFromMidnight: 1488 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '12:48 AM', durationMinutes: 24, endTime: '1:12 AM', startMinutesFromMidnight: 1488, endMinutesFromMidnight: 1512 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '10:48 PM', durationMinutes: 24, endTime: '11:12 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1392 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '11:12 PM', durationMinutes: 36, endTime: '11:48 PM', startMinutesFromMidnight: 1392, endMinutesFromMidnight: 1428 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '11:48 PM', durationMinutes: 30, endTime: '12:18 AM', startMinutesFromMidnight: 1428, endMinutesFromMidnight: 1458 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '12:18 AM', durationMinutes: 24, endTime: '12:42 AM', startMinutesFromMidnight: 1458, endMinutesFromMidnight: 1482 },
          { birdId: 'peacock', star: 9, activity: 'Eat', startTime: '12:42 AM', durationMinutes: 30, endTime: '1:12 AM', startMinutesFromMidnight: 1482, endMinutesFromMidnight: 1512 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '10:48 PM', durationMinutes: 30, endTime: '11:18 PM', startMinutesFromMidnight: 1368, endMinutesFromMidnight: 1398 },
          { birdId: 'cock', star: 9, activity: 'Rule', startTime: '11:18 PM', durationMinutes: 24, endTime: '11:42 PM', startMinutesFromMidnight: 1398, endMinutesFromMidnight: 1422 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '11:42 PM', durationMinutes: 36, endTime: '12:18 AM', startMinutesFromMidnight: 1422, endMinutesFromMidnight: 1458 },
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '12:18 AM', durationMinutes: 30, endTime: '12:48 AM', startMinutesFromMidnight: 1458, endMinutesFromMidnight: 1488 },
          { birdId: 'vulture', star: 4, activity: 'Sleep', startTime: '12:48 AM', durationMinutes: 24, endTime: '1:12 AM', startMinutesFromMidnight: 1488, endMinutesFromMidnight: 1512 },
        ],
      },
    },
  },

  // --- JAMA 9 (1:12 AM - 3:36 AM) ---
  // Main Activities: Vulture - Eat, Owl - Sleep, Crow Walk, Cock (Die), Peacock (Rule)
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
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '1:12 AM', durationMinutes: 30, endTime: '1:42 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1542 },
          { birdId: 'peacock', star: 9, activity: 'Rule', startTime: '1:42 AM', durationMinutes: 24, endTime: '2:06 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1566 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '2:06 AM', durationMinutes: 36, endTime: '2:42 AM', startMinutesFromMidnight: 1566, endMinutesFromMidnight: 1602 },
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '2:42 AM', durationMinutes: 30, endTime: '3:12 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1632 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '3:12 AM', durationMinutes: 24, endTime: '3:36 AM', startMinutesFromMidnight: 1632, endMinutesFromMidnight: 1656 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '1:12 AM', durationMinutes: 24, endTime: '1:36 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1536 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '1:36 AM', durationMinutes: 30, endTime: '2:06 AM', startMinutesFromMidnight: 1536, endMinutesFromMidnight: 1566 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '2:06 AM', durationMinutes: 24, endTime: '2:30 AM', startMinutesFromMidnight: 1566, endMinutesFromMidnight: 1590 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '2:30 AM', durationMinutes: 36, endTime: '3:06 AM', startMinutesFromMidnight: 1590, endMinutesFromMidnight: 1626 },
          { birdId: 'crow', star: 3, activity: 'Walk', startTime: '3:06 AM', durationMinutes: 30, endTime: '3:36 AM', startMinutesFromMidnight: 1626, endMinutesFromMidnight: 1656 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '1:12 AM', durationMinutes: 30, endTime: '1:42 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1542 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '1:42 AM', durationMinutes: 24, endTime: '2:06 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1566 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '2:06 AM', durationMinutes: 30, endTime: '2:36 AM', startMinutesFromMidnight: 1566, endMinutesFromMidnight: 1596 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '2:36 AM', durationMinutes: 24, endTime: '3:00 AM', startMinutesFromMidnight: 1596, endMinutesFromMidnight: 1620 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '3:00 AM', durationMinutes: 36, endTime: '3:36 AM', startMinutesFromMidnight: 1620, endMinutesFromMidnight: 1656 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '1:12 AM', durationMinutes: 36, endTime: '1:48 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1548 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '1:48 AM', durationMinutes: 30, endTime: '2:18 AM', startMinutesFromMidnight: 1548, endMinutesFromMidnight: 1578 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '2:18 AM', durationMinutes: 24, endTime: '2:42 AM', startMinutesFromMidnight: 1578, endMinutesFromMidnight: 1602 },
          { birdId: 'vulture', star: 1, activity: 'Eat', startTime: '2:42 AM', durationMinutes: 30, endTime: '3:12 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1632 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '3:12 AM', durationMinutes: 24, endTime: '3:36 AM', startMinutesFromMidnight: 1632, endMinutesFromMidnight: 1656 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '1:12 AM', durationMinutes: 24, endTime: '1:36 AM', startMinutesFromMidnight: 1512, endMinutesFromMidnight: 1536 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '1:36 AM', durationMinutes: 36, endTime: '2:12 AM', startMinutesFromMidnight: 1536, endMinutesFromMidnight: 1572 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '2:12 AM', durationMinutes: 30, endTime: '2:42 AM', startMinutesFromMidnight: 1572, endMinutesFromMidnight: 1602 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '2:42 AM', durationMinutes: 24, endTime: '3:06 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1626 },
          { birdId: 'vulture', star: 9, activity: 'Eat', startTime: '3:06 AM', durationMinutes: 30, endTime: '3:36 AM', startMinutesFromMidnight: 1626, endMinutesFromMidnight: 1656 },
        ],
      },
    },
  },

  // --- JAMA 10 (3:36 AM - 6:00 AM) ---
  // Main Activities: Vulture - Rule, Owl - Eat, Crow Sleep, Cock (Walk), Peacock (Die)
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
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '3:36 AM', durationMinutes: 24, endTime: '4:00 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1680 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '4:00 AM', durationMinutes: 36, endTime: '4:36 AM', startMinutesFromMidnight: 1680, endMinutesFromMidnight: 1716 },
          { birdId: 'cock', star: 5, activity: 'Walk', startTime: '4:36 AM', durationMinutes: 30, endTime: '5:06 AM', startMinutesFromMidnight: 1716, endMinutesFromMidnight: 1746 },
          { birdId: 'crow', star: 3, activity: 'Sleep', startTime: '5:06 AM', durationMinutes: 24, endTime: '5:30 AM', startMinutesFromMidnight: 1746, endMinutesFromMidnight: 1770 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '5:30 AM', durationMinutes: 30, endTime: '6:00 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1800 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '3:36 AM', durationMinutes: 30, endTime: '4:06 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1686 },
          { birdId: 'vulture', star: 9, activity: 'Rule', startTime: '4:06 AM', durationMinutes: 24, endTime: '4:30 AM', startMinutesFromMidnight: 1686, endMinutesFromMidnight: 1710 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '4:30 AM', durationMinutes: 36, endTime: '5:06 AM', startMinutesFromMidnight: 1710, endMinutesFromMidnight: 1746 },
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '5:06 AM', durationMinutes: 30, endTime: '5:36 AM', startMinutesFromMidnight: 1746, endMinutesFromMidnight: 1776 },
          { birdId: 'crow', star: 4, activity: 'Sleep', startTime: '5:36 AM', durationMinutes: 24, endTime: '6:00 AM', startMinutesFromMidnight: 1776, endMinutesFromMidnight: 1800 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '3:36 AM', durationMinutes: 24, endTime: '4:00 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1680 },
          { birdId: 'owl', star: 4, activity: 'Eat', startTime: '4:00 AM', durationMinutes: 30, endTime: '4:30 AM', startMinutesFromMidnight: 1680, endMinutesFromMidnight: 1710 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '4:30 AM', durationMinutes: 24, endTime: '4:54 AM', startMinutesFromMidnight: 1710, endMinutesFromMidnight: 1734 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '4:54 AM', durationMinutes: 36, endTime: '5:30 AM', startMinutesFromMidnight: 1734, endMinutesFromMidnight: 1770 },
          { birdId: 'cock', star: 3, activity: 'Walk', startTime: '5:30 AM', durationMinutes: 30, endTime: '6:00 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1800 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '3:36 AM', durationMinutes: 30, endTime: '4:06 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1686 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '4:06 AM', durationMinutes: 24, endTime: '4:30 AM', startMinutesFromMidnight: 1686, endMinutesFromMidnight: 1710 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '4:30 AM', durationMinutes: 30, endTime: '5:00 AM', startMinutesFromMidnight: 1710, endMinutesFromMidnight: 1740 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '5:00 AM', durationMinutes: 24, endTime: '5:24 AM', startMinutesFromMidnight: 1740, endMinutesFromMidnight: 1764 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '5:24 AM', durationMinutes: 36, endTime: '6:00 AM', startMinutesFromMidnight: 1764, endMinutesFromMidnight: 1800 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '3:36 AM', durationMinutes: 36, endTime: '4:12 AM', startMinutesFromMidnight: 1656, endMinutesFromMidnight: 1692 },
          { birdId: 'cock', star: 2, activity: 'Walk', startTime: '4:12 AM', durationMinutes: 30, endTime: '4:42 AM', startMinutesFromMidnight: 1692, endMinutesFromMidnight: 1722 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '4:42 AM', durationMinutes: 24, endTime: '5:06 AM', startMinutesFromMidnight: 1722, endMinutesFromMidnight: 1746 },
          { birdId: 'owl', star: 1, activity: 'Eat', startTime: '5:06 AM', durationMinutes: 30, endTime: '5:36 AM', startMinutesFromMidnight: 1746, endMinutesFromMidnight: 1776 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '5:36 AM', durationMinutes: 24, endTime: '6:00 AM', startMinutesFromMidnight: 1776, endMinutesFromMidnight: 1800 },
        ],
      },
    },
  },
];
