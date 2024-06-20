const url = 'https://jsonplaceholder.typicode.com/posts';

const button = document.getElementById('ajax-btn');

button.addEventListener('click', () => {
  const dummyData = {name: '侍太郎', age: 30};
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(dummyData),
    headers: {
      'Content-Type': 'application/json'
    }
  } )
   .then(response => response.json())
   .then(data => {
      console.log('サーバーからの応答：\n' + JSON.stringify(data, null, 2));
    });
});