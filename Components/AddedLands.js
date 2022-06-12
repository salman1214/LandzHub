import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native'

const AddedLands = ({ route }) => {

    const { landPrice, landArea, landAddress } = route.params

    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', height: '100%' }}>
            <ScrollView style={styles.container}>
                <View style={styles.tag}>
                    <Image source={require('../Media/farm.jpg')} style={{ width: '40%', height: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
                    <View style={styles.landData}>
                        <Text style={{ color: 'grey', fontSize: 10, alignSelf: 'flex-end', marginBottom: 10 }}>3 hours</Text>
                        <Text style={styles.landPrice}>{landPrice}</Text>
                        <Text style={styles.address}>{landAddress}</Text>
                        <Text style={styles.landArea}>{landArea}</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 }}>
                                <Text style={{ color: 'green' }}>EMAIL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 }}
                                onPress={() => {Linking.openURL('tel:03325275579')}}
                            >
                                <Text style={{ color: 'white' }}>CALL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ justifyContent: 'center' }}>
                                <Image source={require('../Media/whatsapp.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
    },
    tag: {
        backgroundColor: 'white',
        width: '100%',
        height: 140,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5
    },
    landData: {
        margin: 8,
        justifyContent: 'center',
        width: '55%'
    },
    landPrice: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20
    },
    address: {
        color: 'black',
        fontSize: 14
    },
    landArea: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14
    },
    description: {
        color: 'black'
    }
})

export default AddedLands