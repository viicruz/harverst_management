import { Text, View, Image } from "react-native";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";

export default function Page() {

  const navigation = useRouter();

  function handleNavigation() {
    navigation.push("/login/");
  }

  return (
    <View className="flex-1 items-center">
      <View className="w-full items-center py-20">
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 300, height: 300 }}

        />
      </View>
      <View className="flex flex-col items-center justify-center w-full">
        <Text className="text-xl font-bold">Vamos começar!</Text>
        <Text className="text-sm font-medium text-center">
          Otimize sua colheita e maximize seus resultados com Harvest Management!
        </Text>

      </View >
      <View className="w-full items-center pt-20">
        <Button label="Vamos começar!" onPress={handleNavigation} />
      </View>
    </View>
  );
}

