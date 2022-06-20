import React, { useState, useContext } from 'react'
import LandContext from './context/land/LandContext'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native'

// const land = []
let id = 3

const AddLand = ({ navigation }) => {

    const [landName, setLandName] = useState('')
    const [landPrice, setLandPrice] = useState('')
    const [landArea, setLandArea] = useState('')
    const [landAddress, setLandAddress] = useState('')
    const [landDescriprion, setLandDescriprion] = useState('')
    const [placeHolderColor, setPlaceHolderColor] = useState('black')

    const l = useContext(LandContext)

    const Submit = () => {
        id++
        if (!landName) {
            setPlaceHolderColor('red')
        }
        if (!landPrice) {
            setPlaceHolderColor('red')
        }
        if (!landArea) {
            setPlaceHolderColor('red')
        }
        if (!landAddress) {
            setPlaceHolderColor('red')
        }
        if (!landDescriprion) {
            setPlaceHolderColor('red')
        }
        else {
            l.land.push({ id: id, name: landName, price: landPrice, area: landArea, address: landAddress, description: landDescriprion })
            setPlaceHolderColor('black')
            navigation.navigate('AddedLands', l.land)
        }
    }

    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', height: '100%' }}>
            <View style={{ padding: 20 }}>
                <Text style={{ color: 'black', alignSelf: 'center', fontSize: 20, padding: 20, fontWeight: '600' }}>ADD YOUR LAND</Text>

                <View>
                    <TextInput
                        style={[styles.input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                        placeholder='Give a name to your land *'
                        placeholderTextColor={placeHolderColor}
                        onChangeText={newText => setLandName(newText)}
                        defaultValue={landName}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={[styles.input2, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                            placeholder='Enter Price *'
                            placeholderTextColor={placeHolderColor}
                            onChangeText={newText => setLandPrice(newText)}
                            defaultValue={landPrice}
                        />

                        <TextInput
                            style={[styles.input2, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                            placeholder='Enter Land Area *'
                            placeholderTextColor={placeHolderColor}
                            onChangeText={newText => setLandArea(newText)}
                            defaultValue={landArea}
                        />
                    </View>

                    <TextInput
                        style={[styles.input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                        placeholder='Enter Land Address *'
                        placeholderTextColor={placeHolderColor}
                        onChangeText={newText => setLandAddress(newText)}
                        defaultValue={landAddress}
                    />

                    <TextInput
                        style={[styles.input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                        placeholder='Description *'
                        placeholderTextColor={placeHolderColor}
                        multiline={true}
                        onChangeText={newText => setLandDescriprion(newText)}
                        defaultValue={landDescriprion}
                    />

                    <TouchableOpacity
                        onPress={Submit}
                        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#B6F797', padding: 10, borderRadius: 5 }}
                    >
                        <Text style={{ color: 'black' }}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        paddingVertical: 3,
        paddingLeft: 0,
        paddingRight: 3,
        color: 'black',
        marginBottom: 30
    },
    input2: {
        borderBottomWidth: 1,
        paddingVertical: 3,
        paddingLeft: 0,
        paddingRight: 3,
        color: 'black',
        marginBottom: 30,
        width: '47%',
    }
})

export default AddLand