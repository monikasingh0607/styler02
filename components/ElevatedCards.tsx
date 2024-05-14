import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default function ElevatedCards() {
   
    return (
      <View style={styles.complete}>
        <Text style={styles.headingText}> Elevated Cards </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.elevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.elevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card, styles.elevated]}>
                <Text>for</Text>
            </View>
            <View style={[styles.card, styles.elevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card, styles.elevated]}>
                <Text>Monix</Text>
            </View>
        </ScrollView>
      </View>
    )
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
    container: {
        flexDirection: 'row',
        padding: 8
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8
    },
    elevated: {
        backgroundColor: 'pink',
        color: 'black',
        elevation: 6,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 4
    }
})


