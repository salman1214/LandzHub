import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'


const api = [{
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    landPrice: 'PKR 8.5 Crore',
    address: 'DHA phase 6, DHA Defence',
    landArea: '500 Sq. Yd.',
    description: '500 Yards Well Maintained House For Sale',
    shortDecription: 'Location Phase 6 DHA Karachi',
    addedTime: '3 hours ago'
}]


const BuyLand = (props) => {
    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', height: '100%' }}>
            <View style={styles.container}>
                {api.map(({image, landPrice, address, landArea, description, shortDecription, addedTime}) => (
                    <View style={styles.tag}>
                        <Image source={{uri: image}} style={{width: '40%', height: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10}} />
                        <View style={styles.landData}>
                            <Text style={{color: 'grey', fontSize: 10, alignSelf: 'flex-end'}}>{addedTime}</Text>
                            <Text style={styles.landPrice}>{landPrice}</Text>
                            <Text style={styles.address}>{address}</Text>
                            <Text style={styles.landArea}>{landArea}</Text>
                        </View>
                    </View>
                  ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
        alignItems: 'center'
    },
    tag: {
        backgroundColor: 'white',
        width: '100%',
        height: 100,
        borderRadius: 10,
        flexDirection: 'row'
    },
    landData: {
        margin: 10,
        justifyContent: 'center',
        // borderWidth: 1,
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

export default BuyLand