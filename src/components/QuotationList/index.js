import React, { Fragment } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import styles from "./style";
import QuotationItem from "./QuotationItem";

export default function QuotationList(props) {
    const daysQuery = props.filterDay;

    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => { daysQuery(7) }}>
                    <Text style={styles.textQuery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => { daysQuery(15) }}>
                    <Text style={styles.textQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => { daysQuery(30) }}>
                    <Text style={styles.textQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => { daysQuery(90) }}>
                    <Text style={styles.textQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => { daysQuery(180) }}>
                    <Text style={styles.textQuery}>6M</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <FlatList
                    data={props.listTransactions}
                    renderItem={({ item }) => {
                        return <QuotationItem
                            valor={item.valor}
                            data={item.data}
                        />
                    }}
                />
            </ScrollView>
        </Fragment>
    )
}