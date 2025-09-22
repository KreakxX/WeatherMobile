import { JSX } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function DailyView() {
  const DailyForecast = [
    {
      time: 0,
      temperature: 12,
      weather_statues: "Bewölkt",
      rain_probability: 20,
    },
    {
      time: 1,
      temperature: 11,
      weather_statues: "Bewölkt",
      rain_probability: 15,
    },
    {
      time: 2,
      temperature: 11,
      weather_statues: "Nebel",
      rain_probability: 10,
    },
    { time: 3, temperature: 10, weather_statues: "Nebel", rain_probability: 5 },
    {
      time: 4,
      temperature: 10,
      weather_statues: "Bewölkt",
      rain_probability: 10,
    },
    {
      time: 5,
      temperature: 11,
      weather_statues: "Bewölkt",
      rain_probability: 15,
    },
    { time: 6, temperature: 13, weather_statues: "sunny", rain_probability: 0 },
    { time: 7, temperature: 15, weather_statues: "sunny", rain_probability: 0 },
    { time: 8, temperature: 17, weather_statues: "sunny", rain_probability: 0 },
    { time: 9, temperature: 18, weather_statues: "sunny", rain_probability: 0 },
    {
      time: 10,
      temperature: 19,
      weather_statues: "sunny",
      rain_probability: 0,
    },
    {
      time: 11,
      temperature: 20,
      weather_statues: "sunny",
      rain_probability: 0,
    },
    {
      time: 12,
      temperature: 21,
      weather_statues: "sunny",
      rain_probability: 0,
    },
    {
      time: 13,
      temperature: 21,
      weather_statues: "sunny",
      rain_probability: 0,
    },
    {
      time: 14,
      temperature: 22,
      weather_statues: "sunny",
      rain_probability: 0,
    },
    {
      time: 15,
      temperature: 22,
      weather_statues: "Bewölkt",
      rain_probability: 5,
    },
    {
      time: 16,
      temperature: 21,
      weather_statues: "Bewölkt",
      rain_probability: 10,
    },
    {
      time: 17,
      temperature: 20,
      weather_statues: "Bewölkt",
      rain_probability: 15,
    },
    {
      time: 18,
      temperature: 18,
      weather_statues: "Regen",
      rain_probability: 40,
    },
    {
      time: 19,
      temperature: 17,
      weather_statues: "Regen",
      rain_probability: 50,
    },
    {
      time: 20,
      temperature: 15,
      weather_statues: "Regen",
      rain_probability: 60,
    },
    {
      time: 21,
      temperature: 14,
      weather_statues: "Gewitter",
      rain_probability: 80,
    },
    {
      time: 22,
      temperature: 13,
      weather_statues: "Gewitter",
      rain_probability: 90,
    },
    {
      time: 23,
      temperature: 12,
      weather_statues: "Bewölkt",
      rain_probability: 30,
    },
    {
      time: 24,
      temperature: 11,
      weather_statues: "Nebel",
      rain_probability: 20,
    },
  ];

  const now = new Date();
  const hour = now.getHours();
  const filteredDailyForecast = DailyForecast.filter(
    (forecast) => forecast.time > hour
  );

  const weather_icons = new Map<string, JSX.Element>();
  weather_icons.set(
    "Sonne",
    <Image
      className="mt-3 ml-2 w-10 h-10"
      source={require("../../assets/images/clear-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Bewölkt",
    <Image
      className="mt-3 ml-2 w-10 h-10"
      source={require("../../assets/images/pcloudy-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Nebel",
    <Image
      className="mt-3 ml-2 w-10 h-10"
      source={require("../../assets/images/fog-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Regen",
    <Image
      className="mt-3 ml-2 w-10 h-10"
      source={require("../../assets/images/showers-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Gewitter",
    <Image
      className="mt-3 ml-2 w-10 h-10"
      source={require("../../assets/images/tshower-day.png")}
    ></Image>
  );

  return (
    <View className="mt-10  rounded-3xl mx-5 bg-[#5B98A8]/80 px-10 py-10 ">
      <Text className="text-white text-xl font-bold ">
        Regen. Tiefsttemperatur 10C.
      </Text>
      <View className="w-full border-t border-t-gray-400 mt-5 mb-5"></View>
      <FlatList
        data={filteredDailyForecast}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        maxToRenderPerBatch={2}
        windowSize={2}
        initialNumToRender={2}
        contentContainerStyle={{ paddingVertical: 16 }}
        ItemSeparatorComponent={() => <View className="h-4 " />}
        renderItem={({ item, index }) => {
          return (
            <View key={item.time} className="flex flex-col mr-8">
              <Text className="text-gray-200">{item.time}:00</Text>
              {weather_icons.get(item.weather_statues)}
              <Text className="mt-3 ml-2 text-xl text-white">
                {item.temperature}°
              </Text>
              <View className="flex flex-row mt-5  ">
                <MaterialCommunityIcons
                  name="water"
                  size={15}
                  color={"white"}
                ></MaterialCommunityIcons>
                <Text className="text-white text-sm">
                  {item.rain_probability}%
                </Text>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}
