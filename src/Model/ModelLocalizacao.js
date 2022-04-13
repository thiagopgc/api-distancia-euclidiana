export class ModelLocalizacao {
  constructor(coordenada, endereco) {
    (this.coordenada = coordenada), (this.endereco = endereco);
  }
}

export class Path {
  constructor(pontoIncial, destino) {
    (this.pontoIncial = pontoIncial), (this.destino = destino);
  }
}

export class DistanciaFormatada {
  constructor(path, distancia) {
    (this.path = path), (this.distancia = distancia);
  }
}

export class Resposta {
  constructor(proximo, longe) {
    (this.proximo = proximo), (this.longe = longe);
  }
}
