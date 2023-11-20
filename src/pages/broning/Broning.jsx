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
                <Text style={styles.title}>Reserva</Text>
                <Text style={styles.desc}>Dirección de correo electrónico</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Teléfono</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Mesa</Text>
                <TextInput style={styles.input}/>
                </View>

                <Text style={styles.text}>Bienvenido amigo, ingresa tus datos para comenzar con la comida.</Text>
                <FooterButton  title={'Reservar'} onPress={() => navigation.push('Thanks')}/>
                
            </View>
        </Layout>
    )
}

export default Broning;