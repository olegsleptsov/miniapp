import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MiniApp3</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button
        title="increment"
        onPress={() => setCounter(prev => (prev += 1))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
