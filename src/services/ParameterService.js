import { ENDPOINTS, createAPIEndpoint } from ".";

export default class ParameterService {
  getParameterByParamType(paramtype) {
    return createAPIEndpoint(
      ENDPOINTS.Parameter,
      "getParameterByParamType"
    ).fetchById(paramtype);
  }
}
