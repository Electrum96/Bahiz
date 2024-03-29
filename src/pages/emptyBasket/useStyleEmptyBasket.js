import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleEmptyBasket () {
    const styles = StyleSheet.create({
        page:{
            height: '90%',
        },
        image: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'

        },
        title: {
            fontWeight: '600',
            fontSize: 35,
            color: COLORS.dark
        }
        

    });

    return styles;
}

export default useStyleEmptyBasket;