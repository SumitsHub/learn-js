class Greeting {
  english() {
    return 'Hello';
  }

  spanish() {
    return 'Hoila';
  }
}

class MoreGreetings {
  german() {
    return 'Bonjur';
  }

  french() {
    return 'Hallo';
  }
}

const greetings = new Greeting();
const moreGreetings = new MoreGreetings();

const allGreetings = new Proxy(moreGreetings, {
    get: function(target, property) {
        return target[property] || greetings[property]
    }
})

// calling function from greetings class
console.log(allGreetings.english());