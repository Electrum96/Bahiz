import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleBasket () {
    const styles = StyleSheet.create({
        page:{
            height: '90%'
        }
    })

    return styles;
}

export default useStyleBasket;