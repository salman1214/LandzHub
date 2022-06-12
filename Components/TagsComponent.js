import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

function TagsComponent({ navigation }) {
    return (
        <View style={styles.Tags}>
            <TouchableOpacity>
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/graphic-design.png')} />
                    <Text style={styles.sectionTitle}>Calculate Your Land</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('AddLand') }}
            >
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/plus.png')} />
                    <Text style={styles.sectionTitle}>Add My Land</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('BuyLand') }}
            >
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/house.png')} />
                    <Text style={styles.sectionTitle}>Buy Land</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/location-pin.png')} />
                    <Text style={styles.sectionTitle}>Sell Land</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 10
      },
      Tag: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid red',
        width: 150,
        height: 150,
        borderRadius: 20
      },
      logo: {
        width: 60,
        height: 60
      },
      sectionTitle: {
        marginTop: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
      },
})


export default TagsComponent