import {
  DistanciaFormatada,
  Path,
  Resposta,
} from "../Model/ModelLocalizacao.js";
class Calculo {
  /**
   *
   * @param {number} x1
   * @param {number} x2
   * @param {number} y1
   * @param {number} y2
   * @returns number
   */
  static distanciaEuclidiana(x1, x2, y1, y2) {
    return Math.sqrt((Math.pow(x1 - x2), 2) + Math.pow(y1 - y2, 2));
  }
  /**
   *
   * @param {Array<object>} arr
   * @returns {Array<object>}
   */
  static distanciaLista(arr) {
    const lista = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let value = this.distanciaEuclidiana(
          arr[i].coordenada.lat,
          arr[j].coordenada.lat,
          arr[i].coordenada.lng,
          arr[j].coordenada.lng
        );
        let path = new Path(arr[i].endereco, arr[j].endereco);
        let distanciaFormatada = new DistanciaFormatada(path, value);
        lista.push(distanciaFormatada);
      }
    }
    return lista;
  }
  /**
   *
   * @param {Array<object>} arr
   * @returns {Array<object>}
   */
  static pedidoDistancia(arr) {
    let pedidoLista = this.distanciaLista(arr).sort((a, b) => {
      if (a.distancia < b.distancia) {
        return -1;
      } else if (a.distancia > b.distancia) {
        return 1;
      } else {
        return 0;
      }
    });
    return pedidoLista;
  }
  /**
   *
   * @param {Array<object>} arr
   * @returns Object
   */
  static distanciaMaxMin(arr) {
    let pedido = this.pedidoDistancia(arr);
    let remove = 0;
    pedido = pedido.filter((item) => {
      return item.distancia !== remove;
    });
    let max = pedido.length - 1;
    return new Resposta(pedido[0], pedido[max]);
  }
}

export default Calculo;
