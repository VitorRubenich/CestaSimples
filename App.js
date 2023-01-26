import { StatusBar, SafeAreaView,StyleSheet, View} from 'react-native';
import Cesta from './src/components/Telas';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  }) 

  if(!fontLoaded){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta/>
    </SafeAreaView>
  );
}