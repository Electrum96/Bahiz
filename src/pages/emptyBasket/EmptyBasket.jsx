import {Text, View,  ImageBackground} from 'react-native';

import useStyleEmptyBasket from './useStyleEmptyBasket';

import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const EmptyBasket = ({navigation}) => {

const styles = useStyleEmptyBasket();
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

export default EmptyBasket;