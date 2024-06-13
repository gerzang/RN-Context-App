import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useCounterStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const SettingsScreen = () => {

  const counter = useCounterStore(state => state.count);
  const add = useCounterStore(state => state.increment);
  const sub = useCounterStore(state => state.decrement);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Count: ${counter}`
    })
  }, [counter])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {counter}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => add(1)}
      >
        <Text style={styles.title}>+1</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => sub(1)}
      >
        <Text style={styles.title}>-1</Text>
      </Pressable>
    </View>
  )
}

export default SettingsScreen
