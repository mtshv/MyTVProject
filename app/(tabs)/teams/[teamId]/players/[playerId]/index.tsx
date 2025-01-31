import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function PlayerDetails() {
  const { teamId, playerId } = useLocalSearchParams<{
    teamId: string;
    playerId: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Player {playerId} of Team {teamId}
      </Text>
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
