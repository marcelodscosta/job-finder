import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  disabled?: boolean;
};

export function Button({ title, disabled = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      {...rest}
      className="min-h-16 items-center justify-center rounded-lg bg-[#356899] py-4">
      {disabled ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text className="text-lg font-bold text-white">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
