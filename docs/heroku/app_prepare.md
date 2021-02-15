# **Preparing the App**
--- 

## **Requirements.txt**
Heroku will install you project on a server so you need to provide the full list of python package required.
This is done with a requirements.txt file.

Create this file using this command, this will gather every package installed and render them to a requirements.txt file

```posh
venv\Scripts\activate.bat
pip freeze -> requirements.txt
```

??? exemple
    requirements.txt for Basic django setup with whitenoise
    ```python
    asgiref==3.3.1
    Django==3.1.6
    pytz==2021.1
    sqlparse==0.4.1
    whitenoise==5.2.0
    ```




## **Procfile**

## **runtime.txt**

## **heroku_settings.py**

## **Static Assets**

## **PostgreSQL connection**
dj-database-url
=== "Move to Igloo"

    ``` sh
    ```

=== "Move to master"

    ``` sh
    ```