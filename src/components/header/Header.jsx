import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleHeader from './useStyleHeader';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import RoundButton from '../roundButton/RoundButton';
import Container from '../container/Container';

const Header = ({navigation}) => {
  const styles = useStyleHeader;

  return (
    <View style={styles.headerWrap}>
      <Container>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={() => navigation.push('MenuApp')}>
            <FontAwesomeIcon icon={'bars'} size={30} color={'grey'} />
          </TouchableOpacity>
          <RoundButton navigation={navigation} size={20} />
        </View>
      </Container>
    </View>
  );
};

export default Header;
