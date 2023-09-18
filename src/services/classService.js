import axios from "axios"
import { ENDPOINTS,createAPIEndpoint } from "."

export default class ClassService{
     getAllClasses(){
        return createAPIEndpoint(ENDPOINTS.Class, "getallclass").fetch();
     }
     deleteClasses(id){
      return createAPIEndpoint(ENDPOINTS.Class, "deleteClass").delete(id);

      deleteClasses(id){
         return createAPIEndpoint(ENDPOINTS.Class, "deleteClass").delete(id);
   }
}