import { Button } from '@components/Button';
import { PhoneInput } from '@components/CountryPicker';
import { Input } from '@components/Input';
import { InputCode } from '@components/InputCode';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';

export function VerifyCode() {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className="flex-1 px-6">
        <TouchableOpacity className="mt-20">
          <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
        </TouchableOpacity>

        <Text className="mt-16 text-center text-2xl text-blue-700">Jôbizz</Text>
        <Text className="mt-16 text-center text-4xl text-black">Confirmação de código</Text>

        <Text className="mx-4 mt-8 text-center text-xl text-gray-300">
          Insira o código de verificação do seu e-mail ou número de telefone que enviamos!
        </Text>

        <View className="mb-16 mt-14 flex-row justify-center gap-8 px-12">
          <InputCode />
          <InputCode />
          <InputCode />
          <InputCode />
        </View>
        <View className="mb-10">
          <Button title="Verificar" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
