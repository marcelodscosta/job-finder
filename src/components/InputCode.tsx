import { useState } from 'react';
import { TextInput, View } from 'react-native';

export function InputCode() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={`h-16 w-16 flex-row items-center justify-center rounded-lg border ${isFocused ? 'border-blue-500' : 'border-gray-300'}`}>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="min-h-16 items-center justify-center rounded-md p-3 font-bold text-black"
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
}
