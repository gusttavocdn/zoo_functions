import { type employees } from '../../data/zoo_data';

type Employee = typeof employees[0];

type EmployeeCoverage = {
  id: string
  fullName: string
  species: string[]
  locations: string[]
};

export type { Employee, EmployeeCoverage };
