import {StyleSheet} from 'react-native';

function useStyleEvents () {
    const styles = StyleSheet.create({
        page:{
            height: '98%'
        }
        
    });

    return styles;
}

export default useStyleEvents;