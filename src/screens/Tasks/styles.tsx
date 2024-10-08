import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WINTER.BACKGROUND,
  },
  icon: {
    height: 400, 
    width: '100%', 
    resizeMode: 'center',
  },
  textTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: COLORS.WINTER.ICON.RED,
  },
  textTimer: {
    fontSize: 25,
    marginTop: 10,
    color: COLORS.BLACK,
  }
});