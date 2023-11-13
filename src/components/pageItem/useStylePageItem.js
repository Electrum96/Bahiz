import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStylePageItem () {
    const styles = StyleSheet.create({
        tabWrap:{
            padding: 10,
            borderColor: COLORS.accentBg,
            borderWidth: 2,
            borderRadius: 5,
            width: 220
        },
        title: {
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            color: COLORS.dark
        }
    });

    return styles;
}

export default useStylePageItem;