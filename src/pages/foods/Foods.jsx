import {Text, View, Image} from 'react-native';

import useStyleFoods from './useStyleFoods';

import Layout from '../../components/layout/Layout';

import ButtonsList from '../../components/buttonsList/ButtonsList';

const Foods = () => {

const styles = useStyleFoods();
    return (
        <View>
           <Layout>
           <Text style={styles.title}>Categories</Text>
           <View>
           <ButtonsList/>
           </View>

           <View>
            {/* <Text>{если тайтл равен тайтл показываем тайтл}</Text> */}
            {/* <FoodList/> */}
           </View>

           </Layout>
        </View>
    )
}

export default Foods;