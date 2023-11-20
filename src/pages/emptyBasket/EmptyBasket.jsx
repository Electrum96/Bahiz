import {Text, View,  ImageBackground} from 'react-native';

import useStyleEmptyBasket from './useStyleEmptyBasket';

import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const EmptyBasket = ({route, navigation}) => {

const styles = useStyleEmptyBasket();
    return (
        <Layout route={route} navigation={navigation}>
        <View style={styles.page}>
            <ImageBackground style={styles.image} resizeMode="contain" source={require('../../image/background/yellow.png')}>
                <Text style={styles.title}>El carrito esta vacío</Text>
            </ImageBackground>
        </View>
        <FooterButton onPress={() => navigation.push('MenuApp')} title={'IR A PRINCIPAL'}/>
    </Layout>
    )
}

export default EmptyBasket;