import {Text, View, Image, ScrollView} from 'react-native';

import useStyleTranslations from './useStyleTranslations';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';
import TranslationsList from '../../components/translationsList/TranslationsList';

const Translations = ({navigation}) => {

const styles = useStyleTranslations();
    return (
        <Layout navigation={navigation}>
        <View style={styles.page}>
            <ScrollView>
            <TranslationsList/>
            </ScrollView>
            <FooterButton title={'Go Main'} onPress={() => navigation.push('MenuApp')}/>
        </View>
      </Layout>
    )
}

export default Translations;