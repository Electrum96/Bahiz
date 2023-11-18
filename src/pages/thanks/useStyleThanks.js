import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleThanks() {
  const styles = StyleSheet.create({
    page: {
      height: '95%',
      alignItems: 'center',
    },

    image: {
      width: '100%',
      height: '75%',
    },

    text: {
      color: COLORS.dark,
      fontSize: 25,
      width: 190,
      marginBottom: 50,
      textAlign:'center'
    },
    buttonWrap:{
        width: '100%'
    }
  
  });

  return styles;
}

export default useStyleThanks;
