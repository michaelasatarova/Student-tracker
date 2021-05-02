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
-- Data for Name: lectures_lecture_programs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lectures_lecture_programs (id, lecture_id, program_id) FROM stdin;
1	39	1
2	38	1
3	37	1
4	3	1
5	40	1
7	41	1
8	42	1
9	43	1
10	44	1
11	46	1
12	47	1
13	48	1
14	50	1
15	51	1
16	52	1
17	53	1
18	54	1
19	55	1
20	56	1
21	57	1
22	58	1
23	59	1
24	60	1
25	61	1
26	62	1
27	63	1
28	64	1
29	65	1
30	66	1
31	67	1
32	68	1
33	69	1
34	70	1
35	71	1
36	72	1
37	73	1
38	74	1
39	75	1
40	76	1
41	77	1
42	78	1
43	79	1
44	80	1
\.


--
-- Name: lectures_lecture_programs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lectures_lecture_programs_id_seq', 44, true);


--
-- PostgreSQL database dump complete
--

