import { Dimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width - 85;

export default function RainView() {
  const rainData = [
    { time: 0, rain: 10 },
    { time: 1, rain: 20 },
    { time: 2, rain: 13 },
    { time: 3, rain: 9 },
    { time: 4, rain: Math.floor(Math.random() * 21) },
    { time: 5, rain: Math.floor(Math.random() * 21) },
    { time: 6, rain: Math.floor(Math.random() * 21) },
    { time: 7, rain: Math.floor(Math.random() * 21) },
    { time: 8, rain: Math.floor(Math.random() * 21) },
    { time: 9, rain: Math.floor(Math.random() * 21) },
    { time: 10, rain: Math.floor(Math.random() * 21) },
    { time: 11, rain: Math.floor(Math.random() * 21) },
    { time: 12, rain: Math.floor(Math.random() * 21) },
    { time: 13, rain: Math.floor(Math.random() * 21) },
    { time: 14, rain: Math.floor(Math.random() * 21) },
    { time: 15, rain: Math.floor(Math.random() * 21) },
    { time: 16, rain: Math.floor(Math.random() * 21) },
    { time: 17, rain: Math.floor(Math.random() * 21) },
    { time: 18, rain: Math.floor(Math.random() * 21) },
    { time: 19, rain: Math.floor(Math.random() * 21) },
    { time: 20, rain: 20 },
    { time: 21, rain: 18 },
    { time: 22, rain: 15 },
    { time: 23, rain: 25 },
    { time: 24, rain: 5 },
  ];

  const now = new Date();
  const hour = now.getHours();
  const filteredDailyForecast = rainData
    .filter((raindata) => raindata.time > hour)
    .slice(0, 5);

  const data = {
    labels: filteredDailyForecast.map((d) => d.time.toString() + ":00"),
    datasets: [{ data: filteredDailyForecast.map((d) => d.rain) }],
  };

  return (
    <View className="mt-10  rounded-3xl mx-5 bg-[#5B98A8]/80 px-10 py-10">
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#5B98A8",
          backgroundGradientFrom: "#5B98A8",
          backgroundGradientTo: "#5B98A8",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        yAxisLabel=""
        yAxisSuffix=""
      />
    </View>
  );
}
