# back-end-tcc

Backend do projeto do meu projeto de TCC tem por objetivo escutar através de uma porta TCP a comunicação de dispositivos IOT no nosso caso o ESP32 para estabelecer a comunicação e envio de dados em uma JSON. 

## 🚀 Começando

Inicialmente o projeto se encontra básico necessitando apenas instalar as dependências do package.json

### 📋 Pré-requisitos

Para rodar o projeto é preciso instalar o nodejs o express e o typescript

Para instalar o node é preciso rodar o comando: 
```
npm init
```
Para instalar o express é preciso rodar o comando:
```
npm install express
```
Para instalar o typescript é preciso rodar o comando:
```
npm install -D typescript
```
E é necessário instalar o mongoose:

```
npm install mongoose or yarn add mongoose
```

### 🔧 Instalação

Com os pré requisitos devidamente instalados vamos aos pacotes necessários para o servidor poder se comunicar com o esp32 e com o front-end

Para se comunicar com o Esp32 é necessário instalar o pacote do websocket.io

```
npm install webocket.io or yarn add websocket.io
```
Para se comunicar com o Front=End é necessário instalar o pacote do cors

```
npm install cors or yarn add cors
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

Para rodar o projeto é só executar os comandos

```
npm start or yarn dev
```

### 🔩 Resultado esperado

Ao executar a rota Post o resultado esperado é:

```
{
	"result": {
		"id": "6570867b687985bf18aa0e05",
		"idESP": "Esp32",
		"latitude": -9.41328,
		"longitude": -40.516186,
		"speed": 2.19,
		"date": "2023-12-06T14:34:28.000Z"
	}
}
```

## 🛠️ Construído com

* [ExpressJs]([http://www.dropwizard.io/1.0.2/docs/](https://expressjs.com/pt-br/starter/installing.html)) - O framework web usado
* [Socket I/O]([https://maven.apache.org/](https://socket.io/pt-br/get-started/chat)) - Sockets
* [Prisma](https://www.prisma.io/docs/getting-started) - ORM do banco de dados

## 📌 Versão

Essa é a primeira versão usado para o trabalho de conclusão de curso.

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Autor** - *Trabalho de Conclusão de Curso* - [Mateus Tamarindo Gonzaga](https://github.com/mateusTG)

## 📄 Esse projeto é o backend do meu Projeto de TCC 

Este projeto encontra-se registrado na biblioteca da UNIVASF do campus de Juazeiro

## 🎁 Expressões de gratidão
* Esse projeto encontra-se disponível para evolução, sintam-se a vontade em evoluí-lo



---
