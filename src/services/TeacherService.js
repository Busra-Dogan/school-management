import { ENDPOINTS, createAPIEndpoint } from ".";

export default class TeacherService {
  getAllTeachers() {
    return createAPIEndpoint(ENDPOINTS.Teacher, "getall").fetch();
  }
}
