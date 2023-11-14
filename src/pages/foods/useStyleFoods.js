import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleFoods () {
    const styles = StyleSheet.create({
        mainWrap:{
            height: '100%',
        },
        title: {
            color: COLORS.dark,
            fontWeight: '600',
            fontSize: 25
        },
        listBox: {
            flex: 1,
            marginBottom: 40
        }
    });

    return styles;
}

export default useStyleFoods;