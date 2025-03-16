import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputPassword } from '@components/InputPassword';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';

type FormDataProps = {
  email: string;
  password: string;
};

function handleSignIn(data: FormDataProps) {
  console.log(data);
}

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { control, handleSubmit } = useForm<FormDataProps>();

  return (
    <ScrollView>
      <View className="mt-24 flex-1 px-6">
        <Text className="mt-3 text-2xl text-blue-700">Jôbizz</Text>
        <Text className="mt-8 text-4xl text-black">Bem Vindo</Text>

        <Text className="mt-8 text-xl text-gray-300">
          Vamos fazer login. Candidate-se a empregos!
        </Text>

        <View className="mt-14 gap-5">
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                iconNameLeft="mail-outline"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <InputPassword
                returnKeyType="send"
                onChangeText={onChange}
                value={value}
                placeholder="Senha"
              />
            )}
          />
          <Button onPress={handleSubmit(handleSignIn)} title="Login" />

          <Pressable onPress={() => navigate('forgotPassword')} className="mt-5 self-center">
            <Text className="text-lg font-bold text-[#356899]">Esqueceu a senha?</Text>
          </Pressable>
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
          <Text>Ainda não tem conta? </Text>
          <Pressable onPress={() => navigate('signUp')}>
            <Text className="text-lg font-bold text-[#356899]">Registre-se!</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
