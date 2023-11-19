import {StyleSheet} from 'react-native';

function useStyleEvents () {
    const styles = StyleSheet.create({
        page:{
            height: '100%',
            backgroundColor: 'red'
        }
        
    });

    return styles;
}

export default useStyleEvents;