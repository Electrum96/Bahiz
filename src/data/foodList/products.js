let products = [
  {
    title: 'Avena',
    desc: 'Avena con mantequilla y mermelada',
    price: 13,
    image: require('../../image/Breakfast/Kasha.jpeg'),
    weight: 250,
    classTab: 'Breakfast',
  },
  {
    title: 'Tartas',
    desc: 'Tartas de queso hechas con requesón casero',
    price: 23,
    image: require('../../image/Breakfast/Cheesy.jpeg'),
    weight: 250,
    classTab: 'Breakfast',
  },
  {
    title: 'Panqueques con requesón',
    desc: 'Panqueques con requesón y fresas',
    price: 22,
    image: require('../../image/Breakfast/Pancakes.jpeg'),
    weight: 250,
    classTab: 'Breakfast',
  },
  {
    title: 'Panqueques con pollo',
    desc: 'Tortitas clásicas con pollo',
    price: 35,
    image: require('../../image/Breakfast/Bliny.jpeg'),
    weight: 350,
    classTab: 'Breakfast',
  },
  {
    title: 'Desayuno noruego',
    desc: 'Huevos revueltos con salmón y hierbas',
    price: 62,
    image: require('../../image/Breakfast/Omlet.jpeg'),
    weight: 370,
    classTab: 'Breakfast',
  },
  {
    title: 'Tortilla holandesa',
    desc: 'Tortilla con queso holandés',
    price: 52,
    image: require('../../image/Breakfast/Amlet.jpg'),
    weight: 420,
    classTab: 'Breakfast',
  },
  {
    title: 'Desayuno bávaro',
    desc: 'Salchichas bávaras y pan de centeno',
    price: 54,
    image: require('../../image/Breakfast/Bavarian.jpeg'),
    weight: 380,
    classTab: 'Breakfast',
  },
  {
    title: 'Gachas de trigo sarraceno',
    desc: 'Gachas de trigo sarraceno verde',
    price: 29,
    image: require('../../image/Breakfast/Green.jpeg'),
    weight: 350,
    classTab: 'Breakfast',
  },
  {
    title: 'Calamares a la plancha',
    desc: 'Calamares a la plancha con patatas',
    price: 51,
    image: require('../../image/Lunch/Kalmar.jpeg'),
    weight: 280,
    classTab: 'Lunch',
  },
  {
    title: 'Medallones de cerdo',
    desc: 'Medallones de cerdo con verduras',
    price: 54,
    image: require('../../image/Lunch/Pork.jpeg'),
    weight: 285,
    classTab: 'Lunch',
  },
  {
    title: 'Sopa de crema',
    desc: 'Sopa de crema de champiñones',
    price: 24,
    image: require('../../image/Lunch/Mushrooms.jpeg'),
    weight: 285,
    classTab: 'Lunch',
  },
  {
    title: 'Sopa de crema de queso',
    desc: 'Sopa cremosa de queso tierno',
    price: 34,
    image: require('../../image/Lunch/Yellow.jpeg'),
    weight: 285,
    classTab: 'Lunch',
  },
  {
    title: 'Pavo con calabaza',
    desc: 'Pavo con hummus de calabaza tibio',
    price: 54,
    image: require('../../image/Lunch/Indi.jpeg'),
    weight: 250,
    classTab: 'Lunch',
  },
  {
    title: 'Sopa verde',
    desc: 'Sopa de apio y eneldo',
    price: 77,
    image: require('../../image/Lunch/Gsoup.jpeg'),
    weight: 250,
    classTab: 'Lunch',
  },
  {
    title: 'Sopa de calabaza',
    desc: 'Sopa cremosa de calabaza con tocino',
    price: 53,
    image: require('../../image/Lunch/Pumpkin.jpeg'),
    weight: 250,
    classTab: 'Lunch',
  },
  {
    title: 'Sopa de zuchini',
    desc: 'Sopa de calabacín con mantequilla picante',
    price: 74,
    image: require('../../image/Lunch/Zuccini.jpeg'),
    weight: 460,
    classTab: 'Lunch',
  },
  {
    title: 'Pollo Tom Yum',
    desc: 'Pollo en salsa picante tailandesa',
    price: 64,
    image: require('../../image/Dinner/Chciken.jpeg'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Bacalao al horno',
    desc: 'Bacalao al horno con puré de patatas',
    price: 49,
    image: require('../../image/Dinner/Fish.jpeg'),
    weight: 190,
    classTab: 'Dinner',
  },
  {
    title: 'Pasta para wok',
    desc: 'Pasta estilo asiática con salsa agridulce',
    price: 55,
    image: require('../../image/Dinner/Azian.jpeg'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Bife',
    desc: 'Filete de ternera con huevo frito',
    price: 51,
    image: require('../../image/Dinner/Bif.jpeg'),
    weight: 200,
    classTab: 'Dinner',
  },
  {
    title: 'Escalope milanesa',
    desc: 'Escalope con arroz y verduras',
    price: 42,
    image: require('../../image/Dinner/Meat.jpeg'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Pasta carbonara',
    desc: 'Pasta italiana con tocino y queso',
    price: 51,
    image: require('../../image/Dinner/PorkPasta.png'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Pasta al pesto',
    desc: 'Pasta con salsa de espinacas',
    price: 48,
    image: require('../../image/Dinner/Pesto.jpeg'),
    weight: 160,
    classTab: 'Dinner',
  },
  {
    title: 'Pasta con mariscos',
    desc: 'Pasta con vieiras y camarones',
    price: 80,
    image: require('../../image/Dinner/Sea.png'),
    weight: 190,
    classTab: 'Dinner',
  },

];

const getID = () =>  Math.random().toString() + new Date().getDate().toString()

products = products.map(el => {
  return {
    ...el,
    count: 1,
    inBasket: false,
    id: getID(),
  };
});

export default products;
