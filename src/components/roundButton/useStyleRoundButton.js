import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleRoundButton () {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: COLORS.accentBg,
            borderRadius: 25,
            padding: 10
        }
    });

    return styles;
}

export default useStyleRoundButton;