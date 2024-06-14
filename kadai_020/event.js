const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const txt = document.querySelector('#text');
  txt.textContent = 'ボタンをクリックしました'
});