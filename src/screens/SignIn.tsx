import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

export function SignIn() {
  return (
    <View className="flex-1 px-6">
      <TouchableOpacity className="mt-20">
        <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
      </TouchableOpacity>
      <Text className="mt-3 text-2xl text-blue-700">Jôbizz</Text>
      <Text className="mt-8 text-4xl text-black">Bem Vindo</Text>
      <Text className="mt-8 text-xl text-gray-300">
        Vamos fazer login. Candidate-se a empregos!
      </Text>
    </View>
  );
}
