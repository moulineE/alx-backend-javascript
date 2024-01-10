export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const Sgrade = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: Sgrade ? Sgrade.grade : 'N/A' };
    });
}
