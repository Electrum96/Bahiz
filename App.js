import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  faBars,
  faClose,
  faBell,
  faCheckSquare,
  faShoppingCart,
  faAngleLeft,
  faTrash,
  faArrowLeft,
  faCartShopping,
  faPizzaSlice,
  faBurger,
  faBacon,
  faDrumstickBite,
  faPlus,
  faCheck,
  faCookie,
  faCakeCandles,
  faBowlFood,
  faStroopwafel,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

import MenuApp from './src/pages/menuApp/MenuApp';
import Basket from './src/pages/basket/Basket';
import Broning from './src/pages/broning/Broning';
import Contacts from './src/pages/contacts/Contacts';
import EmptyBasket from './src/pages/emptyBasket/EmptyBasket';

import FoodCard from './src/pages/foodCard/FoodCard';
import Foods from './src/pages/foods/Foods';
import Successful from './src/pages/successful/Successful';
import Thanks from './src/pages/thanks/Thanks';
import Translations from './src/pages/translations/Translations';
import Events from './src/pages/events/Events';

library.add(
  faBars,
  faClose,
  faBell,
  faCheckSquare,
  faShoppingCart,
  faAngleLeft,
  faTrash,
  faArrowLeft,
  faCartShopping,
  faPizzaSlice,
  faBurger,
  faBacon,
  faDrumstickBite,
  faPlus,
  faCheck,
  faCookie,
  faCakeCandles,
  faBowlFood,
  faStroopwafel,
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MenuApp"
          component={MenuApp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basket"
          component={Basket}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Broning"
          component={Broning}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EmptyBasket"
          component={EmptyBasket}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Events"
          component={Events}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodCard"
          component={FoodCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Foods"
          component={Foods}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Successful"
          component={Successful}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Thanks"
          component={Thanks}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Translations"
          component={Translations}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
