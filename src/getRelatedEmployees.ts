import { employees } from '../data/zoo_data';

function isManager(id: string): boolean {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId: string): string[] {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managedEmployeesNames = employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return managedEmployeesNames;
}

export { isManager, getRelatedEmployees };
