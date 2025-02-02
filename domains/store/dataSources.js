import { RESTDataSource } from "@apollo/datasource-rest";

export class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/api/store/"; // URL del backend
  }

  // GET 
  async getRandomBags() {
    return this.get("randomBags");
  }

  //POST 
  async createRandomBag(input) {
    return this.post("randomBags", {
      body: input, 
      headers: {
        "Content-Type": "application/json", 
      },
    });
  }
}

export default StoreAPI;