import {Text, View, Image, TextInput} from 'react-native';

import useStyleBroning from './useStyleBroning';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Broning = ({route, navigation}) => {

const styles = useStyleBroning();
    return (
        <Layout route={route} navigation={navigation}>
            <View style={styles.pageWrap}>

                <View style={styles.formWrap}>
                <Text style={styles.title}>Бронь</Text>
                <Text style={styles.desc}>Email Address</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Phone</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Table</Text>
                <TextInput style={styles.input}/>
                </View>

                <Text style={styles.text}>Welcome friend, enter your details so lets get started  food.</Text>
                <FooterButton  title={'Reserve'} onPress={() => navigation.push('Thanks')}/>
                
            </View>
        </Layout>
    )
}

export default Broning;