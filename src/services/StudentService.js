import { ENDPOINTS, createAPIEndpoint } from "."

export default class StudentService {
    getAllStudents() {
        return createAPIEndpoint(ENDPOINTS.Student, "getall").fetch();
    }

    deleteStudent = (id) => {
        return createAPIEndpoint(ENDPOINTS.Class, "deleteClass").delete(id);
    }

    AddStudent = (contract) => {
        return createAPIEndpoint(ENDPOINTS.Student, "addStudent").post(contract);
    }

    GetStudentById = (id) => {
        return createAPIEndpoint(ENDPOINTS.Student, "getStudentById").fetchById(id);
    }

    UpdateStudent = (contract) => {
        return createAPIEndpoint(ENDPOINTS.Student, "updateStudentInfo").put(contract);
    }
}