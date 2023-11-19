let products = [
  {
    title: 'Овсяная каша',
    desc: 'Овсяная каша с маслом и джемом',
    price: 139,
    image: require('../../image/Breakfast/Kasha.jpeg'),
    weight: 250,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Сырники домашние',
    desc: 'Сырники из домашего творога',
    price: 235,
    image: require('../../image/Breakfast/Cheesy.jpeg'),
    weight: 250,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Блины с творогом',
    desc: 'Блины с творогом и клубникой',
    price: 229,
    image: require('../../image/Breakfast/Pancakes.jpeg'),
    weight: 250,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Блины с курицей',
    desc: 'Классичесские блины с курицей',
    price: 359,
    image: require('../../image/Breakfast/Bliny.jpeg'),
    weight: 350,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Норвежский завтрак',
    desc: 'Яичница с сёмгой и травами',
    price: 625,
    image: require('../../image/Breakfast/Omlet.jpeg'),
    weight: 370,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Голландский омлет',
    desc: 'Омлет с голландским сыром ',
    price: 545,
    image: require('../../image/Breakfast/Amlet.jpeg'),
    weight: 420,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Баварский завтрак',
    desc: 'Баварские сосиски и ржаной хлеб',
    price: 540,
    image: require('../../image/Breakfast/Bavarian.jpeg'),
    weight: 380,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Каша из зеленой гречи',
    desc: 'Каша из зеленой гречки с миндалем ',
    price: 299,
    image: require('../../image/Breakfast/Green.jpeg'),
    weight: 350,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Кальмар гриль',
    desc: 'Кальмар гриль с картофелем',
    price: 519,
    image: require('../../image/Lunch/Kalmar.jpeg'),
    weight: 280,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Медальоны из свинины',
    desc: 'Свиные медальоны с овощами ',
    price: 549,
    image: require('../../image/Lunch/Pork.jpeg'),
    weight: 285,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Грибной крем-суп',
    desc: 'Грибной крем-суп из шампиньонов ',
    price: 249,
    image: require('../../image/Lunch/Mushrooms.jpeg'),
    weight: 285,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Сырный крем-суп',
    desc: 'Крем суп из мягкого сыра',
    price: 349,
    image: require('../../image/Lunch/Yellow.jpeg'),
    weight: 285,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Индейка с тыквой',
    desc: 'Индейка с теплым хумусом из тыквы',
    price: 549,
    image: require('../../image/Lunch/Indi.jpeg'),
    weight: 250,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Зеленый суп',
    desc: 'Суп из сельдерея и укропа',
    price: 779,
    image: require('../../image/Lunch/Gsoup.jpeg'),
    weight: 250,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Тыквенный суп',
    desc: 'Крем-суп из тыквы с беконом',
    price: 530,
    image: require('../../image/Lunch/Pumpkin.jpeg'),
    weight: 250,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Суп из цукини',
    desc: 'Суп из цукини с острым маслом',
    price: 740,
    image: require('../../image/Lunch/Zuccini.jpeg'),
    weight: 460,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Цыпленок том-ям',
    desc: 'Цыпленок в тайском остром соусе',
    price: 648,
    image: require('../../image/Dinner/Chciken.jpeg'),
    weight: 180,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Печеная треска',
    desc: 'Печеная треска с мятым картофелем',
    price: 499,
    image: require('../../image/Dinner/Fish.jpeg'),
    weight: 190,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Wok-паста',
    desc: 'Паста в азиатском стиле с кисло-сладким соусом',
    price: 510,
    image: require('../../image/Dinner/Azian.jpeg'),
    weight: 180,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Бифштекс',
    desc: 'Бифштекс с глазуньей',
    price: 519,
    image: require('../../image/Dinner/Bif.jpeg'),
    weight: 200,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Эскалоп по Милански',
    desc: 'Эскалоп с рисом и овощами',
    price: 420,
    image: require('../../image/Dinner/Meat.jpeg'),
    weight: 180,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Паста карбонара',
    desc: 'Итальянская паста с беконом и сыром',
    price: 510,
    image: require('../../image/Dinner/PorkPasta.jpeg'),
    weight: 180,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Паста песто',
    desc: 'Паста с сусом из шпината',
    price: 485,
    image: require('../../image/Dinner/Pesto.jpeg'),
    weight: 160,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Паста с морепродуктами',
    desc: 'Паста с гребешком и креветками',
    price: 800,
    image: require('../../image/Dinner/Sea.jpeg'),
    weight: 190,
    classTab: 'Dinner',
    inBasket: 'false'
  },

];

const getID = () =>  Math.random().toString() + new Date().getDate().toString()

products = products.map(el => {
  return {
    ...el,
    count: 1,
    id: getID(),
  };
});

export default products;
