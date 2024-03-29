import {Text, View, Image} from 'react-native';

import useStyleLayout from './useStyleLayout';
import Container from '../container/Container';
import Header from '../header/Header';
import FooterButton from '../footerButton/FooterButton';

const Layout = ({route, children, navigation}) => {
  const styles = useStyleLayout();
  return (
    <View style={styles.layoutWrap}>
      <Header route={route} navigation={navigation} />

      <View style={styles.bgc}>
        <Container>{children}</Container>
      </View>
    </View>
  );
};

export default Layout;
