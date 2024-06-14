const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let txt = document.querySelector('#text');
  txt.textContent = 'ボタンをクリックしました'
});