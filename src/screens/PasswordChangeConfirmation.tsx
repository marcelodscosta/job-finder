import { Button } from '@components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform, Image } from 'react-native';

export function PasswordChangeConfirmation() {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className="flex-1 px-6">
        <TouchableOpacity className="mt-20">
          <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
        </TouchableOpacity>

        <Text className="mt-16 text-center text-2xl text-blue-700">Jôbizz</Text>

        <View className="mt-28 items-center justify-center">
          <Image
            source={require('@assets/ChangePassword.png')}
            style={{ width: 120, height: 120 }}
            alt="socialLogin"
          />
        </View>
        <Text className="mt-16 text-center text-2xl text-black">Alteração feita com sucesso!</Text>

        <Text className="mx-4 mt-8 text-center text-xl text-gray-300">
          Sua senha foi alterada com sucesso. Entre com sua nova senha!
        </Text>

        <View className="mb-10 mt-16">
          <Button title="Login" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
