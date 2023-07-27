import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';

export default function App() {

  const [fontsLoaded] = useFonts({
       'Lobster': require('./src/Assets/Fonts/Lobster/Lobster-Regular.ttf'),
       'Noto-Sans': require('./src/Assets/Fonts/Noto-Sans/NotoSans-BlackItalic.ttf')
       });
       if (!fontsLoaded) {
         return null;
      }
   
  return (
    
    <Provider store = { store } >

        <Navigator/>

    </Provider>

  
    );
}
