import {StyleSheet} from 'react-native';

function useStyleMenuApp () {
    const styles = StyleSheet.create({
        menuWrapper: {
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20

        },
        image: {
            width: 200,
            height: 100
        }
        
    });

    return styles;
}

export default useStyleMenuApp;