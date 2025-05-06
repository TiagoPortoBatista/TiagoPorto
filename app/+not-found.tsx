import { View ,StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';


export default function NotFoundScreen() {
    return (
      <>
        <Stack.Screen 
          options={{ 
            title: 'Página não encontrada',
            headerStyle: { backgroundColor: '#134761' },
            headerTintColor: '#FFF', 
          }} 
        />
        <View style={styles.container}>
          <Link href="/" style={styles.button}>
            Voltar para o início
          </Link>
        </View>
      </>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#134761',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  });