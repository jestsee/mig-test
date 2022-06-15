import HttpService from "../http-service";

class UserDataService {

  newToken() {
    HttpService.generateNewToken()
  }
  getAll() {
    return HttpService.httpService().get('/customers')
  }
  create(data) {
    return HttpService.post("/customers")
  }
  update(
    id, 
    name, 
    address, 
    country, 
    phone_number, 
    job_title, 
    status
    ) {
    return HttpService.put("/customers", {
      id, 
      name, 
      address, 
      country, 
      phone_number, 
      job_title, 
      status
    })
  }
  delete(id) {
    console.log("delete terpanggil");
    return HttpService.delete("/customers", {
      id
    })
  }
}

export default new UserDataService();