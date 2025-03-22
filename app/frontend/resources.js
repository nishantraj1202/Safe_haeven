import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { ArrowRight, Scale, Users, FileText } from 'lucide-react-native';

const resources = [
  {
    title: 'Legal Consultation',
    description: 'Connect with pro-bono lawyers for confidential legal advice',
    icon: Scale,
  },
  {
    title: 'Support Groups',
    description: 'Join anonymous support communities for shared experiences',
    icon: Users,
  },
  {
    title: 'Document Templates',
    description: 'Access legal document templates and guides',
    icon: FileText,
  },
];

export default function ResourcesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resources</Text>
        <Text style={styles.subtitle}>Legal and community support</Text>
      </View>

      <ScrollView style={styles.content}>
        {resources.map((resource, index) => (
          <Pressable key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <resource.icon size={24} color="#1A1A1A" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{resource.title}</Text>
              <Text style={styles.cardDescription}>{resource.description}</Text>
            </View>
            <ArrowRight size={24} color="#1A1A1A" />
          </Pressable>
        ))}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Need Immediate Help?</Text>
          <Text style={styles.infoText}>
            Our crisis helpline is available 24/7. All calls are confidential and anonymous.
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Call Helpline</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 3,
    borderBottomColor: '#000000',
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
  },
  content: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  cardTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardDescription: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
  },
  infoBox: {
    backgroundColor: '#FFE4E9',
    padding: 20,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: 20,
    marginBottom: 40,
  },
  infoTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  infoText: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF4B6E',
    padding: 16,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});