import { StyleSheet, Text, View, } from 'react-native';
import { SearchInput } from './components/SearchInput';

export default function App() {
  return (
    <View style={styles.container}>
      <img
        src={require('./assets/doggo_walk.gif')} />
      <View >
        <SearchInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});
