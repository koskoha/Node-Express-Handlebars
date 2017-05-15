create database burgers_db;
use burgers_db;

create table burger (
id int auto_increment not null,
burger_name varchar(255) not null,
devoured boolean default false,
date timestamp,
primary key(id)
)