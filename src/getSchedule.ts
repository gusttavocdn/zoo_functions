import { species, hours } from '../data/zoo_data';
import {
  type Days,
  type DaySchedule,
  type WeekSchedule,
  type ScheduleTarget
} from './types/Schedule';
import { type Specie, type SpeciesNames } from './types/Specie';

const SPECIES_NAMES = species.map(({ name }) => name);
const DAYS = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday'
];

function createDaySchedule(day: Days): DaySchedule {
  const { open, close } = hours[day];

  const officeHour =
    day === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close}pm`;

  const exhibition =
    day === 'Monday'
      ? 'The zoo will be closed!'
      : species
        .filter(({ availability }) => availability.includes(day))
        .map(({ name }) => name);

  return { officeHour, exhibition };
}

function createWeekSchedule(): WeekSchedule {
  const schedule = {} as WeekSchedule;

  DAYS.forEach((day) => {
    schedule[day as keyof WeekSchedule] = createDaySchedule(day as Days);
  });

  return schedule;
}

function getAnimalAvailability(specie: SpeciesNames): string[] {
  const { availability } = species.find(
    ({ name }) => name === specie
  ) as Specie;
  return availability;
}

function getSchedule(
  scheduleTarget: ScheduleTarget | undefined = undefined
): any {
  if (!scheduleTarget) return createWeekSchedule();

  if (SPECIES_NAMES.includes(scheduleTarget)) {
    return getAnimalAvailability(scheduleTarget as SpeciesNames);
  }

  const daySchedule = createDaySchedule(scheduleTarget as Days);
  return { [scheduleTarget]: daySchedule };
}

export { getSchedule };
