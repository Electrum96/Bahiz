import {Text, View, TouchableOpacity} from 'react-native';

import useStylePageItem from './useStylePageItem';

const PageItem = ({title, navigation, onPress}) => {
  const styles = useStylePageItem();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.tabWrap}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PageItem;
