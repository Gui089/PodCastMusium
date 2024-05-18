import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppIconBottom } from './AppIconTypes';
import { AppTabBottomTabParams } from './AppTabNav';
import { IconComponent } from '../Components/Icon/Icon';

export function MyTabBar({ state, descriptors, navigation }:BottomTabBarProps) {
  return (
    <View style={{ 
        flexDirection: 'row', 
        backgroundColor:'black', 
        height:90,
        }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        
        const tabItem = AppIconBottom[route.name as keyof AppTabBottomTabParams];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            hitSlop={10}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent:'center', alignItems:'center', marginBottom:15}}

        >
            <IconComponent style={{paddingBottom:40, alignSelf:'center'}} name={tabItem.icon} color={isFocused ? '#00C2CB' : undefined}/>
            <Text style={{ color: isFocused ? '#00C2CB' : 'white' }}>
              {tabItem.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}