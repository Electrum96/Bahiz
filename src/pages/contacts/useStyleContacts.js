import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

function useStyleContacts () {
    const styles = StyleSheet.create({
        pageWrap: {
            height:'98%',
            justifyContent: 'space-between',
         
        },
        formWrap:{
            gap:5
        },
        input:{
            borderWidth: 2,
            borderColor: COLORS.accentBg,
            borderRadius: 10
        },
        title:{
            fontSize: 25,
            color: COLORS.dark,
            fontWeight:'600',
            paddingBottom: 10,
            marginTop: 40
        },
        desc:{
            color: COLORS.dark
        }
    });

    return styles;
}

export default useStyleContacts;