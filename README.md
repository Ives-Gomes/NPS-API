<h1 align="center">
   😃 <a href="#"> NPS API </a>
</h1>

<h3 align="center">
    👍 Your API to collect NPS of your customers! 👎
</h3>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-red">
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

  <a href="https://www.linkedin.com/in/ives-moreira-8871b318a/">
    <img alt="made by Ives Moreira" src="https://img.shields.io/badge/made by-Ives Moreira-blueviolet">
  </a>
</p>

## About

😃 NPS API - is a way to collect NPS.
Project developed during **NLW - Next Level Week** offered by [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/). NLW is an online experience with lots of practical content, challenges and hacks where the content is available for a week.

---

## Features

- [x] We can:
  - [x] create users
  - [x] create surveys
  - [x] show surveys
  - [x] send mails
  - [x] show the answers
  - [x] show the NPS

---

## How it works

This project is Backend. MVC (Model, View, Controller) architecture was used.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node](https://nodejs.org/en/), and [Yarn](https://yarnpkg.com/). For create an user, send mails and see NPS use [Insomnia](https://insomnia.rest/download/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Start Backend (server)

```bash

# Clone this repository
$ git clone https://github.com/Ives-Gomes/NPS-API.git

# Access the project folder cmd/terminal
$ cd NPS-API

# Install the dependencies
$ yarn

# Create and migrate your database 
$ yarn typeorm migration:run

# Run the application in development mode
$ yarn dev

# The server will start at port: 3333 - go to http://localhost:3333

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Server** ([Node](https://nodejs.org/en/) + [Express](https://expressjs.com/))

- **[Express Async Errors](https://github.com/davidbanham/express-async-errors)**
- **[Handlebars](https://handlebarsjs.com/)**
- **[Node Mailer](https://nodemailer.com/about/)**
- **[Reflect Metadata](https://github.com/rbuckton/reflect-metadata)**
- **[SQLite3](https://www.sqlite.org/index.html)**
- **[Type ORM](https://typeorm.io/#/)**
- **[UUID](https://github.com/uuidjs/uuid)**
- **[Yup](https://github.com/jquense/yup)**
- **[Jest](https://jestjs.io/)**
- **[Ts Node Dev](https://github.com/TypeStrong/ts-node)**

> See the file [package.json](https://github.com/Ives-Gomes/NPS-API/blob/main/package.json)

#### **Utils**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
- API Test: **[Insomnia](https://insomnia.rest/)**

---

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`

---

## Author

<a href="https://www.linkedin.com/in/ives-moreira-8871b318a/">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4" width="100px;" alt="Ives Moreira"/>
 <br />
 <sub><b>Ives Moreira</b></sub></a> <a href="https://www.linkedin.com/in/ives-moreira-8871b318a/" title="Linkedin"></a>
 <br />

---

## License

This project is under the license [MIT](./LICENSE).

Made with 💜 by Ives Moreira.
