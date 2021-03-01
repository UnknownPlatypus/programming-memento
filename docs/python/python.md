# **Python**
--- 

## RANDOM
* modulo : %
* checktype : type(var)
* lower_copy = "text".lower()
* dir("stuff") : Returns list available methods
* "banana".find("na") : Position premiere apparition #2
* "banana".replace("na","OK") : # "baOKOK"
* "banana".strip() : remove leading and trailling characters
So, to recap let’s try and break the difference between is and == down to two short definitions:

* An is expression evaluates to True if two variables point to the same (identical) object.
* An == expression evaluates to True if the objects referred to by the variables are equal (have the same contents).
* dict.get(key,0) : Get key value, put 0 as feault if does not exists
* dict.keys()  : Returns random order list of keys
* dict.values() : Returns random order(but same as keys() !) list of values
* dict.items() : Returns list of (Keys,Values) tuples
* for a,b in list.items(): print (a,b) : Iterate on both ! 
* a = sorted(list,reverse=True) : Descending sorted list 
* ord('n') : Gives the ordinal number used for sorting string (ASCII characters)
tuple are more efficient than list, use it for temporary variables
### Regular expression

Python Regular Expression Quick Guide
import re 
```txt
^        Matches the beginning of a line
$        Matches the end of the line
.        Matches any character
\s       Matches whitespace
\S       Matches any non-whitespace character
*        Repeats a character zero or more times
*?       Repeats a character zero or more times 
         (non-greedy)
+        Repeats a character one or more times
+?       Repeats a character one or more times 
         (non-greedy)
[aeiou]  Matches a single character in the listed set
[^XYZ]   Matches a single character not in the listed set
[a-z0-9] The set of characters can include a range
(        Indicates where string extraction is to start
)        Indicates where string extraction is to end
```
re.findall() : return list of string matching expression

greedy matching takes the longer
add a ? to remove the greedy behaviour

Python library for TCP sockets : sockets
Python library for simplified requests: urllib

### Web scraping
Beautiful Soup

### Wire protocol
XML or JSON : Format not specific to language to send info from one to another

#### XML
```xml
Start tag : <person> (can have any name)
Closing tag : </person> (can have any name)
Text content : <name>Thibaut</name>
Attribute : type="int" (key='value' pair)
Self closing tag : <name hide='true'/>
```
#### XML schema (XSD by W3C)
