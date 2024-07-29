import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CHARACTERS, EPISODES, LOCATIONS, SETTING} from '../utils/routes';
import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/setting';
import TabIcon from '../components/router/tabIcon';
import { tabBarStyle } from '../styles/tabBarStyle';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={(route.name)}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle:tabBarStyle.headerStyle,
        tabBarStyle:tabBarStyle.tabBarStyle,
        headerRight:props =><HeaderRight/>

      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTING} component={Settings} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
