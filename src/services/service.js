import HttpService from "../http-service";

class UserDataService {
  newToken() {
    HttpService.generateNewToken();
  }
  getAll() {
    return HttpService.httpService().get("/customers");
  }
  delete(id) {
    console.log("delete terpanggil");
    return HttpService.httpService().delete("/customers", {
      data: {
        id: id,
      },
    });
  }
  create(name, address, country, phone_number, job_title, status) {
    return HttpService.httpService().post("/customers", {
      name: name,
      address: address,
      country: country,
      phone_number: phone_number,
      job_title: job_title,
      status: status === "Active",
    });
  }
  update(id, name, address, country, phone_number, job_title, status) {
    return HttpService.httpService().put("/customers", {
      id: id,
      name: name,
      address: address,
      country: country,
      phone_number: phone_number,
      job_title: job_title,
      status: status === "Active",
    });
  }
}

export default new UserDataService();
