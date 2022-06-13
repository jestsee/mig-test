import httpCommon from "../http-common";

class UserDataService {
  getAll() {
    return httpCommon.get("/customers")
  }
  create(data) {
    return httpCommon.post("/customers")
  }
  update(id, data) {
    return httpCommon.put("/customers")
  }
  delete(id) {
    return httpCommon.delete("/customers")
  }
}

export default new UserDataService();