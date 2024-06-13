
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from "react-native"
import BottomTabsNavigator from './routes/BottomTabsNavigator'


const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  )
}

export default Main
