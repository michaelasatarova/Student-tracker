--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: lectures_program; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lectures_program (id, name, description) FROM stdin;
3	Data Science Batch 14 NOV 2020	boot camp for data science
1	Full-Stack Development Program / Batch 14	In Propulsion’s 12-week full-time program, you will develop a fundamental understanding of the Full-Stack software development cycle. The course curriculum is tailor-made to the job market, relying on today's hottest languages: JavaScript for the frontend, Python for the backend. Attend in-person or remote.
\.


--
-- Name: lectures_program_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lectures_program_id_seq', 3, true);


--
-- PostgreSQL database dump complete
--

