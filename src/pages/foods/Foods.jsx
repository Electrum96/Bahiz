import {Text, View, Image, ScrollView} from 'react-native';

import useStyleFoods from './useStyleFoods';

import Layout from '../../components/layout/Layout';

import ButtonsList from '../../components/buttonsList/ButtonsList';
import FoodList from '../../components/foodList/FoodList';

const Foods = ({navigation}) => {
  const styles = useStyleFoods();
  return (
    <Layout navigation={navigation}>
      <View style={styles.mainWrap}>
        <Text style={styles.title}>Categories</Text>

        <View style={styles.listWrap}>
          <ButtonsList />
        </View>

        <View style={styles.listBox}>
            <FoodList navigation={navigation} />
        </View>


      </View>
    </Layout>
  );
};

export default Foods;
