import HttpService from "../http-service";

class UserDataService {
  
  newToken() {
    HttpService.generateNewToken()
  }
  getAll() {
    return HttpService.httpService().get('/customers')
  }
  delete(id) {
    console.log("delete terpanggil");
    return HttpService.httpService().delete("/customers", {
      data: {
        id: id
      }
    })
  }
  create(data) {
    return HttpService.httpService().post("/customers")
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
    return HttpService.httpService().put("/customers", {
      id, 
      name, 
      address, 
      country, 
      phone_number, 
      job_title, 
      status
    })
  }
}

export default new UserDataService();