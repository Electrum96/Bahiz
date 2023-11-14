import {Text, View,} from 'react-native';

import useStyleBasket from './useStyleBasket';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';


const Basket = ({navigation}) => {

const styles = useStyleBasket();
    return (
        <Layout>
            <View style={styles.page}>
            
                
            </View>
            <FooterButton onPress={() => navigation.push('Successful')} title={'Process to payment'}/>
            </Layout>
       
    )
}

export default Basket;