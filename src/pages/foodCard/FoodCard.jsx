import {Text, View, Image} from 'react-native';

import useStyleFoodCard from './useStyleFoodCard';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const FoodCard = () => {

const styles = useStyleFoodCard();
    return <Layout>
        <View style={styles.cardWrap}>
            <Image style={styles.image} source={require('../../image/Pizza/Mexica.png')}/>
            <View style={styles.informWrap}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>title</Text>
                    <Text>descr</Text>
                </View>
                <Text>counter</Text>
            </View>
            <FooterButton title={'checkout'}/>
        </View>
    </Layout>
}

export default FoodCard;