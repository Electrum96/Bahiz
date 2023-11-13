import {Text, View, Image} from 'react-native';

import useStyleContacts from './useStyleContacts';

const Contacts = () => {

const styles = useStyleContacts();
    return (
        <View>
            <Text>Contacts</Text>
        </View>
    )
}

export default Contacts;