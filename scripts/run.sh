#!/bin/bash
python manage.py migrate
python manage.py collectstatic --no-input
rm -rf /frontend/build/* && cp -r /frontend_tmp/build/* /frontend/build
gunicorn -w 4 -b 0.0.0.0:8000 project.wsgi:application