import { defaultSchedulePieces } from './schedule-pieces';

const snack1 = JSON.parse(
  JSON.stringify(defaultSchedulePieces.find((sp) => sp.name === 'Snack'))
);
const snack2 = JSON.parse(
  JSON.stringify(defaultSchedulePieces.find((sp) => sp.name === 'Snack'))
);
const breakfast = JSON.parse(
  JSON.stringify(defaultSchedulePieces.find((sp) => sp.name === 'Breakfast'))
);
const lunch = JSON.parse(
  JSON.stringify(defaultSchedulePieces.find((sp) => sp.name === 'Lunch'))
);
const dinner = JSON.parse(
  JSON.stringify(defaultSchedulePieces.find((sp) => sp.name === 'Dinner'))
);

export const defaultScheduleTemplates = [
  {
    name: 'Default',
    schedulePieces: [breakfast, snack1, lunch, snack2, dinner],
  },
];
