import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

type InputProps = TextInputProps & {
  iconNameLeft?: keyof typeof MaterialIcons.glyphMap;
};

export function Input({ iconNameLeft, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={`flex-row items-center rounded-lg border  px-8 py-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'}`}>
      <MaterialIcons name={iconNameLeft} size={24} color="#d1d5db" />
      <TextInput
        placeholderTextColor="#d1d5db"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="min-h-16 flex-1 rounded-md  p-3 text-black"
        {...rest}
      />
    </View>
  );
}
