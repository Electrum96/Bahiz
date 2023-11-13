import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleHeader from './useStyleHeader';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import RoundButton from '../roundButton/RoundButton';

const Header = () => {
  const styles = useStyleHeader();
  return (
    <View style={styles.headerWrap}>
      <TouchableOpacity>
        <FontAwesomeIcon />
      </TouchableOpacity>
      <RoundButton />
    </View>
  );
};

export default Header;
