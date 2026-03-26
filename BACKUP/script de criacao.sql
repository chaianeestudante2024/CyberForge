

-- CRIANDO O BANCO DE DADOS --

create database sa_bancada;
use sa_bancada;


-- CRIANDO A TABELA DE USUÁRIOS -- 
create table Usuarios (
id int primary key not null unique auto_increment,
nome varchar(100) not null,
sobrenome varchar(100) not null,
data_nascimento date not null,
tipo_usuario varchar(45) not null,
email varchar(100) not null,
senha varchar(100) not null
);


-- CRIANDO A TABELA DE BANCADAS --
create table Bancadas(
id int primary key not null unique auto_increment,
nome varchar(45) not null,	
vrms decimal(10,2) not null,
irms decimal(10,2) not null,
appm decimal(10,2) not null,
humi decimal(10,2) not null,
ai00 decimal(10,2) not null,
is_ativo binary not null
);


-- INSERINDO DADOS NAS TABELAS DE USUARIOS E DAS BANCADAS --
insert into Usuarios(nome,sobrenome,data_nascimento,tipo_usuario,email,senha)
values("Sávio","Zoboli",'2001-04-06',"admin","savio.zoboli@gmail.com","10857");
insert into Bancadas(nome,vrms,irms,appm,humi,ai00,is_ativo)
values("Expedição",15,1,2,33,3,true);

select * from Usuarios;
select * from Bancadas;
