import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    headerWrap:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: COLORS.accent,
        width: '100%',
        alignItems: "center",
        marginTop: 20
    }
    
});

export default styles;