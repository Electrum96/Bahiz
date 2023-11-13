import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleButtonItem () {
    const styles = StyleSheet.create({
        itemWrap: {
            width: '20%',
            borderColor: COLORS.accentBg ,
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: COLORS.accent
        },
        title: {
            textAlign: 'center'
        }
        
    });

    return styles;
}

export default useStyleButtonItem;