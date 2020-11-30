DROP TABLE fichas CASCADE;
CREATE TABLE titulos (
    id bigserial PRIMARY KEY,
    titulo_id varchar (255) NOT NULL
);
DROP TABLE fichas CASCADE;
CREATE TABLE fichas (id bigserial PRIMARY KEY);
DROP TABLE fichas_titulos CASCADE;
CREATE TABLE fichas_titulos (
    fichas_id bigint NOT NULL REFERENCES ficha(id),
    titulo_id bigint NOT NULL REFERENCES titulo(id),
    titulo_original_id bool,
    titulo_destacado_id bool,
    PRIMARY KEY (ficha_id, titulo_id)
);