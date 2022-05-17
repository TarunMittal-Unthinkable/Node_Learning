-- Table: public.emp

-- DROP TABLE IF EXISTS public.emp;

CREATE TABLE IF NOT EXISTS public.emp
(
    id integer,
    name text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.emp
    OWNER to postgres;