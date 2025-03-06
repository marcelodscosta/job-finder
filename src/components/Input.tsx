import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, TextInputProps, View } from 'react-native';

type InputProps = TextInputProps & {
  iconNameLeft?: keyof typeof MaterialIcons.glyphMap;
};

export function Input({ iconNameLeft, ...rest }: InputProps) {
  return (
    <View className="flex-row items-center rounded-lg border border-gray-300 px-8 py-2">
      <MaterialIcons name={iconNameLeft} size={24} color="#d1d5db" />
      <TextInput {...rest} className="min-h-16 flex-1 rounded-md  p-3 text-black" />
    </View>
  );
}
