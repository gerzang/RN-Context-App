import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../presentation/screens/home/HomeScreen';
import ProfileScreen from '../presentation/screens/profile/ProfileScreen';
import SettingsScreen from '../presentation/screens/settings/SettingsScreen';
import { globalColors } from '../config';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: globalColors.background }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab1</Text>) }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab2</Text>) }} />
            <Tab.Screen name="Settings"
                component={SettingsScreen}
                options={{ title: 'Settings', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab3</Text>) }} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator
