import {Text, View, Image} from 'react-native';

import tabs from '../../data/pagesList/tabs';

import useStylePagesList from './useStylePagesList';

import PageItem from '../pageItem/PageItem';

const PagesList = () => {


const styles = useStylePagesList();
    return (
        <View style={styles.listWrap}>
            {tabs.map((tab) => <PageItem key={tab.id} title={tab.title}/>)}
        </View>
    )
}

export default PagesList;