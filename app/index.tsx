import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
          <ImageBackground 
        source={require('../assets/images/background.jpg')} 
        style={styles.container}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <Image 
            source={require('../assets/images/jotai.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.mainHeading}>Unite your finances</Text>
          <Text style={styles.tagline}>A cross-platform global payout application for freelancers, remote workers, and creators</Text>
        </View>






      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start with AIRE</Text>
        </TouchableOpacity>
        
        <Text style={styles.customerText}>Already a AIRE customer?</Text>
      </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.8,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  statusTime: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signalBars: {
    flexDirection: 'row',
    gap: 1,
  },
  bar: {
    width: 3,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  wifiIcon: {
    width: 15,
    height: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
  },
  batteryIcon: {
    width: 20,
    height: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  promoBanner: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 8,
  },
  promoText: {
    color: 'white',
    fontSize: 14,
    flex: 1,
  },
  activateButton: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  activateText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  helpIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 18,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  carouselCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  cardLeft: {
    width: 120,
    height: 120,
  },
  videoThumbnail: {
    flex: 1,
    backgroundColor: '#2a2a3e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: 'white',
    fontSize: 16,
  },
  cardRight: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  indicator: {
    width: 20,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
  actionButtons: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    gap: 16,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'white',
    paddingHorizontal: 100,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  startButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  customerText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  scrollIndicator: {
    alignItems: 'center',
    marginTop: 20,
  },
  chevron: {
    color: 'white',
    fontSize: 24,
  },

});
