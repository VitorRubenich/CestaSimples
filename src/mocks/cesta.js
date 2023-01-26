import farmImage from '../../assets/topo.png';
import tomate from '../../assets/frutas/Tomate.png';
import abobora from '../../assets/frutas/Abóbora.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import brocolis from '../../assets/frutas/Brócolis.png';

const cesta = {
    topo: {
        title: "Detalhes da cesta"
    },
    details: {
        nameCesta: "Cesta de Verduras",
        janyJackFarm: "Jany Jack Farm",
        farmLogo: farmImage,
        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
        price: "$ 33,99",
        btnComprar: "Comprar",
    },
    itens: {
        title: "Itens da cesta",
        lista:[
            {
                nome: "Tomate",
                img: tomate,

            },
            {
                nome: "Pepino",
                img: pepino,

            },
            {
                nome: "Brócolis",
                img: brocolis,

            },
            {
                nome: "Abóbora",
                img: abobora,

            },
            {
                nome: "Batata",
                img: batata,

            },
            
        ]
    }
}

export default cesta;