# react-elixir-skeleton
Base para projetos em React.

- React.JS
- MobX.JS
- Gulp
- Laravel Elixir

## Índice

- [Setup](#setup)
- [Development](#development)
- [Deploy](#deploy)

## Setup

Para rodas o projeto é necessário que tenha instalado o ```npm``` e o ```gulp```.

#### Intalação NPM:

O ```npm``` é o gerenciador de pacotes do Node.js, ele já vem instalado ao intalar o Node.js. É recomendada a instalação do Node.js através do Node Version Manager para controle de versão:

- [Node Version Manager (Recomendado)](https://github.com/creationix/nvm)
- [Node.js Homepage](https://nodejs.org)

#### Instalação do Gulp:

Após a instalação do ```npm``` podemos instalar o ```gulp``` com o seguinte comando:

```sh
$ npm install --global gulp-cli
```

#### Instalação das dependências do projeto:

Após a instalação do ```gulp``` e do ```npm``` é preciso instalar as dependências do projeto através do comando dentro da pasta do projeto:

```sh
$ npm install
```

## Development

Para rodar o projeto para desenvolvimento só rodar a task watch do gulp:

```sh
$ gulp watch
```

Este comando irá criar um servidor local http para desenvolvimento no endereço ```localhost:3000```.

## Deploy

Para criar a build de produção do projeto é só rodar o comando:

```sh
$ gulp --production
```

Este comando irá gerar os arquivos otimizados para o servidor de produção.
