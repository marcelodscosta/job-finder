import { Loading } from '@components/Loading';
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import './global.css';
import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <View className="flex-1">
      <StatusBar style="auto" translucent />
      {fontLoaded ? <SignIn /> : <Loading />}
    </View>
  );
}
