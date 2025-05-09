import { Tabs } from "expo-router";
import  Ionicons  from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
  <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#FFD700',
    tabBarInactiveTintColor: '#fff',
    headerStyle: { 
      backgroundColor: '#2E8B57'},
    headerShadowVisible: true,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#2E8B57',
    },
  }}>
      <Tabs.Screen name="index" 
      options={{title: 'Página Inicial', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
      )
      }}/>
      <Tabs.Screen name="about" 
      options={{title: 'Sobre', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'football' : 'football-outline'} color={color} size={24} />
      ),
      }}/>
      <Tabs.Screen name="toDoList" 
      options={{title: 'Lista de Jogadores', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'list-circle-sharp' : 'list-circle-outline'} color={color} size={24} />
      ),
      }}/>
  </Tabs>
  );
}
