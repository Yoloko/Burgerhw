drop database if exists burger;

CREATE DATABASE burger;

USE burger;

create table burger(

id int not null AUTO_INCREMENT,
burger_name varchar (50) not null,
devoured boolean default false,
PRIMARY KEY(ID)

