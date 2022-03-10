export const getGifs = async (category) => {
  const apiKey = "uLq9K0Vuuuao2wCZ1nZzSGrKdEoj57C3";
  const limit = 10;
  const valueCategory = category || "";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    valueCategory
  )}&limit=${limit}&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url,
    };
  });
  return gifs;
};
