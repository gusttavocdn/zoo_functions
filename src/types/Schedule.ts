import { type SpeciesNames } from './Specie';

type Days =
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'
  | 'Monday';

type DaySchedule = {
  officeHour: string
  exhibition: string[] | string
};

type WeekSchedule = Record<Days, DaySchedule>;

type ScheduleTarget = SpeciesNames | Days;

export type { Days, DaySchedule, WeekSchedule, ScheduleTarget };
