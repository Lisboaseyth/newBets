import { StyleSheet } from 'react-native'

export const styleHeader = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      backgroundColor: '#00127b',
    },
    menuButton: {
      position: 'absolute',
      right: 16,
    },
    logo: {
      width: 100,
      height: 40,
    },
  });