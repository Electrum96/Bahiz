import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleFoodItem() {
  const styles = StyleSheet.create({
    itemWrap: {
      width: 160,
      height: 240,
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: {width: 1, height: 13},
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignSelf: 'center',
    },
    infoWrap: {
      height: '43%',
      width: '100%',
      alignItems: 'flex-start',
      backgroundColor: COLORS.accent,
      paddingHorizontal: 10,
      paddingTop: 10,
      justifyContent: 'space-around',
      gap: 10,
    },
    title: {
      color: COLORS.dark,
      fontWeight: '700',
      fontSize: 15,
    },
    descr: {
      color: COLORS.dark,
      fontSize: 10,
    },
    price: {
      color: COLORS.dark,
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
  });

  return styles;
}

export default useStyleFoodItem;
