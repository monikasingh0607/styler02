import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function FancyCards()  {
    return (
      <View style={styles.complete}>
        <Text style={styles.headingText}> Trending Places</Text>
        <View style={[styles.card, styles.elevated]}> 
            <Image
            source={{
                uri: 'https://www.livemint.com/lm-img/img/2024/05/12/600x338/Northern-Lights-Photo-Gallery-2_1715478562101_1715479818682.jpg'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Northern Lights</Text>
                <Text style={styles.cardTitle}>Norway</Text>
                <Text style={styles.cardDescription}>The Northern Lights, also known as Aurora Borealis, are a stunning natural phenomenon that can be observed in various locations around the world, including Norway. Norway is particularly popular for viewing the Northern Lights.</Text>
            </View>
            
        </View>
        <View style={[styles.card, styles.elevated]}> 
            <Image
            source={{
                uri: 'https://static.toiimg.com/photo/101334904.cms'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardTitle}>Jaipur</Text>
                <Text style={styles.cardDescription}>Hawa Mahal, or the "Palace of Winds," is a famous monument located in Jaipur, the capital city of the Indian state of Rajasthan.</Text>
            </View>
            
        </View>
        <View style={[styles.card, styles.elevated]}> 
            <Image
            source={{
                uri: 'https://cdn.britannica.com/27/242227-050-48358A10/Mysore-Palace-Mysuru-Karnataka-India.jpg'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Mysore Palace</Text>
                <Text style={styles.cardTitle}>Karnataka</Text>
                <Text style={styles.cardDescription}>Mysore Palace, also known as the Amba Vilas Palace, is a majestic historical palace located in the city of Mysore in the southern state of Karnataka, India. </Text>
            </View>
            
        </View>
        
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
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 500,
        borderRadius: 8,
        marginVertical: 16,
        marginHorizontal: 16,
        backgroundColor: 'white',
        color: 'black'
    },
    elevated: {
        backgroundColor: 'white',
        color: 'black',
        elevation: 6,
        shadowOffset: {
            width: 4,
            height: 5
        },
        shadowColor: 'white'
    },
    cardImage: {
        backgroundColor: 'black',
        height: 300,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',  
        height: 400,
        borderRadius: 6
    },
    cardTitle:{
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 6,
        alignItems: 'center'
    },
    cardDescription: {
        color: 'black',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
