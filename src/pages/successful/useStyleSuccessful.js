import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleSuccessful() {
  const styles = StyleSheet.create({
    page: {
      height: '90%',
      gap: 10,
      alignItems: 'center',
    },
    text: {
      width: 250,
      fontSize: 24,
      textAlign: 'center',
      color: COLORS.dark,
      marginTop: -20,
    },
    image: {
      width: '90%',
      height: '70%',
    },

    code: {
      width: '38%',
      height: '22%',
      marginVertical: 10,
    },
    buttonWrap: {
      width: '100%',
    },
  });

  return styles;
}

export default useStyleSuccessful;
