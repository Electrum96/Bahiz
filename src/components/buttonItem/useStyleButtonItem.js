import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleButtonItem (isActive) {
    const styles = StyleSheet.create({
        itemWrap: {
            overflow: 'hidden',
            width: 100,
            height: 90,
            borderColor: COLORS.accentBg ,
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: isActive ? COLORS.lightBg : COLORS.accent
        },
        title: {
            marginLeft: 10,
            marginTop: 5,
            color: COLORS.dark,
            fontSize: 14
        },
        image:{
            marginHorizontal: 10,
            backgroundColor: 'black',
            marginTop: 10,
            marginLeft: 35,
            borderRadius: 180,
            width: '80%',
            height: '80%',
        }
        
    });

    return styles;
}

export default useStyleButtonItem;