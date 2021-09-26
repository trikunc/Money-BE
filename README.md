# moleculer-maney

This is a [Moleculer](https://moleculer.services/)-based microservices project. 

## SETUP

```sh
cp .env.example .env
```

### Requirement
Maney backend building with moleculer based microservices project.
- [NodeJS ( 16.x)](https://nodejs.org/en/download/) 
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [Firebase](https://firebase.google.com/)

### How to get `MANEY_GOOGLE_APPLICATION_CREDENTIALS`.

In the Firebase console, open Settings > Service Accounts.

Click Generate New Private Key, then confirm by clicking Generate Key.

Securely store the JSON file containing the key.

Download `service-account-file.json` file.

### Run the project
Start this project with run :

```sh
$ npm install
```

### Docker

```sh
$ ./up.sh
```

### Database

Install sequelize cli

```sh
$ sequelize db:migrate --env init
$ sequelize db:seed:all --env init
```
