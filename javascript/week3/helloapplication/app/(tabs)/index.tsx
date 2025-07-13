import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Alert, Platform } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      alert('Button Pressed! You tapped the button.');
    } else {
      Alert.alert('Button Pressed!', 'You tapped the button.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
     <StatusBar style='dark'/>
    </View>
  );
}

// ✅ Define styles after the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems : "center"
  },
});
