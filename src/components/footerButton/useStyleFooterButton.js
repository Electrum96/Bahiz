import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleFooterButton() {
  const styles = StyleSheet.create({
    buttonWrap: {
      backgroundColor: COLORS.accentBg,
      borderRadius: 5,
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: {width: 1, height: 13}
    },
  });

  return styles;
}

export default useStyleFooterButton;
