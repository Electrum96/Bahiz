import {Text, View,TextInput} from 'react-native';

import useStyleContacts from './useStyleContacts';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Contacts = ({route, navigation}) => {

const styles = useStyleContacts();
    return (
        <Layout route={route} navigation={navigation}>
            <View style={styles.pageWrap}>

                <View style={styles.formWrap}>
                <Text style={styles.title}>Contactos</Text>
                <Text style={styles.desc}>Dirección de correo electrónico</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Teléfono</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Mesa</Text>
                <TextInput style={styles.input}/>
                </View>
                <FooterButton  title={'Ir a principal'} onPress={() => navigation.push('MenuApp')}/>
                
            </View>
        </Layout>
    )
}

export default Contacts;