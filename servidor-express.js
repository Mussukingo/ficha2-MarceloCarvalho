const express = require('express')
const app = express();
const PORT = 3200

const cards = 
[
      { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
      { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },  
      { name: "Guardiã das terras", type: "Criatura", attack: 6, defense: 8 }, 
      { name: "Guardiã das labaredas", type: "Criatura", attack: 1, defense: 20 }, 
      { name: "Guardiã das florestas", type: "Criatura", attack: 7, defense: 4 }, 
];

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(`<h1>Hello world</h1><a href=http://localhost:3200/aleatorio>Aleatório</a></br><a href=http://localhost:3200/agora>Agora</a></br><a href=http://localhost:3200/sobre>Sobre</a></br><a href=http://localhost:3200/cartas>Cartas</a>`)
});

app.get('/agora',(req,res)=>
  {
    const now = new Date().toLocaleString("pt-PT");
    res.end(now)
  })

app.get('/sobre', (req, res) => {
    res.end('Marcelo Carvalho, 17 anos')
});

app.get('/aleatorio', (req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  const card = cards[Math.floor(Math.random() * cards.length)];
  res.end(JSON.stringify(card))
});

app.get('/cartas', (req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  const count = `cartas:` +  cards.length
  const items = cards.map(card => `<li>${card.name}</li>`).join("");
  res.end(count + items)
});

app.use((req, res) => {
  res.status(404).send("404 Not Found")
})

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT)
});