import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'gold',
        headerStyle: {
          backgroundColor: '#000000ff', // Cinza
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#000000ff', // Cinza
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'key-outline' : 'key'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Lista',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'create-outline' : 'create'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Hornet',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bicycle-outline' : 'bicycle'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="buscaCep"
        options={{
          title: 'CEP',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'train-outline' : 'train'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
