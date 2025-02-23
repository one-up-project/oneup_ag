import { RESTDataSource } from "@apollo/datasource-rest";

export class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/api/store/"; // URL del backend
  }

  // GET 
  async getRandomBags() {
    try {

      const data = await this.get("randomBags"); 
      console.log("Datos obtenidos en getRandomBags:", data); 
      return data;
    } catch (error) {
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

  async updateRandomBag(input) {
    const { random_bag_id, ...rest } = input;
    const response = await this.put(`randomBags/${random_bag_id}`, {
      body: rest, // Los datos a actualizar
      headers: {
        "Content-Type": "application/json", 
      },
    });
    return response;
  }
}

export default StoreAPI;