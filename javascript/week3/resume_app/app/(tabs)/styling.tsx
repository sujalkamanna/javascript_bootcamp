import { StyleSheet, Platform } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  backgroundDecoration: ViewStyle;
  decorationCircle1: ViewStyle;
  decorationCircle2: ViewStyle;
  scrollView: ViewStyle;
  scrollViewContent: ViewStyle;
  contentContainer: ViewStyle;
  cardWrapper: ViewStyle;
  card: ViewStyle;
  headerCard: ViewStyle;
  standardCard: ViewStyle;
  sectionHeader: ViewStyle;
  titleBar: ViewStyle;
  headerContent: ViewStyle;
  cardContent: ViewStyle;
  footer: ViewStyle;
  sectionTitle: TextStyle;
  footerText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  backgroundDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    overflow: 'hidden',
  },
  decorationCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(26, 115, 232, 0.05)',
    top: -50,
    right: -50,
  },
  decorationCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(26, 115, 232, 0.03)',
    top: 100,
    left: -30,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(26, 115, 232, 0.1)',
    ...Platform.select({
      ios: {
        shadowColor: '#1a73e8',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  standardCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  titleBar: {
    width: 4,
    height: 24,
    backgroundColor: '#1a73e8',
    borderRadius: 2,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    letterSpacing: -0.3,
  },
  headerContent: {
    padding: 24,
  },
  cardContent: {
    padding: 24,
    paddingTop: 20,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
    letterSpacing: 0.5,
  },
});
