import {Text, View, ScrollView} from 'react-native';

import buttons from '../../data/buttonList/buttons';

import useStyleButtonsList from './useStyleButtonsList';
import ButtonItem from '../buttonItem/ButtonItem';

const ButtonsList = () => {
  const styles = useStyleButtonsList();
  return (
      <View style={styles.buttonsWrap}>
        {buttons.map(button => (
          <ButtonItem key={button.id} title={button.title} />
        ))}
      </View>
  );
};

export default ButtonsList;
