import {StyleSheet} from 'react-native';

function useStyleSuccessful () {
    const styles = StyleSheet.create({
        page:{
            height: '90%',
        },
        image: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'

        },
    });

    return styles;
}

export default useStyleSuccessful;