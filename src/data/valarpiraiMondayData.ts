import { Jama } from '../types';

export const VALARPIRAI_MONDAY_CONFIG = {
  dayTotalMinutes: 780,
  nightTotalMinutes: 660,
  sunriseToday: '06:00',
  sunsetToday: '19:00',
  nextSunriseTomorrow: '06:00',
  dayRuleMinutes: 52,
  dayEatMinutes: 33,
  dayWalkMinutes: 39,
  daySleepMinutes: 20,
  dayDieMinutes: 13,
  nightRuleMinutes: 22,
  nightEatMinutes: 28,
  nightWalkMinutes: 28,
  nightSleepMinutes: 22,
  nightDieMinutes: 33,
  dayRulingBird: 'Owl',
  dayDyingBird: 'Crow',
  nightRulingBird: 'Cock',
  nightDyingBird: 'Crow',
};

// Complete 10 Jamas for Valarpirai Monday encoded faithfully from the uploaded spreadsheet
export const VALARPIRAI_MONDAY_JAMAS: Jama[] = [
  // --- JAMA 1 (6:00 AM - 8:37 AM) ---
  {
    jamaNumber: 1,
    isDay: true,
    title: 'Valar Pirai Jama 1',
    startTime: '6:00 AM',
    endTime: '8:37 AM',
    startMinutesFromMidnight: 360,
    endMinutesFromMidnight: 517,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '6:00 AM', durationMinutes: 13, endTime: '6:13 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 373 },
          { birdId: 'owl', star: 3, activity: 'Eat', startTime: '6:13 AM', durationMinutes: 33, endTime: '6:46 AM', startMinutesFromMidnight: 373, endMinutesFromMidnight: 406 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '6:46 AM', durationMinutes: 39, endTime: '7:25 AM', startMinutesFromMidnight: 406, endMinutesFromMidnight: 445 },
          { birdId: 'cock', star: 1, activity: 'Rule', startTime: '7:25 AM', durationMinutes: 52, endTime: '8:17 AM', startMinutesFromMidnight: 445, endMinutesFromMidnight: 497 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '8:17 AM', durationMinutes: 20, endTime: '8:37 AM', startMinutesFromMidnight: 497, endMinutesFromMidnight: 517 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '6:00 AM', durationMinutes: 33, endTime: '6:33 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 393 },
          { birdId: 'crow', star: 6, activity: 'Walk', startTime: '6:33 AM', durationMinutes: 39, endTime: '7:12 AM', startMinutesFromMidnight: 393, endMinutesFromMidnight: 432 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '7:12 AM', durationMinutes: 52, endTime: '8:04 AM', startMinutesFromMidnight: 432, endMinutesFromMidnight: 484 },
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '8:04 AM', durationMinutes: 20, endTime: '8:24 AM', startMinutesFromMidnight: 484, endMinutesFromMidnight: 504 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '8:24 AM', durationMinutes: 13, endTime: '8:37 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 517 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '6:00 AM', durationMinutes: 39, endTime: '6:39 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 399 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '6:39 AM', durationMinutes: 52, endTime: '7:31 AM', startMinutesFromMidnight: 399, endMinutesFromMidnight: 451 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '7:31 AM', durationMinutes: 20, endTime: '7:51 AM', startMinutesFromMidnight: 451, endMinutesFromMidnight: 471 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '7:51 AM', durationMinutes: 13, endTime: '8:04 AM', startMinutesFromMidnight: 471, endMinutesFromMidnight: 484 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '8:04 AM', durationMinutes: 33, endTime: '8:37 AM', startMinutesFromMidnight: 484, endMinutesFromMidnight: 517 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '6:00 AM', durationMinutes: 52, endTime: '6:52 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 412 },
          { birdId: 'peacock', star: 5, activity: 'Sleep', startTime: '6:52 AM', durationMinutes: 20, endTime: '7:12 AM', startMinutesFromMidnight: 412, endMinutesFromMidnight: 432 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '7:12 AM', durationMinutes: 13, endTime: '7:25 AM', startMinutesFromMidnight: 432, endMinutesFromMidnight: 445 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '7:25 AM', durationMinutes: 33, endTime: '7:58 AM', startMinutesFromMidnight: 445, endMinutesFromMidnight: 478 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '7:58 AM', durationMinutes: 39, endTime: '8:37 AM', startMinutesFromMidnight: 478, endMinutesFromMidnight: 517 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '6:00 AM', durationMinutes: 20, endTime: '6:20 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 380 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '6:20 AM', durationMinutes: 13, endTime: '6:33 AM', startMinutesFromMidnight: 380, endMinutesFromMidnight: 393 },
          { birdId: 'owl', star: 2, activity: 'Eat', startTime: '6:33 AM', durationMinutes: 33, endTime: '7:06 AM', startMinutesFromMidnight: 393, endMinutesFromMidnight: 426 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '7:06 AM', durationMinutes: 39, endTime: '7:45 AM', startMinutesFromMidnight: 426, endMinutesFromMidnight: 465 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '7:45 AM', durationMinutes: 52, endTime: '8:37 AM', startMinutesFromMidnight: 465, endMinutesFromMidnight: 517 },
        ],
      },
    },
  },

  // --- JAMA 2 (8:37 AM - 11:14 AM) ---
  {
    jamaNumber: 2,
    isDay: true,
    title: 'Valar Pirai Jama 2',
    startTime: '8:37 AM',
    endTime: '11:14 AM',
    startMinutesFromMidnight: 517,
    endMinutesFromMidnight: 674,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '8:37 AM', durationMinutes: 33, endTime: '9:10 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 550 },
          { birdId: 'owl', star: 6, activity: 'Walk', startTime: '9:10 AM', durationMinutes: 39, endTime: '9:49 AM', startMinutesFromMidnight: 550, endMinutesFromMidnight: 589 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '9:49 AM', durationMinutes: 52, endTime: '10:41 AM', startMinutesFromMidnight: 589, endMinutesFromMidnight: 641 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '10:41 AM', durationMinutes: 20, endTime: '11:01 AM', startMinutesFromMidnight: 641, endMinutesFromMidnight: 661 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '11:01 AM', durationMinutes: 13, endTime: '11:14 AM', startMinutesFromMidnight: 661, endMinutesFromMidnight: 674 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '8:37 AM', durationMinutes: 39, endTime: '9:16 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 556 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '9:16 AM', durationMinutes: 52, endTime: '10:08 AM', startMinutesFromMidnight: 556, endMinutesFromMidnight: 608 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '10:08 AM', durationMinutes: 20, endTime: '10:28 AM', startMinutesFromMidnight: 608, endMinutesFromMidnight: 628 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '10:28 AM', durationMinutes: 13, endTime: '10:41 AM', startMinutesFromMidnight: 628, endMinutesFromMidnight: 641 },
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '10:41 AM', durationMinutes: 33, endTime: '11:14 AM', startMinutesFromMidnight: 641, endMinutesFromMidnight: 674 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '8:37 AM', durationMinutes: 52, endTime: '9:29 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 569 },
          { birdId: 'cock', star: 5, activity: 'Sleep', startTime: '9:29 AM', durationMinutes: 20, endTime: '9:49 AM', startMinutesFromMidnight: 569, endMinutesFromMidnight: 589 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '9:49 AM', durationMinutes: 13, endTime: '10:02 AM', startMinutesFromMidnight: 589, endMinutesFromMidnight: 602 },
          { birdId: 'vulture', star: 7, activity: 'Eat', startTime: '10:02 AM', durationMinutes: 33, endTime: '10:35 AM', startMinutesFromMidnight: 602, endMinutesFromMidnight: 635 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '10:35 AM', durationMinutes: 39, endTime: '11:14 AM', startMinutesFromMidnight: 635, endMinutesFromMidnight: 674 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '8:37 AM', durationMinutes: 20, endTime: '8:57 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 537 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '8:57 AM', durationMinutes: 13, endTime: '9:10 AM', startMinutesFromMidnight: 537, endMinutesFromMidnight: 550 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '9:10 AM', durationMinutes: 33, endTime: '9:43 AM', startMinutesFromMidnight: 550, endMinutesFromMidnight: 583 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '9:43 AM', durationMinutes: 39, endTime: '10:22 AM', startMinutesFromMidnight: 583, endMinutesFromMidnight: 622 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '10:22 AM', durationMinutes: 52, endTime: '11:14 AM', startMinutesFromMidnight: 622, endMinutesFromMidnight: 674 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '8:37 AM', durationMinutes: 13, endTime: '8:50 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 530 },
          { birdId: 'vulture', star: 3, activity: 'Eat', startTime: '8:50 AM', durationMinutes: 33, endTime: '9:23 AM', startMinutesFromMidnight: 530, endMinutesFromMidnight: 563 },
          { birdId: 'owl', star: 1, activity: 'Walk', startTime: '9:23 AM', durationMinutes: 39, endTime: '10:02 AM', startMinutesFromMidnight: 563, endMinutesFromMidnight: 602 },
          { birdId: 'crow', star: 1, activity: 'Rule', startTime: '10:02 AM', durationMinutes: 52, endTime: '10:54 AM', startMinutesFromMidnight: 602, endMinutesFromMidnight: 654 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '10:54 AM', durationMinutes: 20, endTime: '11:14 AM', startMinutesFromMidnight: 654, endMinutesFromMidnight: 674 },
        ],
      },
    },
  },

  // --- JAMA 3 (11:14 AM - 1:51 PM) ---
  {
    jamaNumber: 3,
    isDay: true,
    title: 'Valar Pirai Jama 3',
    startTime: '11:14 AM',
    endTime: '1:51 PM',
    startMinutesFromMidnight: 674,
    endMinutesFromMidnight: 831,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '11:14 AM', durationMinutes: 39, endTime: '11:53 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 713 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '11:53 AM', durationMinutes: 52, endTime: '12:45 PM', startMinutesFromMidnight: 713, endMinutesFromMidnight: 765 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '12:45 PM', durationMinutes: 20, endTime: '1:05 PM', startMinutesFromMidnight: 765, endMinutesFromMidnight: 785 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '1:05 PM', durationMinutes: 13, endTime: '1:18 PM', startMinutesFromMidnight: 785, endMinutesFromMidnight: 798 },
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '1:18 PM', durationMinutes: 33, endTime: '1:51 PM', startMinutesFromMidnight: 798, endMinutesFromMidnight: 831 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '11:14 AM', durationMinutes: 52, endTime: '12:06 PM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 726 },
          { birdId: 'crow', star: 5, activity: 'Sleep', startTime: '12:06 PM', durationMinutes: 20, endTime: '12:26 PM', startMinutesFromMidnight: 726, endMinutesFromMidnight: 746 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '12:26 PM', durationMinutes: 13, endTime: '12:39 PM', startMinutesFromMidnight: 746, endMinutesFromMidnight: 759 },
          { birdId: 'peacock', star: 7, activity: 'Eat', startTime: '12:39 PM', durationMinutes: 33, endTime: '1:12 PM', startMinutesFromMidnight: 759, endMinutesFromMidnight: 792 },
          { birdId: 'vulture', star: 7, activity: 'Walk', startTime: '1:12 PM', durationMinutes: 39, endTime: '1:51 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 831 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '11:14 AM', durationMinutes: 20, endTime: '11:34 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 694 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '11:34 AM', durationMinutes: 13, endTime: '11:47 AM', startMinutesFromMidnight: 694, endMinutesFromMidnight: 707 },
          { birdId: 'peacock', star: 2, activity: 'Eat', startTime: '11:47 AM', durationMinutes: 33, endTime: '12:20 PM', startMinutesFromMidnight: 707, endMinutesFromMidnight: 740 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '12:20 PM', durationMinutes: 39, endTime: '12:59 PM', startMinutesFromMidnight: 740, endMinutesFromMidnight: 779 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '12:59 PM', durationMinutes: 52, endTime: '1:51 PM', startMinutesFromMidnight: 779, endMinutesFromMidnight: 831 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '11:14 AM', durationMinutes: 13, endTime: '11:27 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 687 },
          { birdId: 'peacock', star: 3, activity: 'Eat', startTime: '11:27 AM', durationMinutes: 33, endTime: '12:00 PM', startMinutesFromMidnight: 687, endMinutesFromMidnight: 720 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '12:00 PM', durationMinutes: 39, endTime: '12:39 PM', startMinutesFromMidnight: 720, endMinutesFromMidnight: 759 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '12:39 PM', durationMinutes: 52, endTime: '1:31 PM', startMinutesFromMidnight: 759, endMinutesFromMidnight: 811 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '1:31 PM', durationMinutes: 20, endTime: '1:51 PM', startMinutesFromMidnight: 811, endMinutesFromMidnight: 831 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '11:14 AM', durationMinutes: 33, endTime: '11:47 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 707 },
          { birdId: 'vulture', star: 6, activity: 'Walk', startTime: '11:47 AM', durationMinutes: 39, endTime: '12:26 PM', startMinutesFromMidnight: 707, endMinutesFromMidnight: 746 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '12:26 PM', durationMinutes: 52, endTime: '1:18 PM', startMinutesFromMidnight: 746, endMinutesFromMidnight: 798 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '1:18 PM', durationMinutes: 20, endTime: '1:38 PM', startMinutesFromMidnight: 798, endMinutesFromMidnight: 818 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '1:38 PM', durationMinutes: 13, endTime: '1:51 PM', startMinutesFromMidnight: 818, endMinutesFromMidnight: 831 },
        ],
      },
    },
  },

  // --- JAMA 4 (1:51 PM - 4:28 PM) ---
  {
    jamaNumber: 4,
    isDay: true,
    title: 'Valar Pirai Jama 4',
    startTime: '1:51 PM',
    endTime: '4:28 PM',
    startMinutesFromMidnight: 831,
    endMinutesFromMidnight: 988,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '1:51 PM', durationMinutes: 52, endTime: '2:43 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 883 },
          { birdId: 'owl', star: 5, activity: 'Sleep', startTime: '2:43 PM', durationMinutes: 20, endTime: '3:03 PM', startMinutesFromMidnight: 883, endMinutesFromMidnight: 903 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '3:03 PM', durationMinutes: 13, endTime: '3:16 PM', startMinutesFromMidnight: 903, endMinutesFromMidnight: 916 },
          { birdId: 'cock', star: 7, activity: 'Eat', startTime: '3:16 PM', durationMinutes: 33, endTime: '3:49 PM', startMinutesFromMidnight: 916, endMinutesFromMidnight: 949 },
          { birdId: 'peacock', star: 7, activity: 'Walk', startTime: '3:49 PM', durationMinutes: 39, endTime: '4:28 PM', startMinutesFromMidnight: 949, endMinutesFromMidnight: 988 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '1:51 PM', durationMinutes: 20, endTime: '2:11 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 851 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '2:11 PM', durationMinutes: 13, endTime: '2:24 PM', startMinutesFromMidnight: 851, endMinutesFromMidnight: 864 },
          { birdId: 'cock', star: 2, activity: 'Eat', startTime: '2:24 PM', durationMinutes: 33, endTime: '2:57 PM', startMinutesFromMidnight: 864, endMinutesFromMidnight: 897 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '2:57 PM', durationMinutes: 39, endTime: '3:36 PM', startMinutesFromMidnight: 897, endMinutesFromMidnight: 936 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '3:36 PM', durationMinutes: 52, endTime: '4:28 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 988 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '1:51 PM', durationMinutes: 13, endTime: '2:04 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 844 },
          { birdId: 'cock', star: 3, activity: 'Eat', startTime: '2:04 PM', durationMinutes: 33, endTime: '2:37 PM', startMinutesFromMidnight: 844, endMinutesFromMidnight: 877 },
          { birdId: 'peacock', star: 1, activity: 'Walk', startTime: '2:37 PM', durationMinutes: 39, endTime: '3:16 PM', startMinutesFromMidnight: 877, endMinutesFromMidnight: 916 },
          { birdId: 'vulture', star: 1, activity: 'Rule', startTime: '3:16 PM', durationMinutes: 52, endTime: '4:08 PM', startMinutesFromMidnight: 916, endMinutesFromMidnight: 968 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '4:08 PM', durationMinutes: 20, endTime: '4:28 PM', startMinutesFromMidnight: 968, endMinutesFromMidnight: 988 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '1:51 PM', durationMinutes: 33, endTime: '2:24 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 864 },
          { birdId: 'peacock', star: 6, activity: 'Walk', startTime: '2:24 PM', durationMinutes: 39, endTime: '3:03 PM', startMinutesFromMidnight: 864, endMinutesFromMidnight: 903 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '3:03 PM', durationMinutes: 52, endTime: '3:55 PM', startMinutesFromMidnight: 903, endMinutesFromMidnight: 955 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '3:55 PM', durationMinutes: 20, endTime: '4:15 PM', startMinutesFromMidnight: 955, endMinutesFromMidnight: 975 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '4:15 PM', durationMinutes: 13, endTime: '4:28 PM', startMinutesFromMidnight: 975, endMinutesFromMidnight: 988 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '1:51 PM', durationMinutes: 39, endTime: '2:30 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 870 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '2:30 PM', durationMinutes: 52, endTime: '3:22 PM', startMinutesFromMidnight: 870, endMinutesFromMidnight: 922 },
          { birdId: 'owl', star: 1, activity: 'Sleep', startTime: '3:22 PM', durationMinutes: 20, endTime: '3:42 PM', startMinutesFromMidnight: 922, endMinutesFromMidnight: 942 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '3:42 PM', durationMinutes: 13, endTime: '3:55 PM', startMinutesFromMidnight: 942, endMinutesFromMidnight: 955 },
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '3:55 PM', durationMinutes: 33, endTime: '4:28 PM', startMinutesFromMidnight: 955, endMinutesFromMidnight: 988 },
        ],
      },
    },
  },

  // --- JAMA 5 (4:28 PM - 7:05 PM) ---
  {
    jamaNumber: 5,
    isDay: true,
    title: 'Valar Pirai Jama 5',
    startTime: '4:28 PM',
    endTime: '7:05 PM',
    startMinutesFromMidnight: 988,
    endMinutesFromMidnight: 1145,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '4:28 PM', durationMinutes: 20, endTime: '4:48 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1008 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '4:48 PM', durationMinutes: 13, endTime: '5:01 PM', startMinutesFromMidnight: 1008, endMinutesFromMidnight: 1021 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '5:01 PM', durationMinutes: 33, endTime: '5:34 PM', startMinutesFromMidnight: 1021, endMinutesFromMidnight: 1054 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '5:34 PM', durationMinutes: 39, endTime: '6:13 PM', startMinutesFromMidnight: 1054, endMinutesFromMidnight: 1093 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '6:13 PM', durationMinutes: 52, endTime: '7:05 PM', startMinutesFromMidnight: 1093, endMinutesFromMidnight: 1145 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '4:28 PM', durationMinutes: 13, endTime: '4:41 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1001 },
          { birdId: 'crow', star: 3, activity: 'Eat', startTime: '4:41 PM', durationMinutes: 33, endTime: '5:14 PM', startMinutesFromMidnight: 1001, endMinutesFromMidnight: 1034 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '5:14 PM', durationMinutes: 39, endTime: '5:53 PM', startMinutesFromMidnight: 1034, endMinutesFromMidnight: 1073 },
          { birdId: 'peacock', star: 1, activity: 'Rule', startTime: '5:53 PM', durationMinutes: 52, endTime: '6:45 PM', startMinutesFromMidnight: 1073, endMinutesFromMidnight: 1125 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '6:45 PM', durationMinutes: 20, endTime: '7:05 PM', startMinutesFromMidnight: 1125, endMinutesFromMidnight: 1145 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '4:28 PM', durationMinutes: 33, endTime: '5:01 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1021 },
          { birdId: 'cock', star: 6, activity: 'Walk', startTime: '5:01 PM', durationMinutes: 39, endTime: '5:40 PM', startMinutesFromMidnight: 1021, endMinutesFromMidnight: 1060 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '5:40 PM', durationMinutes: 52, endTime: '6:32 PM', startMinutesFromMidnight: 1060, endMinutesFromMidnight: 1112 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '6:32 PM', durationMinutes: 20, endTime: '6:52 PM', startMinutesFromMidnight: 1112, endMinutesFromMidnight: 1132 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '6:52 PM', durationMinutes: 13, endTime: '7:05 PM', startMinutesFromMidnight: 1132, endMinutesFromMidnight: 1145 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '4:28 PM', durationMinutes: 39, endTime: '5:07 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1027 },
          { birdId: 'peacock', star: 7, activity: 'Rule', startTime: '5:07 PM', durationMinutes: 52, endTime: '5:59 PM', startMinutesFromMidnight: 1027, endMinutesFromMidnight: 1079 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '5:59 PM', durationMinutes: 20, endTime: '6:19 PM', startMinutesFromMidnight: 1079, endMinutesFromMidnight: 1099 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '6:19 PM', durationMinutes: 13, endTime: '6:32 PM', startMinutesFromMidnight: 1099, endMinutesFromMidnight: 1112 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '6:32 PM', durationMinutes: 33, endTime: '7:05 PM', startMinutesFromMidnight: 1112, endMinutesFromMidnight: 1145 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '4:28 PM', durationMinutes: 52, endTime: '5:20 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1040 },
          { birdId: 'vulture', star: 5, activity: 'Sleep', startTime: '5:20 PM', durationMinutes: 20, endTime: '5:40 PM', startMinutesFromMidnight: 1040, endMinutesFromMidnight: 1060 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '5:40 PM', durationMinutes: 13, endTime: '5:53 PM', startMinutesFromMidnight: 1060, endMinutesFromMidnight: 1073 },
          { birdId: 'crow', star: 7, activity: 'Eat', startTime: '5:53 PM', durationMinutes: 33, endTime: '6:26 PM', startMinutesFromMidnight: 1073, endMinutesFromMidnight: 1106 },
          { birdId: 'cock', star: 7, activity: 'Walk', startTime: '6:26 PM', durationMinutes: 39, endTime: '7:05 PM', startMinutesFromMidnight: 1106, endMinutesFromMidnight: 1145 },
        ],
      },
    },
  },

  // --- JAMA 6 (7:00 PM - 9:13 PM) ---
  {
    jamaNumber: 6,
    isDay: false,
    title: 'Valar Pirai Jama 6',
    startTime: '7:00 PM',
    endTime: '9:13 PM',
    startMinutesFromMidnight: 1140,
    endMinutesFromMidnight: 1273,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '7:00 PM', durationMinutes: 28, endTime: '7:28 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1168 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '7:28 PM', durationMinutes: 22, endTime: '7:50 PM', startMinutesFromMidnight: 1168, endMinutesFromMidnight: 1190 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '7:50 PM', durationMinutes: 28, endTime: '8:18 PM', startMinutesFromMidnight: 1190, endMinutesFromMidnight: 1218 },
          { birdId: 'crow', star: 5, activity: 'Rule', startTime: '8:18 PM', durationMinutes: 22, endTime: '8:40 PM', startMinutesFromMidnight: 1218, endMinutesFromMidnight: 1240 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '8:40 PM', durationMinutes: 33, endTime: '9:13 PM', startMinutesFromMidnight: 1240, endMinutesFromMidnight: 1273 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '7:00 PM', durationMinutes: 33, endTime: '7:33 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1173 },
          { birdId: 'vulture', star: 2, activity: 'Walk', startTime: '7:33 PM', durationMinutes: 28, endTime: '8:01 PM', startMinutesFromMidnight: 1173, endMinutesFromMidnight: 1201 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '8:01 PM', durationMinutes: 22, endTime: '8:23 PM', startMinutesFromMidnight: 1201, endMinutesFromMidnight: 1223 },
          { birdId: 'cock', star: 1, activity: 'Eat', startTime: '8:23 PM', durationMinutes: 28, endTime: '8:51 PM', startMinutesFromMidnight: 1223, endMinutesFromMidnight: 1251 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '8:51 PM', durationMinutes: 22, endTime: '9:13 PM', startMinutesFromMidnight: 1251, endMinutesFromMidnight: 1273 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '7:00 PM', durationMinutes: 22, endTime: '7:22 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1162 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '7:22 PM', durationMinutes: 33, endTime: '7:55 PM', startMinutesFromMidnight: 1162, endMinutesFromMidnight: 1195 },
          { birdId: 'vulture', star: 5, activity: 'Walk', startTime: '7:55 PM', durationMinutes: 28, endTime: '8:23 PM', startMinutesFromMidnight: 1195, endMinutesFromMidnight: 1223 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '8:23 PM', durationMinutes: 22, endTime: '8:45 PM', startMinutesFromMidnight: 1223, endMinutesFromMidnight: 1245 },
          { birdId: 'cock', star: 9, activity: 'Eat', startTime: '8:45 PM', durationMinutes: 28, endTime: '9:13 PM', startMinutesFromMidnight: 1245, endMinutesFromMidnight: 1273 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '7:00 PM', durationMinutes: 28, endTime: '7:28 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1168 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '7:28 PM', durationMinutes: 22, endTime: '7:50 PM', startMinutesFromMidnight: 1168, endMinutesFromMidnight: 1190 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '7:50 PM', durationMinutes: 33, endTime: '8:23 PM', startMinutesFromMidnight: 1190, endMinutesFromMidnight: 1223 },
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '8:23 PM', durationMinutes: 28, endTime: '8:51 PM', startMinutesFromMidnight: 1223, endMinutesFromMidnight: 1251 },
          { birdId: 'peacock', star: 4, activity: 'Sleep', startTime: '8:51 PM', durationMinutes: 22, endTime: '9:13 PM', startMinutesFromMidnight: 1251, endMinutesFromMidnight: 1273 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '7:00 PM', durationMinutes: 22, endTime: '7:22 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1162 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '7:22 PM', durationMinutes: 28, endTime: '7:50 PM', startMinutesFromMidnight: 1162, endMinutesFromMidnight: 1190 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '7:50 PM', durationMinutes: 22, endTime: '8:12 PM', startMinutesFromMidnight: 1190, endMinutesFromMidnight: 1212 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '8:12 PM', durationMinutes: 33, endTime: '8:45 PM', startMinutesFromMidnight: 1212, endMinutesFromMidnight: 1245 },
          { birdId: 'vulture', star: 3, activity: 'Walk', startTime: '8:45 PM', durationMinutes: 28, endTime: '9:13 PM', startMinutesFromMidnight: 1245, endMinutesFromMidnight: 1273 },
        ],
      },
    },
  },

  // --- JAMA 7 (9:13 PM - 11:26 PM) ---
  {
    jamaNumber: 7,
    isDay: false,
    title: 'Valar Pirai Jama 7',
    startTime: '9:13 PM',
    endTime: '11:26 PM',
    startMinutesFromMidnight: 1273,
    endMinutesFromMidnight: 1406,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '9:13 PM', durationMinutes: 22, endTime: '9:35 PM', startMinutesFromMidnight: 1273, endMinutesFromMidnight: 1295 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '9:35 PM', durationMinutes: 28, endTime: '10:03 PM', startMinutesFromMidnight: 1295, endMinutesFromMidnight: 1323 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '10:03 PM', durationMinutes: 22, endTime: '10:25 PM', startMinutesFromMidnight: 1323, endMinutesFromMidnight: 1345 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '10:25 PM', durationMinutes: 33, endTime: '10:58 PM', startMinutesFromMidnight: 1345, endMinutesFromMidnight: 1378 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '10:58 PM', durationMinutes: 28, endTime: '11:26 PM', startMinutesFromMidnight: 1378, endMinutesFromMidnight: 1406 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '9:13 PM', durationMinutes: 28, endTime: '9:41 PM', startMinutesFromMidnight: 1273, endMinutesFromMidnight: 1301 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '9:41 PM', durationMinutes: 22, endTime: '10:03 PM', startMinutesFromMidnight: 1301, endMinutesFromMidnight: 1323 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '10:03 PM', durationMinutes: 28, endTime: '10:31 PM', startMinutesFromMidnight: 1323, endMinutesFromMidnight: 1351 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '10:31 PM', durationMinutes: 22, endTime: '10:53 PM', startMinutesFromMidnight: 1351, endMinutesFromMidnight: 1373 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '10:53 PM', durationMinutes: 33, endTime: '11:26 PM', startMinutesFromMidnight: 1373, endMinutesFromMidnight: 1406 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '9:13 PM', durationMinutes: 33, endTime: '9:46 PM', startMinutesFromMidnight: 1273, endMinutesFromMidnight: 1306 },
          { birdId: 'owl', star: 2, activity: 'Walk', startTime: '9:46 PM', durationMinutes: 28, endTime: '10:14 PM', startMinutesFromMidnight: 1306, endMinutesFromMidnight: 1334 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '10:14 PM', durationMinutes: 22, endTime: '10:36 PM', startMinutesFromMidnight: 1334, endMinutesFromMidnight: 1356 },
          { birdId: 'peacock', star: 1, activity: 'Eat', startTime: '10:36 PM', durationMinutes: 28, endTime: '11:04 PM', startMinutesFromMidnight: 1356, endMinutesFromMidnight: 1384 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '11:04 PM', durationMinutes: 22, endTime: '11:26 PM', startMinutesFromMidnight: 1384, endMinutesFromMidnight: 1406 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '9:13 PM', durationMinutes: 22, endTime: '9:35 PM', startMinutesFromMidnight: 1273, endMinutesFromMidnight: 1295 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '9:35 PM', durationMinutes: 33, endTime: '10:08 PM', startMinutesFromMidnight: 1295, endMinutesFromMidnight: 1328 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '10:08 PM', durationMinutes: 28, endTime: '10:36 PM', startMinutesFromMidnight: 1328, endMinutesFromMidnight: 1356 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '10:36 PM', durationMinutes: 22, endTime: '10:58 PM', startMinutesFromMidnight: 1356, endMinutesFromMidnight: 1378 },
          { birdId: 'peacock', star: 9, activity: 'Eat', startTime: '10:58 PM', durationMinutes: 28, endTime: '11:26 PM', startMinutesFromMidnight: 1378, endMinutesFromMidnight: 1406 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '9:13 PM', durationMinutes: 28, endTime: '9:41 PM', startMinutesFromMidnight: 1273, endMinutesFromMidnight: 1301 },
          { birdId: 'cock', star: 9, activity: 'Rule', startTime: '9:41 PM', durationMinutes: 22, endTime: '10:03 PM', startMinutesFromMidnight: 1301, endMinutesFromMidnight: 1323 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '10:03 PM', durationMinutes: 33, endTime: '10:36 PM', startMinutesFromMidnight: 1323, endMinutesFromMidnight: 1356 },
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '10:36 PM', durationMinutes: 28, endTime: '11:04 PM', startMinutesFromMidnight: 1356, endMinutesFromMidnight: 1384 },
          { birdId: 'vulture', star: 4, activity: 'Sleep', startTime: '11:04 PM', durationMinutes: 22, endTime: '11:26 PM', startMinutesFromMidnight: 1384, endMinutesFromMidnight: 1406 },
        ],
      },
    },
  },

  // --- JAMA 8 (11:26 PM - 1:39 AM) ---
  {
    jamaNumber: 8,
    isDay: false,
    title: 'Valar Pirai Jama 8',
    startTime: '11:26 PM',
    endTime: '1:39 AM',
    startMinutesFromMidnight: 1406,
    endMinutesFromMidnight: 1539,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '11:26 PM', durationMinutes: 28, endTime: '11:54 PM', startMinutesFromMidnight: 1406, endMinutesFromMidnight: 1434 },
          { birdId: 'peacock', star: 9, activity: 'Rule', startTime: '11:54 PM', durationMinutes: 22, endTime: '12:16 AM', startMinutesFromMidnight: 1434, endMinutesFromMidnight: 1456 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '12:16 AM', durationMinutes: 33, endTime: '12:49 AM', startMinutesFromMidnight: 1456, endMinutesFromMidnight: 1489 },
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '12:49 AM', durationMinutes: 28, endTime: '1:17 AM', startMinutesFromMidnight: 1489, endMinutesFromMidnight: 1517 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '1:17 AM', durationMinutes: 22, endTime: '1:39 AM', startMinutesFromMidnight: 1517, endMinutesFromMidnight: 1539 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '11:26 PM', durationMinutes: 22, endTime: '11:48 PM', startMinutesFromMidnight: 1406, endMinutesFromMidnight: 1428 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '11:48 PM', durationMinutes: 28, endTime: '12:16 AM', startMinutesFromMidnight: 1428, endMinutesFromMidnight: 1456 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '12:16 AM', durationMinutes: 22, endTime: '12:38 AM', startMinutesFromMidnight: 1456, endMinutesFromMidnight: 1478 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '12:38 AM', durationMinutes: 33, endTime: '1:11 AM', startMinutesFromMidnight: 1478, endMinutesFromMidnight: 1511 },
          { birdId: 'crow', star: 3, activity: 'Walk', startTime: '1:11 AM', durationMinutes: 28, endTime: '1:39 AM', startMinutesFromMidnight: 1511, endMinutesFromMidnight: 1539 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '11:26 PM', durationMinutes: 28, endTime: '11:54 PM', startMinutesFromMidnight: 1406, endMinutesFromMidnight: 1434 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '11:54 PM', durationMinutes: 22, endTime: '12:16 AM', startMinutesFromMidnight: 1434, endMinutesFromMidnight: 1456 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '12:16 AM', durationMinutes: 28, endTime: '12:44 AM', startMinutesFromMidnight: 1456, endMinutesFromMidnight: 1484 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '12:44 AM', durationMinutes: 22, endTime: '1:06 AM', startMinutesFromMidnight: 1484, endMinutesFromMidnight: 1506 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '1:06 AM', durationMinutes: 33, endTime: '1:39 AM', startMinutesFromMidnight: 1506, endMinutesFromMidnight: 1539 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '11:26 PM', durationMinutes: 33, endTime: '11:59 PM', startMinutesFromMidnight: 1406, endMinutesFromMidnight: 1439 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '11:59 PM', durationMinutes: 28, endTime: '12:27 AM', startMinutesFromMidnight: 1439, endMinutesFromMidnight: 1467 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '12:27 AM', durationMinutes: 22, endTime: '12:49 AM', startMinutesFromMidnight: 1467, endMinutesFromMidnight: 1489 },
          { birdId: 'vulture', star: 1, activity: 'Eat', startTime: '12:49 AM', durationMinutes: 28, endTime: '1:17 AM', startMinutesFromMidnight: 1489, endMinutesFromMidnight: 1517 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '1:17 AM', durationMinutes: 22, endTime: '1:39 AM', startMinutesFromMidnight: 1517, endMinutesFromMidnight: 1539 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '11:26 PM', durationMinutes: 22, endTime: '11:48 PM', startMinutesFromMidnight: 1406, endMinutesFromMidnight: 1428 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '11:48 PM', durationMinutes: 33, endTime: '12:21 AM', startMinutesFromMidnight: 1428, endMinutesFromMidnight: 1461 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '12:21 AM', durationMinutes: 28, endTime: '12:49 AM', startMinutesFromMidnight: 1461, endMinutesFromMidnight: 1489 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '12:49 AM', durationMinutes: 22, endTime: '1:11 AM', startMinutesFromMidnight: 1489, endMinutesFromMidnight: 1511 },
          { birdId: 'vulture', star: 9, activity: 'Eat', startTime: '1:11 AM', durationMinutes: 28, endTime: '1:39 AM', startMinutesFromMidnight: 1511, endMinutesFromMidnight: 1539 },
        ],
      },
    },
  },

  // --- JAMA 9 (1:39 AM - 3:52 AM) ---
  {
    jamaNumber: 9,
    isDay: false,
    title: 'Valar Pirai Jama 9',
    startTime: '1:39 AM',
    endTime: '3:52 AM',
    startMinutesFromMidnight: 1539,
    endMinutesFromMidnight: 1672,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '1:39 AM', durationMinutes: 22, endTime: '2:01 AM', startMinutesFromMidnight: 1539, endMinutesFromMidnight: 1561 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '2:01 AM', durationMinutes: 33, endTime: '2:34 AM', startMinutesFromMidnight: 1561, endMinutesFromMidnight: 1594 },
          { birdId: 'cock', star: 5, activity: 'Walk', startTime: '2:34 AM', durationMinutes: 28, endTime: '3:02 AM', startMinutesFromMidnight: 1594, endMinutesFromMidnight: 1622 },
          { birdId: 'crow', star: 3, activity: 'Sleep', startTime: '3:02 AM', durationMinutes: 22, endTime: '3:24 AM', startMinutesFromMidnight: 1622, endMinutesFromMidnight: 1644 },
          { birdId: 'owl', star: 8, activity: 'Eat', startTime: '3:24 AM', durationMinutes: 28, endTime: '3:52 AM', startMinutesFromMidnight: 1644, endMinutesFromMidnight: 1672 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '1:39 AM', durationMinutes: 28, endTime: '2:07 AM', startMinutesFromMidnight: 1539, endMinutesFromMidnight: 1567 },
          { birdId: 'vulture', star: 9, activity: 'Rule', startTime: '2:07 AM', durationMinutes: 22, endTime: '2:29 AM', startMinutesFromMidnight: 1567, endMinutesFromMidnight: 1589 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '2:29 AM', durationMinutes: 33, endTime: '3:02 AM', startMinutesFromMidnight: 1589, endMinutesFromMidnight: 1622 },
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '3:02 AM', durationMinutes: 28, endTime: '3:30 AM', startMinutesFromMidnight: 1622, endMinutesFromMidnight: 1650 },
          { birdId: 'crow', star: 4, activity: 'Sleep', startTime: '3:30 AM', durationMinutes: 22, endTime: '3:52 AM', startMinutesFromMidnight: 1650, endMinutesFromMidnight: 1672 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '1:39 AM', durationMinutes: 22, endTime: '2:01 AM', startMinutesFromMidnight: 1539, endMinutesFromMidnight: 1561 },
          { birdId: 'owl', star: 4, activity: 'Eat', startTime: '2:01 AM', durationMinutes: 28, endTime: '2:29 AM', startMinutesFromMidnight: 1561, endMinutesFromMidnight: 1589 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '2:29 AM', durationMinutes: 22, endTime: '2:51 AM', startMinutesFromMidnight: 1589, endMinutesFromMidnight: 1611 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '2:51 AM', durationMinutes: 33, endTime: '3:24 AM', startMinutesFromMidnight: 1611, endMinutesFromMidnight: 1644 },
          { birdId: 'cock', star: 3, activity: 'Walk', startTime: '3:24 AM', durationMinutes: 28, endTime: '3:52 AM', startMinutesFromMidnight: 1644, endMinutesFromMidnight: 1672 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '1:39 AM', durationMinutes: 28, endTime: '2:07 AM', startMinutesFromMidnight: 1539, endMinutesFromMidnight: 1567 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '2:07 AM', durationMinutes: 22, endTime: '2:29 AM', startMinutesFromMidnight: 1567, endMinutesFromMidnight: 1589 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '2:29 AM', durationMinutes: 28, endTime: '2:57 AM', startMinutesFromMidnight: 1589, endMinutesFromMidnight: 1617 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '2:57 AM', durationMinutes: 22, endTime: '3:19 AM', startMinutesFromMidnight: 1617, endMinutesFromMidnight: 1639 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '3:19 AM', durationMinutes: 33, endTime: '3:52 AM', startMinutesFromMidnight: 1639, endMinutesFromMidnight: 1672 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '1:39 AM', durationMinutes: 33, endTime: '2:12 AM', startMinutesFromMidnight: 1539, endMinutesFromMidnight: 1572 },
          { birdId: 'cock', star: 2, activity: 'Walk', startTime: '2:12 AM', durationMinutes: 28, endTime: '2:40 AM', startMinutesFromMidnight: 1572, endMinutesFromMidnight: 1600 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '2:40 AM', durationMinutes: 22, endTime: '3:02 AM', startMinutesFromMidnight: 1600, endMinutesFromMidnight: 1622 },
          { birdId: 'owl', star: 1, activity: 'Eat', startTime: '3:02 AM', durationMinutes: 28, endTime: '3:30 AM', startMinutesFromMidnight: 1622, endMinutesFromMidnight: 1650 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '3:30 AM', durationMinutes: 22, endTime: '3:52 AM', startMinutesFromMidnight: 1650, endMinutesFromMidnight: 1672 },
        ],
      },
    },
  },

  // --- JAMA 10 (3:52 AM - 6:05 AM) ---
  {
    jamaNumber: 10,
    isDay: false,
    title: 'Valar Pirai Jama 10',
    startTime: '3:52 AM',
    endTime: '6:05 AM',
    startMinutesFromMidnight: 1672,
    endMinutesFromMidnight: 1805,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '3:52 AM', durationMinutes: 33, endTime: '4:25 AM', startMinutesFromMidnight: 1672, endMinutesFromMidnight: 1705 },
          { birdId: 'peacock', star: 2, activity: 'Walk', startTime: '4:25 AM', durationMinutes: 28, endTime: '4:53 AM', startMinutesFromMidnight: 1705, endMinutesFromMidnight: 1733 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '4:53 AM', durationMinutes: 22, endTime: '5:15 AM', startMinutesFromMidnight: 1733, endMinutesFromMidnight: 1755 },
          { birdId: 'crow', star: 1, activity: 'Eat', startTime: '5:15 AM', durationMinutes: 28, endTime: '5:43 AM', startMinutesFromMidnight: 1755, endMinutesFromMidnight: 1783 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '5:43 AM', durationMinutes: 22, endTime: '6:05 AM', startMinutesFromMidnight: 1783, endMinutesFromMidnight: 1805 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '3:52 AM', durationMinutes: 22, endTime: '4:14 AM', startMinutesFromMidnight: 1672, endMinutesFromMidnight: 1694 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '4:14 AM', durationMinutes: 33, endTime: '4:47 AM', startMinutesFromMidnight: 1694, endMinutesFromMidnight: 1727 },
          { birdId: 'peacock', star: 5, activity: 'Walk', startTime: '4:47 AM', durationMinutes: 28, endTime: '5:15 AM', startMinutesFromMidnight: 1727, endMinutesFromMidnight: 1755 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '5:15 AM', durationMinutes: 22, endTime: '5:37 AM', startMinutesFromMidnight: 1755, endMinutesFromMidnight: 1777 },
          { birdId: 'crow', star: 9, activity: 'Eat', startTime: '5:37 AM', durationMinutes: 28, endTime: '6:05 AM', startMinutesFromMidnight: 1777, endMinutesFromMidnight: 1805 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '3:52 AM', durationMinutes: 28, endTime: '4:20 AM', startMinutesFromMidnight: 1672, endMinutesFromMidnight: 1700 },
          { birdId: 'owl', star: 9, activity: 'Rule', startTime: '4:20 AM', durationMinutes: 22, endTime: '4:42 AM', startMinutesFromMidnight: 1700, endMinutesFromMidnight: 1722 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '4:42 AM', durationMinutes: 33, endTime: '5:15 AM', startMinutesFromMidnight: 1722, endMinutesFromMidnight: 1755 },
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '5:15 AM', durationMinutes: 28, endTime: '5:43 AM', startMinutesFromMidnight: 1755, endMinutesFromMidnight: 1783 },
          { birdId: 'cock', star: 4, activity: 'Sleep', startTime: '5:43 AM', durationMinutes: 22, endTime: '6:05 AM', startMinutesFromMidnight: 1783, endMinutesFromMidnight: 1805 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '3:52 AM', durationMinutes: 22, endTime: '4:14 AM', startMinutesFromMidnight: 1672, endMinutesFromMidnight: 1694 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '4:14 AM', durationMinutes: 28, endTime: '4:42 AM', startMinutesFromMidnight: 1694, endMinutesFromMidnight: 1722 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '4:42 AM', durationMinutes: 22, endTime: '5:04 AM', startMinutesFromMidnight: 1722, endMinutesFromMidnight: 1744 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '5:04 AM', durationMinutes: 33, endTime: '5:37 AM', startMinutesFromMidnight: 1744, endMinutesFromMidnight: 1777 },
          { birdId: 'peacock', star: 3, activity: 'Walk', startTime: '5:37 AM', durationMinutes: 28, endTime: '6:05 AM', startMinutesFromMidnight: 1777, endMinutesFromMidnight: 1805 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '3:52 AM', durationMinutes: 28, endTime: '4:20 AM', startMinutesFromMidnight: 1672, endMinutesFromMidnight: 1700 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '4:20 AM', durationMinutes: 22, endTime: '4:42 AM', startMinutesFromMidnight: 1700, endMinutesFromMidnight: 1722 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '4:42 AM', durationMinutes: 28, endTime: '5:10 AM', startMinutesFromMidnight: 1722, endMinutesFromMidnight: 1750 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '5:10 AM', durationMinutes: 22, endTime: '5:32 AM', startMinutesFromMidnight: 1750, endMinutesFromMidnight: 1772 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '5:32 AM', durationMinutes: 33, endTime: '6:05 AM', startMinutesFromMidnight: 1772, endMinutesFromMidnight: 1805 },
        ],
      },
    },
  },
];
