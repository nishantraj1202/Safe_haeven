import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { TriangleAlert as AlertTriangle, Phone } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#c5cae9','#e1bee7','#ffcdd2']}
      style={styles.container}
      start={{x:1,y:0.5}}
      end={{x:0.5,y:0}}
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SafeHaven</Text>
        <Text style={styles.subtitle}>Your safe space for support and guidance</Text>
      </View>

      <Pressable style={styles.sosButton}>
        <AlertTriangle color="red" size={32} />
        <Text style={styles.sosText}>SOS Emergency</Text>
      </Pressable>

      
      <View style={styles.grid}>
        <Link href="/chat" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Talk to AI Support</Text>
            <Text style={styles.cardDescription}>24/7 confidential chat support</Text>
          </Pressable>
        </Link>
      

        <Link href="/resources" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Legal Resources</Text>
            <Text style={styles.cardDescription}>Connect with pro-bono lawyers</Text>
          </Pressable>
        </Link>

        <Link href="/support" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Support Groups</Text>
            <Text style={styles.cardDescription}>Join anonymous support communities</Text>
          </Pressable>
        </Link>

        <Pressable style={styles.card}>
          <Text style={styles.cardTitle}>Crisis Helpline</Text>
          <Text style={styles.cardDescription}>Call for immediate help</Text>
          <View style={styles.phoneButton}>
            <Phone size={20} color="green" />
          </View>
        </Pressable>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 32,
    color: 'green',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: '#666666',
  },
  sosButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bac366',
    padding: 20,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    marginBottom: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  sosText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#FF4B6E',
    marginLeft: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    width: '47%',
    backgroundColor: '#d4a290',
    
    padding: 20,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  cardTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  cardDescription: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#484d19',
  },
  phoneButton: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    backgroundColor: '#e8704a',
    padding: 8,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#000000',
  },
});