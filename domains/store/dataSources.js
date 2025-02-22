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

  async reserveRandomBag(user_id, random_bag_id) {
    return this.post("randomBags/reserve", {
      body: { user_id, random_bag_id },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getOrdersByUser(user_id) {
    try {
      const data = await this.get(`orders/get-orders-by-user/${user_id}`);
      console.log("Datos obtenidos en getOrderByUser:", data);
      return data;
    } catch (error) {
      throw new Error("No se pudieron obtener las ordenes");
    }
  }

  async getRandomBag(random_bag_id) {
    try {
      const data = await this.get(`randomBags/${random_bag_id}`);
      console.log("Datos obtenidos en getRandomBagById:", data);
      return data;
    } catch (error) {
      throw new Error("No se pudieron obtener la random bag");
    }
  }
}

export default StoreAPI;
