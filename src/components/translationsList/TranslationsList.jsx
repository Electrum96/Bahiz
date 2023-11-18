import {Text, View, Image} from 'react-native';

import useStyleTranslationsList from './useStyleTranslationsList';
import translation from '../../data/translations/translation';
import TranslationItem from '../translationItem/TranslationItem';

const TranslationsList = () => {
  const styles = useStyleTranslationsList();
  return (
    <View style={styles.list}>
     
        {translation
          .filter(i => i.date >= new Date().getDate())
          .map((translation, index) => (
            <TranslationItem
              key={translation.id}
              index={index}
              {...translation}
            />
          ))}
      
    </View>
  );
};

export default TranslationsList;
