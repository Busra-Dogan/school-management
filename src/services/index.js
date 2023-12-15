import axios from "axios";

export const BASE_URL = "https://localhost:7185/";

export const ENDPOINTS = {
  Class: "class",
  Student: "Student",
  StudentLectureNote: "StudentLectureNote",
  Teacher: "Teacher",
  TeacherSyllabus: "TeacherSyllabus",
  Parameter: "Parameter",
};

export const createAPIEndpoint = (endpoint, spesificurl, data) => {
  let url = BASE_URL + "api/" + endpoint + "/" + spesificurl;

  return {
    fetch: () => axios.get(url),
    fetchById: (id) => axios.get(url + "/" + id),
    post: (newRecord) => axios.post(url, newRecord),
    put: (updatedRecord) => axios.put(url, updatedRecord),
    delete: (id) => axios.delete(url + "/" + id),
  };
};
