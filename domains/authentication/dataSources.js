import { RESTDataSource } from "@apollo/datasource-rest";

//conexión con el search_ms
export class Authentication extends RESTDataSource {
  constructor() {
    super();
    // this.baseURL = "http://localhost:7000/"; // URL del backend
    
     this.baseURL = "https://oneup-auth-ms-500667615440.us-central1.run.app"; // URL del backend
  }

    // GET 
    async tokenUser() {
      try {
        const data = await this.get("/backend/verify"); 
        //console.log("Datos obtenidos en tokenUser:", data); 
        return data;
      } catch (error) {
        throw new Error("No se pudieron obtener el token");
      }
    }

    // Método POST
    async loginUser(input) {
      try {
        return this.post("/backend/login", {
          body: input, 
          headers: { "Content-Type": "application/json" },
        }); // Pasamos input directamente
      } catch (error) {
        console.log("Error en createUser:", error); 
        //console.error(error);
      }
    }

  // Método POST
  // http://localhost:4000/register

  async createUser(input) {
    try {
      return this.post("/backend/register", {
        body: input, 
        headers: { "Content-Type": "application/json" },
      }); // Pasamos input directamente
    } catch (error) {
      console.log("Error en createUser:", error); 
      console.error(error.message);
      //console.error(error);
    }
  }


  async updateUser(input) {
    try {
      return this.post("/backend/updateUser", {
        body: input, 
        headers: { "Content-Type": "application/json" },
      }); // Pasamos input directamente
    } catch (error) {
      console.log("Error en updateUser:", error); 
      //console.error(error);
    }
  }

}

export default Authentication;
//to do: conexión otros micro servicios
