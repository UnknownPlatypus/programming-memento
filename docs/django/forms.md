# **Forms**
--- 

## GET & POST

**GET and POST are the only HTTP methods to use when dealing with forms.**

*Django’s login form is returned using the POST method, in which the browser bundles up the form data, encodes it for transmission, sends it to the server, and then receives back its response.*

*GET, by contrast, bundles the submitted data into a string, and uses this to compose a URL. The URL contains the address where the data must be sent, as well as the data keys and values. You can see this in action if you do a search in the Django documentation, which will produce a URL of the form https://docs.djangoproject.com/search/?q=forms&release=1.*

**GET and POST are typically used for different purposes.**

*Any request that could be used to change the state of the system - for example, a request that makes changes in the database - should use POST. GET should be used only for requests that do not affect the state of the system.*

*On the other hand, GET is suitable for things like a web search form, because the URLs that represent a GET request can easily be bookmarked, shared, or resubmitted.*

??? info "Security matters"
    GET would also be unsuitable for a password form, because the password would appear in the URL, and thus, also in browser history and server logs, all in plain text. Neither would it be suitable for large quantities of data, or for binary data, such as an image. A Web application that uses GET requests for admin forms is a security risk: it can be easy for an attacker to mimic a form’s request to gain access to sensitive parts of the system. POST, coupled with other protections like Django’s CSRF protection offers more control over access.

## Django form class
We define a custom form using a class.  
max_length,... are used for client & server side validation

### Basic form

```py
from django import forms

class ContactForm(forms.Form):
    subject = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)
    sender = forms.EmailField()
    cc_myself = forms.BooleanField(required=False)
```

### ModelForm
If your form is going to be used to directly add or edit a Django model, a **ModelForm** can save you a great deal of time, effort, and code, because it will build a form, along with the appropriate fields and their attributes, from a Model class.

```py
from django.forms import ModelForm
from myapp.models import Article

# Create the form class.
class ArticleForm(ModelForm):
    class Meta:
        model = Article
        fields = ['pub_date', 'headline', 'content', 'reporter']

# Creating a form to add an article.
form = ArticleForm()

# Creating a form to change an existing article.
article = Article.objects.get(pk=1)
form = ArticleForm(instance=article)
```


## Django form view
We process submitted data using the is_valid() method that does server side validation.

```py
from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import ContactForm

def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/thanks/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, 'name.html', {'form': form})
```

## Django form template

```py
<form action="/your-name/" method="post">
    {% csrf_token %}
    {{ form }}
    <input type="submit" value="Submit">
</form>
```

There are other output options though for the `<label>/<input>` pairs:

* `{{ form.as_table }}` will render them as table cells wrapped in `<tr>` tags
* `{{ form.as_p }}` will render them wrapped in `<p>` tags
* `{{ form.as_ul }}` will render them wrapped in `<li>` tags

Note that you’ll have to provide the surrounding `<table>` or `<ul>` elements yourself.

## Form fields

Most usefull form fields :

* `required=true` : is the form field required of not 
* `widget=defaultWidget` : let you specifie a widget call to use
* `validators`

* `label` : Label displayed next to the field input. Default generated from field name
* `initial` : Put an initial value in the form
* `help_text`: Add descriptive text for you field
* `error_message`: Override default error message using a dict {error_type, error_msg}`error_message = {'required': 'Please enter your name'}`