DROP TABLE fichas CASCADE;
CREATE TABLE titulos (
    id bigserial PRIMARY KEY,
    titulo_id varchar (255) NOT NULL
);

DROP TABLE personas CASCADE;

CREATE TABLE personas 
(
    id bigint PRIMARY KEY
    , persona varchar (255) NOT NULL



);



DROP TABLE paises CASCADE;

CREATE TABLE paises
(
    id bigserial PRIMARY KEY
    , pais varchar(255) NOT NULL

);





DROP TABLE fichas CASCADE;
CREATE TABLE fichas (id bigserial PRIMARY KEY);
DROP TABLE fichas_titulos CASCADE;
CREATE TABLE fichas_titulos (
    fichas_id bigint NOT NULL REFERENCES ficha(id),
    titulo_id bigint NOT NULL REFERENCES titulo(id),
    , anyo    numeric(4)
    , duracion int
    ,
    PRIMARY KEY (ficha_id, titulo_id)
);


DROP TABLE reparto CASCADE;

CREATE TABLE reparto

(
    ficha_id bigint NOT NULL REFERENCES ficha (id)
    , persona_id bigint NOT NULL REFERENCES personas (id)


);

SELECT f.*, p.id, p.persona
    FROM fichas f
    LEFT JOIN reparto r
    





CREATE VIEW fichas_titulos AS
SELECT id, titulo_destacados_id
FROM fichas
UNION

SELECT

FROM fichas f JOIN resto_titulos rt
    ON f.id = rt.ficha_id
WHERE f.id = 24;





    id ficha  id titulo


    -------   ---------