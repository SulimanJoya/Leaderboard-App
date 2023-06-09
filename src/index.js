import './style.css';
import { url } from './utils/url.js';
import fetchScores from './modules/fetchScores.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');

refresh.addEventListener('click', fetchScores);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const scoreInput = document.getElementById('score').value;
  const scores = {
    user: nameInput,
    score: scoreInput,
  };
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scores),
  });

  form.reset();
});
fetchScores();
