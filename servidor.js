const http = require("http");

const PORT = 3000;

const cards = 
[
      { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
      { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },  
      { name: "Guardiã das terras", type: "Criatura", attack: 6, defense: 8 }, 
      { name: "Guardiã das labaredas", type: "Criatura", attack: 1, defense: 20 }, 
      { name: "Guardiã das florestas", type: "Criatura", attack: 7, defense: 4 }, 
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);


    if (req.url === "/agora")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const now = new Date().toLocaleString("pt-PT");
        res.end(`<h1>Agora</h1>${now}<a href=http://localhost:${PORT}/>Voltar</a>`);
        return;
    }

    else if (req.url === "/cartas")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const items = cards.map(card => `<li>${card.name}</li>`).join("");
        const count = `Número de cartas:` +  cards.length
        res.end(`<h1>Cartas</h1><h2>${count}</h2>${items}<a href=http://localhost:${PORT}/cartas/aleatorio>Aleatórias</a></br><a href=http://localhost:${PORT}/>Voltar</a>`);
        return;
    }else if(req.url=== "/cartas/aleatorio")
    {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const card = cards[Math.floor(Math.random() * cards.length)];
      res.end(`<h1>Aleatório</h1><h3>${card.name},${card.type},${card.attack},${card.defense}</h3><a href=http://localhost:${PORT}/cartas>Voltar</a>`);
    }
    else if (req.url === "/sobre")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h1>Sobre</h1><h4>Marcelo Carvalho, TGPSI24U</h4><a href=http://localhost:${PORT}/>Voltar</a>`);
        return;
    }

    else if (req.url === "/")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h1 style="color:Blue;text-align:center;">Index</h1><p style="text-align:center"><a href=http://localhost:${PORT}/sobre>Sobre</a></br><a href=http://localhost:${PORT}/cartas>Cartas</a></br><a href=http://localhost:${PORT}/agora>Agora</a></p>`);
        return;
    }
    else
    {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h1 style="color:red;text-align:center;">404, página não encontrada</h1><p style="text-align:center"><a href=http://localhost:${PORT}>Voltar</a></p>`);
    }
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});