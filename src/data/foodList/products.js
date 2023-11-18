let products = [
  {
    title: 'Мексикана',
    desc: 'Острая пицца с пепперони, соусом болоньез, томатным соусом, перчиком халапеньо и луком, сыром моцарелла, беконом, тушеным луком и петрушкой',
    price: 649,
    image: require('../../image/Pizza/Mexica.png'),
    weight: 485,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Кватро Формаджи',
    desc: 'Классическая итальянская пицца с четырьмя видами сыра',
    price: 759,
    image: require('../../image/Pizza/Quatro.png'),
    weight: 350,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Примавера',
    desc: 'Настроение - весна (и какая разница, что там за окном). Сезонные овощи с томатным соусом и песто',
    price: 625,
    image: require('../../image/Pizza/Primavera.png'),
    weight: 370,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Аль Сальмоне',
    desc: 'Игра контрастов: чёрное тесто и сливочный соус с моцареллой, филе лосося и мягким творожным сыром',
    price: 800,
    image: require('../../image/Pizza/Salmon.png'),
    weight: 420,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Барбекю',
    desc: 'Пицца с сочным цыпленком и свининой BBQ, беконом, шампиньонами, луком бальзамик, моцареллой.',
    price: 540,
    image: require('../../image/Pizza/Barbeku.png'),
    weight: 380,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Фрутти ди Маре с моцареллой',
    desc: 'Для особых случаев. Креветки, кольца и щупальца кальмара, фирменный томатный соус, моцарелла, черри и рукола на черном тесте',
    price: 470,
    image: require('../../image/Pizza/Frutti.png'),
    weight: 350,
    classTab: 'Breakfast',
    inBasket: 'false'
  },
  {
    title: 'Пенне в сливочном соусе',
    desc: 'Фирменный сливочный соус с креветками, кальмарами, помидорами и перцем чили',
    price: 729,
    image: require('../../image/Pasta/Penne.png'),
    weight: 280,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Пенне в томатном соусе',
    desc: 'Фирменная паста с тигровыми креветками и щупальцами кальмара в томатном соусе. Украсит любой обед или ужин',
    price: 650,
    image: require('../../image/Pasta/PenneTomato.png'),
    weight: 285,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Пенне с цыплёнком и песто',
    desc: 'Сливочно-томатный соус с добавлением шпината и песто, маринованной курицей, помидорами черри и сыром',
    price: 500,
    image: require('../../image/Pasta/PenneChicken.png'),
    weight: 250,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Кинотто с гребешками',
    desc: 'Фантазия на тему ризотто: киноа в сливочном соусе с сыром горгонзола, помидорами черри и гребешками',
    price: 779,
    image: require('../../image/Pasta/Kinotto.png'),
    weight: 250,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Пенне 3 сыра',
    desc: 'Ароматная паста с голубым сыром, пармезаном и сливочным сыром с капелькой трюфельного масла',
    price: 530,
    image: require('../../image/Pasta/ThreeChessy.png'),
    weight: 250,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Пенне с уткой',
    desc: 'Паста с пастрами из утки, овощами, тушёными в томатном соусе, базиликом и пармезаном. Элегантно, насыщенно, основательно',
    price: 740,
    image: require('../../image/Pasta/Duck.png'),
    weight: 460,
    classTab: 'Lunch',
    inBasket: 'false'
  },
  {
    title: 'Тёплый салат с мраморной говядиной',
    desc: 'Большой тёплый салат с мраморной говядиной, обжаренными стручковой фасолью, цукини, сладким перцем и соусом песто',
    price: 735,
    image: require('../../image/Salad/Warp.png'),
    weight: 180,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Цезарь с креветками',
    desc: 'Отборные листья Ромейна и Айсберга, помидоры черри, перепелиные яйца, гренки, под фирменным соусом Цезарь. А еще креветки - настоящий афродизиак. Цезарь бы оценил!',
    price: 750,
    image: require('../../image/Salad/Shrimps.png'),
    weight: 190,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Цезарь с куриной грудкой',
    desc: 'Вкус этого салата знают во всем мире: листья Ромейна и Айсберга, гренки из тосканского хлеба, кусочки сочной куриной грудки, перепелиные яйца, пармезан и пикантный соус. Да здравствует Цезарь!',
    price: 670,
    image: require('../../image/Salad/Cesar.png'),
    weight: 200,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Баклажаны со страчателлой',
    desc: 'Авторская версия салата Капрезе: печёные баклажаны, спелые томаты, листья руколы и базилика со страчателлой и кремом бальзамик',
    price: 595,
    image: require('../../image/Salad/Vegetables.png'),
    weight: 180,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Зеленый салат с эдамаме',
    desc: 'Заряд витаминов: бобы эдамаме, брокколи, кабачки, огурцы и шпинат под соусом из маракуйи',
    price: 485,
    image: require('../../image/Salad/Green.png'),
    weight: 160,
    classTab: 'Dinner',
    inBasket: 'false'
  },
  {
    title: 'Салат с лососем',
    desc: 'Подкопчённый лосось со свежими огурцами, листьями салатов, нежным трюфельным сыром и ярким соусом из маракуйи',
    price: 699,
    image: require('../../image/Salad/SalmonSalad.png'),
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
