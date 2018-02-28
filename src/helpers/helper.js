export function* generatePages(total = 100, page = 1) {
  while (!(page === total)) {
    yield page;
    page++;
  }
  return 100;
}

export function* generateUrl() {
  const generator = generatePages();
  var { value, done } = generator.next();
  while (!done) {
    yield `https://api.unsplash.com/collections/featured/?client_id=${
      process.env.REACT_APP_SPLASH_ID
    }&per_page=6&page=${value}`;
    var { value, done } = generator.next();
  }
  return `https://api.unsplash.com/collections/featured/?client_id=${
    process.env.REACT_APP_SPLASH_ID
  }&per_page=6&page=${value}`;
}
