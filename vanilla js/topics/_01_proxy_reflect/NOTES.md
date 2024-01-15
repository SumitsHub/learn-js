### Proxy Object in JS
The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## 2 required parameters to create proxy
```js
// target - the original object which you want to proxy
const target = {
  message1: "hello",
  message2: "everyone",
};

// handler - an object that defines which operations will be intercepted and how to redefine intercepted operations
// Handler functions are sometimes called traps, presumably because they trap calls to the target object
// defining handler object with few traps(empty functions doesn't do anything, meaning if we try to access property will return 'undefined' as 'get' is an empty function and overriding objects internal method [[Get]])
const handler = {
  get(target, property) {},
  set: (target, property, value) => {},
  has: (target, prop) => {},
};

// create proxy object using constructor and passing target and handler objects
const proxy = new Proxy(target, handler);

```

## Exotic Objects
1. Exotic objects - objects whose internal methods have different implementations from ordinary objects
Example - Array objects(it has magic property 'length' which changes as modification happens to array object)

2. Proxy enable developers to define their own exotic objects with full capacity.

## Internal Methods of Objects
1. Object defines some internal methods specifying how it can be interacted with
2. All internal methods are called by the language itself, and are not directly accessible in JavaScript code
3. Internal methods of Objects and corrensponding proxy traps - 
```js
[[GetPrototypeOf]] - getPrototypeOf()
[[SetPrototypeOf]] - setPrototypeOf()
[[IsExtensible]] - isExtensible()
[[PreventExtensions]] - preventExtensions()
[[GetOwnProperty]] - getOwnPropertyDescriptor()
[[DefineOwnProperty]] - defineProperty()
[[HasProperty]] - has()
[[Get]] - get()
[[Set]] - set()
[[Delete]] - deleteProperty()
[[OwnPropertyKeys]] - ownKeys()

// NOTE- double square brackets are used to indicate an internal method

```
4. Function objects also have the following internal methods:
```js
[[Call]] - apply()
[[Construct]] - construct()

```


## Reflect Object
1. The Reflect namespace object contains static methods for invoking interceptable JavaScript object internal methods. 
2. The methods are the same as those of proxy handlers - The Reflect object provides a collection of static functions which have the same names as the proxy handler methods
3. The Reflect API is used to invoke the corresponding internal method - provide default forwarding behavior in Proxy handler traps
4. Code Examples - Reflect with normal object
```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color"); // true
Reflect.has(duck, "haircut"); // false

// Adding a new property to the object
Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"

Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]


```
5. Reflect with Proxy
```js
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      // Custom functionality: log the deletion
      console.log("Deleting property:", property);

      // Execute the default introspection behavior
      return Reflect.deleteProperty(targetObject, property);
    },
  },
);

// we can call Reflect.get if we don't wish to redefine the object's behavior:
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // hello
console.log(proxy.message2); // world


```

6. No-op forwarding proxy
```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Operation forwarded to the target

console.log(target.a); // 37 (The operation has been properly forwarded!)
// NOTE: "no-op" works for plain JavaScript objects, it does not work for native objects, such as DOM elements, Map objects, or anything that has internal slots
```

7. A complete traps list example
```js

/*
  const docCookies = ... get the "docCookies" object here:
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
  get(target, key) {
    return target[key] ?? target.getItem(key) ?? undefined;
  },
  set(target, key, value) {
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      return false;
    }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && "value" in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value
      ? {
          value,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Cookies test */

console.log((docCookies.myCookie1 = "First value"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Changed value");
console.log(docCookies.myCookie1);


```