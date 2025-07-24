import { Platform, StyleSheet, View, Text, ScrollView ,SafeAreaView,StatusBar} from "react-native";
import PokemonList from "../../components/pokemonList.json";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollview}>
      <SafeAreaView style={styles.container}>
        {PokemonList.map((pokemon) => (
          <View key={pokemon.id} style={styles.card}>
            <Text style={styles.type}>{pokemon.type}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:StatusBar.currentHeight
  },
  card: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  type: {
    fontSize: 12,
    color: "#555",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  scrollview:{
    paddingHorizontal:16
  }
});

