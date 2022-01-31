const path = require ("path")

const about ={
    titulo:" Pimienta & Sal ",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.",
    historia:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
}
const menu= [
    {   id:1,
        plato: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: "U$S 65.50",
        img: 'Carpaccio-de-salmon.jpg'
    },
    {   id:2,
        plato: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        descripcionDetallada: '',
        precio: "U$S 47.00",
        img: 'Risotto-berenjena-queso-cabra.jpg'
    },
    {   id:3,
        plato: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar ",
        descripcionDetallada: '',
        precio: "U$S 27.50",
        img: 'Mousse-de-arroz-con-leche.jpg'
    },
    {   id:4,
        plato: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico ",
        descripcionDetallada: '',
        precio: "U$S 37.50",
        img: 'esparragos.png'

    }
    ]

const mainController = {
    index: (req,res) => {
        res.render("index", {"menu": menu,"about":about})
    },
    detalleMenu: (req,res) => {
        let plato = menu.find(plato =>plato.id==req.params.menuId)
        console.log(plato)
        res.render("detalleMenu", { plato: plato })
    }
}

module.exports= mainController;