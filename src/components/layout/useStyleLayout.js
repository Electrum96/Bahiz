import {StyleSheet,Dimensions} from 'react-native';

function useStyleLayout () {
    const styles = StyleSheet.create({
        layoutWrap: {
           
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'space-between',
            paddingBottom: 22
        },
        bgc:{
            flex: 1
        },
        footer:{
         
        }
        
    });

    return styles;
}

export default useStyleLayout;