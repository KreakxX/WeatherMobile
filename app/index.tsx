import DailyView from "@/components/weather/DailyView";
import StartView from "@/components/weather/StartView";
import { LinearGradient } from "expo-linear-gradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#7CB7B7", "#5B98A8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="w-full h-full"
    >
      <StartView />
      <GestureHandlerRootView>
        <DailyView />
      </GestureHandlerRootView>
    </LinearGradient>
  );
}
