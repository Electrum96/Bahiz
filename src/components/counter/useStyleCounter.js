import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleCounter() {
  const styles = StyleSheet.create({
    counter: {
      width: 95,
      height: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
    
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: {width: 1, height: 13},
      backgroundColor: COLORS.accent,
    },
    minus: {
      marginHorizontal: 5,
      width: 25,
      height: 25,
    },
    num: {
      backgroundColor: COLORS.accentBg,
      color: COLORS.light,
      width: 25,
      fontWeight: '600',
      textAlignVertical: 'center',
      textAlign: 'center',
      height: '100%',
      padding: 2,
    },
 
    plus: {
      marginHorizontal: 5,
      width: 25,
      height: 25,
    },
  });

  return styles;
}

export default useStyleCounter;
