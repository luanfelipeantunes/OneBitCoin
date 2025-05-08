import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';

function url(qtdDays) {
  const currentDate = moment().format("YYYY-MM-DD")
  const end_date = moment(currentDate).unix();

  return `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=${qtdDays}&toTs=${end_date}`
}

async function getListCoins(url) {
  let response = await axios.get(url);

  let selectList = response.data.Data.Data

  const queryCoinsList = Object.keys(selectList).map((item) => {
    return {
      valor: selectList[item].close,
      data: moment.unix(selectList[item].time).format("DD/MM/YYYY"),
    }
  })

  let data = queryCoinsList.reverse();

  return data;
}

async function getPricesGraph(url) {
  let response = await axios.get(url);

  let selectList = response.data.Data.Data

  const queryCoinsList = Object.keys(selectList).map((item) => { return selectList[item].close });

  return queryCoinsList;
}


export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [pricesGraph, setPricesGraph] = useState([0]);
  const [days, setDays] = useState(6);
  const [updateData, setUpdateData] = useState(true);
  const [currentPrice, setCurrentPrice] = useState(0);

  function updateDay(number) {
    setDays(number - 1);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
      setUpdateData(false);
    })

    getPricesGraph(url(days)).then((data) => {
      setPricesGraph(data);
      setCurrentPrice(data[data.length - 1]);
      setUpdateData(false);
    })
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#F20505"
        translucent
      />

      <CurrentPrice
        currentPrice={currentPrice}
      />

      <HistoryGraphic
        dataGraphic={pricesGraph}
      />

      <QuotationList
        filterDay={updateDay}
        listTransactions={coinsList}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
