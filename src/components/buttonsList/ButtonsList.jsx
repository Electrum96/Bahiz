import {Text, View, ScrollView} from 'react-native';

import buttons from '../../data/buttonList/buttons';

import useStyleButtonsList from './useStyleButtonsList';
import ButtonItem from '../buttonItem/ButtonItem';

const ButtonsList = () => {
  const styles = useStyleButtonsList();
  return (
    <ScrollView horizontal={true}>
      <View style={styles.buttonsWrap}>
        {buttons.map(button => (
          <ButtonItem key={button.id} title={button.title} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ButtonsList;
