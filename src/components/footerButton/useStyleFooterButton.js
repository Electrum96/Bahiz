import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleFooterButton () {
    const styles = StyleSheet.create({
        buttonWrap:{
            backgroundColor: COLORS.accentBg,
            borderRadius: 5,
        }
        
    });

    return styles;
}

export default useStyleFooterButton;