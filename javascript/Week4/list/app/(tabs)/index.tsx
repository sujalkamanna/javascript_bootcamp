import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import PokemonList from "../../components/pokemonList.json";
import groupedData from "../../components/grouped_data.json";
export default function HomeScreen() {
  return (
    // <ScrollView style={styles.scrollview}>
    //   <SafeAreaView style={styles.container}>
    //     {PokemonList.map((pokemon) => (
    //       <View key={pokemon.id} style={styles.card}>
    //         <Text style={styles.type}>{pokemon.type}</Text>
    //         <Text style={styles.name}>{pokemon.name}</Text>

    //       </View>
    //     ))}
    //   </SafeAreaView>
    // </ScrollView>
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={PokemonList}
        // data={[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          console.log(item.id);
          return (
            <View style={styles.card}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={() => (
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            No items found
          </Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Pokemon List</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.header}>Pokemon List End</Text>
        )}
         */}
      {/* // horizontal */}
      {/* /> */}
      <View style={styles.container}>
        <SectionList
          sections={groupedData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return <Text> {section.type}</Text>;
          }}
          // 🔹 Separator between items
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          // 🔸 Separator between sections
          SectionSeparatorComponent={() => (
            <View style={{ height: 16, backgroundColor: "transparent" }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
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
  header: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 12,
  },
});
