--------------------------
--- Base de datos Prueba--
--------------------------
DROP TABLE IF EXISTS depart CASCADE;
CREATE TABLE depart (
    id bigserial PRIMARY KEY,
    dept_no numeric(2) NOT NULL UNIQUE,
    dnombre varchar(255) NOT NULL,
    loc varchar(255)
);
INSERT INTO depart (dept_no, dnombre, loc)
VALUES(10, 'CONTABILIDAD', 'SANLUCAR'),
    (20, 'INVESTIGACION', 'JEREZ'),
    (30, 'VENTAS', 'CHIPIONA'),
    (40, 'PRODUCCION', 'ROTA');