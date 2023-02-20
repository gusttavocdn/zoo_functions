import { species, employees } from '../data/zoo_data';
import { type EmployeeCoverage } from './types/Employee';

type CoverageOptions = {
  name?: string
  id?: string
};

function makeEmployeeCoverageByNameOrId(employee: string): EmployeeCoverage {
  const employeeInfo = employees.find(
    ({ id, lastName, firstName }) =>
      id === employee || lastName === employee || firstName === employee
  );

  if (!employeeInfo) throw new Error('Informações inválidas');

  const { firstName, lastName, id, responsibleFor } = employeeInfo;

  const employeeName = `${firstName} ${lastName}`;

  const speciesInfo = species.filter(({ id }) => responsibleFor.includes(id));
  const speciesNames = speciesInfo.map(({ name }) => name);
  const speciesLocations = [
    ...new Set(speciesInfo.map(({ location }) => location))
  ];

  return {
    id,
    fullName: employeeName,
    species: speciesNames,
    locations: speciesLocations
  };
}

function getEmployeesCoverage(
  options: CoverageOptions | undefined = undefined
): EmployeeCoverage[] | EmployeeCoverage {
  if (!options) {
    const employesCoverage = [] as EmployeeCoverage[];

    employees.forEach(({ id }) => {
      employesCoverage.push(makeEmployeeCoverageByNameOrId(id));
    });

    return employesCoverage;
  }

  if (options.id) return makeEmployeeCoverageByNameOrId(options.id);

  return makeEmployeeCoverageByNameOrId(options.name as string);
}

// getEmployeesCoverage({ name: 'Ardith' });

export { getEmployeesCoverage };
