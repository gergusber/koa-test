BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE planets
(
    id integer NOT NULL,
    name text not null,
    code text not null
);

CREATE TABLE spacecenters
(
    id integer NOT NULL,
    uid         text not null,
    name        text not null,
    description text not null,
    latitude    text,
    longitude   text,
    planet_code text
);
 

ALTER TABLE ONLY planets
    ADD CONSTRAINT planets_pkey PRIMARY KEY (id);

ALTER TABLE ONLY spacecenters
    ADD CONSTRAINT spacecenters_pkey PRIMARY KEY (uid);


ALTER TABLE ONLY spacecenters
    ADD CONSTRAINT spacecenters_planet_code_fkey FOREIGN KEY (planet_code) REFERENCES city(code);

COMMIT;

ANALYZE planets;
ANALYZE spacecenters; 
