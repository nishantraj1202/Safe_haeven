import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Heart, Chrome as Home, MessageCircle, Shield } from 'lucide-react-native';


const TAB_BG = '#673ab7';
const ACTIVE_COLOR = 'black';
const INACTIVE_COLOR = 'white';

export default function TabLayout() {
  return (
    
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: TAB_BG,
          borderTopWidth: 3,
          borderTopColor: '#194d33',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'SpaceGrotesk-Medium',
          fontSize: 12,
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'AI Support',
          tabBarIcon: ({ color, size }) => <MessageCircle size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          title: 'Resources',
          tabBarIcon: ({ color, size }) => <Shield size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
    </Tabs>
    
    
  );
}

