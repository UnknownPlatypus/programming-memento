# **Models & DB**
--- 

## Models 

### Common field types
--- 

* [CharField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#django.db.models.CharField) is used to define short-to-mid sized fixed-length strings. You must specify the max_length of the data to be stored.
* [TextField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#django.db.models.TextField) is used for large arbitrary-length strings. You may specify a max_length for the field, but this is used only when the field is displayed in forms (it is not enforced at the database level).
* [IntegerField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#django.db.models.IntegerField) is a field for storing integer (whole number) values, and for validating entered values as integers in forms.
* [DateField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#datefield) and [DateTimeField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#datetimefield) are used for storing/representing dates and date/time information (as Python datetime.date in and datetime.datetime objects, respectively). These fields can additionally declare the (mutually exclusive) parameters auto_now=True (to set the field to the current date every time the model is saved), auto_now_add (to only set the date when the model is first created) , and default (to set a default date that can be overridden by the user).
* [EmailField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#emailfield) is used to store and validate email addresses.
* [FileField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#filefield) and [ImageField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#imagefield) are used to upload files and images respectively (the ImageField adds additional validation that the uploaded file is an image). These have parameters to define how and where the uploaded files are stored.
* [AutoField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#autofield) is a special type of IntegerField that automatically increments. A primary key of this type is automatically added to your model if you don’t explicitly specify one.
* [ForeignKey](https://docs.djangoproject.com/en/3.1/ref/models/fields/#foreignkey) is used to specify a one-to-many relationship to another database model (e.g. a car has one manufacturer, but a manufacturer can make many cars). The "one" side of the relationship is the model that contains the "key" (models containing a "foreign key" referring to that "key", are on the "many" side of such a relationship).
* [ManyToManyField](https://docs.djangoproject.com/en/3.1/ref/models/fields/#manytomanyfield) is used to specify a many-to-many relationship (e.g. a book can have several genres, and each genre can contain several books). In our library app we will use these very similarly to ForeignKeys, but they can be used in more complicated ways to describe the relationships between groups. These have the parameter on_delete to define what happens when the associated record is deleted (e.g. a value of models.SET_NULL would set the value to NULL).

??? tip Reference
    [Full list of field types](https://docs.djangoproject.com/en/3.1/ref/models/fields/#model-field-types)

### Common field arguments
--- 


* [help_text](https://docs.djangoproject.com/en/3.1/ref/models/fields/#help-text) : Provides a text label for HTML forms (e.g. in the admin site), as described above.
* [verbose_name](https://docs.djangoproject.com/en/3.1/ref/models/fields/#verbose-name): A human-readable name for the field used in field labels. If not specified, Django will infer the default verbose name from the field name.
* [default](https://docs.djangoproject.com/en/3.1/ref/models/fields/#default): The default value for the field. This can be a value or a callable object, in which case the object will be called every time a new record is created.
* [null](https://docs.djangoproject.com/en/3.1/ref/models/fields/#null): If True, Django will store blank values as NULL in the database for fields where this is appropriate (a CharField will instead store an empty string). The default is False.
* [blank](https://docs.djangoproject.com/en/3.1/ref/models/fields/#blank): If True, the field is allowed to be blank in your forms. The default is False, which means that Django's form validation will force you to enter a value. This is often used with null=True , because if you're going to allow blank values, you also want the database to be able to represent them appropriately.
* [choices](https://docs.djangoproject.com/en/3.1/ref/models/fields/#choices): A group of choices for this field. If this is provided, the default corresponding form widget will be a select box with these choices instead of the standard text field.
* [primary_key](https://docs.djangoproject.com/en/3.1/ref/models/fields/#primary-key): If True, sets the current field as the primary key for the model (A primary key is a special database column designated to uniquely identify all the different table records). If no field is specified as the primary key then Django will automatically add a field for this purpose.

??? quote "Reference"
    [Full list of field options](https://docs.djangoproject.com/en/3.1/ref/models/fields/#field-options)


### Metadata
--- 

You can declare model-level metadata for your Model by declaring class Meta, as shown.

``` py
class Meta:
    ordering = ['title', '-pubdate']
    verbose_name = 'BetterName'
    verbose_name_plural = 'Better Names'
```

???+ info
    ordering will change query default order  
    verbose_name will change display in admin panel

#### Abstract base class

Abstract base classes are useful when you want to put some common information into a number of other models. You write your base class and put `abstract=True` in the Meta class. This model will then not be used to create any database table. Instead, when it is used as a base class for other models, its fields will be added to those of the child class.

``` py
from django.db import models

class CommonInfo(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()

    class Meta:
        abstract = True

class Student(CommonInfo):
    home_group = models.CharField(max_length=5)
```

#### Proxy models
You can create, delete and update instances of the proxy model and all the data will be saved as if you were using the original (non-proxied) model. The difference is that you can change things like the default model ordering or the default manager in the proxy, without having to alter the original.  

You could also use a proxy model to define a different default ordering on a model. You might not always want to order the Person model, but regularly order by the last_name attribute when you use the proxy:

``` py
class OrderedPerson(Person):
    class Meta:
        ordering = ["last_name"]
        proxy = True
```

??? quote "Reference"
    [Full list of metadata options](https://docs.djangoproject.com/en/3.1/ref/models/options/)

### Methods
--- 

Minimally, in every model you should define the standard Python class method \__str__() to return a human-readable string for each object

``` py
def __str__(self):
    return self.field_name
```

Another common method to include in Django models is get_absolute_url(), which returns a URL for displaying individual model records on the website (if you define this method then Django will automatically add a "View on Site" button to the model's record editing screens in the Admin site). A typical pattern for get_absolute_url() is shown below.

``` py
def get_absolute_url(self):
    """Returns the url to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])

```

??? note
    Assuming you will use URLs like /myapplication/mymodelname/2 to display individual records for your model (where "2" is the id for a particular record), you will need to create a URL mapper to pass the response and id to a "model detail view" (which will do the work required to display the record).   
    The reverse() function above is able to "reverse" your url mapper (in the above case named 'model-detail-view') in order to create a URL of the right format.    


## Queries
Throughout this guide (and in the reference), we’ll refer to the following models, which comprise a Weblog application:

```py
from django.db import models

class Blog(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.TextField()

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Entry(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    headline = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateField()
    mod_date = models.DateField()
    authors = models.ManyToManyField(Author)
    number_of_comments = models.IntegerField()
    number_of_pingbacks = models.IntegerField()
    rating = models.IntegerField()

    def __str__(self):
        return self.headline
```

### Create/Update/Delete 

=== "Create"

    ``` py
    # Method 1
    b = Blog(name='Beatles Blog', tagline='latest Beatles news')
    b.save()

    # Method 2
    b = Blog.objects.create(name='Beatles Blog', tagline='latest Beatles news')

    ```

    ???+ info
        Create a new blog object  
        *The save method has no return value*

=== "Update"

    ``` py
    # Method 1
    b5.name = 'New name'
    b5.save()

    # Method 2
    Entry.objects.filter(pub_date__year=2007).update(headline='Everything is the same')
    ```  

    ???+ info
        1. The update() method is applied instantly and returns the number of rows matched by the query  
        2. Calls to update can also use F expressions to update one field based on the value of another field in the model

=== "Update Many-to-many"

    ``` py
    joe = Author.objects.create(name="Joe")
    entry.authors.add(joe)
    ```   
    ???+ info
        Add 'Joe' to the authors list

=== "Delete"

    ``` py
    # Delete one object
    >>> e.delete()
    (1, {'weblog.Entry': 1})

    # Delete every objects from a queryset
    >>> Entry.objects.filter(pub_date__year=2005).delete()
    (5, {'webapp.Entry': 5})
    ```   
    ???+ info
        The delete method immediately deletes the object and returns the number of objects deleted and a dictionary with the number of deletions per object type.

=== "Copy"

    Although there is no built-in method for copying model instances, it is possible to easily create new instance with all fields’ values copied. In the simplest case, you can set pk to None. Using our blog example:

    ```py
    blog = Blog(name='My blog', tagline='Blogging is easy')
    blog.save() # blog.pk == 1

    blog.pk = None
    blog.save() # blog.pk == 2
    ```   

    Things get more complicated if you use inheritance. Consider a subclass of Blog:

    ```py
    class ThemeBlog(Blog):
        theme = models.CharField(max_length=200)

    django_blog = ThemeBlog(name='Django', tagline='Django is easy', theme='python')
    django_blog.save() # django_blog.pk == 3
    ``` 

    Due to how inheritance works, you have to set both pk and id to None:

    ```py
    django_blog.pk = None
    django_blog.id = None
    django_blog.save() # django_blog.pk == 4
    ``` 

    This process doesn’t copy relations that aren’t part of the model’s database table. For example, Entry has a ManyToManyField to Author. After duplicating an entry, you must set the many-to-many relations for the new entry:

    ```py
    entry = Entry.objects.all()[0] # some previous entry
    old_authors = entry.authors.all()
    entry.pk = None
    entry.save()
    entry.authors.set(old_authors)
    ``` 
    For a OneToOneField, you must duplicate the related object and assign it to the new object’s field to avoid violating the one-to-one unique constraint. For example, assuming entry is already duplicated as above:

    ```py
    detail = EntryDetail.objects.all()[0]
    detail.pk = None
    detail.entry = entry
    detail.save()
    ```

### Retrieving objects in Querysets

=== "All"

    ```py
    all_entries = Entry.objects.all()
    ```   
    ???+ info
        The all() method returns a QuerySet of all the objects in the database.

=== "Filter/Exclude"

    ```py
    q1 = Entry.objects.filter(headline__startswith="What")
    q2 = q1.exclude(pub_date__gte=datetime.date.today())

    ```
    ???+ info
        Filter/Exclude returns a new QuerySet 

=== "Get"
    If you know there is only one object that matches your query, you can use the get() method on a Manager which returns the object 

    ```py
    one_entry = Entry.objects.get(pk=1)
    ```   
    ???+ warning
        Returns an object !  
        Django will complain if more than one item matches the get() query. (MultipleObjectsReturned error)  
        Django will complain if there are no results that match the query (DoesNotExist exception)

### QuerySubsets

Get only a part of the queryset
=== "First"

    ```py
    all_entries = Entry.objects.all().first()
    ```   
    ???+ info
        Returns the first **object** of the queryset

=== "Slicing"

    ```py
    #Use case 1
    all_entries = Entry.objects.all()[:5]

    #Use case 2
    all_entries = Entry.objects.all()
    last_entries = all_entries[len(all_entries)-5:]
    ```   

    ???+ info
        1. Returns the first 5 elements
        2. returne the last 5 elements

### Field lookups
Basic lookups keyword arguments take the form `field__lookuptype=value`

=== "Greater/lower"

    ```py
    Entry.objects.filter(pub_date__lte='2006-01-01') # pub_date <= 2006-01-01
    Entry.objects.filter(pub_date__lt='2006-01-01') # pub_date < 2006-01-01
    Entry.objects.filter(pub_date__gte='2006-01-01') # pub_date >= 2006-01-01
    Entry.objects.filter(pub_date__gt='2006-01-01') # pub_date > 2006-01-01
    ```

=== "Text related"

    ```py
    Blog.objects.get(name__iexact="beatles blog") # Case-insensitive match

    Entry.objects.get(headline__contains='Lennon') # Headline contains 'Lennon'
    Entry.objects.get(headline__icontains='Lennon') # Case-insensitive version

    Entry.objects.get(headline__startswith='Lennon') # Headline starts with 'Lennon'
    Entry.objects.get(headline__endswith='Lennon') # Headline ends with 'Lennon'
    # Case-insensitive versions : istartswith / iendswith
    ```

=== "Date related"

    Assuming we have :

    ```py
    start_date = datetime.date(2005, 1, 1)
    end_date = datetime.date(2005, 3, 31)
    ```

    ```py
    Entry.objects.filter(pub_date__range=(start_date, end_date)) # Date in range
    Entry.objects.filter(pub_date__date__gt=datetime.date(2005, 1, 1)) # date >=
    Entry.objects.filter(pub_date__year__gte=2005) # Year >= 2005
    Entry.objects.filter(pub_date__month__gte=6) # Month >= 6
    Entry.objects.filter(pub_date__day__gte=3) # Day >= 3
    Entry.objects.filter(pub_date__week=52) # Week number = 52

    Entry.objects.filter(pub_date__week_day=2)
    Entry.objects.filter(pub_date__quarter=2)

    Entry.objects.filter(pub_date__time=datetime.time(14, 30))
    Event.objects.filter(time__hour=5)
    Event.objects.filter(timestamp__minute__gte=29)
    Event.objects.filter(time__second=2)
    ```

=== "Regex"

    ```py
    Entry.objects.get(title__regex=r'^(An?|The) +')
    ```

Django offers a powerful and intuitive way to “follow” relationships in lookups, taking care of the SQL JOINs for you automatically, behind the scenes

```py
Blog.objects.filter(entry__headline__contains='Lennon') # Lookup
```

??? quote "Reference"
    [Full list of field lookups](https://docs.djangoproject.com/en/3.1/ref/models/querysets/#field-lookups)


### Querying JSONField
To query based on a given dictionary key, use that key as the lookup name:

```py
>>> Dog.objects.create(name='Rufus', data={
...     'breed': 'labrador',
...     'owner': {
...         'name': 'Bob',
...         'other_pets': [{
...             'name': 'Fishy',
...         }],
...     },
... })
<Dog: Rufus>
>>> Dog.objects.create(name='Meg', data={'breed': 'collie', 'owner': None})
<Dog: Meg>
>>> Dog.objects.filter(data__breed='collie')
<QuerySet [<Dog: Meg>]>
>>> Dog.objects.filter(data__owner__name='Bob')
<QuerySet [<Dog: Rufus>]>
```
 

#### JSON field lookup
---

=== "Contains"

    The returned objects are those where the given dict of key-value pairs are all contained in the top-level of the field

    ```py
    Dog.objects.filter(data__contains={'breed': 'collie'}) 
    # <QuerySet [<Dog: Meg>]>
    ```

=== "Contained_by"

    The objects returned will be those where the key-value pairs on the object are a subset of those in the value passed

    ```py
    >>> Dog.objects.create(name='Rufus', data={'breed': 'labrador', 'owner': 'Bob'})
    <Dog: Rufus>
    >>> Dog.objects.create(name='Meg', data={'breed': 'collie', 'owner': 'Bob'})
    <Dog: Meg>
    >>> Dog.objects.create(name='Fred', data={})
    <Dog: Fred>
    >>> Dog.objects.filter(data__contained_by={'breed': 'collie', 'owner': 'Bob'})
    <QuerySet [<Dog: Meg>, <Dog: Fred>]>
    >>> Dog.objects.filter(data__contained_by={'breed': 'collie'})
    <QuerySet [<Dog: Fred>]>
    ```

    !!! warning
        Not supported on Oracle and SQLite

=== "has_key / has_keys / has_any_keys"

    Returns objects where the given key is in the top-level of the data

    ```py
    >>> Dog.objects.create(name='Rufus', data={'breed': 'labrador'})
    <Dog: Rufus>
    >>> Dog.objects.create(name='Meg', data={'breed': 'collie', 'owner': 'Bob'})
    <Dog: Meg>

    >>> Dog.objects.filter(data__has_key='owner')
    <QuerySet [<Dog: Meg>]>
    Dog.objects.filter(data__has_keys=['breed', 'owner'])
    <QuerySet [<Dog: Meg>]>
    Dog.objects.filter(data__has_any_keys=['breed', 'owner'])
    <QuerySet [<Dog: Rufus>, <Dog: Meg>]>
    ```

??? quote "Reference"
    [Full list of field lookups](https://docs.djangoproject.com/en/3.1/topics/db/queries/#querying-jsonfield)

## Aggregate / Annotate
Throughout this guide, we’ll refer to the following models. These models are used to track the inventory for a series of online bookstores:

```py
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

class Publisher(models.Model):
    name = models.CharField(max_length=300)

class Book(models.Model):
    name = models.CharField(max_length=300)
    pages = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.FloatField()
    authors = models.ManyToManyField(Author)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    pubdate = models.DateField()

class Store(models.Model):
    name = models.CharField(max_length=300)
    books = models.ManyToManyField(Book)
```

Here’s how to do common aggregate queries, assuming the models above

```py
# Total number of books.
Book.objects.count()

# Total number of books with publisher=BaloneyPress
Book.objects.filter(publisher__name='BaloneyPress').count()

# Avg/Max/Min/...
from django.db.models import Avg,Max,Min,Sum,StdDev,Variance
Book.objects.all().aggregate(Avg('price'))
Book.objects.all().aggregate(Max('price'))
Book.objects.all().aggregate(Min('price'))
Book.objects.all().aggregate(Sum('price'))
Book.objects.all().aggregate(StdDev('price'))
Book.objects.all().aggregate(Variance('price'))

# Difference between the highest priced book and the average price of all books.
from django.db.models import FloatField
Book.objects.aggregate(
    price_diff=Max('price', output_field=FloatField()) - Avg('price'))
```

Common Annotate queries (per object summaries)

```py
# Each publisher, each with a count of books as a "num_books" attribute.
from django.db.models import Count
pubs = Publisher.objects.annotate(num_books=Count('book'))

# Each publisher, with a separate count of books with a rating above and below 5
from django.db.models import Q
above_5 = Count('book', filter=Q(book__rating__gt=5))
below_5 = Count('book', filter=Q(book__rating__lte=5))
pubs = Publisher.objects.annotate(below_5=below_5,above_5=above_5)
pubs[0].above_5 # 23
pubs[0].below_5 # 12   

# The top 5 publishers, in order by number of books.
pubs = Publisher.objects.annotate(num_books=Count('book')).order_by('-num_books')[:5]
pubs[0].num_books # 1323

# generate a list of books that have more than one author
Book.objects.annotate(num_authors=Count('authors')).filter(num_authors__gt=1)

# generate a list of authors with a count of highly rated books
highly_rated = Count('book', filter=Q(book__rating__gte=7))
Author.objects.annotate(num_books=Count('book'), highly_rated_books=highly_rated)
```

!!! tip "If in doubt, inspect the SQL query!"
    In order to understand what happens in your query, consider inspecting the **query** property of your **QuerySet**

??? quote "Reference"
    [Full list of aggregation methods](https://docs.djangoproject.com/en/3.1/topics/db/aggregation/#aggregation)
