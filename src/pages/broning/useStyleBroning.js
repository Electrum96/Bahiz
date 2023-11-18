import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleBroning () {
    const styles = StyleSheet.create({
        pageWrap: {
            height:'100%',
            justifyContent: 'space-around',
         
        },
        formWrap:{
            gap:5
        },
        input:{
            borderWidth: 1,
            borderColor: COLORS.accentBg,
            borderRadius: 10
        },
        title:{
            fontSize: 25,
            color: COLORS.dark,
            fontWeight:'600',
            paddingBottom: 10
        },
        desc:{
            color: COLORS.dark
        },
        text:{
            color:COLORS.dark,
            marginBottom: -20
        },
      
    });

    return styles;
}

export default useStyleBroning;