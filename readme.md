# MySql Example App
Basic MySql instance with inserting and selecting from a table
containerized in Docker

## To Begin
Make sure you have Docker installed on your system
[Click here to download for Windows from the Docker homepage.](https://www.docker.com/)

Install all relevent dependencies
```sh
npm install
```

Then, run 
```sh
docker run --publish 3306:3306 --name node-mysql --env MYSQL_ROOT_PASSWORD=PASSWORD --detach mysql:5
```
to create a docker container with a MySql instance

---

[Here is a link to the documentation for Docker's MySql Image](https://hub.docker.com/_/mysql)

--- 
###### Be sure to create a .env file to hold your enviornment variables

---

## Interacting with your Database
To insert the default task to your database's table, run
```sh
node tasks.js
```
The first time this runs, it will create the database and its subsequent table in your MySql container instance, and ignore the duplicate creation errors on subsequent calls

To insert a custom task to the database, use 
```sh
node insert.js "Your task here."
```
See if you can create your own custom functionality with your new database!
[Here is a reference to the MySql npm package documentation](https://www.npmjs.com/package/mysql)

## When you are finished playing with your Docker instance
Stop your container
```sh
docker stop <ContainerID>
```
and remove it with
```sh
docker rm --force <ContainerID>
```
You can check your current Docker containers and their ID's with the desktop app downloaded from the [Docker Website](https://www.docker.com/), or by running
```sh
docker ps
```

---

##### Enjoy, and don't forget to reference proper documentation
https://www.docker.com/

https://hub.docker.com/_/mysql

https://www.npmjs.com/package/mysql

---

###### This short and simple example project was created with the help of Node.js cookbook (4th Edition) by *Bethany Griggs*
*I take no credit for this code and encourage everyone to [check out her book](https://www.packtpub.com/product/node-cookbook-fourth-edition/9781838558758) as it is a great way to learn Node.js*