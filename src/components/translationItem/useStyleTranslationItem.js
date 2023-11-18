import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleTranslationItem() {
  const styles = StyleSheet.create({
    itemWrap: {
      flexDirection: 'row',
      gap: 10,
      width: 300,
      padding: 10,
      alignItems: 'center',
    },
    ligaWrap: {
      backgroundColor: COLORS.accentBg,
      borderRadius: 10,
      width: '35%',
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
