import { employees } from '../data/zoo_data';
import { type Employee } from './types/Employee';

function getEmployeeByName(employeeName: string): Employee | undefined {
  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName
  );
}

export { getEmployeeByName };
