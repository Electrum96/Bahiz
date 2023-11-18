import {Text, View, Image} from 'react-native';

import useStyleTranslationItem from './useStyleTranslationItem';
import limitText from '../../utils/utils.js';

const TranslationItem = ({index, liga, team1, team2, date, time}) => {
  const even = index % 2 == 0;
  const styles = useStyleTranslationItem(even);
  return (
    <View style={styles.itemWrap}>
      <View style={styles.ligaWrap}>
        <Text style={styles.liga}>{limitText(liga, 15)}</Text>
      </View>
      <View style={styles.informWrap}>
        <Text style={styles.team1}>{team1}</Text>
        <Text>{team2}</Text>
        <Text style={styles.inform}>
          {date}.11 - {time}
        </Text>
      </View>
    </View>
  );
};

export default TranslationItem;
