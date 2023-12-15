import { ENDPOINTS, createAPIEndpoint } from ".";

export default class StudentNoteService {
  getStudentLectureById(id) {
    return createAPIEndpoint(
      ENDPOINTS.StudentLectureNote,
      "notesbystudent"
    ).fetchById(id);
  }
  updateStudentLectureNotes(notes) {
    return createAPIEndpoint(
      ENDPOINTS.StudentLectureNote,
      "updateStudentInfo"
    ).put(notes);
  }
}
