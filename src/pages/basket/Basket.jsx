import {Text, View, ImageBackground} from 'react-native';

import useStyleBasket from './useStyleBasket';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Basket = ({navigation}) => {

const styles = useStyleBasket();
    return (
        <Layout>
            <View style={styles.page}>
                <ImageBackground style={styles.image} resizeMode="contain" source={require('../../image/background/yellow.png')}>
                    <Text style={styles.title}>Cart is empty</Text>
                </ImageBackground>
            </View>
            <FooterButton onPress={() => navigation.push('MenuApp')} title={'GO MAIN'}/>
        </Layout>
    )
}

export default Basket;