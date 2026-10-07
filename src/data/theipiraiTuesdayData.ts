import { Jama } from '../types';

export const THEIPIRAI_TUESDAY_CONFIG = {
  dayTotalMinutes: 780,
  nightTotalMinutes: 660,
  sunriseToday: '06:00',
  sunsetToday: '19:00',
  nextSunriseTomorrow: '06:00',
  dayRuleMinutes: 20,
  dayEatMinutes: 52,
  dayWalkMinutes: 39,
  daySleepMinutes: 13,
  dayDieMinutes: 33,
  nightRuleMinutes: 17,
  nightEatMinutes: 39,
  nightWalkMinutes: 39,
  nightSleepMinutes: 17,
  nightDieMinutes: 22,
  dayRulingBird: 'Cock',
  dayDyingBird: 'Vulture',
  nightRulingBird: 'Vulture',
  nightDyingBird: 'Vulture',
};

// Complete 10 Jamas for Theipirai Tuesday encoded faithfully from user table
export const THEIPIRAI_TUESDAY_JAMAS: Jama[] = [
  // --- JAMA 1 (6:00 AM - 8:37 AM) --- 157 mins (Day)
  {
    jamaNumber: 1,
    isDay: true,
    title: 'Thei Pirai Jama 1',
    startTime: '6:00 AM',
    endTime: '8:37 AM',
    startMinutesFromMidnight: 360,
    endMinutesFromMidnight: 517,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '6:00 AM', durationMinutes: 39, endTime: '6:39 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 399 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '6:39 AM', durationMinutes: 52, endTime: '7:31 AM', startMinutesFromMidnight: 399, endMinutesFromMidnight: 451 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '7:31 AM', durationMinutes: 33, endTime: '8:04 AM', startMinutesFromMidnight: 451, endMinutesFromMidnight: 484 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '8:04 AM', durationMinutes: 13, endTime: '8:17 AM', startMinutesFromMidnight: 484, endMinutesFromMidnight: 497 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '8:17 AM', durationMinutes: 20, endTime: '8:37 AM', startMinutesFromMidnight: 497, endMinutesFromMidnight: 517 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '6:00 AM', durationMinutes: 33, endTime: '6:33 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 393 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '6:33 AM', durationMinutes: 13, endTime: '6:46 AM', startMinutesFromMidnight: 393, endMinutesFromMidnight: 406 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '6:46 AM', durationMinutes: 20, endTime: '7:06 AM', startMinutesFromMidnight: 406, endMinutesFromMidnight: 426 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '7:06 AM', durationMinutes: 39, endTime: '7:45 AM', startMinutesFromMidnight: 426, endMinutesFromMidnight: 465 },
          { birdId: 'cock', star: 3, activity: 'Eat', startTime: '7:45 AM', durationMinutes: 52, endTime: '8:37 AM', startMinutesFromMidnight: 465, endMinutesFromMidnight: 517 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '6:00 AM', durationMinutes: 20, endTime: '6:20 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 380 },
          { birdId: 'vulture', star: 7, activity: 'Walk', startTime: '6:20 AM', durationMinutes: 39, endTime: '6:59 AM', startMinutesFromMidnight: 380, endMinutesFromMidnight: 419 },
          { birdId: 'cock', star: 7, activity: 'Eat', startTime: '6:59 AM', durationMinutes: 52, endTime: '7:51 AM', startMinutesFromMidnight: 419, endMinutesFromMidnight: 471 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '7:51 AM', durationMinutes: 33, endTime: '8:24 AM', startMinutesFromMidnight: 471, endMinutesFromMidnight: 504 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '8:24 AM', durationMinutes: 13, endTime: '8:37 AM', startMinutesFromMidnight: 504, endMinutesFromMidnight: 517 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '6:00 AM', durationMinutes: 52, endTime: '6:52 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 412 },
          { birdId: 'owl', star: 3, activity: 'Die', startTime: '6:52 AM', durationMinutes: 33, endTime: '7:25 AM', startMinutesFromMidnight: 412, endMinutesFromMidnight: 445 },
          { birdId: 'peacock', star: 4, activity: 'Sleep', startTime: '7:25 AM', durationMinutes: 13, endTime: '7:38 AM', startMinutesFromMidnight: 445, endMinutesFromMidnight: 458 },
          { birdId: 'crow', star: 7, activity: 'Rule', startTime: '7:38 AM', durationMinutes: 20, endTime: '7:58 AM', startMinutesFromMidnight: 458, endMinutesFromMidnight: 478 },
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '7:58 AM', durationMinutes: 39, endTime: '8:37 AM', startMinutesFromMidnight: 478, endMinutesFromMidnight: 517 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '6:00 AM', durationMinutes: 13, endTime: '6:13 AM', startMinutesFromMidnight: 360, endMinutesFromMidnight: 373 },
          { birdId: 'crow', star: 3, activity: 'Rule', startTime: '6:13 AM', durationMinutes: 20, endTime: '6:33 AM', startMinutesFromMidnight: 373, endMinutesFromMidnight: 393 },
          { birdId: 'vulture', star: 3, activity: 'Walk', startTime: '6:33 AM', durationMinutes: 39, endTime: '7:12 AM', startMinutesFromMidnight: 393, endMinutesFromMidnight: 432 },
          { birdId: 'cock', star: 4, activity: 'Eat', startTime: '7:12 AM', durationMinutes: 52, endTime: '8:04 AM', startMinutesFromMidnight: 432, endMinutesFromMidnight: 484 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '8:04 AM', durationMinutes: 33, endTime: '8:37 AM', startMinutesFromMidnight: 484, endMinutesFromMidnight: 517 },
        ],
      },
    },
  },

  // --- JAMA 2 (8:37 AM - 11:14 AM) --- 157 mins (Day)
  {
    jamaNumber: 2,
    isDay: true,
    title: 'Thei Pirai Jama 2',
    startTime: '8:37 AM',
    endTime: '11:14 AM',
    startMinutesFromMidnight: 517,
    endMinutesFromMidnight: 674,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '8:37 AM', durationMinutes: 52, endTime: '9:29 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 569 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '9:29 AM', durationMinutes: 33, endTime: '10:02 AM', startMinutesFromMidnight: 569, endMinutesFromMidnight: 602 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '10:02 AM', durationMinutes: 13, endTime: '10:15 AM', startMinutesFromMidnight: 602, endMinutesFromMidnight: 615 },
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '10:15 AM', durationMinutes: 20, endTime: '10:35 AM', startMinutesFromMidnight: 615, endMinutesFromMidnight: 635 },
          { birdId: 'crow', star: 6, activity: 'Walk', startTime: '10:35 AM', durationMinutes: 39, endTime: '11:14 AM', startMinutesFromMidnight: 635, endMinutesFromMidnight: 674 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '8:37 AM', durationMinutes: 13, endTime: '8:50 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 530 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '8:50 AM', durationMinutes: 20, endTime: '9:10 AM', startMinutesFromMidnight: 530, endMinutesFromMidnight: 550 },
          { birdId: 'crow', star: 3, activity: 'Walk', startTime: '9:10 AM', durationMinutes: 39, endTime: '9:49 AM', startMinutesFromMidnight: 550, endMinutesFromMidnight: 589 },
          { birdId: 'vulture', star: 2, activity: 'Eat', startTime: '9:49 AM', durationMinutes: 52, endTime: '10:41 AM', startMinutesFromMidnight: 589, endMinutesFromMidnight: 641 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '10:41 AM', durationMinutes: 33, endTime: '11:14 AM', startMinutesFromMidnight: 641, endMinutesFromMidnight: 674 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '8:37 AM', durationMinutes: 39, endTime: '9:16 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 556 },
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '9:16 AM', durationMinutes: 52, endTime: '10:08 AM', startMinutesFromMidnight: 556, endMinutesFromMidnight: 608 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '10:08 AM', durationMinutes: 33, endTime: '10:41 AM', startMinutesFromMidnight: 608, endMinutesFromMidnight: 641 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '10:41 AM', durationMinutes: 13, endTime: '10:54 AM', startMinutesFromMidnight: 641, endMinutesFromMidnight: 654 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '10:54 AM', durationMinutes: 20, endTime: '11:14 AM', startMinutesFromMidnight: 654, endMinutesFromMidnight: 674 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '8:37 AM', durationMinutes: 33, endTime: '9:10 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 550 },
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '9:10 AM', durationMinutes: 13, endTime: '9:23 AM', startMinutesFromMidnight: 550, endMinutesFromMidnight: 563 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '9:23 AM', durationMinutes: 20, endTime: '9:43 AM', startMinutesFromMidnight: 563, endMinutesFromMidnight: 583 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '9:43 AM', durationMinutes: 39, endTime: '10:22 AM', startMinutesFromMidnight: 583, endMinutesFromMidnight: 622 },
          { birdId: 'vulture', star: 1, activity: 'Eat', startTime: '10:22 AM', durationMinutes: 52, endTime: '11:14 AM', startMinutesFromMidnight: 622, endMinutesFromMidnight: 674 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '8:37 AM', durationMinutes: 20, endTime: '8:57 AM', startMinutesFromMidnight: 517, endMinutesFromMidnight: 537 },
          { birdId: 'crow', star: 5, activity: 'Walk', startTime: '8:57 AM', durationMinutes: 39, endTime: '9:36 AM', startMinutesFromMidnight: 537, endMinutesFromMidnight: 576 },
          { birdId: 'vulture', star: 9, activity: 'Eat', startTime: '9:36 AM', durationMinutes: 52, endTime: '10:28 AM', startMinutesFromMidnight: 576, endMinutesFromMidnight: 628 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '10:28 AM', durationMinutes: 33, endTime: '11:01 AM', startMinutesFromMidnight: 628, endMinutesFromMidnight: 661 },
          { birdId: 'owl', star: 3, activity: 'Sleep', startTime: '11:01 AM', durationMinutes: 13, endTime: '11:14 AM', startMinutesFromMidnight: 661, endMinutesFromMidnight: 674 },
        ],
      },
    },
  },

  // --- JAMA 3 (11:14 AM - 1:51 PM) --- 157 mins (Day)
  {
    jamaNumber: 3,
    isDay: true,
    title: 'Thei Pirai Jama 3',
    startTime: '11:14 AM',
    endTime: '1:51 PM',
    startMinutesFromMidnight: 674,
    endMinutesFromMidnight: 831,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '11:14 AM', durationMinutes: 33, endTime: '11:47 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 707 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '11:47 AM', durationMinutes: 13, endTime: '12:00 PM', startMinutesFromMidnight: 707, endMinutesFromMidnight: 720 },
          { birdId: 'owl', star: 1, activity: 'Rule', startTime: '12:00 PM', durationMinutes: 20, endTime: '12:20 PM', startMinutesFromMidnight: 720, endMinutesFromMidnight: 740 },
          { birdId: 'peacock', star: 2, activity: 'Walk', startTime: '12:20 PM', durationMinutes: 39, endTime: '12:59 PM', startMinutesFromMidnight: 740, endMinutesFromMidnight: 779 },
          { birdId: 'crow', star: 3, activity: 'Eat', startTime: '12:59 PM', durationMinutes: 52, endTime: '1:51 PM', startMinutesFromMidnight: 779, endMinutesFromMidnight: 831 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '11:14 AM', durationMinutes: 20, endTime: '11:34 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 694 },
          { birdId: 'peacock', star: 5, activity: 'Walk', startTime: '11:34 AM', durationMinutes: 39, endTime: '12:13 PM', startMinutesFromMidnight: 694, endMinutesFromMidnight: 733 },
          { birdId: 'crow', star: 9, activity: 'Eat', startTime: '12:13 PM', durationMinutes: 52, endTime: '1:05 PM', startMinutesFromMidnight: 733, endMinutesFromMidnight: 785 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '1:05 PM', durationMinutes: 33, endTime: '1:38 PM', startMinutesFromMidnight: 785, endMinutesFromMidnight: 818 },
          { birdId: 'cock', star: 5, activity: 'Sleep', startTime: '1:38 PM', durationMinutes: 13, endTime: '1:51 PM', startMinutesFromMidnight: 818, endMinutesFromMidnight: 831 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '11:14 AM', durationMinutes: 52, endTime: '12:06 PM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 726 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '12:06 PM', durationMinutes: 33, endTime: '12:39 PM', startMinutesFromMidnight: 726, endMinutesFromMidnight: 759 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '12:39 PM', durationMinutes: 13, endTime: '12:52 PM', startMinutesFromMidnight: 759, endMinutesFromMidnight: 772 },
          { birdId: 'owl', star: 9, activity: 'Rule', startTime: '12:52 PM', durationMinutes: 20, endTime: '1:12 PM', startMinutesFromMidnight: 772, endMinutesFromMidnight: 792 },
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '1:12 PM', durationMinutes: 39, endTime: '1:51 PM', startMinutesFromMidnight: 792, endMinutesFromMidnight: 831 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '11:14 AM', durationMinutes: 13, endTime: '11:27 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 687 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '11:27 AM', durationMinutes: 20, endTime: '11:47 AM', startMinutesFromMidnight: 687, endMinutesFromMidnight: 707 },
          { birdId: 'peacock', star: 3, activity: 'Walk', startTime: '11:47 AM', durationMinutes: 39, endTime: '12:26 PM', startMinutesFromMidnight: 707, endMinutesFromMidnight: 746 },
          { birdId: 'crow', star: 2, activity: 'Eat', startTime: '12:26 PM', durationMinutes: 52, endTime: '1:18 PM', startMinutesFromMidnight: 746, endMinutesFromMidnight: 798 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '1:18 PM', durationMinutes: 33, endTime: '1:51 PM', startMinutesFromMidnight: 798, endMinutesFromMidnight: 831 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '11:14 AM', durationMinutes: 39, endTime: '11:53 AM', startMinutesFromMidnight: 674, endMinutesFromMidnight: 713 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '11:53 AM', durationMinutes: 52, endTime: '12:45 PM', startMinutesFromMidnight: 713, endMinutesFromMidnight: 765 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '12:45 PM', durationMinutes: 33, endTime: '1:18 PM', startMinutesFromMidnight: 765, endMinutesFromMidnight: 798 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '1:18 PM', durationMinutes: 13, endTime: '1:31 PM', startMinutesFromMidnight: 798, endMinutesFromMidnight: 811 },
          { birdId: 'owl', star: 5, activity: 'Rule', startTime: '1:31 PM', durationMinutes: 20, endTime: '1:51 PM', startMinutesFromMidnight: 811, endMinutesFromMidnight: 831 },
        ],
      },
    },
  },

  // --- JAMA 4 (1:51 PM - 4:28 PM) --- 157 mins (Day)
  {
    jamaNumber: 4,
    isDay: true,
    title: 'Thei Pirai Jama 4',
    startTime: '1:51 PM',
    endTime: '4:28 PM',
    startMinutesFromMidnight: 831,
    endMinutesFromMidnight: 988,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '1:51 PM', durationMinutes: 13, endTime: '2:04 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 844 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '2:04 PM', durationMinutes: 20, endTime: '2:24 PM', startMinutesFromMidnight: 844, endMinutesFromMidnight: 864 },
          { birdId: 'owl', star: 1, activity: 'Walk', startTime: '2:24 PM', durationMinutes: 39, endTime: '3:03 PM', startMinutesFromMidnight: 864, endMinutesFromMidnight: 903 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '3:03 PM', durationMinutes: 52, endTime: '3:55 PM', startMinutesFromMidnight: 903, endMinutesFromMidnight: 955 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '3:55 PM', durationMinutes: 33, endTime: '4:28 PM', startMinutesFromMidnight: 955, endMinutesFromMidnight: 988 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '1:51 PM', durationMinutes: 39, endTime: '2:30 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 870 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '2:30 PM', durationMinutes: 52, endTime: '3:22 PM', startMinutesFromMidnight: 870, endMinutesFromMidnight: 922 },
          { birdId: 'crow', star: 2, activity: 'Die', startTime: '3:22 PM', durationMinutes: 33, endTime: '3:55 PM', startMinutesFromMidnight: 922, endMinutesFromMidnight: 955 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '3:55 PM', durationMinutes: 13, endTime: '4:08 PM', startMinutesFromMidnight: 955, endMinutesFromMidnight: 968 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '4:08 PM', durationMinutes: 20, endTime: '4:28 PM', startMinutesFromMidnight: 968, endMinutesFromMidnight: 988 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '1:51 PM', durationMinutes: 33, endTime: '2:24 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 864 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '2:24 PM', durationMinutes: 13, endTime: '2:37 PM', startMinutesFromMidnight: 864, endMinutesFromMidnight: 877 },
          { birdId: 'cock', star: 1, activity: 'Rule', startTime: '2:37 PM', durationMinutes: 20, endTime: '2:57 PM', startMinutesFromMidnight: 877, endMinutesFromMidnight: 897 },
          { birdId: 'owl', star: 2, activity: 'Walk', startTime: '2:57 PM', durationMinutes: 39, endTime: '3:36 PM', startMinutesFromMidnight: 897, endMinutesFromMidnight: 936 },
          { birdId: 'peacock', star: 1, activity: 'Eat', startTime: '3:36 PM', durationMinutes: 52, endTime: '4:28 PM', startMinutesFromMidnight: 936, endMinutesFromMidnight: 988 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '1:51 PM', durationMinutes: 20, endTime: '2:11 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 851 },
          { birdId: 'owl', star: 7, activity: 'Walk', startTime: '2:11 PM', durationMinutes: 39, endTime: '2:50 PM', startMinutesFromMidnight: 851, endMinutesFromMidnight: 890 },
          { birdId: 'peacock', star: 9, activity: 'Eat', startTime: '2:50 PM', durationMinutes: 52, endTime: '3:42 PM', startMinutesFromMidnight: 890, endMinutesFromMidnight: 942 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '3:42 PM', durationMinutes: 33, endTime: '4:15 PM', startMinutesFromMidnight: 942, endMinutesFromMidnight: 975 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '4:15 PM', durationMinutes: 13, endTime: '4:28 PM', startMinutesFromMidnight: 975, endMinutesFromMidnight: 988 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '1:51 PM', durationMinutes: 52, endTime: '2:43 PM', startMinutesFromMidnight: 831, endMinutesFromMidnight: 883 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '2:43 PM', durationMinutes: 33, endTime: '3:16 PM', startMinutesFromMidnight: 883, endMinutesFromMidnight: 916 },
          { birdId: 'vulture', star: 4, activity: 'Sleep', startTime: '3:16 PM', durationMinutes: 13, endTime: '3:29 PM', startMinutesFromMidnight: 916, endMinutesFromMidnight: 929 },
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '3:29 PM', durationMinutes: 20, endTime: '3:49 PM', startMinutesFromMidnight: 929, endMinutesFromMidnight: 949 },
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '3:49 PM', durationMinutes: 39, endTime: '4:28 PM', startMinutesFromMidnight: 949, endMinutesFromMidnight: 988 },
        ],
      },
    },
  },

  // --- JAMA 5 (4:28 PM - 7:05 PM) --- 157 mins (Day)
  {
    jamaNumber: 5,
    isDay: true,
    title: 'Thei Pirai Jama 5',
    startTime: '4:28 PM',
    endTime: '7:05 PM',
    startMinutesFromMidnight: 988,
    endMinutesFromMidnight: 1145,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '4:28 PM', durationMinutes: 20, endTime: '4:48 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1008 },
          { birdId: 'cock', star: 5, activity: 'Walk', startTime: '4:48 PM', durationMinutes: 39, endTime: '5:27 PM', startMinutesFromMidnight: 1008, endMinutesFromMidnight: 1047 },
          { birdId: 'owl', star: 7, activity: 'Eat', startTime: '5:27 PM', durationMinutes: 52, endTime: '6:19 PM', startMinutesFromMidnight: 1047, endMinutesFromMidnight: 1099 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '6:19 PM', durationMinutes: 33, endTime: '6:52 PM', startMinutesFromMidnight: 1099, endMinutesFromMidnight: 1132 },
          { birdId: 'crow', star: 5, activity: 'Sleep', startTime: '6:52 PM', durationMinutes: 13, endTime: '7:05 PM', startMinutesFromMidnight: 1132, endMinutesFromMidnight: 1145 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '4:28 PM', durationMinutes: 52, endTime: '5:20 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1040 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '5:20 PM', durationMinutes: 33, endTime: '5:53 PM', startMinutesFromMidnight: 1040, endMinutesFromMidnight: 1073 },
          { birdId: 'crow', star: 4, activity: 'Sleep', startTime: '5:53 PM', durationMinutes: 13, endTime: '6:06 PM', startMinutesFromMidnight: 1073, endMinutesFromMidnight: 1086 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '6:06 PM', durationMinutes: 20, endTime: '6:26 PM', startMinutesFromMidnight: 1086, endMinutesFromMidnight: 1106 },
          { birdId: 'cock', star: 6, activity: 'Walk', startTime: '6:26 PM', durationMinutes: 39, endTime: '7:05 PM', startMinutesFromMidnight: 1106, endMinutesFromMidnight: 1145 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '4:28 PM', durationMinutes: 13, endTime: '4:41 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1001 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '4:41 PM', durationMinutes: 20, endTime: '5:01 PM', startMinutesFromMidnight: 1001, endMinutesFromMidnight: 1021 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '5:01 PM', durationMinutes: 39, endTime: '5:40 PM', startMinutesFromMidnight: 1021, endMinutesFromMidnight: 1060 },
          { birdId: 'owl', star: 4, activity: 'Eat', startTime: '5:40 PM', durationMinutes: 52, endTime: '6:32 PM', startMinutesFromMidnight: 1060, endMinutesFromMidnight: 1112 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '6:32 PM', durationMinutes: 33, endTime: '7:05 PM', startMinutesFromMidnight: 1112, endMinutesFromMidnight: 1145 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '4:28 PM', durationMinutes: 39, endTime: '5:07 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1027 },
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '5:07 PM', durationMinutes: 52, endTime: '5:59 PM', startMinutesFromMidnight: 1027, endMinutesFromMidnight: 1079 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '5:59 PM', durationMinutes: 33, endTime: '6:32 PM', startMinutesFromMidnight: 1079, endMinutesFromMidnight: 1112 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '6:32 PM', durationMinutes: 13, endTime: '6:45 PM', startMinutesFromMidnight: 1112, endMinutesFromMidnight: 1125 },
          { birdId: 'vulture', star: 5, activity: 'Rule', startTime: '6:45 PM', durationMinutes: 20, endTime: '7:05 PM', startMinutesFromMidnight: 1125, endMinutesFromMidnight: 1145 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '4:28 PM', durationMinutes: 33, endTime: '5:01 PM', startMinutesFromMidnight: 988, endMinutesFromMidnight: 1021 },
          { birdId: 'crow', star: 1, activity: 'Sleep', startTime: '5:01 PM', durationMinutes: 13, endTime: '5:14 PM', startMinutesFromMidnight: 1021, endMinutesFromMidnight: 1034 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '5:14 PM', durationMinutes: 20, endTime: '5:34 PM', startMinutesFromMidnight: 1034, endMinutesFromMidnight: 1054 },
          { birdId: 'cock', star: 2, activity: 'Walk', startTime: '5:34 PM', durationMinutes: 39, endTime: '6:13 PM', startMinutesFromMidnight: 1054, endMinutesFromMidnight: 1093 },
          { birdId: 'owl', star: 1, activity: 'Eat', startTime: '6:13 PM', durationMinutes: 52, endTime: '7:05 PM', startMinutesFromMidnight: 1093, endMinutesFromMidnight: 1145 },
        ],
      },
    },
  },

  // --- JAMA 6 (7:00 PM - 9:14 PM) --- 134 mins (Night)
  {
    jamaNumber: 6,
    isDay: false,
    title: 'Thei Pirai Jama 6',
    startTime: '7:00 PM',
    endTime: '9:14 PM',
    startMinutesFromMidnight: 1140,
    endMinutesFromMidnight: 1274,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'vulture', star: 6, activity: 'Eat', startTime: '7:00 PM', durationMinutes: 39, endTime: '7:39 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1179 },
          { birdId: 'peacock', star: 4, activity: 'Sleep', startTime: '7:39 PM', durationMinutes: 17, endTime: '7:56 PM', startMinutesFromMidnight: 1179, endMinutesFromMidnight: 1196 },
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '7:56 PM', durationMinutes: 39, endTime: '8:35 PM', startMinutesFromMidnight: 1196, endMinutesFromMidnight: 1235 },
          { birdId: 'crow', star: 3, activity: 'Die', startTime: '8:35 PM', durationMinutes: 22, endTime: '8:57 PM', startMinutesFromMidnight: 1235, endMinutesFromMidnight: 1257 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '8:57 PM', durationMinutes: 17, endTime: '9:14 PM', startMinutesFromMidnight: 1257, endMinutesFromMidnight: 1274 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'owl', star: 10, activity: 'Rule', startTime: '7:00 PM', durationMinutes: 17, endTime: '7:17 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1157 },
          { birdId: 'vulture', star: 7, activity: 'Eat', startTime: '7:17 PM', durationMinutes: 39, endTime: '7:56 PM', startMinutesFromMidnight: 1157, endMinutesFromMidnight: 1196 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '7:56 PM', durationMinutes: 17, endTime: '8:13 PM', startMinutesFromMidnight: 1196, endMinutesFromMidnight: 1213 },
          { birdId: 'cock', star: 7, activity: 'Walk', startTime: '8:13 PM', durationMinutes: 39, endTime: '8:52 PM', startMinutesFromMidnight: 1213, endMinutesFromMidnight: 1252 },
          { birdId: 'crow', star: 3, activity: 'Die', startTime: '8:52 PM', durationMinutes: 22, endTime: '9:14 PM', startMinutesFromMidnight: 1252, endMinutesFromMidnight: 1274 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:00 PM', durationMinutes: 22, endTime: '7:22 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1162 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '7:22 PM', durationMinutes: 17, endTime: '7:39 PM', startMinutesFromMidnight: 1162, endMinutesFromMidnight: 1179 },
          { birdId: 'vulture', star: 3, activity: 'Eat', startTime: '7:39 PM', durationMinutes: 39, endTime: '8:18 PM', startMinutesFromMidnight: 1179, endMinutesFromMidnight: 1218 },
          { birdId: 'peacock', star: 1, activity: 'Sleep', startTime: '8:18 PM', durationMinutes: 17, endTime: '8:35 PM', startMinutesFromMidnight: 1218, endMinutesFromMidnight: 1235 },
          { birdId: 'cock', star: 1, activity: 'Walk', startTime: '8:35 PM', durationMinutes: 39, endTime: '9:14 PM', startMinutesFromMidnight: 1235, endMinutesFromMidnight: 1274 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'cock', star: 4, activity: 'Walk', startTime: '7:00 PM', durationMinutes: 39, endTime: '7:39 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1179 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:39 PM', durationMinutes: 22, endTime: '8:01 PM', startMinutesFromMidnight: 1179, endMinutesFromMidnight: 1201 },
          { birdId: 'owl', star: 7, activity: 'Rule', startTime: '8:01 PM', durationMinutes: 17, endTime: '8:18 PM', startMinutesFromMidnight: 1201, endMinutesFromMidnight: 1218 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '8:18 PM', durationMinutes: 39, endTime: '8:57 PM', startMinutesFromMidnight: 1218, endMinutesFromMidnight: 1257 },
          { birdId: 'peacock', star: 3, activity: 'Sleep', startTime: '8:57 PM', durationMinutes: 17, endTime: '9:14 PM', startMinutesFromMidnight: 1257, endMinutesFromMidnight: 1274 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'peacock', star: 2, activity: 'Sleep', startTime: '7:00 PM', durationMinutes: 17, endTime: '7:17 PM', startMinutesFromMidnight: 1140, endMinutesFromMidnight: 1157 },
          { birdId: 'cock', star: 3, activity: 'Walk', startTime: '7:17 PM', durationMinutes: 39, endTime: '7:56 PM', startMinutesFromMidnight: 1157, endMinutesFromMidnight: 1196 },
          { birdId: 'crow', star: 1, activity: 'Die', startTime: '7:56 PM', durationMinutes: 22, endTime: '8:18 PM', startMinutesFromMidnight: 1196, endMinutesFromMidnight: 1218 },
          { birdId: 'owl', star: 3, activity: 'Rule', startTime: '8:18 PM', durationMinutes: 17, endTime: '8:35 PM', startMinutesFromMidnight: 1218, endMinutesFromMidnight: 1235 },
          { birdId: 'vulture', star: 4, activity: 'Eat', startTime: '8:35 PM', durationMinutes: 39, endTime: '9:14 PM', startMinutesFromMidnight: 1235, endMinutesFromMidnight: 1274 },
        ],
      },
    },
  },

  // --- JAMA 7 (9:14 PM - 11:28 PM) --- 134 mins (Night)
  {
    jamaNumber: 7,
    isDay: false,
    title: 'Thei Pirai Jama 7',
    startTime: '9:14 PM',
    endTime: '11:28 PM',
    startMinutesFromMidnight: 1274,
    endMinutesFromMidnight: 1408,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '9:14 PM', durationMinutes: 17, endTime: '9:31 PM', startMinutesFromMidnight: 1274, endMinutesFromMidnight: 1291 },
          { birdId: 'peacock', star: 3, activity: 'Walk', startTime: '9:31 PM', durationMinutes: 39, endTime: '10:10 PM', startMinutesFromMidnight: 1291, endMinutesFromMidnight: 1330 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '10:10 PM', durationMinutes: 22, endTime: '10:32 PM', startMinutesFromMidnight: 1330, endMinutesFromMidnight: 1352 },
          { birdId: 'crow', star: 5, activity: 'Rule', startTime: '10:32 PM', durationMinutes: 17, endTime: '10:49 PM', startMinutesFromMidnight: 1352, endMinutesFromMidnight: 1369 },
          { birdId: 'owl', star: 2, activity: 'Eat', startTime: '10:49 PM', durationMinutes: 39, endTime: '11:28 PM', startMinutesFromMidnight: 1369, endMinutesFromMidnight: 1408 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'owl', star: 6, activity: 'Eat', startTime: '9:14 PM', durationMinutes: 39, endTime: '9:53 PM', startMinutesFromMidnight: 1274, endMinutesFromMidnight: 1313 },
          { birdId: 'vulture', star: 2, activity: 'Sleep', startTime: '9:53 PM', durationMinutes: 17, endTime: '10:10 PM', startMinutesFromMidnight: 1313, endMinutesFromMidnight: 1330 },
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '10:10 PM', durationMinutes: 39, endTime: '10:49 PM', startMinutesFromMidnight: 1330, endMinutesFromMidnight: 1369 },
          { birdId: 'cock', star: 3, activity: 'Die', startTime: '10:49 PM', durationMinutes: 22, endTime: '11:11 PM', startMinutesFromMidnight: 1369, endMinutesFromMidnight: 1391 },
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '11:11 PM', durationMinutes: 17, endTime: '11:28 PM', startMinutesFromMidnight: 1391, endMinutesFromMidnight: 1408 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'crow', star: 10, activity: 'Rule', startTime: '9:14 PM', durationMinutes: 17, endTime: '9:31 PM', startMinutesFromMidnight: 1274, endMinutesFromMidnight: 1291 },
          { birdId: 'owl', star: 9, activity: 'Eat', startTime: '9:31 PM', durationMinutes: 39, endTime: '10:10 PM', startMinutesFromMidnight: 1291, endMinutesFromMidnight: 1330 },
          { birdId: 'vulture', star: 5, activity: 'Sleep', startTime: '10:10 PM', durationMinutes: 17, endTime: '10:27 PM', startMinutesFromMidnight: 1330, endMinutesFromMidnight: 1347 },
          { birdId: 'peacock', star: 5, activity: 'Walk', startTime: '10:27 PM', durationMinutes: 39, endTime: '11:06 PM', startMinutesFromMidnight: 1347, endMinutesFromMidnight: 1386 },
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '11:06 PM', durationMinutes: 22, endTime: '11:28 PM', startMinutesFromMidnight: 1386, endMinutesFromMidnight: 1408 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'cock', star: 1, activity: 'Die', startTime: '9:14 PM', durationMinutes: 22, endTime: '9:36 PM', startMinutesFromMidnight: 1274, endMinutesFromMidnight: 1296 },
          { birdId: 'crow', star: 1, activity: 'Rule', startTime: '9:36 PM', durationMinutes: 17, endTime: '9:53 PM', startMinutesFromMidnight: 1296, endMinutesFromMidnight: 1313 },
          { birdId: 'owl', star: 3, activity: 'Eat', startTime: '9:53 PM', durationMinutes: 39, endTime: '10:32 PM', startMinutesFromMidnight: 1313, endMinutesFromMidnight: 1352 },
          { birdId: 'vulture', star: 1, activity: 'Sleep', startTime: '10:32 PM', durationMinutes: 17, endTime: '10:49 PM', startMinutesFromMidnight: 1352, endMinutesFromMidnight: 1369 },
          { birdId: 'peacock', star: 2, activity: 'Walk', startTime: '10:49 PM', durationMinutes: 39, endTime: '11:28 PM', startMinutesFromMidnight: 1369, endMinutesFromMidnight: 1408 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'peacock', star: 4, activity: 'Walk', startTime: '9:14 PM', durationMinutes: 39, endTime: '9:53 PM', startMinutesFromMidnight: 1274, endMinutesFromMidnight: 1313 },
          { birdId: 'cock', star: 2, activity: 'Die', startTime: '9:53 PM', durationMinutes: 22, endTime: '10:15 PM', startMinutesFromMidnight: 1313, endMinutesFromMidnight: 1335 },
          { birdId: 'crow', star: 5, activity: 'Rule', startTime: '10:15 PM', durationMinutes: 17, endTime: '10:32 PM', startMinutesFromMidnight: 1335, endMinutesFromMidnight: 1352 },
          { birdId: 'owl', star: 4, activity: 'Eat', startTime: '10:32 PM', durationMinutes: 39, endTime: '11:11 PM', startMinutesFromMidnight: 1352, endMinutesFromMidnight: 1391 },
          { birdId: 'vulture', star: 3, activity: 'Sleep', startTime: '11:11 PM', durationMinutes: 17, endTime: '11:28 PM', startMinutesFromMidnight: 1391, endMinutesFromMidnight: 1408 },
        ],
      },
    },
  },

  // --- JAMA 8 (11:28 PM - 1:42 AM) --- 134 mins (Night)
  {
    jamaNumber: 8,
    isDay: false,
    title: 'Thei Pirai Jama 8',
    startTime: '11:28 PM',
    endTime: '1:42 AM',
    startMinutesFromMidnight: 1408,
    endMinutesFromMidnight: 1542,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'vulture', star: 4, activity: 'Walk', startTime: '11:28 PM', durationMinutes: 39, endTime: '12:07 AM', startMinutesFromMidnight: 1408, endMinutesFromMidnight: 1447 },
          { birdId: 'peacock', star: 2, activity: 'Die', startTime: '12:07 AM', durationMinutes: 22, endTime: '12:29 AM', startMinutesFromMidnight: 1447, endMinutesFromMidnight: 1469 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '12:29 AM', durationMinutes: 17, endTime: '12:46 AM', startMinutesFromMidnight: 1469, endMinutesFromMidnight: 1486 },
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '12:46 AM', durationMinutes: 39, endTime: '1:25 AM', startMinutesFromMidnight: 1486, endMinutesFromMidnight: 1525 },
          { birdId: 'owl', star: 1, activity: 'Sleep', startTime: '1:25 AM', durationMinutes: 17, endTime: '1:42 AM', startMinutesFromMidnight: 1525, endMinutesFromMidnight: 1542 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'owl', star: 2, activity: 'Sleep', startTime: '11:28 PM', durationMinutes: 17, endTime: '11:45 PM', startMinutesFromMidnight: 1408, endMinutesFromMidnight: 1425 },
          { birdId: 'vulture', star: 1, activity: 'Walk', startTime: '11:45 PM', durationMinutes: 39, endTime: '12:24 AM', startMinutesFromMidnight: 1425, endMinutesFromMidnight: 1464 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '12:24 AM', durationMinutes: 22, endTime: '12:46 AM', startMinutesFromMidnight: 1464, endMinutesFromMidnight: 1486 },
          { birdId: 'cock', star: 5, activity: 'Rule', startTime: '12:46 AM', durationMinutes: 17, endTime: '1:03 AM', startMinutesFromMidnight: 1486, endMinutesFromMidnight: 1503 },
          { birdId: 'crow', star: 4, activity: 'Eat', startTime: '1:03 AM', durationMinutes: 39, endTime: '1:42 AM', startMinutesFromMidnight: 1503, endMinutesFromMidnight: 1542 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'crow', star: 6, activity: 'Eat', startTime: '11:28 PM', durationMinutes: 39, endTime: '12:07 AM', startMinutesFromMidnight: 1408, endMinutesFromMidnight: 1447 },
          { birdId: 'owl', star: 4, activity: 'Sleep', startTime: '12:07 AM', durationMinutes: 17, endTime: '12:24 AM', startMinutesFromMidnight: 1447, endMinutesFromMidnight: 1464 },
          { birdId: 'vulture', star: 6, activity: 'Walk', startTime: '12:24 AM', durationMinutes: 39, endTime: '1:03 AM', startMinutesFromMidnight: 1464, endMinutesFromMidnight: 1503 },
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '1:03 AM', durationMinutes: 22, endTime: '1:25 AM', startMinutesFromMidnight: 1503, endMinutesFromMidnight: 1525 },
          { birdId: 'cock', star: 7, activity: 'Rule', startTime: '1:25 AM', durationMinutes: 17, endTime: '1:42 AM', startMinutesFromMidnight: 1525, endMinutesFromMidnight: 1542 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'cock', star: 10, activity: 'Rule', startTime: '11:28 PM', durationMinutes: 17, endTime: '11:45 PM', startMinutesFromMidnight: 1408, endMinutesFromMidnight: 1425 },
          { birdId: 'crow', star: 7, activity: 'Eat', startTime: '11:45 PM', durationMinutes: 39, endTime: '12:24 AM', startMinutesFromMidnight: 1425, endMinutesFromMidnight: 1464 },
          { birdId: 'owl', star: 5, activity: 'Sleep', startTime: '12:24 AM', durationMinutes: 17, endTime: '12:41 AM', startMinutesFromMidnight: 1464, endMinutesFromMidnight: 1481 },
          { birdId: 'vulture', star: 5, activity: 'Walk', startTime: '12:41 AM', durationMinutes: 39, endTime: '1:20 AM', startMinutesFromMidnight: 1481, endMinutesFromMidnight: 1520 },
          { birdId: 'peacock', star: 3, activity: 'Die', startTime: '1:20 AM', durationMinutes: 22, endTime: '1:42 AM', startMinutesFromMidnight: 1520, endMinutesFromMidnight: 1542 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'peacock', star: 1, activity: 'Die', startTime: '11:28 PM', durationMinutes: 22, endTime: '11:50 PM', startMinutesFromMidnight: 1408, endMinutesFromMidnight: 1430 },
          { birdId: 'cock', star: 3, activity: 'Rule', startTime: '11:50 PM', durationMinutes: 17, endTime: '12:07 AM', startMinutesFromMidnight: 1430, endMinutesFromMidnight: 1447 },
          { birdId: 'crow', star: 1, activity: 'Eat', startTime: '12:07 AM', durationMinutes: 39, endTime: '12:46 AM', startMinutesFromMidnight: 1447, endMinutesFromMidnight: 1486 },
          { birdId: 'owl', star: 1, activity: 'Sleep', startTime: '12:46 AM', durationMinutes: 17, endTime: '1:03 AM', startMinutesFromMidnight: 1486, endMinutesFromMidnight: 1503 },
          { birdId: 'vulture', star: 2, activity: 'Walk', startTime: '1:03 AM', durationMinutes: 39, endTime: '1:42 AM', startMinutesFromMidnight: 1503, endMinutesFromMidnight: 1542 },
        ],
      },
    },
  },

  // --- JAMA 9 (1:42 AM - 3:56 AM) --- 134 mins (Night)
  {
    jamaNumber: 9,
    isDay: false,
    title: 'Thei Pirai Jama 9',
    startTime: '1:42 AM',
    endTime: '3:56 AM',
    startMinutesFromMidnight: 1542,
    endMinutesFromMidnight: 1676,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '1:42 AM', durationMinutes: 22, endTime: '2:04 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1564 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '2:04 AM', durationMinutes: 17, endTime: '2:21 AM', startMinutesFromMidnight: 1564, endMinutesFromMidnight: 1581 },
          { birdId: 'cock', star: 1, activity: 'Eat', startTime: '2:21 AM', durationMinutes: 39, endTime: '3:00 AM', startMinutesFromMidnight: 1581, endMinutesFromMidnight: 1620 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '3:00 AM', durationMinutes: 17, endTime: '3:17 AM', startMinutesFromMidnight: 1620, endMinutesFromMidnight: 1637 },
          { birdId: 'owl', star: 1, activity: 'Walk', startTime: '3:17 AM', durationMinutes: 39, endTime: '3:56 AM', startMinutesFromMidnight: 1637, endMinutesFromMidnight: 1676 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'owl', star: 4, activity: 'Walk', startTime: '1:42 AM', durationMinutes: 39, endTime: '2:21 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1581 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '2:21 AM', durationMinutes: 22, endTime: '2:43 AM', startMinutesFromMidnight: 1581, endMinutesFromMidnight: 1603 },
          { birdId: 'peacock', star: 5, activity: 'Rule', startTime: '2:43 AM', durationMinutes: 17, endTime: '3:00 AM', startMinutesFromMidnight: 1603, endMinutesFromMidnight: 1620 },
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '3:00 AM', durationMinutes: 39, endTime: '3:39 AM', startMinutesFromMidnight: 1620, endMinutesFromMidnight: 1659 },
          { birdId: 'crow', star: 3, activity: 'Sleep', startTime: '3:39 AM', durationMinutes: 17, endTime: '3:56 AM', startMinutesFromMidnight: 1659, endMinutesFromMidnight: 1676 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '1:42 AM', durationMinutes: 17, endTime: '1:59 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1559 },
          { birdId: 'owl', star: 3, activity: 'Walk', startTime: '1:59 AM', durationMinutes: 39, endTime: '2:38 AM', startMinutesFromMidnight: 1559, endMinutesFromMidnight: 1598 },
          { birdId: 'vulture', star: 2, activity: 'Die', startTime: '2:38 AM', durationMinutes: 22, endTime: '3:00 AM', startMinutesFromMidnight: 1598, endMinutesFromMidnight: 1620 },
          { birdId: 'peacock', star: 3, activity: 'Rule', startTime: '3:00 AM', durationMinutes: 17, endTime: '3:17 AM', startMinutesFromMidnight: 1620, endMinutesFromMidnight: 1637 },
          { birdId: 'cock', star: 2, activity: 'Eat', startTime: '3:17 AM', durationMinutes: 39, endTime: '3:56 AM', startMinutesFromMidnight: 1637, endMinutesFromMidnight: 1676 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'cock', star: 6, activity: 'Eat', startTime: '1:42 AM', durationMinutes: 39, endTime: '2:21 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1581 },
          { birdId: 'crow', star: 2, activity: 'Sleep', startTime: '2:21 AM', durationMinutes: 17, endTime: '2:38 AM', startMinutesFromMidnight: 1581, endMinutesFromMidnight: 1598 },
          { birdId: 'owl', star: 6, activity: 'Walk', startTime: '2:38 AM', durationMinutes: 39, endTime: '3:17 AM', startMinutesFromMidnight: 1598, endMinutesFromMidnight: 1637 },
          { birdId: 'vulture', star: 1, activity: 'Die', startTime: '3:17 AM', durationMinutes: 22, endTime: '3:39 AM', startMinutesFromMidnight: 1637, endMinutesFromMidnight: 1659 },
          { birdId: 'peacock', star: 9, activity: 'Rule', startTime: '3:39 AM', durationMinutes: 17, endTime: '3:56 AM', startMinutesFromMidnight: 1659, endMinutesFromMidnight: 1676 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'peacock', star: 10, activity: 'Rule', startTime: '1:42 AM', durationMinutes: 17, endTime: '1:59 AM', startMinutesFromMidnight: 1542, endMinutesFromMidnight: 1559 },
          { birdId: 'cock', star: 9, activity: 'Eat', startTime: '1:59 AM', durationMinutes: 39, endTime: '2:38 AM', startMinutesFromMidnight: 1559, endMinutesFromMidnight: 1598 },
          { birdId: 'crow', star: 3, activity: 'Sleep', startTime: '2:38 AM', durationMinutes: 17, endTime: '2:55 AM', startMinutesFromMidnight: 1598, endMinutesFromMidnight: 1615 },
          { birdId: 'owl', star: 5, activity: 'Walk', startTime: '2:55 AM', durationMinutes: 39, endTime: '3:34 AM', startMinutesFromMidnight: 1615, endMinutesFromMidnight: 1654 },
          { birdId: 'vulture', star: 3, activity: 'Die', startTime: '3:34 AM', durationMinutes: 22, endTime: '3:56 AM', startMinutesFromMidnight: 1654, endMinutesFromMidnight: 1676 },
        ],
      },
    },
  },

  // --- JAMA 10 (3:56 AM - 6:10 AM) --- 134 mins (Night)
  {
    jamaNumber: 10,
    isDay: false,
    title: 'Thei Pirai Jama 10',
    startTime: '3:56 AM',
    endTime: '6:10 AM',
    startMinutesFromMidnight: 1676,
    endMinutesFromMidnight: 1810,
    columns: {
      vulture: {
        birdId: 'vulture',
        mainActivity: 'Rule',
        subPeriods: [
          { birdId: 'vulture', star: 10, activity: 'Rule', startTime: '3:56 AM', durationMinutes: 17, endTime: '4:13 AM', startMinutesFromMidnight: 1676, endMinutesFromMidnight: 1693 },
          { birdId: 'peacock', star: 9, activity: 'Eat', startTime: '4:13 AM', durationMinutes: 39, endTime: '4:52 AM', startMinutesFromMidnight: 1693, endMinutesFromMidnight: 1732 },
          { birdId: 'cock', star: 3, activity: 'Sleep', startTime: '4:52 AM', durationMinutes: 17, endTime: '5:09 AM', startMinutesFromMidnight: 1732, endMinutesFromMidnight: 1749 },
          { birdId: 'crow', star: 7, activity: 'Walk', startTime: '5:09 AM', durationMinutes: 39, endTime: '5:48 AM', startMinutesFromMidnight: 1749, endMinutesFromMidnight: 1788 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '5:48 AM', durationMinutes: 22, endTime: '6:10 AM', startMinutesFromMidnight: 1788, endMinutesFromMidnight: 1810 },
        ],
      },
      owl: {
        birdId: 'owl',
        mainActivity: 'Die',
        subPeriods: [
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '3:56 AM', durationMinutes: 22, endTime: '4:18 AM', startMinutesFromMidnight: 1676, endMinutesFromMidnight: 1698 },
          { birdId: 'vulture', star: 1, activity: 'Rule', startTime: '4:18 AM', durationMinutes: 17, endTime: '4:35 AM', startMinutesFromMidnight: 1698, endMinutesFromMidnight: 1715 },
          { birdId: 'peacock', star: 1, activity: 'Eat', startTime: '4:35 AM', durationMinutes: 39, endTime: '5:14 AM', startMinutesFromMidnight: 1715, endMinutesFromMidnight: 1754 },
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '5:14 AM', durationMinutes: 17, endTime: '5:31 AM', startMinutesFromMidnight: 1754, endMinutesFromMidnight: 1771 },
          { birdId: 'crow', star: 2, activity: 'Walk', startTime: '5:31 AM', durationMinutes: 39, endTime: '6:10 AM', startMinutesFromMidnight: 1771, endMinutesFromMidnight: 1810 },
        ],
      },
      crow: {
        birdId: 'crow',
        mainActivity: 'Walk',
        subPeriods: [
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '3:56 AM', durationMinutes: 39, endTime: '4:35 AM', startMinutesFromMidnight: 1676, endMinutesFromMidnight: 1715 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '4:35 AM', durationMinutes: 22, endTime: '4:57 AM', startMinutesFromMidnight: 1715, endMinutesFromMidnight: 1737 },
          { birdId: 'vulture', star: 7, activity: 'Rule', startTime: '4:57 AM', durationMinutes: 17, endTime: '5:14 AM', startMinutesFromMidnight: 1737, endMinutesFromMidnight: 1754 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '5:14 AM', durationMinutes: 39, endTime: '5:53 AM', startMinutesFromMidnight: 1754, endMinutesFromMidnight: 1793 },
          { birdId: 'cock', star: 1, activity: 'Sleep', startTime: '5:53 AM', durationMinutes: 17, endTime: '6:10 AM', startMinutesFromMidnight: 1793, endMinutesFromMidnight: 1810 },
        ],
      },
      cock: {
        birdId: 'cock',
        mainActivity: 'Sleep',
        subPeriods: [
          { birdId: 'cock', star: 2, activity: 'Sleep', startTime: '3:56 AM', durationMinutes: 17, endTime: '4:13 AM', startMinutesFromMidnight: 1676, endMinutesFromMidnight: 1693 },
          { birdId: 'crow', star: 1, activity: 'Walk', startTime: '4:13 AM', durationMinutes: 39, endTime: '4:52 AM', startMinutesFromMidnight: 1693, endMinutesFromMidnight: 1732 },
          { birdId: 'owl', star: 2, activity: 'Die', startTime: '4:52 AM', durationMinutes: 22, endTime: '5:14 AM', startMinutesFromMidnight: 1732, endMinutesFromMidnight: 1754 },
          { birdId: 'vulture', star: 3, activity: 'Rule', startTime: '5:14 AM', durationMinutes: 17, endTime: '5:31 AM', startMinutesFromMidnight: 1754, endMinutesFromMidnight: 1771 },
          { birdId: 'peacock', star: 4, activity: 'Eat', startTime: '5:31 AM', durationMinutes: 39, endTime: '6:10 AM', startMinutesFromMidnight: 1771, endMinutesFromMidnight: 1810 },
        ],
      },
      peacock: {
        birdId: 'peacock',
        mainActivity: 'Eat',
        subPeriods: [
          { birdId: 'peacock', star: 6, activity: 'Eat', startTime: '3:56 AM', durationMinutes: 39, endTime: '4:35 AM', startMinutesFromMidnight: 1676, endMinutesFromMidnight: 1715 },
          { birdId: 'cock', star: 4, activity: 'Sleep', startTime: '4:35 AM', durationMinutes: 17, endTime: '4:52 AM', startMinutesFromMidnight: 1715, endMinutesFromMidnight: 1732 },
          { birdId: 'crow', star: 4, activity: 'Walk', startTime: '4:52 AM', durationMinutes: 39, endTime: '5:31 AM', startMinutesFromMidnight: 1732, endMinutesFromMidnight: 1771 },
          { birdId: 'owl', star: 1, activity: 'Die', startTime: '5:31 AM', durationMinutes: 22, endTime: '5:53 AM', startMinutesFromMidnight: 1771, endMinutesFromMidnight: 1793 },
          { birdId: 'vulture', star: 9, activity: 'Rule', startTime: '5:53 AM', durationMinutes: 17, endTime: '6:10 AM', startMinutesFromMidnight: 1793, endMinutesFromMidnight: 1810 },
        ],
      },
    },
  },
];
