const handleClick = () => {
  async function fetchQuotes() {
    const url = "https://dummyjson.com/quotes/random";
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        quote = res.quote;
        text.innerHTML = quote;
      });
    quote = res.quote;
    document.querySelector(".text").innerHTML = quote;
  }
  fetchQuotes();
};
