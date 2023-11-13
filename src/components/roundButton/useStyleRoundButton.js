import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleRoundButton () {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: COLORS.accentBg,
            borderRadius: 30,
            padding: 15
        }
    });

    return styles;
}

export default useStyleRoundButton;