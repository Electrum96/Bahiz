import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleTranslationItem(even) {
  const styles = StyleSheet.create({
    itemWrap: {
      flexDirection: even ? 'row' : 'row-reverse',
      gap: 15,
      width: "100%",
      padding: 10,
      alignItems: 'center',
   
    
    },
    ligaWrap: {
      backgroundColor: COLORS.accentBg,
      borderRadius: 10,
      width: '35%',
      height: 90,
      justifyContent: 'center'
    },
    liga: {
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
      fontWeight: '600',
      color: COLORS.dark,
    },
    team1: {
      fontWeight: '500',
      color: COLORS.dark,
      fontSize: 15,
    },
    inform: {
      fontWeight: '500',
      color: COLORS.dark,
    },
  });

  return styles;
}

export default useStyleTranslationItem;
