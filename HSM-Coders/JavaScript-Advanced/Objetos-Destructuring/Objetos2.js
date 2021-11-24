const filmes = [ 
    {
        id: 1,
        titulo: 'Gods not Dead',
        duracao: 94,
        anoLancamento: 2016
    },
    {
        id: 2,
        titulo: 'Independence Day',
        duracao: 128,
        anoLancamento: 2010
    },
    {
        id: 3,
        titulo: 'Alita',
        duracao: 146,
        anoLancamento: 2020
    }
]

const [{ id, titulo, duracao, anoLancamento }] = filmes;

console.log(`${duracao} min`);
filmes.map(filme => console.log(filme.titulo));