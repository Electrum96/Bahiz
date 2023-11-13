import {Text, View, Image} from 'react-native';

import useStyleLayout from './useStyleLayout';
import Container from '../container/Container';
import Header from '../header/Header';

const Layout = ({children}) => {

const styles = useStyleLayout();
    return (
        <View>
            <Container>
                <Header/>
            </Container>
        </View>
    )
}

export default Layout;