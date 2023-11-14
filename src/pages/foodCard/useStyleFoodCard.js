import {StyleSheet} from 'react-native';

import {COLORS} from '../../styles/variables';

function useStyleFoodCard() {
  const styles = StyleSheet.create({
    page: {
      justifyContent: 'space-between',
      height: '100%',
    },
    main: {
      marginTop: 20,
    },
    image: {
      width: '100%',
      height: '70%',
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: COLORS.dark,
    },

    footer: {
      alignItems: 'center',
      marginBottom: 20,
      flexDirection: 'row',
    },

    priceWrap:{
        flex: 1,
    },

    price: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.dark
    },
    iconWrap:{
        backgroundColor: COLORS.light,
        borderRadius: 6,
        padding: 6
    },
    buttonWrap:{
        backgroundColor: COLORS.accentBg,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        gap: 10,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    titleButton:{
        color: COLORS.light,
        fontWeight: '600'
    },
    blockInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    description:{
        width: '60%'
    }
  });

  return styles;
}

export default useStyleFoodCard;
