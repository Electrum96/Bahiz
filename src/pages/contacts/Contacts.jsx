import {Text, View,TextInput} from 'react-native';

import useStyleContacts from './useStyleContacts';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Contacts = ({navigation}) => {

const styles = useStyleContacts();
    return (
        <Layout navigation={navigation}>
            <View style={styles.pageWrap}>

                <View style={styles.formWrap}>
                <Text style={styles.title}>Контакты</Text>
                <Text style={styles.desc}>Email Address</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Phone</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.desc}>Table</Text>
                <TextInput style={styles.input}/>
                </View>
                <FooterButton  title={'Go Main'} onPress={() => navigation.push('MenuApp')}/>
                
            </View>
        </Layout>
    )
}

export default Contacts;