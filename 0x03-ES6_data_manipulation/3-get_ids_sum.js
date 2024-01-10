export default function getStudentIdsSum(getListStudents) {
  return getListStudents
    .map((x) => x.id)
    .reduce((a, b) => (a + b));
}
