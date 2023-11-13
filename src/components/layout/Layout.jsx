import {Text, View, Image} from 'react-native';

import useStyleLayout from './useStyleLayout';
import Container from '../container/Container';
import Header from '../header/Header';

const Layout = ({children, navigation}) => {

const styles = useStyleLayout();
    return (
        <View>
            <Container>
                <Header navigation={navigation}/>
            </Container>

            <View>
                <Container>
                    {children}
                </Container>
            </View>
        </View>
    )
}

export default Layout;