import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleBasket () {
    const styles = StyleSheet.create({
        page:{
            height: '85%'
        },
        informWrap: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10

        },
        total:{
            fontWeight: '500',
            fontSize: 15,
            textTransform: 'uppercase',
            color: COLORS.dark
        },
        sum:{
            fontWeight: '600',
            fontSize: 20,
            textTransform: 'uppercase',
            color: COLORS.dark

        }
    })

    return styles;
}

export default useStyleBasket;