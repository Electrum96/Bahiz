import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleBasketItem() {
  const styles = StyleSheet.create({
    pages: {
      borderRadius: 10,
      borderColor: COLORS.accentBg,
      backgroundColor: COLORS.accent,
      flexDirection: 'row',
      borderWidth: 1,
      width: '100%',
      height: 100,
      shadowColor: 'rgba(0, 0, 0, 0.9)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: {width: 1, height: 13},
    },
    informWrap: {
      flex: 1,
      marginTop: 10,
    },
    title: {
      fontWeight: '600',
      fontSize: 20,
      color: COLORS.dark,
    },
    price: {
      fontWeight: '600',
      fontSize: 18,
      color: COLORS.dark,
    },
    counter: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    image: {
      marginHorizontal: 10,
      backgroundColor: 'black',
      marginTop: -15,

      borderRadius: 100,
      width: 100,
      height: 100,
    },
  });

  return styles;
}

export default useStyleBasketItem;
