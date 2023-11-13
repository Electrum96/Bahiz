import {Text, View, Image} from 'react-native';

import useStyleMenuApp from './useStyleMenuApp';

import RoundButton from '../../components/roundButton/RoundButton';
import PagesList from '../../components/pagesList/PagesList';

const MenuApp = () => {
  const styles = useStyleMenuApp();
  return (
    <View style={styles.menuWrapper}>
      <View>
        <Image style={styles.image} source={require('../../image/Brand.png')} />
      </View>
      <View>
        <PagesList />
      </View>
      <View>
        <RoundButton size={30} />
      </View>
    </View>
  );
};

export default MenuApp;
