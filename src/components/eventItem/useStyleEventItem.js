import {StyleSheet} from 'react-native';

function useStyleEventItem () {
    const styles = StyleSheet.create({
        wrapItem:{
            backgroundColor: 'orange',
            width: '40%',
            gap: 3
        }
    });

    return styles;
}

export default useStyleEventItem;