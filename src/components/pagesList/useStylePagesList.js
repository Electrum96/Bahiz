import {StyleSheet} from 'react-native';

function useStylePagesList () {
    const styles = StyleSheet.create({
        listWrap: {
            gap: 20,
            flex: 1,
            marginTop: 40
        }
        
    });

    return styles;
}

export default useStylePagesList;