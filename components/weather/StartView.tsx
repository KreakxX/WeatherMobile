import LottieView from "lottie-react-native";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StartView() {
  return (
    <View className="mt-20">
      <View className="flex flex-row gap-2">
        <View className="flex flex-col justify-start ml-5 mt-10 gap-10">
          <View className="flex flex-row gap-2 ">
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={30}
              color="white"
            />
            <Text className="text-3xl font-bold text-white">Biesdorf</Text>
          </View>
          <Text className="ml-5 text-7xl font-semibold text-white">15°</Text>
          <Text className="ml-5  text-3xl font-bold text-white">
            Regen in der Nähe
          </Text>
        </View>
        <LottieView
          source={require("../../assets/animations/Weather-partly shower.json")}
          autoPlay
          loop
          style={{ width: 150, height: 250, backgroundColor: "transparent" }}
        />
      </View>
    </View>
  );
}
