
import { View, Text } from 'react-native'
import { styles } from '../../../config'
import { useCounterStore } from '../../store/counter-store';


const HomeScreen = () => {
    const counter = useCounterStore(state => state.count);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Count: {counter}</Text>
        </View>
    )
}

export default HomeScreen
