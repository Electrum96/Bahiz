import {Text, View, Image} from 'react-native';

import tabs from '../../data/pagesList/tabs';

import useStylePagesList from './useStylePagesList';

import PageItem from '../pageItem/PageItem';

const PagesList = ({navigation}) => {
  const styles = useStylePagesList();
  return (
    <View style={styles.listWrap}>
      {tabs.map(tab => (
        <PageItem navigation={navigation} key={tab.id} title={tab.title} onPress={() => navigation.push(tab.route)}/>
      ))}
    </View>
  );
};

export default PagesList;
