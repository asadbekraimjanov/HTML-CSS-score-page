let list = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
  },
];

document.getElementById('reaction').innerHTML =
  list[0].score + `<span>/  100</span>`;
document.getElementById('memory').innerHTML =
  list[1].score + `<span>/  100</span>`;
document.getElementById('verbal').innerHTML =
  list[2].score + `<span>/  100</span>`;
  document.getElementById('visual').innerHTML =
    list[3].score + `<span>/  100</span>`;
