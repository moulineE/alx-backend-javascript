export default function createIteratorObject(report) {
  const employees = [];
  for (const employeeList of Object.values(report.allEmployees)) {
    employees.push(...employeeList);
  }
  return employees;
}
