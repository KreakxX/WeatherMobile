import { JSX } from "react";
import { Image, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function WeeklyView() {
  const weeklyForeCastData = [
    {
      Day: "Montag",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
    {
      Day: "Dienstag",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
    {
      Day: "Mittwoch",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
    {
      Day: "Donnerstag",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
    {
      Day: "Freitag",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
    {
      Day: "Samstag",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
    {
      Day: "Sonntag",
      temperature: 12,
      rain_probability: 8,
      weather_status: "Sonne",
    },
  ];

  const weather_icons = new Map<string, JSX.Element>();
  weather_icons.set(
    "Sonne",
    <Image
      className="mt-2 ml-2 w-7 h-7"
      source={require("../../assets/images/clear-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Bewölkt",
    <Image
      className="mt-2 ml-2 w-7 h-7"
      source={require("../../assets/images/pcloudy-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Nebel",
    <Image
      className="mt-2 ml-2 w-7 h-7"
      source={require("../../assets/images/fog-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Regen",
    <Image
      className="mt-2 ml-2 w-7 h-7"
      source={require("../../assets/images/showers-day.png")}
    ></Image>
  );
  weather_icons.set(
    "Gewitter",
    <Image
      className="mt-2 ml-2 w-7 h-7"
      source={require("../../assets/images/tshower-day.png")}
    ></Image>
  );
  return (
    <View className="rounded-3xl mx-5 bg-[#5B98A8] px-6 py-8">
      <View className="flex flex-col gap-4">
        {weeklyForeCastData.map((forecast) => (
          <View
            className="flex flex-row items-center justify-between"
            key={forecast.Day}
          >
            <Text className="text-white text-lg font-semibold w-12 mt-2 ">
              {forecast.Day.slice(0, 2)}.
            </Text>
            <View className="flex flex-row items-center ">
              <View className="flex flex-row items-center w-16 mt-2">
                <MaterialCommunityIcons
                  name="water"
                  size={18}
                  color={"white"}
                />
                <Text className="text-white text-sm ml-1 ">
                  {forecast.rain_probability}%
                </Text>
              </View>
              <View className="flex flex-row w-20  justify-center">
                {weather_icons.get(forecast.weather_status)}
                {weather_icons.get("Bewölkt")}
              </View>
              <Text className="text-white font-semibold w-12 mt-2 text-xl text-right">
                {forecast.temperature}°
              </Text>
              <Text className="text-white font-semibold w-12 mt-2 text-xl text-right">
                {forecast.temperature}°
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
