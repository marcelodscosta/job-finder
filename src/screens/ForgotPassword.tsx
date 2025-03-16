import { Button } from '@components/Button';
import { PhoneInput } from '@components/CountryPicker';
import { Input } from '@components/Input';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useState } from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';

export function ForgotPassword() {
  const { goBack } = useNavigation<AuthNavigatorRoutesProps>();

  const [selected, setSelected] = useState('email');

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className="flex-1 px-6">
        <TouchableOpacity onPress={() => goBack()} className="mt-20">
          <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
        </TouchableOpacity>

        <Text className="mt-16 text-center text-2xl text-blue-700">Jôbizz</Text>
        <Text className="mt-16 text-center text-4xl text-black">Esqueceu a senha</Text>

        <Text className="mx-4 mt-8 text-center text-xl text-gray-300">
          Insira seu e-mail ou número de telefone, enviaremos o código de verificação!
        </Text>

        <View className="min-h-18 mx-12 mt-12 flex-row items-center justify-center gap-4 rounded-xl bg-blue-50 py-2">
          <TouchableOpacity
            onPress={() => setSelected('email')}
            className={`justify-center rounded-xl px-10 py-2 ${selected === 'email' ? 'bg-white' : ''}`}>
            <Text>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelected('phone')}
            className={`justify-center rounded-xl px-10 py-2 ${selected === 'phone' ? 'bg-white' : ''}`}>
            <Text>Telefone</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-16 mt-14 flex-1">
          {selected === 'phone' ? (
            <PhoneInput />
          ) : (
            <Input placeholder="E-mail" keyboardType="email-address" iconNameLeft="mail-outline" />
          )}
        </View>
        <View className="mb-10">
          <Button title="Enviar código" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
