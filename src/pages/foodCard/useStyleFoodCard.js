import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../styles/variables';

function useStyleFoodCard () {
    const styles = StyleSheet.create({
        cardWrap:{
         gap: 10,
         alignItems: "center",
         marginVertical:20
        },
        image:{
          height: '80%',
          width: '100%',
          backgroundColor: 'red',
          borderRadius: 15
        },
        informWrap: {
            width: '100%',
            gap: 10,
            backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        title: {
            color: COLORS.dark,
            fontSize: 20
        }
        
    });

    return styles;
}

export default useStyleFoodCard;