import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

type InputProps = TextInputProps & {
  iconNameLeft?: keyof typeof MaterialIcons.glyphMap;
  errorMessage?: string;
};

export function Input({ iconNameLeft, errorMessage, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-4 w-full">
      <View
        className={`flex-row items-center rounded-lg border  px-8 py-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'}`}>
        <MaterialIcons name={iconNameLeft} size={24} color={errorMessage ? '#ef4444' : '#d1d5db'} />
        <TextInput
          placeholderTextColor="#d1d5db"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="min-h-16 flex-1 rounded-md  p-3 text-black"
          {...rest}
        />
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
