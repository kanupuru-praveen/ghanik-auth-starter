import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welome to Ghanik 👋</Text>
      <Text style={styles.subtitle}>This is your home screen</Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => router.push('/login')} />
        <Button title="Sign Up" onPress={() => router.push('/signup')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 12,
    width: '100%',
  },
});
