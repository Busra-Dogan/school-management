import { ENDPOINTS, createAPIEndpoint } from "."

export default class StudentService {
    getAllStudents() {
        return createAPIEndpoint(ENDPOINTS.Class, "getallclass").fetch();
    }
    deleteStudent = (id) => {
        return createAPIEndpoint(ENDPOINTS.Class, "deleteClass").delete(id);
    }

    AddStudent = (contract) => {
        return createAPIEndpoint(ENDPOINTS.Student, "addStudent").post(contract);
    }
}