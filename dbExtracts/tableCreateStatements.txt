-- Table: public.orders

-- DROP TABLE public.orders;

CREATE TABLE public.orders
(
    id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    pickup_date character varying(255) COLLATE pg_catalog."default",
    recycling_bank_id integer NOT NULL,
    status character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT orders_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.orders
    OWNER to postgres;



-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    address character varying(255) COLLATE pg_catalog."default",
    contact_no character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    zipcode character varying(255) COLLATE pg_catalog."default",
    access_token character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;


-- Table: public.recyclingbanks

-- DROP TABLE public.recyclingbanks;

CREATE TABLE public.recyclingbanks
(
    objectid integer NOT NULL DEFAULT nextval('recyclingbanks_objectid_seq'::regclass),
    x numeric(15,10) NOT NULL,
    y numeric(15,10) NOT NULL,
    site_name_ character varying(255) COLLATE pg_catalog."default" NOT NULL,
    ward character varying(255) COLLATE pg_catalog."default" NOT NULL,
    charitybanks character varying(50) COLLATE pg_catalog."default" NOT NULL,
    booksmusic character varying(50) COLLATE pg_catalog."default" NOT NULL,
    cansfoil character varying(50) COLLATE pg_catalog."default" NOT NULL,
    cansplasticbottles character varying(50) COLLATE pg_catalog."default" NOT NULL,
    plasticbottles character varying(50) COLLATE pg_catalog."default" NOT NULL,
    textiles character varying(50) COLLATE pg_catalog."default" NOT NULL,
    weee character varying(50) COLLATE pg_catalog."default" NOT NULL,
    glass character varying(50) COLLATE pg_catalog."default" NOT NULL,
    shoes character varying(50) COLLATE pg_catalog."default" NOT NULL,
    cartons character varying(50) COLLATE pg_catalog."default" NOT NULL,
    books character varying(50) COLLATE pg_catalog."default" NOT NULL,
    cardboard character varying(50) COLLATE pg_catalog."default" NOT NULL,
    paper character varying(50) COLLATE pg_catalog."default" NOT NULL,
    address character varying(50) COLLATE pg_catalog."default" NOT NULL,
    categories character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT recyclingbanks_pkey PRIMARY KEY (objectid)
)

TABLESPACE pg_default;

ALTER TABLE public.recyclingbanks
    OWNER to postgres;


