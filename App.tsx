import { View, Text } from 'react-native';

import './global.css';

import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      {fontLoaded ? <Text className="text-white">Home</Text> : <View />}
    </View>
  );
}
