import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleHeader from './useStyleHeader';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import RoundButton from '../roundButton/RoundButton';

const Header = ({navigation}) => {

  const styles = useStyleHeader;

  return (
    <View style={styles.headerWrap}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={'bars'} size={20} color={'grey'}/>
      </TouchableOpacity>
      <RoundButton size={20}/>
    </View>
  );
};

export default Header;
