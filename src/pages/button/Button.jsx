import {Text, View, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import useStyleButton from './useStyleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Button = ({isActive, onPress}) => {
  const styles = useStyleButton(isActive);

  return (
    <TouchableOpacity style={styles.buttonWrap} onPress={onPress}>
      <View style={styles.titleWrap}>
      <Text style={styles.titleButton}>{isActive ? 'Borrar' : 'Agregar'}</Text>
      </View>
      <View style={styles.iconWrap}>
        <FontAwesomeIcon icon={'shopping-cart'} color="red" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default observer(Button)
