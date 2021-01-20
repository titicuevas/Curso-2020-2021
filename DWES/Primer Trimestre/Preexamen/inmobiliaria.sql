DROP TABLE IF EXISTS propietarios CASCADE;

CREATE TABLE propietarios
(
    id       bigserial    PRIMARY KEY
  , dni      varchar(255) NOT NULL UNIQUE
  , nombre   varchar(255) NOT NULL
  , telefono varchar(255) NOT NULL
)

DROP TABLE IF EXISTS inmuebles CASCADE;

CREATE TABLE inmuebles
(
    id             bigserial    PRIMARY KEY
  , descripcion    text         NOT NULL
  , propietario_id bigint       NOT NULL REFERENCES propietarios (id)
  , precio         numeric(6,2) NOT NULL
  , habitaciones   smallint     NOT NULL
  , banos          smallint     NOT NULL
  , lavavajillas   boolean      NOT NULL
  , garaje         boolean      NOT NULL
  , trastero       boolean      NOT NULL 
);
