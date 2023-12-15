import { ENDPOINTS, createAPIEndpoint } from ".";

export default class TeacherSyllabusService {
  getAllTeacherSyllabusByTeacherId(id) {
    return createAPIEndpoint(
      ENDPOINTS.TeacherSyllabus,
      "getAllLessonsByTeacherId"
    ).fetchById(id);
  }

  updateTeacherSyllabus = (contract) => {
    return createAPIEndpoint(
      ENDPOINTS.TeacherSyllabus,
      "updateTeacherSyllabus"
    ).put(contract);
  };
}
