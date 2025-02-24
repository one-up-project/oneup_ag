import { RESTDataSource } from "@apollo/datasource-rest";
import dotenv from "dotenv";
dotenv.config();

//conexion con el search_ms
export class Search_ms extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${process.env.URL_SEARCH_MS}/search-ms/stores/`;
  }

  //obtener tiendas cercanas a la ubicacion del usuario (2km de rango)
  async getNearStores(lat, lon) {
    return this.get(`get-near-stores/${lat}/${lon}`);
  }

  //obtener tiendas a partir de su nombre o categoria
  async getStoresByName(name, category) {
    return this.get(`get-stores-by-name/${name}/${category}`);
  }

  //obtener tiendas a partir de su id
  async getStore(id) {
    return this.get(`get-store-by-id/${id}`);
  }
}

//to do: conexion otros microservicios
