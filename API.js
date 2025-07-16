// usar la API
fetch('https://tu-backend-railway-url/api/data')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // Aquí manipulas la data en tu web
  })
  .catch(err => console.error(err));
