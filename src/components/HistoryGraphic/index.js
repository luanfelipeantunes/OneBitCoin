import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./style";

export default function HistoryGraphic(props) {
    return (
        <View style={styles.contentGraphic}>
            <LineChart
                data={{
                    datasets: [
                        {
                            data: props.dataGraphic,
                        }
                    ]
                }}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                withVerticalLabels={false}
                withVerticalLines={false}
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#232323",
                    backgroundGradientTo: "#3f3f3f",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#f50d41"
                    }
                }}
                bezier
            />
        </View>
    )
}