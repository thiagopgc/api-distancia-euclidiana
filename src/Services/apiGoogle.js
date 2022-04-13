import axios from "axios";
import { ModelLocalizacao } from "../Model/ModelLocalizacao.js";
import * as dotenv from "dotenv";
class ApiGoogle {
  /**
   *
   * @param {string} enderecos
   * @returns Object
   */
  static async geolocalizacao(enderecos) {
    const endCode = encodeURIComponent(enderecos);
    const apiKey = process.env.API_KEY;
    const request = (
      await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${endCode}&key=${apiKey}`
      )
    ).data;
    return new ModelLocalizacao(
      request.results[0].geometry.location,
      enderecos
    );
  }
  /**
   *
   * @param  {...any} params
   * @returns {Array<Object>}
   */
  static async cordernarUmGrupo(...params) {
    const agrupar = [];
    for (let i = 0; i < params.length; i++) {
      let endereco = await this.geolocalizacao(params[i]);

      agrupar.push(endereco);
    }
    return agrupar;
  }
}

export default ApiGoogle;
