import mysql from "mysql2/promise"



const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "base"
})

console.log("database connected Successfully ", db.connect.name);


// - Database created
// db.execute(`create database base`); CREATE DATABASE DATABASENAME

//  - Checking databases
// console.log(await db.execute(`show databases`)); SHOE DATABASES

// await db.execute(`create table stores (
//         id int auto_increment primary key,
//         storeName varchar(100) not null,
//         storeAddress varchar(100) not null,
//         storeEmail varchar(100) not null unique,
//         rating int default 0
//     )`)


//  - Creating Table
// await db.execute(`
//     create table users (
//         id int auto_increment primary key,
//         name varchar(100) not null,
//         email varchar(100) not null unique,
//         role varchar(50) default 'user'
// )`)

// await db.execute(`
//     create table store (
//         id int auto_increment primary key,
//         storeName varchar(100) not null,
//         rating int
// )`)

// show tables
// console.log(await db.execute(`select * from users`));

export default db;