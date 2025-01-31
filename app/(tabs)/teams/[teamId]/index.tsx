import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const MOCK_TEAMS = {
  team1: {
    name: 'Team 1',
    players: [
      { id: '101', name: 'Player 101' },
      { id: '102', name: 'Player 102' },
    ],
  },
  team2: {
    name: 'Team 2',
    players: [
      { id: '201', name: 'Player 201' },
      { id: '202', name: 'Player 202' },
    ],
  },
};

export default function TeamDetails() {
  const { teamId } = useLocalSearchParams<{ teamId: string }>();
  const team = MOCK_TEAMS[teamId ?? ''];

  if (!team) {
    return (
      <View style={styles.container}>
        <Text>No team found for ID {teamId}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Details: {team.name}</Text>

      {team.players.map((p) => (
        <Button
          key={p.id}
          title={`Open ${p.name}`}
          onPress={() => {
            router.push(`/teams/${teamId}/players/${p.id}`);
          }}
        />
      ))}

      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
