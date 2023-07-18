import { StyleSheet, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
       'Lobster': require('./src/Assets/Fonts/Lobster/Lobster-Regular.ttf'),
       'Noto-Sans': require('./src/Assets/Fonts/Noto-Sans/NotoSans-BlackItalic.ttf')
       });
       if (!fontsLoaded) {
         return null;
      }
   
  return (
    
    <Navigator/>
  
    );
}
