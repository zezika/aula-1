import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>zezin gostoso</Text>
      <Text>Meu primeiro texto</Text>
      <Text style={styles.textoRosa}>Meu primeiro texto rosa</Text>
      <Text style= {styles.textoAzul}> Meu primeiro texto azul</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0d890',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAzul: {
    color: 'blue'
  },
  textoRosa: {
    color: 'pink'
  }
});
