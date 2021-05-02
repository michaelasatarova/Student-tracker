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
-- Data for Name: lectures_lesson; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lectures_lesson (id, date, start_time, end_time, lecture_id, speakers_id, teacher_id) FROM stdin;
4	2021-01-28	\N	\N	3	\N	\N
5	2021-01-28	09:00	10:00	3	3	2
6	2021-01-28	11:00	13:00	37	\N	\N
7	2021-02-03	09:00	12:00	47	\N	36
\.


--
-- Name: lectures_lesson_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lectures_lesson_id_seq', 7, true);


--
-- PostgreSQL database dump complete
--

