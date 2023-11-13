import {Text, View, Image, ScrollView} from 'react-native';

import useStyleFoods from './useStyleFoods';

import Layout from '../../components/layout/Layout';

import ButtonsList from '../../components/buttonsList/ButtonsList';
import FoodList from '../../components/foodList/FoodList';
import Container from '../../components/container/Container';

const Foods = () => {
  const styles = useStyleFoods();
  return (
    <Layout>
      <View style={styles.mainWrap}>
        <Text style={styles.title}>Categories</Text>

        <View style={styles.listWrap}>
          <ButtonsList />
        </View>

        <View style={styles.listBox}>
            <FoodList />
        </View>


      </View>
    </Layout>
  );
};

export default Foods;
