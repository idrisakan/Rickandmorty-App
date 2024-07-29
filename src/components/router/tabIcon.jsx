import {CHARACTERS, EPISODES, LOCATIONS, SETTING} from '../../utils/routes';
import {Book1, LocationTick, PresentionChart, Setting5} from 'iconsax-react-native';

const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName == LOCATIONS) {
    return (
      <LocationTick
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == SETTING) {
    return (
      <Setting5
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if ( screenName == EPISODES) {
    return (
      <PresentionChart size={size} color={color} variant={focused ? "Bold" : 'Outline'}/>
    )
  }
};

export default TabIcon;
