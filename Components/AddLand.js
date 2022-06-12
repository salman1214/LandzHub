import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    Alert
} from 'react-native'

const AddLand = ({ navigation }) => {

    const [landName, setLandName] = useState('')
    const [landPrice, setLandPrice] = useState('')
    const [landArea, setLandArea] = useState('')
    const [landAddress, setLandAddress] = useState('')
    const [landDescriprion, setLandDescriprion] = useState('')

    const Submit = () => {
        if(!landName){
            Alert.alert('Enter Land Name')
        }
        if(!landPrice){
            Alert.alert('Enter Price')
        }
        if(!landArea){
            Alert.alert('Enter Land Area')
        }
        if(!landAddress){
            Alert.alert('Enter Land Address')
        }
        if(!landDescriprion){
            Alert.alert('Enter Description')
        }
        else{
            navigation.navigate('AddedLands', { landPrice, landArea, landAddress, landDescriprion })
        }
    }

    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', height: '100%' }}>
            <View style={{padding: 20}}>
                <Text style={{ color: 'black', alignSelf: 'center', fontSize: 20, padding: 20, fontWeight: '600' }}>ADD YOUR LAND</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Give a name to your land *'
                        placeholderTextColor='black'
                        onChangeText={newText => setLandName(newText)}
                        defaultValue={landName}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={styles.input2}
                            placeholder='Enter Price *'
                            placeholderTextColor='black'
                            onChangeText={newText => setLandPrice(newText)}
                            defaultValue={landPrice}
                        />

                        <TextInput
                            style={styles.input2}
                            placeholder='Enter Land Area *'
                            placeholderTextColor='black'
                            onChangeText={newText => setLandArea(newText)}
                            defaultValue={landArea}
                        />
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder='Enter Land Address *'
                        placeholderTextColor='black'
                        onChangeText={newText => setLandAddress(newText)}
                        defaultValue={landAddress}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Description *'
                        placeholderTextColor='black'
                        multiline={true}
                        onChangeText={newText => setLandDescriprion(newText)}
                        defaultValue={landDescriprion}
                    />

                    <TouchableOpacity
                        onPress={Submit}
                        style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#B6F797', padding: 10, borderRadius: 5}}
                    >
                        <Text style={{color: 'black'}}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 3,
        paddingLeft: 0,
        paddingRight: 3,
        color: 'black',
        marginBottom: 30
    },
    input2: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 3,
        paddingLeft: 0,
        paddingRight: 3,
        color: 'black',
        marginBottom: 30,
        width: '47%',
    },
})

export default AddLand