import DailyView from "@/components/weather/DailyView";
import RainView from "@/components/weather/RainView";
import StartView from "@/components/weather/StartView";
import WeeklyView from "@/components/weather/WeeklyView";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function HomeScreen() {
  const [isRaining, setIsRaining] = useState<boolean>(false);
  return (
    <LinearGradient
      colors={["#7CB7B7", "#5B98A8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="w-full h-full"
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <View className="gap-y-4">
          <StartView />
          <GestureHandlerRootView>
            <DailyView />
          </GestureHandlerRootView>
          <RainView />
          <WeeklyView />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
