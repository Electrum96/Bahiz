import {StyleSheet} from 'react-native';

function useStyleButtonsList () {
    const styles = StyleSheet.create({
        buttonsWrap:{
            flexDirection:"row",
            gap: 10,
            marginVertical: 20
        }
        
    });

    return styles;
}

export default useStyleButtonsList;