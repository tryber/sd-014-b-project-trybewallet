async fetchAPI = () => {
  const request = await fetch("https://economia.awesomeapi.com.br/json/all");
  const fetchData = request.json();
  console.log(fetchData);
}