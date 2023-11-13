import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleFoodItem() {
  const styles = StyleSheet.create({
    itemWrap: {
      width: 160,
      height: 200,
      backgroundColor: COLORS.accentBg,
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
    },
    image: {
      alignSelf: 'center',
      flex: 1,
      width: 160,
      height: 150,
    },
    infoWrap: {
      alignItems: 'flex-start',
      backgroundColor: COLORS.accent,
    },
  });

  return styles;
}

export default useStyleFoodItem;
