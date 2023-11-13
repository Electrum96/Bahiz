import {StyleSheet} from 'react-native';

function useStylePagesList () {
    const styles = StyleSheet.create({
        listWrap: {
            gap: 5
        }
        
    });

    return styles;
}

export default useStylePagesList;