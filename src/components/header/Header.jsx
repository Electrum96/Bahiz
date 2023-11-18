import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleHeader from './useStyleHeader';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import RoundButton from '../roundButton/RoundButton';
import Container from '../container/Container';

const Header = ({route, navigation}) => {
  const styles = useStyleHeader;
  const {name} = route;

  const isFoods = name === 'Foods' ? true : false;
  const goBack = () => navigation.goBack();
  const goHome = () => navigation.push('MenuApp');

  return (
    <View style={styles.headerWrap}>
      <Container>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={isFoods ? goHome : goBack}>
            <FontAwesomeIcon
              icon={isFoods ? 'bars' : 'arrow-left'}
              size={30}
              color={'grey'}
            />
          </TouchableOpacity>
          <RoundButton navigation={navigation} size={20} />
        </View>
      </Container>
    </View>
  );
};

export default Header;
