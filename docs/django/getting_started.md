# **Starting a project**
--- 

## Commands

* `django-admin startproject PROJECT_NAME` - Create a new project.
* `python manage.py startapp APP_NAME` - Create a new app.
* `python manage.py runserver` - Start the live-reloading development server.
* `python manage.py shell` - Enter Django shell.
* `python manage.py createsuperuser` - Create an administrative user.
* `python manage.py makemigrations` - Create migration file.
* `python manage.py migrate` - Apply these migrations.
* `python manage.py collectstatic` - Collect static file.

???+ warning
    Don't forget to :  
    1. Add APP_NAME to INSTALLED_APP in settings.py   
    2. Create a urls.py file in APP_NAME  
    3. Add 'path('APP_NAME/', include("APP_NAME.urls"))' to main urls.py  
