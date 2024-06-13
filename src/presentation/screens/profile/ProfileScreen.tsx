import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfleStore } from '../../store/profile-store'

const ProfileScreen = () => {

  const name = useProfleStore(state => state.name);
  const email = useProfleStore(state => state.email);
  const changeProfile = useProfleStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfleStore.setState({ name: 'Rick' })}
      >
        <Text style={styles.title}>click Name</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfleStore.setState({ email: 'elniñopllo.com' })}
      >
        <Text style={styles.title}>click Mail</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Jhon Deer', 'j@j.com')}
      >
        <Text style={styles.title}>Regresar Name</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen
