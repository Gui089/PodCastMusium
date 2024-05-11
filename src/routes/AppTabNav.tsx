import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../Screen/app/HomeScreen/HomeScreen';
import { ExploreScreen } from '../Screen/app/ExploreScreen/ExploreScreen';
import { MyTabBar } from './BottomTabNav';
import { LibaryScreen } from '../Screen/app/LibaryScreen/LibaryScreen';

export type AppTabBottomTabParams = {
    HomeScreen: undefined,
    ExploreScreen: undefined,
    LibaryScreen: undefined,
}

const Tab = createBottomTabNavigator<AppTabBottomTabParams>();

export function AppTabNavigator() {

    function renderTap(props: BottomTabBarProps) {
        return <MyTabBar {...props} />
    }

    return (
    <Tab.Navigator 
        tabBar={renderTap}
        screenOptions={{
            headerShown:false
        }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
        <Tab.Screen name='LibaryScreen' component={LibaryScreen}/>
    </Tab.Navigator>
);
}