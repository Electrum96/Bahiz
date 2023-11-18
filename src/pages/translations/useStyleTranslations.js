import {StyleSheet} from 'react-native';

function useStyleTranslations () {
    const styles = StyleSheet.create({
        page: {
            height: '98%'
        }
        
    });

    return styles;
}

export default useStyleTranslations;