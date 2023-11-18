import {Text, View, Image} from 'react-native';

import useStyleTranslationsList from './useStyleTranslationsList';
import translation from '../../data/translations/translation';
import Container from '../container/Container';
import TranslationItem from '../translationItem/TranslationItem';

const TranslationsList = () => {
  const {id} = translation;
  const styles = useStyleTranslationsList(id);
  return (
    <View style={styles.list}>
      <Container>
        {translation
          .filter(i => i.date >= new Date().getDate())
          .map(translation => (
            <TranslationItem key={translation.id} {...translation} />
          ))}
      </Container>
    </View>
  );
};

export default TranslationsList;
