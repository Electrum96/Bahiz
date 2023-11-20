import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleEventItem () {
    const styles = StyleSheet.create({
        wrapItem:{
            width: '45%',
            height: 400,
            gap: 3,
           overflow: 'hidden'
            
            
        },
        image:{
            width:'100%',
            height: '50%',
            borderRadius: 10
        },
        title:{
            fontSize: 14,
            fontWeight: '600',
            color: COLORS.dark
        },
        descWrap:{
         height: 200,
         width: 150
         
        },
        desc:{
            fontSize: 8,
            color: COLORS.dark
        }

    });

    return styles;
}

export default useStyleEventItem;