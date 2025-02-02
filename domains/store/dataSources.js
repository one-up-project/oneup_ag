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
    return this.post("randomBags", {
      body: input, // Pasamos el cuerpo de la solicitud
      headers: {
        "Content-Type": "application/json", // Asegúrate de que este header esté presente
      },
    });
  }
}

export default StoreAPI;