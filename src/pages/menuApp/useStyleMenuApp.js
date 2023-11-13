import {StyleSheet} from 'react-native';

function useStyleMenuApp () {
    const styles = StyleSheet.create({
        menuWrapper: {
            height: '65%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 30

        },
        image: {
            width: 200,
            height: 100
        }
        
    });

    return styles;
}

export default useStyleMenuApp;