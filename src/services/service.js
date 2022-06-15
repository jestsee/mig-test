import HttpService from "../http-service";

class UserDataService {

  newToken() {
    HttpService.generateNewToken()
  }
  getAll() {
    return HttpService.httpService().get('/customers')
  }
  // create(data) {
  //   return http.post("/customers")
  // }
  // update(id, data) {
  //   return http.put("/customers")
  // }
  // delete(id) {
  //   return http.delete("/customers")
  // }
}

export default new UserDataService();