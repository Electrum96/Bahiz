import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleFoodList() {
  const styles = StyleSheet.create({
    listWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      rowGap: 20,
      columnGap: 10,
      paddingBottom: 40
      
    },
    title:{
        color: COLORS.dark,
        fontWeight: '600',
        fontSize: 20,
        marginVertical:20
    }
  });

  return styles;
}

export default useStyleFoodList;
