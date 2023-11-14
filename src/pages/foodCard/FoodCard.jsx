import {Text, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import useStyleFoodCard from './useStyleFoodCard';

import Layout from '../../components/layout/Layout';


const FoodCard = ({navigation}) => {
  const styles = useStyleFoodCard();
  return (
    <Layout navigation={navigation}>
      <View style={styles.page}>
        <View style={styles.main}>
          <Image
            style={styles.image}
            source={require('../../image/Pizza/Mexica.png')}
          />
          <View style={styles.blockInfo}>
            <View style={styles.description}>
              <Text style={styles.title}>Английский Завтрак</Text>
              <Text style={styles.desc}>Яйца, соус чеддар, фасоль, шпинат</Text>
            </View>
            <Text>counter</Text>
            <Text></Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceWrap}>
            <Text style={styles.price}>30</Text>
          </View>

         <TouchableOpacity style={styles.buttonWrap}>
            <Text style={styles.titleButton}>Check out</Text>
            <View style={styles.iconWrap}>
            <FontAwesomeIcon icon={'shopping-cart'} color='red' size={15}/>
            </View>
         </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default FoodCard;
