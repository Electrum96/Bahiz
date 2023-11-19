import {StyleSheet} from 'react-native';



function useStyleEventsList () {
    const styles = StyleSheet.create({
        listWrap:{
            height: '80%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
            gap: 10
        }
        
    });

    return styles;
}

export default useStyleEventsList;