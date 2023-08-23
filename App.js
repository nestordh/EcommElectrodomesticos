import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { useEffect } from 'react';
import { dropTableSessions, init } from './src/SQLite';

export default function App() {

  useEffect ( () => {
    init()
      .then((result) => {
          console.log('Inicializando base de datos / Abandono sesion')
          console.log(result);
      })
      .catch(err => {
        console.log('Error en la Inicializacion de la base de datos ');
        console.log(err.message)
      })  
  }, [])

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
