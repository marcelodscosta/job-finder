import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

type InputProps = TextInputProps & {
  placeholder: string;
  errorMessage?: string;
};

export function InputPassword({ placeholder, errorMessage, ...rest }: InputProps) {
  const [isInvisiblePassword, setIsInvisiblePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-4 w-full">
      <View
        className={`flex-row items-center rounded-lg border px-4 py-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'} `}>
        <MaterialIcons name="key" size={24} color={errorMessage ? '#ef4444' : '#d1d5db'} />

        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#d1d5db"
          secureTextEntry={isInvisiblePassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="min-h-16 flex-1 rounded-md p-3 text-black "
          {...rest}
        />

        <TouchableOpacity onPress={() => setIsInvisiblePassword(!isInvisiblePassword)}>
          <MaterialIcons
            name={isInvisiblePassword ? 'visibility-off' : 'visibility'}
            size={24}
            color={errorMessage ? '#ef4444' : '#d1d5db'}
          />
        </TouchableOpacity>
      </View>

      {errorMessage && (
        <Animated.View
          entering={FadeIn.duration(400)}
          exiting={FadeOut.duration(200)}
          className="mt-1 flex-row items-center">
          <MaterialIcons name="error-outline" size={16} color="#ef4444" />
          <Text className="ml-1 text-sm text-red-500">{errorMessage}</Text>
        </Animated.View>
      )}
    </View>
  );
}
