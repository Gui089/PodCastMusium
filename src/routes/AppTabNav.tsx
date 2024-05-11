import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../Screen/app/HomeScreen/HomeScreen';
import { ExploreScreen } from '../Screen/app/ExploreScreen/ExploreScreen';
import { MyTabBar } from './BottomTabNav';
import { LibaryScreen } from '../Screen/app/LibaryScreen/LibaryScreen';

const Tab = createBottomTabNavigator();

export function AppTabNavigator() {

    function renderTap(props: any) {
        return <MyTabBar {...props} />
    }

    return (
    <Tab.Navigator 
        tabBar={renderTap}
        screenOptions={{
            headerShown:false
        }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name='Libary' component={LibaryScreen}/>
    </Tab.Navigator>
);
}