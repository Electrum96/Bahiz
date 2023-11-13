import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: COLORS.accent,
  },
  iconBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
});

export default styles;
