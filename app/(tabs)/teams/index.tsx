import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

const MOCK_TEAMS = [
  { id: "team1", name: "Team 1" },
  { id: "team2", name: "Team 2" },
];

export default function TeamsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teams (Main Tab Screen)</Text>

      {MOCK_TEAMS.map((t) => (
        <Button
          key={t.id}
          title={`Open ${t.name}`}
          onPress={() => {
            // Navigate to [teamId] route
            router.push(`/teams/${t.id}`);
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
