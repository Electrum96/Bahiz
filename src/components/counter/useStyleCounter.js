import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleCounter() {

  const styles = StyleSheet.create({
    counter: {
      width: 100,
      height: 35,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      gap: 2,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: {width: 1, height: 13},
      backgroundColor: COLORS.accent
    },
    minus: {
      width: 25,
      height: 25,
    },
    num: {
      backgroundColor: COLORS.accentBg,
      color: COLORS.light,
      fontWeight: '600',
      textAlignVertical: 'center',
      height: '100%',
      padding: 2,
    },
    plus: {
      width: 25,
      height: 25,
    },
  });

  return styles;
}

export default useStyleCounter;
