import { useState } from 'react';
import { TextInput, View } from 'react-native';

export function InputCode() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={`h-16 w-16 flex-row items-center rounded-lg border ${isFocused ? 'border-blue-500' : 'border-gray-300'}`}>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="min-h-16 flex-1 rounded-md  p-3 text-black"
      />
    </View>
  );
}
