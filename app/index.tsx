import { Text, View } from "react-native";
import "../global.css";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-cyan-600 ">
      <View className="mt-20">
        <View className="flex flex-row gap-5 justify-start ml-10 ">
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={30}
            color="white"
          />
          <Text className="text-3xl font-bold text-white">Biesdorf</Text>
        </View>
      </View>
    </View>
  );
}
