# Spread operator "..."

Regex expressions are a tool used to match specific string sequence in long string

## Methods

=== "Test"

    ```js
    /regex/.test('string'); // Return true or false
    ```

=== "Match"

    ```js
    'string'.match(/regex/); // Return a list of matching strings
    ```

=== "Replace"

    ```js
    'string'.replace(/regex/, 'replaceString'); // Return a list of matching strings
    ```

    ???+ tip "Important"
        You can also access capture groups in the replacement string with dollar signs ($).  
            ```js
                "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')
            ```

## Operators

| Method                        | Description                          |
| ----------------------------- | ------------------------------------ |
| `/platypus/`                  | Match the exact string               |
| `/yes|no/`                    | Match 'yes' or 'no' strings          |
| `/freecodecamp/i`             | Case insensitive                     |
| `/repeat/g`                   | Several matching patterns            |
| `/.hu/`                       | Ends with `hu`                       |
| `/h+/`                        | One or more `h`                      |
| `/go*/`                       | Zero or more `o` after a `g`         |
| `/[aiu]/`                     | `a`, `i` or `u`                      |
| `/[a-e]/`                     | Between `a` and `e`                  |
| `/[0-9]/`                     | Between `0` and `9`                  |
| `/[^aeiou]/`                  | No vowels                            |
| `/<.*?>/`                     | Lazy match instead of default greedy |
| `/^Cal/`                      | Sequence starts with `Cal`           |
| `/Cal$/`                      | Sequence ends with `Cal`             |
| `/\w/` = `/[A-Za-z0-9_]/`     | Any letter/number/underscore         |
| `/\W/` = `/[^A-Za-z0-9_]/`    | No letter/number/underscore          |
| `/\d/` = `/[0-9]/`            | Any digit                            |
| `/\D/` = `/[^0-9]/`           | No digit                             |
| `/\s/` = `/[ \r\t\f\n\v]/`    | Any Whitespace (CR, tab, NL, space)  |
| `/\S/` = `/[^ \r\t\f\n\v]/`   | No Whitespace (CR, tab, NL, space)   |
| `/a{3,5}/`                    | 3 to 5 `a`                           |
| `/a{3,}/`                     | 3 or more `a`                        |
| `/a{3}/`                      | Exactly 3 `a`                        |
| `/colou?r/`                   | Check for 0 or 1 `u` in `color`      |
| `(?=\w)(?!u)`                 | Any letter but `u`                   |
| `/P(engu|umpk)in/`            | `Penguin` or `Pumpkin`               |
| `/(\w+)(\s)\1\2\1/`           | Any word occuring 3 times with spaces| # \1 repeat the first group in parenthesis, \2 the second



