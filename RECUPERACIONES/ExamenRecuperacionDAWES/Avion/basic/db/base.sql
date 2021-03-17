------------------------------
-- Archivo de base de datos --
------------------------------

DROP TABLE IF EXISTS usuarios CASCADE;

CREATE TABLE usuarios
(
    id     bigserial    PRIMARY KEY
  , nombre varchar(255)  NOT NULL UNIQUE 
  , passw varchar(255) NOT NULL
);

DROP TABLE IF EXISTS aeropuerto CASCADE;

CREATE TABLE aeropuerto
(
    id       bigserial    PRIMARY KEY
  , codigo   varchar(3)  NOT NULL 
  , denominacion  varchar(255) NOT NULL
);



DROP TABLE IF EXISTS reservas CASCADE;

CREATE TABLE reservas
(
    id       bigserial    PRIMARY KEY
  , usuario_id   varchar(255)  NOT NULL UNIQUE
  , vuelo_id  varchar(255) NOT NULL UNIQUE
, asiento  varchar(255) NOT NULL UNIQUE
);



INSERT INTO usuarios (nombre)
VALUES ('Antonio')
     , ('Juan')
     , ('Pepe')
     , ('María');

INSERT INTO reservas (usuarios_id, vuelo_id, asiento)
VALUES ('123', 'abc', 1 )
     , ('1234', 'abcd',2)
     , ('12345', 'abcde',3)
     , ('123456', 'abcdef',4)