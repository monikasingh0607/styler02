import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function FlatCards() {
  {
    return (
      <View style={styles.complete}>
        <Text style={styles.headingText}>FlatCards</Text>
        <View style={styles.containers}>
            <View style={[styles.redcard, styles.card1]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.redcard, styles.card2]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.redcard, styles.card3]}>
                <Text>Green</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    complete: {
        backgroundColor: 'black'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10

    },
    containers: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    redcard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 6,
        margin: 8
    },
    card1: {
        backgroundColor: "#EF5354"
    },
    card2: {
        backgroundColor: "#50DBB4"
    },
    card3: {
        backgroundColor: "#5DA3FA"
    }
})
