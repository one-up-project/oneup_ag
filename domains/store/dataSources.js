import { RESTDataSource } from "@apollo/datasource-rest";

export class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/api/store/"; // URL de tu backend
  }

  // Método GET (correcto)
  async getRandomBags() {
    return this.get("randomBags");
  }

  // Método POST corregido
  async createRandomBag(input) {
    return this.post("randomBags", input); // Pasamos input directamente
  }
}
