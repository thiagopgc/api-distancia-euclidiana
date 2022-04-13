import ApiGoogle from "../Services/apiGoogle.js";
import Calculo from "../utils/calculo.js";
class Distancias {
  static router(app) {
    app.get("/", (req, res) => {
      const queries = req.query;
      const queriesValues = Object.values(queries);
      ApiGoogle.cordernarUmGrupo(...queriesValues)
        .then((response) => {
          const result = Calculo.distanciaMaxMin(response);
          res.status(200).json(result);
        })
        .catch((e) => {
          res.status(400).json(e.message);
        });
    });
  }
}

export default Distancias;
