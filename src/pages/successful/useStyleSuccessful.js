import {StyleSheet} from 'react-native';

function useStyleSuccessful () {
    const styles = StyleSheet.create({
        page:{
            height: '90%',
            gap: 10,
            alignItems: 'center',
           
            
        },
        image: {
            width: '100%',
            height: '70%',
            alignItems: 'center',
            justifyContent: 'center'

        },
        code:{
            width: '40%',
            height:'24%'
        }
    });

    return styles;
}

export default useStyleSuccessful;