const getArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=bIJtwxN66B1WFZmzKQzdIgV5fhwcj7oe`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, something went wrong!");
    } else {
      return response.json();
    }
  });
}

export default getArticles;