
import { NewsResponse } from './dto/news-response';

const BASE_URL = `${process.env.API_URL}`;
const API_KEY =  `${process.env.API_KEY}` 

export const API = {
  todos: async (busqueda: string = '') => {
    try {
      console.log({
        BASE_URL, API_KEY
      })
      const url =
        busqueda === ''
          ? `${BASE_URL}/top-headlines?country=us&apiKey=37e5ba8017aa4c0999e8b04403fe0c19`
          : `${BASE_URL}/everything?apiKey=${API_KEY}&language=es&q=${busqueda}`;

      const response = await fetch(url);
      const data = await response.json();
      return NewsResponse.fromJson(data);
    } catch (error) {
      throw new Error('Error fetching todos');
    }
  },
};
