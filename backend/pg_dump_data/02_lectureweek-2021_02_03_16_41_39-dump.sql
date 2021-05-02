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
-- Data for Name: lectures_lectureweek; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lectures_lectureweek (id, title, sort) FROM stdin;
10	10 -12 - Final Projects	10
9	9 - Group Project	9
8	8 - Backend Assigment	8
2	2 - JavaScript advance and React	2
11	0 - Preparation Work	0
3	3 - React Advanced	3
4	4 - Frontend Assigment	4
5	5 - Python and Databases	5
6	6 - Django And Django Rest Framework	6
7	7 - Docker and Django Assignment	7
1	1 - JavaScript Fundamentals	1
\.


--
-- Name: lectures_lectureweek_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lectures_lectureweek_id_seq', 11, true);


--
-- PostgreSQL database dump complete
--

