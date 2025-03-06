import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View>
      <ActivityIndicator color="#FFFFFF" size="large" />
    </View>
  );
}
