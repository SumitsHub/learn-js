// The parseInt function in JavaScript is used to convert a string into an integer. However, it has some nuances and behaviors that can lead to unexpected results if not handled carefully.

/**
 * Syntax: parseInt(string, radix)
 *
 * string: The value to parse. It is converted to a string if it's not already one.
 * radix: An integer (between 2 and 36) representing the base of the number system.
 *
 */

//* Key Behaviors and Considerations

//* 1. Default Radix:
// If no radix is specified:
// Strings starting with 0x or 0X are interpreted as hexadecimal.
// Strings starting with 0 (without x or X) are interpreted as decimal in modern JavaScript, but were interpreted as octal in some older browsers (e.g., ES3).
// Strings without a prefix are interpreted as decimal.

parseInt("10"); // 10 (decimal)
parseInt("0x10"); // 16 (hexadecimal)
parseInt("010"); // 10 (decimal, modern JS)

//* 2. Radix Must Be Explicit for Clarity:
// Always specify the radix to avoid confusion.

parseInt("10", 10); // 10 (decimal)
parseInt("10", 16); // 16 (hexadecimal)

//* 3. Handles Leading Whitespace:
// Leading whitespace is ignored.

parseInt("   42"); // 42

//* 4. Stops at Non-Numeric Characters:
// Parsing stops as soon as a non-numeric character is encountered.

parseInt("123abc"); // 123
parseInt("123.45"); // 123 (stops at the decimal point)

//* 5. Handles Negative Numbers:
// Works with negative signs.

parseInt("-42"); // -42

//* 6. Returns NaN for Invalid Inputs:
// If the input cannot be parsed, NaN is returned.

parseInt("abc"); // NaN
parseInt("10.5.6"); // 10 (valid portion is parsed)
parseFloat("10.5.6"); // 10.5 (parses the entire float)

//* 7. Only Parses Strings:
// If the input is not a string, it is coerced into a string before parsing.

parseInt(123); // 123 (number coerced to string "123")
parseInt(true); // NaN (true coerced to "true", which cannot be parsed)
parseInt(null); // NaN (null coerced to "null")

//* 8. Behavior with Floating Point Numbers:
// For floating point strings, only the integer part is considered.

parseInt("123.456"); // 123
parseInt("0.56"); // 0

//* 9. Radix Out of Range:
// If the radix is less than 2 or greater than 36, NaN is returned.

parseInt("10", 1); // NaN
parseInt("10", 37); // NaN

//* 10. Non-String Inputs:
// Inputs like arrays and objects are converted to strings.

parseInt([123]); // 123 (array coerced to "123")
parseInt(["1", "2"]); // 1   (array coerced to "1,2", stops at comma)
parseInt({}); // NaN (object coerced to "[object Object]")

//* Alternatives */
// 1. Number Constructor: Converts the entire string to a number, including floats.

Number("123.45"); // 123.45
Number("123abc"); // NaN

// 2. parseFloat: Parses floats.

parseFloat("123.45"); // 123.45
parseFloat("123abc"); // 123
