import {StyleSheet} from 'react-native';

function useStyleBasketList () {
    const styles = StyleSheet.create({
        list:{
            marginTop: 40,
            gap: 20,
         
        }
    });

    return styles;
}

export default useStyleBasketList;