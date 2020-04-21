# guest book test app

written in node.js (express, sequalize.js postgerSQL)

## Installation

Use the package manager [npm](https://npmjs.com/) to install modules.

```bash
npm i
```
## Migrations

Use migrations right after installing node modules

```bash
nom run migrate
```
so now you have 2 tables created ``users`` and ``posts``

## Usage

root routes
```shell
/users
/posts
```
 User postman exported collection (guestBook.postman_collection.json) for full endpoints testing