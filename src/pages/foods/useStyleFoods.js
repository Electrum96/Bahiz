import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleFoods () {
    const styles = StyleSheet.create({
        title: {
            color: COLORS.dark,
            fontWeight: '600',
            fontSize: 25
        }
    });

    return styles;
}

export default useStyleFoods;