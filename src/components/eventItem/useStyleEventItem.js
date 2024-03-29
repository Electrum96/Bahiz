import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

function useStyleEventItem() {
  const styles = StyleSheet.create({
    wrapItem: {
      width: 150,
      minHeight: 300,
      gap: 3,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: COLORS.dark,
    },
    descWrap: {
      height: 200,
    
    },
    desc: {
      fontSize: 8,
      color: COLORS.dark,
      flex: 1
    },
  });

  return styles;
}

export default useStyleEventItem;
