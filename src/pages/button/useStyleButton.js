import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleButton(isActive) {
  const styles = StyleSheet.create({
    iconWrap: {
      backgroundColor: COLORS.light,
      borderRadius: 6,
      padding: 6,
    },

    buttonWrap: {
      backgroundColor: isActive ? 'red' : COLORS.accentBg,
      width: '48%',
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

    titleWrap:{
     alignContent: 'flex-end'
    },
    
    titleButton: {
      color: COLORS.light,
      fontWeight: '400',
      fontSize: 18,
      marginLeft: 10
    },
  });

  return styles;
}

export default useStyleButton;
