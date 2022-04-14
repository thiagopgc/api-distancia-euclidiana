# api-distancia-euclidiana

Esse desafio tem como objetivo desenvolver uma RestAPI que receba endereços, implementa calculos das distâncias euclidianas entre elas de acordo com suas coordenadas geográficas e retorna os endereços mais proximos entre si e os mais distantes também.
Consumi a API externa [Geocoding](https://developers.google.com/maps/documentation/geocoding/start) para obter as coordenadas geográficas. Este projeto foi realizado utilização a estrutura de pastas MVC. 

## Pré requisitos:
- Node.js v16.14.0
- NPM v8.3.1

## Pacotes:
### Dependencias: 
- [Express](https://www.npmjs.com/package/express): v4.17.3
- [Axios](https://www.npmjs.com/package/axios): v0.26.1
- [CORS](https://www.npmjs.com/package/cors): v2.8.5
- [Dotenv](https://www.npmjs.com/package/dotenv): v16.0.0

## Utilização / Instalação via terminal:
Passo 1 - Clone o repositório:
```
git clone https://github.com/thiagopgc/api-distancia-euclidiana.git
```

Passo 2 - Abra a pasta:
```
cd api-distancia-euclidiana
```

Passo 3 - Instale os pacotes:
```
npm install
```

Passo 4 - Inicie o servidor:
```
npm start
```

```

Obs: Para que a sua aplicação funcione, no arquivo ".env.example" está o template que deve ser utilizado para usar a KEY propria daquele que está baixando essa aplicação, e substituindo ".env.example" para somente ".env".
```
KEY = 'Sua chave google.'
```


## Entrada Esperada:
```
http://localhost:3000/?address1=Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030&address2=Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,+20090​003&address3=Praça+Mal.+Âncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021​200
```



## Saida Esperada:
Exemplo utilizando 4 endereços:
```
{
	"proximo": {
		"path": {
			"pontoIncial": "Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030",
			"destino": "Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030"
		},
		"distancia": 1.4142135623730951
	},
	"longe": {
		"path": {
			"pontoIncial": "Praça+Mal.+Âncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021​200",
			"destino": "Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030"
		},
		"distancia": 1.4143193831948426
	}
}

```




