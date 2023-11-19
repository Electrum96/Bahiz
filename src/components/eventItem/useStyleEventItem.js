import {StyleSheet} from 'react-native';

function useStyleEventItem () {
    const styles = StyleSheet.create({
        wrapItem:{
            backgroundColor: 'orange'
        }
    });

    return styles;
}

export default useStyleEventItem;