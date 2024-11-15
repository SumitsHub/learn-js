const URL = "https://jsonplaceholder.typicode.com/todos/";

const fetchData = () => {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};

fetchData();
