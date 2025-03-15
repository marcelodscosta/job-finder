import { Button } from '@components/Button';
import { InputCode } from '@components/InputCode';
import { InputPassword } from '@components/InputPassword';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';

export function ResetPassword() {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className="flex-1 px-6">
        <TouchableOpacity className="mt-20">
          <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
        </TouchableOpacity>

        <Text className="mt-16 text-center text-2xl text-blue-700">Jôbizz</Text>
        <Text className="mt-16 text-center text-4xl text-black">Redefinir senha</Text>

        <Text className="mx-4 mt-8 text-center text-xl text-gray-300">
          Digite sua nova senha e confirme a nova senha para redefinir a senha!
        </Text>

        <View className="mb-16 mt-14 gap-6">
          <InputPassword placeholder="Nova Senha" />
          <InputPassword placeholder="Confirmar Nova Senha" />
        </View>
        <View className="mb-10 mt-12">
          <Button title="Verificar" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
