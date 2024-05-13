import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 30 },
    { name: "Friend #3", age: 40 },
    { name: "Friend #4", age: 50 },
    { name: "Friend #5", age: 60 },
    { name: "Friend #6", age: 70 },
    { name: "Friend #7", age: 25 },
    { name: "Friend #8", age: 27 },
    { name: "Friend #9", age: 29 },
  ];
  return (
    <View>
      <Text style={styles.listTitle}>List of Friends</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.listItem}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  listItem: {
    marginVertical: 40,
  },
});

export default ListScreen;
