import {Text, View, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import useStyleButton from './useStyleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Button = ({isActive, onPress}) => {
  const styles = useStyleButton(isActive);
//   alert('render');
  return (
    <TouchableOpacity style={styles.buttonWrap} onPress={onPress}>
      <Text style={styles.titleButton}>{isActive ? 'da' : 'net'}</Text>
      <View style={styles.iconWrap}>
        <FontAwesomeIcon icon={'shopping-cart'} color="red" size={15} />
      </View>
    </TouchableOpacity>
  );
};

export default observer(Button)
