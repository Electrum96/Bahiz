import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleButtonItem (isActive) {
    const styles = StyleSheet.create({
        itemWrap: {
            width: 100,
            height: 80,
            borderColor: COLORS.accentBg ,
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: isActive ? COLORS.accentBg : COLORS.accent
        },
        title: {
            textAlign: 'center'
        }
        
    });

    return styles;
}

export default useStyleButtonItem;