# back-end-tcc

Backend do projeto do meu projeto de TCC tem por objetivo escutar através de uma porta TCP a comunicação de dispositivos IOT no nosso caso o ESP32 para estabelecer a comunicação e envio de dados em uma JSON. 

## 🚀 Começando

Inicialmente o projeto se encontra básico necessitando apenas instalar as dependências do package.json

### 📋 Pré-requisitos

Para rodar o projeto é preciso instalar o nodejs o express e o typescript

Para instalar o node é preciso rodar o comando: 
```
Por hora sem depencdências
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

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
