## Regular Expressions 
Regular expressions are patterns used to match character combinations in strings. 

- In JavaScript, regular expressions are also objects.
- These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String


### 2 ways of creating a regular expression in JavaScript
- 1. Using a regular expression literal, which consists of a pattern enclosed between slashes.
```js
const re = /ab+c/;
```
- Using this way is recommended when regular expression remains constant, using this can improve performance

- 2. calling the constructor function of the RegExp object.
```js
const re = new RegExp("ab+c");
```
- Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.


## Cheat Sheet

### Character classes
Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits.

- [xyz] or [a-c] 
  - Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets, it is taken as a literal hyphen to be included in the character class as a normal character.
  - For example, [abcd] is the same as [a-d]. They match the "b" in "brisket", and the "a" or the "c" in "arch", but not the "-" (hyphen) in "non-profit".
  - For example, [abcd-] and [-abcd] match the "b" in "brisket", the "a" or the "c" in "arch", and the "-" (hyphen) in "non-profit".
  - For example, [\w-] is the same as [A-Za-z0-9_-]. They both match any of the characters in "no_reply@example-server.com" except for the "@" and the ".".
- [^xyz] or [^a-c] 
  - A negated or complemented character class. That is, it matches anything that is not enclosed in the square brackets. 
  - You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets, it is taken as a literal hyphen to be included in the character class as a normal character. 
  - For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".
- .
  - Matches any single character except line terminators: \n, \r, \u2028 or \u2029. 
  - For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day
  - Inside a character class, the dot loses its special meaning and matches a literal dot.
- \d
  - Matches any digit (Arabic numeral). Equivalent to [0-9]. 
  - For example, /\d/ or /[0-9]/ matches "2" in "B2 is the suite number".
- \D
  - Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]. 
  - For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".
- \w
  - Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]. 
  - For example, /\w/ matches "a" in "apple", "5" in "$5.28", and "3" in "3D".
- \W
  - Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]. 
  - For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".
- \s
  - Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.
  - For example, /\s\w*/ matches " bar" in "foo bar".
- \S
  - Matches a single character other than white space.
  - For example, /\S\w*/ matches "foo" in "foo bar".
- x|y - Disjunction
  - Matches either "x" or "y". Each component, separated by a pipe (|), is called an alternative. 
  - For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".