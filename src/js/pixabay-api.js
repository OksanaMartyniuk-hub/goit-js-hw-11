import axios from 'axios';

export async function getImagesByQuery(query) {
  const API_KEY = '55675978-69d37b2f380cb0d6ffe952c17';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await axios.get(url);
  return response.data;
}
