import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, Modal } from 'react-native';

type Country = {
  label: string;
  value: string;
  flag: string;
  dialCode: string;
};

const countries: Country[] = [
  { label: 'Estados Unidos', value: 'US', flag: '🇺🇸', dialCode: '+1' },
  { label: 'Brasil', value: 'BR', flag: '🇧🇷', dialCode: '+55' },
  { label: 'França', value: 'FR', flag: '🇫🇷', dialCode: '+33' },
];

export function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <>
      <View
        className={`flex-row items-center rounded-lg border px-4 py-2 ${
          isFocused ? 'border-blue-500' : 'border-gray-300'
        }`}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="flex-row items-center pr-3">
          <Text className="text-xl">{selectedCountry.flag}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </TouchableOpacity>

        <Text className="pr-2 text-lg font-semibold">{selectedCountry.dialCode}</Text>

        <TextInput
          className="min-h-16 flex-1 text-lg "
          placeholder="Digite seu telefone"
          placeholderTextColor="#d1d5db"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text.replace(/\D/g, ''))} // Remove não numéricos
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View className="flex-1 justify-center bg-black/50">
          <View className="mx-8 rounded-lg bg-white p-5">
            <Text className="mb-4 text-lg font-semibold">Escolha um país:</Text>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  className="flex-row items-center border-b border-gray-300 p-3">
                  <Text className="mr-2 text-xl">{item.flag}</Text>
                  <Text className="text-lg">
                    {item.label} ({item.dialCode})
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="mt-4 rounded-lg bg-red-500 p-2">
              <Text className="text-center font-semibold text-white">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
