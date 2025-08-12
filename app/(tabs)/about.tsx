import { Text, View ,StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style = {styles.container}>
       <View style={styles.box}>
         <Text style = {styles.text}>
           O Opel Manta 400 foi o carro utilizado pela Opel no Grupo B do Campeonato Mundial de Rali (WRC) durante os anos 1983 a 1984. Baseado no modelo de produção Manta B, o 400 foi desenvolvido em parceria com a Cosworth e preparadoras como Irmscher.

           Embora tivesse uma boa dirigibilidade e um motor 2.4 litros de quatro cilindros naturalmente aspirado (com cerca de 275 cv na versão de competição), o Manta 400 era tecnicamente defasado frente aos concorrentes do Grupo B, que já utilizavam tração integral e motores turboalimentados, como o Audi Quattro e o Lancia 037.

           Apesar disso, o Manta 400 se destacou em campeonatos nacionais e europeus, principalmente em provas de asfalto, onde sua leveza e equilíbrio faziam diferença. Ele ficou mais marcado por sua estética clássica de cupê esportivo e por ser um dos últimos representantes de carros de rali com tração traseira.
         </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',  // Cinza
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#ffff',
    fontSize: 20,
  },
  box: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20, 
  },
})
