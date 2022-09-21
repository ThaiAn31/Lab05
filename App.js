import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/circle.png')}/>
      <Text style={styles.Text}>GROW YOUR BUSINESS</Text>
      <Text style={styles.Text1}>We will help you to grow your business using online server</Text>
      <TouchableOpacity style={styles.btnLog}>
        <Text style={styles.txtLog}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    
  );
  
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8fbc8f',
    justifyContent: 'center',
    paddingBottom: 100,
    
  },
  Slogun:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    paddingTop:90,
    fontSize:30,
  
  },
  Text1:{
    paddingTop:120,
    fontSize:19,
    textAlign:'center',
    
  },
  btnLog:{
    
    marginRight: 130,
    paddingTop:70,
    
  },
  txtLog: {
    fontSize: 12,
    textAlign:'center',
    paddingTop: 15,
    width: 100,
    height: 50,
    backgroundColor: `#ffd700`,
  }
});

