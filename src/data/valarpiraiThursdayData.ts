import { Jama } from '../types';

export const VALARPIRAI_THURSDAY_CONFIG = {
  dayTotalMinutes: 697,
  nightTotalMinutes: 745,
  sunriseToday: '07:01',
  sunsetToday: '18:38',
  nextSunriseTomorrow: '07:03',
  dayRuleMinutes: 46,
  dayEatMinutes: 29,
  dayWalkMinutes: 35,
  daySleepMinutes: 17,
  dayDieMinutes: 12,
  nightRuleMinutes: 25,
  nightEatMinutes: 31,
  nightWalkMinutes: 31,
  nightSleepMinutes: 25,
  nightDieMinutes: 37,
  dayRulingBird: 'Crow',
  dayDyingBird: 'Vulture',
  nightRulingBird: 'Peacock',
  nightDyingBird: 'Vulture',
};

// Complete 10 Jamas for Valarpirai Thursday encoded faithfully from the uploaded spreadsheet
export const VALARPIRAI_THURSDAY_JAMAS: Jama[] = [
  // --- JAMA 1 (7:01 AM - 9:20 AM) --- 139 mins (Day)
  // Main Activities: Vulture (Sleep), Owl (Die), Crow (Eat), Cock (Walk), Peacock (Rule)
  {
    jamaNumber: 1,
    isDay: true,
    title: 'Valar Pirai Jama 1',
    startTime: '7:01 AM',
    endTime: '9:20 AM',
    startMinutesFromMidnight: 421,
    endMinutesFromMidnight: 560,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '7:01 AM', durationMinutes: 17, endTime: '7:18 AM', startMinutesFromMidnight: 421, endMinutesFromMidnight: 438 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '7:18 AM', durationMinutes: 12, endTime: '7:30 AM', startMinutesFromMidnight: 438, endMinutesFromMidnight: 450 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '7:30 AM', durationMinutes: 29, endTime: '7:59 AM', startMinutesFromMidnight: 450, endMinutesFromMidnight: 479 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '7:59 AM', durationMinutes: 35, endTime: '8:34 AM', startMinutesFromMidnight: 479, endMinutesFromMidnight: 514 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '8:34 AM', durationMinutes: 46, endTime: '9:20 AM', startMinutesFromMidnight: 514, endMinutesFromMidnight: 560 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '7:01 AM', durationMinutes: 12, endTime: '7:13 AM', startMinutesFromMidnight: 421, endMinutesFromMidnight: 433 },
          { birdId: 'crow', star: 3, activity: 'Eat', startTime: '7:13 AM', durationMinutes: 29, endTime: '7:42 AM', startMinutesFromMidnight: 433, endMinutesFromMidnight: 462 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '7:42 AM', durationMinutes: 35, endTime: '8:17 AM', startMinutesFromMidnight: 462, endMinutesFromMidnight: 497 },
          { birdId: 'peacock', star: 1, activity: 'Rule', startTime: '8:17 AM', durationMinutes: 46, endTime: '9:03 AM', startMinutesFromMidnight: 497, endMinutesFromMidnight: 543 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '9:03 AM', durationMinutes: 17, endTime: '9:20 AM', startMinutesFromMidnight: 543, endMinutesFromMidnight: 560 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '7:01 AM', durationMinutes: 29, endTime: '7:30 AM', startMinutesFromMidnight: 421, endMinutesFromMidnight: 450 },
          { birdId: 'cock', star: 6, activity: 'Walk', startTime: '7:30 AM', durationMinutes: 35, endTime: '8:05 AM', startMinutesFromMidnight: 450, endMinutesFromMidnight: 485 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '8:05 AM', durationMinutes: 46, endTime: '8:51 AM', startMinutesFromMidnight: 485, endMinutesFromMidnight: 531 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '8:51 AM', durationMinutes: 17, endTime: '9:08 AM', startMinutesFromMidnight: 531, endMinutesFromMidnight: 548 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '9:08 AM', durationMinutes: 12, endTime: '9:20 AM', startMinutesFromMidnight: 548, endMinutesFromMidnight: 560 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '7:01 AM', durationMinutes: 35, endTime: '7:36 AM', startMinutesFromMidnight: 421, endMinutesFromMidnight: 456 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '7:36 AM', durationMinutes: 46, endTime: '8:22 AM', startMinutesFromMidnight: 456, endMinutesFromMidnight: 502 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '8:22 AM', durationMinutes: 17, endTime: '8:39 AM', startMinutesFromMidnight: 502, endMinutesFromMidnight: 519 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '8:39 AM', durationMinutes: 12, endTime: '8:51 AM', startMinutesFromMidnight: 519, endMinutesFromMidnight: 531 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '8:51 AM', durationMinutes: 29, endTime: '9:20 AM', startMinutesFromMidnight: 531, endMinutesFromMidnight: 560 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '7:01 AM', durationMinutes: 46, endTime: '7:47 AM', startMinutesFromMidnight: 421, endMinutesFromMidnight: 467 },
          { birdId: 'vulture', star: 4, activity: 'Sleep', startTime: '7:47 AM', durationMinutes: 17, endTime: '8:04 AM', startMinutesFromMidnight: 467, endMinutesFromMidnight: 484 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '8:04 AM', durationMinutes: 12, endTime: '8:16 AM', startMinutesFromMidnight: 484, endMinutesFromMidnight: 496 },
          { birdId: 'crow', star: 7, activity: 'Eat', startTime: '8:16 AM', durationMinutes: 29, endTime: '8:45 AM', startMinutesFromMidnight: 496, endMinutesFromMidnight: 525 },
          { birdId: 'cock', star: 7, activity: 'Walk', startTime: '8:45 AM', durationMinutes: 35, endTime: '9:20 AM', startMinutesFromMidnight: 525, endMinutesFromMidnight: 560 },
        ],
      },
    },
  },

  // --- JAMA 2 (9:20 AM - 11:39 AM) --- 139 mins (Day)
  // Main Activities: Vulture (Die), Owl Eat, Crow Walk, Cock (Rule), Peacock Sleep
  {
    jamaNumber: 2,
    isDay: true,
    title: 'Valar Pirai Jama 2',
    startTime: '9:20 AM',
    endTime: '11:39 AM',
    startMinutesFromMidnight: 560,
    endMinutesFromMidnight: 699,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '9:20 AM', durationMinutes: 12, endTime: '9:32 AM', startMinutesFromMidnight: 560, endMinutesFromMidnight: 572 },
          { birdId: 'owl', star: 3, activity: 'Eat', startTime: '9:32 AM', durationMinutes: 29, endTime: '10:01 AM', startMinutesFromMidnight: 572, endMinutesFromMidnight: 601 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '10:01 AM', durationMinutes: 35, endTime: '10:36 AM', startMinutesFromMidnight: 601, endMinutesFromMidnight: 636 },
          { birdId: 'cock', star: 1, activity: 'Rule', startTime: '10:36 AM', durationMinutes: 46, endTime: '11:22 AM', startMinutesFromMidnight: 636, endMinutesFromMidnight: 682 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '11:22 AM', durationMinutes: 17, endTime: '11:39 AM', startMinutesFromMidnight: 682, endMinutesFromMidnight: 699 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '9:20 AM', durationMinutes: 29, endTime: '9:49 AM', startMinutesFromMidnight: 560, endMinutesFromMidnight: 589 },
          { birdId: 'crow', star: 6, activity: 'Walk', startTime: '9:49 AM', durationMinutes: 35, endTime: '10:24 AM', startMinutesFromMidnight: 589, endMinutesFromMidnight: 624 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '10:24 AM', durationMinutes: 46, endTime: '11:10 AM', startMinutesFromMidnight: 624, endMinutesFromMidnight: 670 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '11:10 AM', durationMinutes: 17, endTime: '11:27 AM', startMinutesFromMidnight: 670, endMinutesFromMidnight: 687 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '11:27 AM', durationMinutes: 12, endTime: '11:39 AM', startMinutesFromMidnight: 687, endMinutesFromMidnight: 699 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '9:20 AM', durationMinutes: 35, endTime: '9:55 AM', startMinutesFromMidnight: 560, endMinutesFromMidnight: 595 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '9:55 AM', durationMinutes: 46, endTime: '10:41 AM', startMinutesFromMidnight: 595, endMinutesFromMidnight: 641 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '10:41 AM', durationMinutes: 17, endTime: '10:58 AM', startMinutesFromMidnight: 641, endMinutesFromMidnight: 658 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '10:58 AM', durationMinutes: 12, endTime: '11:10 AM', startMinutesFromMidnight: 658, endMinutesFromMidnight: 670 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '11:10 AM', durationMinutes: 29, endTime: '11:39 AM', startMinutesFromMidnight: 670, endMinutesFromMidnight: 699 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '9:20 AM', durationMinutes: 46, endTime: '10:06 AM', startMinutesFromMidnight: 560, endMinutesFromMidnight: 606 },
          { birdId: 'peacock', star: 5, activity: 'Sleep', startTime: '10:06 AM', durationMinutes: 17, endTime: '10:23 AM', startMinutesFromMidnight: 606, endMinutesFromMidnight: 623 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '10:23 AM', durationMinutes: 12, endTime: '10:35 AM', startMinutesFromMidnight: 623, endMinutesFromMidnight: 635 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '10:35 AM', durationMinutes: 29, endTime: '11:04 AM', startMinutesFromMidnight: 635, endMinutesFromMidnight: 664 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '11:04 AM', durationMinutes: 35, endTime: '11:39 AM', startMinutesFromMidnight: 664, endMinutesFromMidnight: 699 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '9:20 AM', durationMinutes: 17, endTime: '9:37 AM', startMinutesFromMidnight: 560, endMinutesFromMidnight: 577 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '9:37 AM', durationMinutes: 12, endTime: '9:49 AM', startMinutesFromMidnight: 577, endMinutesFromMidnight: 589 },
          { birdId: 'owl', star: 2, activity: 'Eat', startTime: '9:49 AM', durationMinutes: 29, endTime: '10:18 AM', startMinutesFromMidnight: 589, endMinutesFromMidnight: 618 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '10:18 AM', durationMinutes: 35, endTime: '10:53 AM', startMinutesFromMidnight: 618, endMinutesFromMidnight: 653 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '10:53 AM', durationMinutes: 46, endTime: '11:39 AM', startMinutesFromMidnight: 653, endMinutesFromMidnight: 699 },
        ],
      },
    },
  },

  // --- JAMA 3 (11:39 AM - 1:58 PM) --- 139 mins (Day)
  // Main Activities: Vulture (Eat), Owl Walk, Crow Rule, Cock (Sleep), Peacock Die
  {
    jamaNumber: 3,
    isDay: true,
    title: 'Valar Pirai Jama 3',
    startTime: '11:39 AM',
    endTime: '1:58 PM',
    startMinutesFromMidnight: 699,
    endMinutesFromMidnight: 838,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '11:39 AM', durationMinutes: 29, endTime: '12:08 PM', startMinutesFromMidnight: 699, endMinutesFromMidnight: 728 },
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '12:08 PM', durationMinutes: 35, endTime: '12:43 PM', startMinutesFromMidnight: 728, endMinutesFromMidnight: 763 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '12:43 PM', durationMinutes: 46, endTime: '1:29 PM', startMinutesFromMidnight: 763, endMinutesFromMidnight: 809 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '1:29 PM', durationMinutes: 17, endTime: '1:46 PM', startMinutesFromMidnight: 809, endMinutesFromMidnight: 826 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '1:46 PM', durationMinutes: 12, endTime: '1:58 PM', startMinutesFromMidnight: 826, endMinutesFromMidnight: 838 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '11:39 AM', durationMinutes: 35, endTime: '12:14 PM', startMinutesFromMidnight: 699, endMinutesFromMidnight: 734 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '12:14 PM', durationMinutes: 46, endTime: '1:00 PM', startMinutesFromMidnight: 734, endMinutesFromMidnight: 780 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '1:00 PM', durationMinutes: 17, endTime: '1:17 PM', startMinutesFromMidnight: 780, endMinutesFromMidnight: 797 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '1:17 PM', durationMinutes: 12, endTime: '1:29 PM', startMinutesFromMidnight: 797, endMinutesFromMidnight: 809 },
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '1:29 PM', durationMinutes: 29, endTime: '1:58 PM', startMinutesFromMidnight: 809, endMinutesFromMidnight: 838 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '11:39 AM', durationMinutes: 46, endTime: '12:25 PM', startMinutesFromMidnight: 699, endMinutesFromMidnight: 745 },
          { birdId: 'cock', star: 5, activity: 'Sleep', startTime: '12:25 PM', durationMinutes: 17, endTime: '12:42 PM', startMinutesFromMidnight: 745, endMinutesFromMidnight: 762 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '12:42 PM', durationMinutes: 12, endTime: '12:54 PM', startMinutesFromMidnight: 762, endMinutesFromMidnight: 774 },
          { birdId: 'vulture', star: 7, activity: 'Eat', startTime: '12:54 PM', durationMinutes: 29, endTime: '1:23 PM', startMinutesFromMidnight: 774, endMinutesFromMidnight: 803 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '1:23 PM', durationMinutes: 35, endTime: '1:58 PM', startMinutesFromMidnight: 803, endMinutesFromMidnight: 838 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '11:39 AM', durationMinutes: 17, endTime: '11:56 AM', startMinutesFromMidnight: 699, endMinutesFromMidnight: 716 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '11:56 AM', durationMinutes: 12, endTime: '12:08 PM', startMinutesFromMidnight: 716, endMinutesFromMidnight: 728 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '12:08 PM', durationMinutes: 29, endTime: '12:37 PM', startMinutesFromMidnight: 728, endMinutesFromMidnight: 757 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '12:37 PM', durationMinutes: 35, endTime: '1:12 PM', startMinutesFromMidnight: 757, endMinutesFromMidnight: 792 },
          { birdId: 'crow', star: 1, activity: 'Rule', startTime: '1:12 PM', durationMinutes: 46, endTime: '1:58 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 838 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '11:39 AM', durationMinutes: 12, endTime: '11:51 AM', startMinutesFromMidnight: 699, endMinutesFromMidnight: 711 },
          { birdId: 'vulture', star: 3, activity: 'Eat', startTime: '11:51 AM', durationMinutes: 29, endTime: '12:20 PM', startMinutesFromMidnight: 711, endMinutesFromMidnight: 740 },
          { birdId: 'owl', star: 1, activity: 'Walk', startTime: '12:20 PM', durationMinutes: 35, endTime: '12:55 PM', startMinutesFromMidnight: 740, endMinutesFromMidnight: 775 },
          { birdId: 'crow', star: 1, activity: 'Rule', startTime: '12:55 PM', durationMinutes: 46, endTime: '1:41 PM', startMinutesFromMidnight: 775, endMinutesFromMidnight: 821 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '1:41 PM', durationMinutes: 17, endTime: '1:58 PM', startMinutesFromMidnight: 821, endMinutesFromMidnight: 838 },
        ],
      },
    },
  },

  // --- JAMA 4 (1:58 PM - 4:17 PM) --- 139 mins (Day)
  // Main Activities: Vulture (Walk), Owl (Rule), Crow Sleep, Cock (Die), Peacock Eat
  {
    jamaNumber: 4,
    isDay: true,
    title: 'Valar Pirai Jama 4',
    startTime: '1:58 PM',
    endTime: '4:17 PM',
    startMinutesFromMidnight: 838,
    endMinutesFromMidnight: 977,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '1:58 PM', durationMinutes: 35, endTime: '2:33 PM', startMinutesFromMidnight: 838, endMinutesFromMidnight: 873 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '2:33 PM', durationMinutes: 46, endTime: '3:19 PM', startMinutesFromMidnight: 873, endMinutesFromMidnight: 919 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '3:19 PM', durationMinutes: 17, endTime: '3:36 PM', startMinutesFromMidnight: 919, endMinutesFromMidnight: 936 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '3:36 PM', durationMinutes: 12, endTime: '3:48 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 948 },
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '3:48 PM', durationMinutes: 29, endTime: '4:17 PM', startMinutesFromMidnight: 948, endMinutesFromMidnight: 977 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '1:58 PM', durationMinutes: 46, endTime: '2:44 PM', startMinutesFromMidnight: 838, endMinutesFromMidnight: 884 },
          { birdId: 'crow', star: 5, activity: 'Sleep', startTime: '2:44 PM', durationMinutes: 17, endTime: '3:01 PM', startMinutesFromMidnight: 884, endMinutesFromMidnight: 901 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '3:01 PM', durationMinutes: 12, endTime: '3:13 PM', startMinutesFromMidnight: 901, endMinutesFromMidnight: 913 },
          { birdId: 'peacock', star: 7, activity: 'Eat', startTime: '3:13 PM', durationMinutes: 29, endTime: '3:42 PM', startMinutesFromMidnight: 913, endMinutesFromMidnight: 942 },
          { birdId: 'vulture', star: 7, activity: 'Walk', startTime: '3:42 PM', durationMinutes: 35, endTime: '4:17 PM', startMinutesFromMidnight: 942, endMinutesFromMidnight: 977 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '1:58 PM', durationMinutes: 17, endTime: '2:15 PM', startMinutesFromMidnight: 838, endMinutesFromMidnight: 855 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '2:15 PM', durationMinutes: 12, endTime: '2:27 PM', startMinutesFromMidnight: 855, endMinutesFromMidnight: 867 },
          { birdId: 'peacock', star: 2, activity: 'Eat', startTime: '2:27 PM', durationMinutes: 29, endTime: '2:56 PM', startMinutesFromMidnight: 867, endMinutesFromMidnight: 896 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '2:56 PM', durationMinutes: 35, endTime: '3:14 PM', startMinutesFromMidnight: 896, endMinutesFromMidnight: 914 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '3:14 PM', durationMinutes: 46, endTime: '4:00 PM', startMinutesFromMidnight: 914, endMinutesFromMidnight: 960 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '1:58 PM', durationMinutes: 12, endTime: '2:10 PM', startMinutesFromMidnight: 838, endMinutesFromMidnight: 850 },
          { birdId: 'peacock', star: 3, activity: 'Eat', startTime: '2:10 PM', durationMinutes: 29, endTime: '2:39 PM', startMinutesFromMidnight: 850, endMinutesFromMidnight: 879 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '2:39 PM', durationMinutes: 35, endTime: '3:14 PM', startMinutesFromMidnight: 879, endMinutesFromMidnight: 914 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '3:14 PM', durationMinutes: 46, endTime: '4:00 PM', startMinutesFromMidnight: 914, endMinutesFromMidnight: 960 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '4:00 PM', durationMinutes: 17, endTime: '4:17 PM', startMinutesFromMidnight: 960, endMinutesFromMidnight: 977 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '1:58 PM', durationMinutes: 29, endTime: '2:27 PM', startMinutesFromMidnight: 838, endMinutesFromMidnight: 867 },
          { birdId: 'vulture', star: 6, activity: 'Walk', startTime: '2:27 PM', durationMinutes: 35, endTime: '3:02 PM', startMinutesFromMidnight: 867, endMinutesFromMidnight: 902 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '3:02 PM', durationMinutes: 46, endTime: '3:48 PM', startMinutesFromMidnight: 902, endMinutesFromMidnight: 948 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '3:48 PM', durationMinutes: 17, endTime: '4:05 PM', startMinutesFromMidnight: 948, endMinutesFromMidnight: 965 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '4:05 PM', durationMinutes: 12, endTime: '4:17 PM', startMinutesFromMidnight: 965, endMinutesFromMidnight: 977 },
        ],
      },
    },
  },

  // --- JAMA 5 (4:17 PM - 6:36 PM) --- 139 mins (Day)
  // Main Activities: Vulture (Rule), Owl Sleep, Crow Die, Cock (Eat), Peacock (Walk)
  {
    jamaNumber: 5,
    isDay: true,
    title: 'Valar Pirai Jama 5',
    startTime: '4:17 PM',
    endTime: '6:36 PM',
    startMinutesFromMidnight: 977,
    endMinutesFromMidnight: 1116,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '4:17 PM', durationMinutes: 46, endTime: '5:03 PM', startMinutesFromMidnight: 977, endMinutesFromMidnight: 1023 },
          { birdId: 'owl', star: 5, activity: 'Sleep', startTime: '5:03 PM', durationMinutes: 17, endTime: '5:20 PM', startMinutesFromMidnight: 1023, endMinutesFromMidnight: 1040 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '5:20 PM', durationMinutes: 12, endTime: '5:32 PM', startMinutesFromMidnight: 1040, endMinutesFromMidnight: 1052 },
          { birdId: 'cock', star: 7, activity: 'Eat', startTime: '5:32 PM', durationMinutes: 29, endTime: '6:01 PM', startMinutesFromMidnight: 1052, endMinutesFromMidnight: 1081 },
          { birdId: 'peacock', star: 7, activity: 'Walk', startTime: '6:01 PM', durationMinutes: 35, endTime: '6:36 PM', startMinutesFromMidnight: 1081, endMinutesFromMidnight: 1116 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '4:17 PM', durationMinutes: 17, endTime: '4:34 PM', startMinutesFromMidnight: 977, endMinutesFromMidnight: 1094 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '4:34 PM', durationMinutes: 12, endTime: '4:46 PM', startMinutesFromMidnight: 994, endMinutesFromMidnight: 1006 },
          { birdId: 'cock', star: 2, activity: 'Eat', startTime: '4:46 PM', durationMinutes: 29, endTime: '5:15 PM', startMinutesFromMidnight: 1006, endMinutesFromMidnight: 1035 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '5:15 PM', durationMinutes: 35, endTime: '5:50 PM', startMinutesFromMidnight: 1035, endMinutesFromMidnight: 1070 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '5:50 PM', durationMinutes: 46, endTime: '6:36 PM', startMinutesFromMidnight: 1070, endMinutesFromMidnight: 1116 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '4:17 PM', durationMinutes: 12, endTime: '4:29 PM', startMinutesFromMidnight: 977, endMinutesFromMidnight: 989 },
          { birdId: 'cock', star: 3, activity: 'Eat', startTime: '4:29 PM', durationMinutes: 29, endTime: '4:58 PM', startMinutesFromMidnight: 989, endMinutesFromMidnight: 1018 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '4:58 PM', durationMinutes: 35, endTime: '5:33 PM', startMinutesFromMidnight: 1018, endMinutesFromMidnight: 1053 },
          { birdId: 'vulture', star: 1, activity: 'Rule', startTime: '5:33 PM', durationMinutes: 46, endTime: '6:19 PM', startMinutesFromMidnight: 1053, endMinutesFromMidnight: 1099 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '6:19 PM', durationMinutes: 17, endTime: '6:36 PM', startMinutesFromMidnight: 1099, endMinutesFromMidnight: 1116 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '4:17 PM', durationMinutes: 29, endTime: '4:46 PM', startMinutesFromMidnight: 977, endMinutesFromMidnight: 1006 },
          { birdId: 'peacock', star: 6, activity: 'Walk', startTime: '4:46 PM', durationMinutes: 35, endTime: '5:21 PM', startMinutesFromMidnight: 1006, endMinutesFromMidnight: 1041 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '5:21 PM', durationMinutes: 46, endTime: '6:07 PM', startMinutesFromMidnight: 1041, endMinutesFromMidnight: 1087 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '6:07 PM', durationMinutes: 17, endTime: '6:24 PM', startMinutesFromMidnight: 1087, endMinutesFromMidnight: 1104 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '6:24 PM', durationMinutes: 12, endTime: '6:36 PM', startMinutesFromMidnight: 1104, endMinutesFromMidnight: 1116 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '4:17 PM', durationMinutes: 35, endTime: '4:52 PM', startMinutesFromMidnight: 977, endMinutesFromMidnight: 1012 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '4:52 PM', durationMinutes: 46, endTime: '5:38 PM', startMinutesFromMidnight: 1012, endMinutesFromMidnight: 1058 },
          { birdId: 'owl', star: 1, activity: 'Sleep', startTime: '5:38 PM', durationMinutes: 17, endTime: '5:55 PM', startMinutesFromMidnight: 1058, endMinutesFromMidnight: 1075 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '5:55 PM', durationMinutes: 12, endTime: '6:07 PM', startMinutesFromMidnight: 1075, endMinutesFromMidnight: 1087 },
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '6:07 PM', durationMinutes: 29, endTime: '6:36 PM', startMinutesFromMidnight: 1087, endMinutesFromMidnight: 1116 },
        ],
      },
    },
  },

  // --- JAMA 6 (6:38 PM - 9:07 PM) --- 149 mins (Night)
  // Main Activities: Vulture - Sleep, Owl - Walk, Crow (Die), Cock (Rule), Peacock (Eat)
  {
    jamaNumber: 6,
    isDay: false,
    title: 'Valar Pirai Jama 6',
    startTime: '6:38 PM',
    endTime: '9:07 PM',
    startMinutesFromMidnight: 1118,
    endMinutesFromMidnight: 1267,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '6:38 PM', durationMinutes: 25, endTime: '7:03 PM', startMinutesFromMidnight: 1118, endMinutesFromMidnight: 1143 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '7:03 PM', durationMinutes: 31, endTime: '7:34 PM', startMinutesFromMidnight: 1143, endMinutesFromMidnight: 1174 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '7:34 PM', durationMinutes: 25, endTime: '7:59 PM', startMinutesFromMidnight: 1174, endMinutesFromMidnight: 1199 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:59 PM', durationMinutes: 37, endTime: '8:36 PM', startMinutesFromMidnight: 1199, endMinutesFromMidnight: 1236 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '8:36 PM', durationMinutes: 31, endTime: '9:07 PM', startMinutesFromMidnight: 1236, endMinutesFromMidnight: 1267 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '6:38 PM', durationMinutes: 31, endTime: '7:09 PM', startMinutesFromMidnight: 1118, endMinutesFromMidnight: 1149 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '7:09 PM', durationMinutes: 25, endTime: '7:34 PM', startMinutesFromMidnight: 1149, endMinutesFromMidnight: 1174 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '7:34 PM', durationMinutes: 31, endTime: '8:05 PM', startMinutesFromMidnight: 1174, endMinutesFromMidnight: 1205 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '8:05 PM', durationMinutes: 25, endTime: '8:30 PM', startMinutesFromMidnight: 1205, endMinutesFromMidnight: 1230 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '8:30 PM', durationMinutes: 37, endTime: '9:07 PM', startMinutesFromMidnight: 1230, endMinutesFromMidnight: 1267 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '6:38 PM', durationMinutes: 37, endTime: '7:15 PM', startMinutesFromMidnight: 1118, endMinutesFromMidnight: 1155 },
          { birdId: 'owl', star: 2, activity: 'Walk', startTime: '7:15 PM', durationMinutes: 31, endTime: '7:46 PM', startMinutesFromMidnight: 1155, endMinutesFromMidnight: 1186 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '7:46 PM', durationMinutes: 25, endTime: '8:11 PM', startMinutesFromMidnight: 1186, endMinutesFromMidnight: 1211 },
          { birdId: 'peacock', star: 1, activity: 'Eat', startTime: '8:11 PM', durationMinutes: 31, endTime: '8:42 PM', startMinutesFromMidnight: 1211, endMinutesFromMidnight: 1242 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '8:42 PM', durationMinutes: 25, endTime: '9:07 PM', startMinutesFromMidnight: 1242, endMinutesFromMidnight: 1267 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '6:38 PM', durationMinutes: 25, endTime: '7:03 PM', startMinutesFromMidnight: 1118, endMinutesFromMidnight: 1143 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:03 PM', durationMinutes: 37, endTime: '7:40 PM', startMinutesFromMidnight: 1143, endMinutesFromMidnight: 1180 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '7:40 PM', durationMinutes: 31, endTime: '8:11 PM', startMinutesFromMidnight: 1180, endMinutesFromMidnight: 1211 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '8:11 PM', durationMinutes: 25, endTime: '8:36 PM', startMinutesFromMidnight: 1211, endMinutesFromMidnight: 1236 },
          { birdId: 'peacock', star: 9, activity: 'Eat', startTime: '8:36 PM', durationMinutes: 31, endTime: '9:07 PM', startMinutesFromMidnight: 1236, endMinutesFromMidnight: 1267 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '6:38 PM', durationMinutes: 31, endTime: '7:09 PM', startMinutesFromMidnight: 1118, endMinutesFromMidnight: 1149 },
          { birdId: 'cock', star: 9, activity: 'Rule', startTime: '7:09 PM', durationMinutes: 25, endTime: '7:34 PM', startMinutesFromMidnight: 1149, endMinutesFromMidnight: 1174 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:34 PM', durationMinutes: 37, endTime: '8:11 PM', startMinutesFromMidnight: 1174, endMinutesFromMidnight: 1211 },
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '8:11 PM', durationMinutes: 31, endTime: '8:42 PM', startMinutesFromMidnight: 1211, endMinutesFromMidnight: 1242 },
          { birdId: 'vulture', star: 4, activity: 'Sleep', startTime: '8:42 PM', durationMinutes: 25, endTime: '9:07 PM', startMinutesFromMidnight: 1242, endMinutesFromMidnight: 1267 },
        ],
      },
    },
  },

  // --- JAMA 7 (9:07 PM - 11:36 PM) --- 149 mins (Night)
  // Main Activities: Vulture - Eat, Owl - Sleep, Crow (Walk), Cock (Die), Peacock (Rule)
  {
    jamaNumber: 7,
    isDay: false,
    title: 'Valar Pirai Jama 7',
    startTime: '9:07 PM',
    endTime: '11:36 PM',
    startMinutesFromMidnight: 1267,
    endMinutesFromMidnight: 1416,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '9:07 PM', durationMinutes: 31, endTime: '9:38 PM', startMinutesFromMidnight: 1267, endMinutesFromMidnight: 1298 },
          { birdId: 'peacock', star: 9, activity: 'Rule', startTime: '9:38 PM', durationMinutes: 25, endTime: '10:03 PM', startMinutesFromMidnight: 1298, endMinutesFromMidnight: 1323 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '10:03 PM', durationMinutes: 37, endTime: '10:40 PM', startMinutesFromMidnight: 1323, endMinutesFromMidnight: 1360 },
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '10:40 PM', durationMinutes: 31, endTime: '11:11 PM', startMinutesFromMidnight: 1360, endMinutesFromMidnight: 1391 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '11:11 PM', durationMinutes: 25, endTime: '11:36 PM', startMinutesFromMidnight: 1391, endMinutesFromMidnight: 1416 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '9:07 PM', durationMinutes: 25, endTime: '9:32 PM', startMinutesFromMidnight: 1267, endMinutesFromMidnight: 1292 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '9:32 PM', durationMinutes: 31, endTime: '10:03 PM', startMinutesFromMidnight: 1292, endMinutesFromMidnight: 1323 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '10:03 PM', durationMinutes: 25, endTime: '10:28 PM', startMinutesFromMidnight: 1323, endMinutesFromMidnight: 1348 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '10:28 PM', durationMinutes: 37, endTime: '11:05 PM', startMinutesFromMidnight: 1348, endMinutesFromMidnight: 1385 },
          { birdId: 'crow', star: 3, activity: 'Walk', startTime: '11:05 PM', durationMinutes: 31, endTime: '11:36 PM', startMinutesFromMidnight: 1385, endMinutesFromMidnight: 1416 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '9:07 PM', durationMinutes: 31, endTime: '9:38 PM', startMinutesFromMidnight: 1267, endMinutesFromMidnight: 1298 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '9:38 PM', durationMinutes: 25, endTime: '10:03 PM', startMinutesFromMidnight: 1298, endMinutesFromMidnight: 1323 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '10:03 PM', durationMinutes: 31, endTime: '10:34 PM', startMinutesFromMidnight: 1323, endMinutesFromMidnight: 1354 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '10:34 PM', durationMinutes: 25, endTime: '10:59 PM', startMinutesFromMidnight: 1354, endMinutesFromMidnight: 1379 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '10:59 PM', durationMinutes: 37, endTime: '11:36 PM', startMinutesFromMidnight: 1379, endMinutesFromMidnight: 1416 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '9:07 PM', durationMinutes: 37, endTime: '9:44 PM', startMinutesFromMidnight: 1267, endMinutesFromMidnight: 1304 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '9:44 PM', durationMinutes: 31, endTime: '10:15 PM', startMinutesFromMidnight: 1304, endMinutesFromMidnight: 1335 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '10:15 PM', durationMinutes: 25, endTime: '10:40 PM', startMinutesFromMidnight: 1335, endMinutesFromMidnight: 1360 },
          { birdId: 'vulture', star: 1, activity: 'Eat', startTime: '10:40 PM', durationMinutes: 31, endTime: '11:11 PM', startMinutesFromMidnight: 1360, endMinutesFromMidnight: 1391 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '11:11 PM', durationMinutes: 25, endTime: '11:36 PM', startMinutesFromMidnight: 1391, endMinutesFromMidnight: 1416 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '9:07 PM', durationMinutes: 25, endTime: '9:32 PM', startMinutesFromMidnight: 1267, endMinutesFromMidnight: 1292 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '9:32 PM', durationMinutes: 37, endTime: '10:09 PM', startMinutesFromMidnight: 1292, endMinutesFromMidnight: 1329 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '10:09 PM', durationMinutes: 31, endTime: '10:40 PM', startMinutesFromMidnight: 1329, endMinutesFromMidnight: 1360 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '10:40 PM', durationMinutes: 25, endTime: '11:05 PM', startMinutesFromMidnight: 1360, endMinutesFromMidnight: 1385 },
          { birdId: 'vulture', star: 9, activity: 'Eat', startTime: '11:05 PM', durationMinutes: 31, endTime: '11:36 PM', startMinutesFromMidnight: 1385, endMinutesFromMidnight: 1416 },
        ],
      },
    },
  },

  // --- JAMA 8 (11:36 PM - 2:05 AM) --- 149 mins (Night)
  // Main Activities: Vulture - Rule, Owl - Eat, Crow Sleep, Cock (Walk), Peacock (Die)
  {
    jamaNumber: 8,
    isDay: false,
    title: 'Valar Pirai Jama 8',
    startTime: '11:36 PM',
    endTime: '2:05 AM',
    startMinutesFromMidnight: 1416,
    endMinutesFromMidnight: 1565,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '11:36 PM', durationMinutes: 25, endTime: '12:01 AM', startMinutesFromMidnight: 1416, endMinutesFromMidnight: 1441 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '12:01 AM', durationMinutes: 37, endTime: '12:38 AM', startMinutesFromMidnight: 1441, endMinutesFromMidnight: 1478 },
          { birdId: 'cock', star: 5, activity: 'Walk', startTime: '12:38 AM', durationMinutes: 31, endTime: '1:09 AM', startMinutesFromMidnight: 1478, endMinutesFromMidnight: 1509 },
          { birdId: 'crow', star: 3, activity: 'Sleep', startTime: '1:09 AM', durationMinutes: 25, endTime: '1:34 AM', startMinutesFromMidnight: 1509, endMinutesFromMidnight: 1534 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '1:34 AM', durationMinutes: 31, endTime: '2:05 AM', startMinutesFromMidnight: 1534, endMinutesFromMidnight: 1565 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '11:36 PM', durationMinutes: 31, endTime: '12:07 AM', startMinutesFromMidnight: 1416, endMinutesFromMidnight: 1447 },
          { birdId: 'vulture', star: 9, activity: 'Rule', startTime: '12:07 AM', durationMinutes: 25, endTime: '12:32 AM', startMinutesFromMidnight: 1447, endMinutesFromMidnight: 1472 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '12:32 AM', durationMinutes: 37, endTime: '1:09 AM', startMinutesFromMidnight: 1472, endMinutesFromMidnight: 1509 },
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '1:09 AM', durationMinutes: 31, endTime: '1:40 AM', startMinutesFromMidnight: 1509, endMinutesFromMidnight: 1540 },
          { birdId: 'crow', star: 4, activity: 'Sleep', startTime: '1:40 AM', durationMinutes: 25, endTime: '2:05 AM', startMinutesFromMidnight: 1540, endMinutesFromMidnight: 1565 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '11:36 PM', durationMinutes: 25, endTime: '12:01 AM', startMinutesFromMidnight: 1416, endMinutesFromMidnight: 1441 },
          { birdId: 'owl', star: 4, activity: 'Eat', startTime: '12:01 AM', durationMinutes: 31, endTime: '12:32 AM', startMinutesFromMidnight: 1441, endMinutesFromMidnight: 1472 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '12:32 AM', durationMinutes: 25, endTime: '12:57 AM', startMinutesFromMidnight: 1472, endMinutesFromMidnight: 1497 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '12:57 AM', durationMinutes: 37, endTime: '1:34 AM', startMinutesFromMidnight: 1497, endMinutesFromMidnight: 1534 },
          { birdId: 'cock', star: 3, activity: 'Walk', startTime: '1:34 AM', durationMinutes: 31, endTime: '2:05 AM', startMinutesFromMidnight: 1534, endMinutesFromMidnight: 1565 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '11:36 PM', durationMinutes: 31, endTime: '12:07 AM', startMinutesFromMidnight: 1416, endMinutesFromMidnight: 1447 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '12:07 AM', durationMinutes: 25, endTime: '12:32 AM', startMinutesFromMidnight: 1447, endMinutesFromMidnight: 1472 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '12:32 AM', durationMinutes: 31, endTime: '1:03 AM', startMinutesFromMidnight: 1472, endMinutesFromMidnight: 1503 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '1:03 AM', durationMinutes: 25, endTime: '1:28 AM', startMinutesFromMidnight: 1503, endMinutesFromMidnight: 1528 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '1:28 AM', durationMinutes: 37, endTime: '2:05 AM', startMinutesFromMidnight: 1528, endMinutesFromMidnight: 1565 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '11:36 PM', durationMinutes: 37, endTime: '12:13 AM', startMinutesFromMidnight: 1416, endMinutesFromMidnight: 1453 },
          { birdId: 'cock', star: 2, activity: 'Walk', startTime: '12:13 AM', durationMinutes: 31, endTime: '12:44 AM', startMinutesFromMidnight: 1453, endMinutesFromMidnight: 1484 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '12:44 AM', durationMinutes: 25, endTime: '1:09 AM', startMinutesFromMidnight: 1484, endMinutesFromMidnight: 1509 },
          { birdId: 'owl', star: 1, activity: 'Eat', startTime: '1:09 AM', durationMinutes: 31, endTime: '1:40 AM', startMinutesFromMidnight: 1509, endMinutesFromMidnight: 1540 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '1:40 AM', durationMinutes: 25, endTime: '2:05 AM', startMinutesFromMidnight: 1540, endMinutesFromMidnight: 1565 },
        ],
      },
    },
  },

  // --- JAMA 9 (2:05 AM - 4:34 AM) --- 149 mins (Night)
  // Main Activities: Vulture - Die, Owl - Rule, Crow Eat, Cock (Sleep), Peacock (Walk)
  {
    jamaNumber: 9,
    isDay: false,
    title: 'Valar Pirai Jama 9',
    startTime: '2:05 AM',
    endTime: '4:34 AM',
    startMinutesFromMidnight: 1565,
    endMinutesFromMidnight: 1714,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '2:05 AM', durationMinutes: 37, endTime: '2:42 AM', startMinutesFromMidnight: 1565, endMinutesFromMidnight: 1602 },
          { birdId: 'peacock', star: 2, activity: 'Walk', startTime: '2:42 AM', durationMinutes: 31, endTime: '3:13 AM', startMinutesFromMidnight: 1602, endMinutesFromMidnight: 1633 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '3:13 AM', durationMinutes: 25, endTime: '3:38 AM', startMinutesFromMidnight: 1633, endMinutesFromMidnight: 1658 },
          { birdId: 'crow', star: 1, activity: 'Eat', startTime: '3:38 AM', durationMinutes: 31, endTime: '4:09 AM', startMinutesFromMidnight: 1658, endMinutesFromMidnight: 1689 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '4:09 AM', durationMinutes: 25, endTime: '4:34 AM', startMinutesFromMidnight: 1689, endMinutesFromMidnight: 1714 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '2:05 AM', durationMinutes: 25, endTime: '2:30 AM', startMinutesFromMidnight: 1565, endMinutesFromMidnight: 1590 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '2:30 AM', durationMinutes: 37, endTime: '3:07 AM', startMinutesFromMidnight: 1590, endMinutesFromMidnight: 1627 },
          { birdId: 'peacock', star: 5, activity: 'Walk', startTime: '3:07 AM', durationMinutes: 31, endTime: '3:38 AM', startMinutesFromMidnight: 1627, endMinutesFromMidnight: 1658 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '3:38 AM', durationMinutes: 25, endTime: '4:03 AM', startMinutesFromMidnight: 1658, endMinutesFromMidnight: 1683 },
          { birdId: 'crow', star: 9, activity: 'Eat', startTime: '4:03 AM', durationMinutes: 31, endTime: '4:34 AM', startMinutesFromMidnight: 1683, endMinutesFromMidnight: 1714 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '2:05 AM', durationMinutes: 31, endTime: '2:36 AM', startMinutesFromMidnight: 1565, endMinutesFromMidnight: 1596 },
          { birdId: 'owl', star: 9, activity: 'Rule', startTime: '2:36 AM', durationMinutes: 25, endTime: '3:01 AM', startMinutesFromMidnight: 1596, endMinutesFromMidnight: 1621 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '3:01 AM', durationMinutes: 37, endTime: '3:38 AM', startMinutesFromMidnight: 1621, endMinutesFromMidnight: 1658 },
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '3:38 AM', durationMinutes: 31, endTime: '4:09 AM', startMinutesFromMidnight: 1658, endMinutesFromMidnight: 1689 },
          { birdId: 'cock', star: 4, activity: 'Sleep', startTime: '4:09 AM', durationMinutes: 25, endTime: '4:34 AM', startMinutesFromMidnight: 1689, endMinutesFromMidnight: 1714 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '2:05 AM', durationMinutes: 25, endTime: '2:30 AM', startMinutesFromMidnight: 1565, endMinutesFromMidnight: 1590 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '2:30 AM', durationMinutes: 31, endTime: '3:01 AM', startMinutesFromMidnight: 1590, endMinutesFromMidnight: 1621 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '3:01 AM', durationMinutes: 25, endTime: '3:26 AM', startMinutesFromMidnight: 1621, endMinutesFromMidnight: 1646 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '3:26 AM', durationMinutes: 37, endTime: '4:03 AM', startMinutesFromMidnight: 1646, endMinutesFromMidnight: 1683 },
          { birdId: 'peacock', star: 3, activity: 'Walk', startTime: '4:03 AM', durationMinutes: 31, endTime: '4:34 AM', startMinutesFromMidnight: 1683, endMinutesFromMidnight: 1714 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Rule', startTime: '2:05 AM', durationMinutes: 25, endTime: '2:30 AM', startMinutesFromMidnight: 1565, endMinutesFromMidnight: 1590 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '2:30 AM', durationMinutes: 37, endTime: '3:07 AM', startMinutesFromMidnight: 1590, endMinutesFromMidnight: 1627 },
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '3:07 AM', durationMinutes: 31, endTime: '3:38 AM', startMinutesFromMidnight: 1627, endMinutesFromMidnight: 1658 },
          { birdId: 'owl', star: 5, activity: 'Sleep', startTime: '3:38 AM', durationMinutes: 25, endTime: '4:03 AM', startMinutesFromMidnight: 1658, endMinutesFromMidnight: 1683 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '4:03 AM', durationMinutes: 31, endTime: '4:34 AM', startMinutesFromMidnight: 1683, endMinutesFromMidnight: 1714 },
        ],
      },
    },
  },

  // --- JAMA 10 (4:34 AM - 7:03 AM) --- 149 mins (Night)
  // Main Activities: Vulture - Walk, Owl - Die, Crow Rule, Cock (Eat), Peacock (Sleep)
  {
    jamaNumber: 10,
    isDay: false,
    title: 'Valar Pirai Jama 10',
    startTime: '4:34 AM',
    endTime: '7:03 AM',
    startMinutesFromMidnight: 1714,
    endMinutesFromMidnight: 1863,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '4:34 AM', durationMinutes: 31, endTime: '5:05 AM', startMinutesFromMidnight: 1714, endMinutesFromMidnight: 1745 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '5:05 AM', durationMinutes: 25, endTime: '5:30 AM', startMinutesFromMidnight: 1745, endMinutesFromMidnight: 1770 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '5:30 AM', durationMinutes: 31, endTime: '6:01 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1801 },
          { birdId: 'crow', star: 5, activity: 'Rule', startTime: '6:01 AM', durationMinutes: 25, endTime: '6:26 AM', startMinutesFromMidnight: 1801, endMinutesFromMidnight: 1826 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '6:26 AM', durationMinutes: 37, endTime: '7:03 AM', startMinutesFromMidnight: 1826, endMinutesFromMidnight: 1863 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '4:34 AM', durationMinutes: 37, endTime: '5:11 AM', startMinutesFromMidnight: 1714, endMinutesFromMidnight: 1751 },
          { birdId: 'vulture', star: 2, activity: 'Walk', startTime: '5:11 AM', durationMinutes: 31, endTime: '5:42 AM', startMinutesFromMidnight: 1751, endMinutesFromMidnight: 1782 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '5:42 AM', durationMinutes: 25, endTime: '6:07 AM', startMinutesFromMidnight: 1782, endMinutesFromMidnight: 1807 },
          { birdId: 'cock', star: 1, activity: 'Eat', startTime: '6:07 AM', durationMinutes: 31, endTime: '6:38 AM', startMinutesFromMidnight: 1807, endMinutesFromMidnight: 1838 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '6:38 AM', durationMinutes: 25, endTime: '7:03 AM', startMinutesFromMidnight: 1838, endMinutesFromMidnight: 1863 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '4:34 AM', durationMinutes: 25, endTime: '4:59 AM', startMinutesFromMidnight: 1714, endMinutesFromMidnight: 1739 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '4:59 AM', durationMinutes: 37, endTime: '5:36 AM', startMinutesFromMidnight: 1739, endMinutesFromMidnight: 1776 },
          { birdId: 'vulture', star: 5, activity: 'Walk', startTime: '5:36 AM', durationMinutes: 31, endTime: '6:07 AM', startMinutesFromMidnight: 1776, endMinutesFromMidnight: 1807 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '6:07 AM', durationMinutes: 25, endTime: '6:32 AM', startMinutesFromMidnight: 1807, endMinutesFromMidnight: 1832 },
          { birdId: 'cock', star: 9, activity: 'Eat', startTime: '6:32 AM', durationMinutes: 31, endTime: '7:03 AM', startMinutesFromMidnight: 1832, endMinutesFromMidnight: 1863 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '4:34 AM', durationMinutes: 31, endTime: '5:05 AM', startMinutesFromMidnight: 1714, endMinutesFromMidnight: 1745 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '5:05 AM', durationMinutes: 25, endTime: '5:30 AM', startMinutesFromMidnight: 1745, endMinutesFromMidnight: 1770 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '5:30 AM', durationMinutes: 37, endTime: '6:07 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1807 },
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '6:07 AM', durationMinutes: 31, endTime: '6:38 AM', startMinutesFromMidnight: 1807, endMinutesFromMidnight: 1838 },
          { birdId: 'peacock', star: 4, activity: 'Sleep', startTime: '6:38 AM', durationMinutes: 25, endTime: '7:03 AM', startMinutesFromMidnight: 1838, endMinutesFromMidnight: 1863 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '4:34 AM', durationMinutes: 25, endTime: '4:59 AM', startMinutesFromMidnight: 1714, endMinutesFromMidnight: 1739 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '4:59 AM', durationMinutes: 31, endTime: '5:30 AM', startMinutesFromMidnight: 1739, endMinutesFromMidnight: 1770 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '5:30 AM', durationMinutes: 25, endTime: '5:55 AM', startMinutesFromMidnight: 1770, endMinutesFromMidnight: 1795 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '5:55 AM', durationMinutes: 37, endTime: '6:32 AM', startMinutesFromMidnight: 1795, endMinutesFromMidnight: 1832 },
          { birdId: 'vulture', star: 3, activity: 'Walk', startTime: '6:32 AM', durationMinutes: 31, endTime: '7:03 AM', startMinutesFromMidnight: 1832, endMinutesFromMidnight: 1863 },
        ],
      },
    },
  },
];
