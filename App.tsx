import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'

const App = () =>{
  {
    return (
      <SafeAreaView>
        <ScrollView scrollEventThrottle={20}>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}



export default App

