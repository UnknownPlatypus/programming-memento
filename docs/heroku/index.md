# **Django deploy to Heroku**

![Django on Heroku](https://simpleisbetterthancomplex.com/media/2016-08-09-how-to-deploy-django-applications-on-heroku/featured.jpg)

## **Prerequisite**
If you plan on deploying your django app on heroku, you need to make sure you are using a compatible python version in your project.

The best way to ensure that is to first build you project in a virtual environment using one of these [supported python versions](https://devcenter.heroku.com/articles/python-support#supported-runtimes) :

* `python-3.9.1` 
* `python-3.8.7` 
* `python-3.7.9` 
* `python-3.6.12`

You allo need to install Heroku Client to create and manage your Heroku apps directly from the terminal

### Create Virtual Environment
Go to you project folder and create a virtual environment named 'venv' using this [python command](https://docs.python.org/3/tutorial/venv.html)

```posh
python -m venv venv
```

Now if you want to install packages, go inside your virtual environment (venv)
```posh
venv\Scripts\activate.bat

(venv) C:\Users\<username>\MyProject>
```

???+ danger "Important"
    Do that every time you need to install a new python package !  
    Otherwise, the package will be installed globally on your computer

### **Heroku CLI**
The Heroku Command Line Interface ([CLI](https://devcenter.heroku.com/articles/heroku-cli)) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku.

Download the Heroku Client using the appropriate version [here](https://devcenter.heroku.com/articles/heroku-cli)

To verify your CLI installation, use the heroku --version command

```sh
c:\> heroku --version
heroku/7.47.9 win32-x64 node-v12.16.2
```

Now login to connect to your Heroku account :

=== "Browser login"

    ``` sh
    heroku login
    ```

=== "Shell login"

    ``` sh
    heroku login -i
    ```

### **Complementary Resources**
- [Heroku Django App Configuration](https://devcenter.heroku.com/articles/django-app-configuration)
- [Deployer une application Django avec Heroku(FR)](https://www.youtube.com/watch?v=eJ0sEUB3d1U) 