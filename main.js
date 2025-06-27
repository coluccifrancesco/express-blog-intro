import chalk from 'chalk';
import express from 'express';
import dotenv from 'dotenv';

console.log('Hello World!');

const app = express();
const port = 3000;

// Creiamo il progetto base con una rotta / 
// che ritorna un testo semplice con scritto ”Server del mio blog”
app.get(('/'), (req, res) => {
    res.type('html').send('Server del mio blog')
})

// Creiamo un array dove inserire una lista di almeno 5 post, 
// per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
const posts = [
    {
        title: "Ciambellone",
        contenuto: "Un dolce semplice e gustoso, perfetto per la colazione.",
        image: "./images/ciambellone.jpeg",
        tags: ["dolce", "colazione", "ciambella"]
    },
    {
        title: "Cracker alla barbabietola",
        contenuto: "Snack salato e croccante, ideale per un aperitivo.",
        image: "./images/cracker_barbabietola.jpeg",
        tags: ["snack", "aperitivo", "barbabietola"]
    },
    {
        title: "Pane fritto dolce",
        contenuto: "Un pane dolce e fritto, perfetto per una merenda golosa.",
        image: "./images/pane_fritto_dolce.jpeg",
        tags: ["dolce", "merenda", "fritto"]
    },
    {
        title: "Pasta alla barbabietola",
        contenuto: "Un primo piatto colorato e saporito, con un tocco di barbabietola.",
        image: "./images/pasta_barbabietola.jpeg",
        tags: ["primo", "barbabietola", "pasta"]
    },
    {
        title: "Torta paesana",
        contenuto: "Un dolce tradizionale, ricco di sapori e storia.",
        image: "./images/torta_paesana.jpeg",
        tags: ["dolce", "tradizionale", "torta"]
    }
]


// Creiamo poi una rotta /api/posts che restituisca un oggetto json con la lista dei post.
app.get(('/api/posts'), (req, res) => {
    res.json(posts);
    console.log(posts);
})

// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare 
// le immagini associate ad ogni post.




app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

// Testare su postman