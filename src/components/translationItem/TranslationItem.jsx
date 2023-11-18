import {Text, View, Image} from 'react-native';

import useStyleTranslationItem from './useStyleTranslationItem';

const TranslationItem = ({liga, team1,team2, date, time}) => {

const styles = useStyleTranslationItem();
    return (
        <View style={styles.itemWrap}>
            <View style={styles.ligaWrap}>
            <Text style={styles.liga}>{liga}</Text>
            </View>
            <View style={styles.informWrap}>
            <Text style={styles.team1}>{team1}</Text>
            <Text>{team2}</Text>
            <Text style={styles.inform}>{date}.11 - {time}</Text>
            </View>
        </View>
    )
}

export default TranslationItem;