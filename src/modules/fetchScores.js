import { url } from '../utils/url.js';
import render from './display.js';

const fetchScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  render(result);
};

export default fetchScores;
