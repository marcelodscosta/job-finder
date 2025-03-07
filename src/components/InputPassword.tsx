import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

type InputProps = TextInputProps & {
  placeholder: string;
};

export function InputPassword({ placeholder, ...rest }: InputProps) {
  const [isInvisiblePassword, setIsInvisiblePassword] = useState(true);

  return (
    <View className="flex-row items-center rounded-lg border border-gray-300 px-8 py-2">
      <MaterialIcons name="key" size={24} color="#d1d5db" />
      <TextInput
        placeholder={placeholder}
        {...rest}
        className="min-h-16 flex-1 rounded-md  p-3 text-black"
        secureTextEntry={isInvisiblePassword}
      />

      <TouchableOpacity onPress={() => setIsInvisiblePassword(!isInvisiblePassword)}>
        <MaterialIcons
          name={isInvisiblePassword ? 'visibility-off' : 'visibility'}
          size={24}
          color="#d1d5db"
        />
      </TouchableOpacity>
    </View>
  );
}
