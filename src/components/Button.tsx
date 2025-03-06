import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
      className="min-h-16 items-center justify-center rounded-lg bg-[#356899] py-4">
      <Text className="text-lg font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
}
