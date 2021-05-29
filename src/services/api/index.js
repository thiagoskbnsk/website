export const get = (url, query = null) => {
  if (query) {
    return global.fetch(`${url}?${query}`);
  }
  return global.fetch(url);
};
