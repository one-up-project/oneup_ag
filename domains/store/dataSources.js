import { RESTDataSource } from "@apollo/datasource-rest";

export class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/api/store/"; // URL del backend
  }

  // GET 
  async getRandomBags() {
    try {
      console.log("Ejecutando getRandomBags desde StoreAPI"); // Log de depuración
      const data = await this.get("randomBags"); // Obtener datos correctamente
      console.log("Datos obtenidos en getRandomBags:", data); // Log para depuración
      return data;
    } catch (error) {
      console.error("Error en getRandomBags:", error.message);
      throw new Error("No se pudieron obtener las random bags");
    }
  }

  //Delete
  async deleteRandomBag(random_bag_id) {
    return this.delete(`randomBags/${random_bag_id}`);
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