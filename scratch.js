const callUrl = (name) => {
  const baseUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
  const requestUrl = baseUrl.concat(`/${name}`);
  
  fetch(requestUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();  
      } else {
        return Promise.reject(response.status); 
      }
    })
    .catch((error) => console.error(error));
};

const data = callUrl("red");