import { ENDPOINTS, createAPIEndpoint } from ".";

export default class TeacherService {
  getAllTeachers() {
    return createAPIEndpoint(ENDPOINTS.Teacher, "getall").fetch();
  }

  addTeacher(contract) {
    return createAPIEndpoint(ENDPOINTS.Teacher, "addTeacher").post(contract);
  }
}
