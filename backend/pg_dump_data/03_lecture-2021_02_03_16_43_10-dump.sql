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
-- Data for Name: lectures_lecture; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lectures_lecture (id, title, exercise, description, expertise, date, weekday, week_id) FROM stdin;
39	React Hooks and High Order Components	Frontend Motion			2021-01-11	\N	\N
38	CSS				\N	\N	\N
3	Python	Ping Pong Game			2021-01-11	\N	\N
41	Git, GitHub and GitLab		Git is a Version Control System (VCS). 99% of development teams work with some form of VCS, and most of them use Git. The following links will help you understand what Version Control, Git, and GitHub are.		\N	1	11
42	Introduction to the Internet				\N	2	11
43	Tools				\N	2	11
44	Intro to HTML and CSS				\N	3	11
45	Javascript				\N	4	11
46	Backend - Python				\N	5	11
48	Object-oriented and Functional Programming				\N	2	1
49	Javascript and the Canvas				\N	3	1
50	HTML5 and CSS3				\N	4	1
51	Node and Motion Assigment				\N	5	1
52	Advanced Javascript and React				\N	1	2
53	Webservers and Protocols				\N	1	2
54	Rest APIs & JSON & Postman & Vanilla JS & fetching & DOM manipulations				\N	2	2
55	JavaScript Hackathon				\N	3	2
56	Getting Started With React				\N	4	2
57	React Forms				\N	5	2
58	REST API and React lifecycle methods				\N	1	3
59	Getting Started with Redux				\N	2	3
60	React Router and Redux Thunk				\N	3	3
61	Authentication and Custom Middleware				\N	4	3
62	React Hooks and High Order Component				\N	5	3
63	Styled Components and Assignment				\N	1	4
64	Day 2 - Assignment				\N	2	4
65	Day 3 - Assignment				\N	3	4
66	Day 4 - Assignment				\N	4	4
67	Day 5 - Assignment				\N	5	4
40	JS Interview prep I: Algorithms				\N	1	5
68	JS Interview prep II: Data Structures				\N	2	5
69	Python Fundamentals				\N	3	5
70	Advanced Python & OOP				\N	4	5
71	SQL & Databases				\N	5	5
72	Basics of Django				\N	1	6
73	Django REST Framework				\N	2	6
74	Advanced Django REST Framework				\N	3	6
75	Django Review and More				\N	4	6
76	Django Motion Assignment				\N	5	6
37	Django Motion Assignment				\N	1	7
77	Docker Basics				\N	2	7
78	Gitlab and Deployment				\N	3	7
79	Advanced Docker and CI/CD				\N	4	7
80	Advanced Docker and CI/CD				\N	5	7
47	Javascript Fundamentals	Am I a String and others	A Short Intro to Javascript	JavaScript	\N	1	1
\.


--
-- Name: lectures_lecture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lectures_lecture_id_seq', 80, true);


--
-- PostgreSQL database dump complete
--

