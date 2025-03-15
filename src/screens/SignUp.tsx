import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputPassword } from '@components/InputPassword';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, Pressable, Image, ScrollView } from 'react-native';

export function SignUp() {
  return (
    <ScrollView>
      <View className="flex-1 px-6">
        <TouchableOpacity className="mt-20">
          <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
        </TouchableOpacity>

        <Text className="mt-3 text-2xl text-blue-700">Jôbizz</Text>
        <Text className="mt-8 text-4xl text-black">Bem Vindo</Text>

        <Text className="mt-8 text-xl text-gray-300">
          Vamos fazer login. Candidate-se a empregos!
        </Text>

        <View className="mt-14 gap-5">
          <Input placeholder="Nome completo" iconNameLeft="supervised-user-circle" />
          <Input placeholder="E-mail" keyboardType="email-address" iconNameLeft="mail-outline" />
          <InputPassword placeholder="Senha" />
          <InputPassword placeholder="Confirmar senha" />

          <Button title="Cadastrar" />
        </View>

        <View className="mt-10 flex-row content-center justify-center">
          <View className="flex-row items-center">
            <Text className="mx-3 text-sm text-gray-200">-------------------------------</Text>
          </View>
          <Text className="text-xl text-gray-300">Ou continuar com </Text>
          <View className="flex-row items-center">
            <Text className="mx-3 text-sm text-gray-200">-------------------------------</Text>
          </View>
        </View>

        <View className="mt-6 flex-row justify-between px-9">
          <Pressable>
            <Image
              source={require('@assets/apple.png')}
              style={{ width: 50, height: 50 }}
              alt="socialLogin"
            />
          </Pressable>

          <Pressable>
            <Image
              source={require('@assets/google.png')}
              style={{ width: 50, height: 50 }}
              alt="socialLogin"
            />
          </Pressable>

          <Pressable>
            <Image
              source={require('@assets/facebook.png')}
              style={{ width: 50, height: 50 }}
              alt="socialLogin"
            />
          </Pressable>
        </View>
        <View />

        <View className=" mt-10 flex-row items-center justify-center">
          <Text>Já tem conta? </Text>
          <Pressable>
            <Text className="text-lg font-bold text-[#356899]">Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
