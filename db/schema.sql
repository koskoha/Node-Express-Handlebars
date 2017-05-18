use jised02gab4d01br;

create table burger (
id int auto_increment not null,
burger_name varchar(255) not null,
devoured boolean default false,
date timestamp default CURRENT_TIMESTAMP,
primary key(id)
)