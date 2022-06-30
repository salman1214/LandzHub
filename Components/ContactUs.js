import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
// import NavBarComponent from './NavBarComponent';

function ContactUs(props) {


  // const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");


  const placeHolderColor = 'black'

  return (
    <ScrollView pagingEnabled style={styles.sectionContainer}>
      {/* <NavBarComponent navigation={props.navigation} /> */}
      <View style={styles.Header}>
        <Text style={styles.mainHeading}>CONTACT WITH US</Text>
        <View style={styles.formContainer}>
          <View>
            <TextInput
              style={styles.Input}
              placeholder='Name *'
              placeholderTextColor={placeHolderColor}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              // secureTextEntry={true}
              style={styles.Input}
              placeholder='Email *'
              placeholderTextColor={placeHolderColor}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <PhoneInput
              // ref={phoneInput}
              defaultValue={value}
              defaultCode="PK"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              withShadow
              autoFocus
            />
          </View>

          <TextInput
            style={[styles.Input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red', marginTop: 20 }]}
            placeholder='Enter a message *'
            placeholderTextColor={placeHolderColor}
            multiline={true}
            // onChangeText={newText => setLandDescriprion(newText)}
            // defaultValue={landDescriprion}
          />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Send</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.forgotText}>View Terms & Conditions</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'rgb(226, 219, 204)',
    height: '100%'
  },
  Header: {
    padding: 25
  },
  mainHeading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500'
  },
  formContainer: {
    paddingTop: 30,
  },
  Heading: {
    color: 'black',
    fontSize: 15,
    marginLeft: 3
  },
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 3,
    paddingLeft: 0,
    paddingRight: 3,
    color: 'black'
  },
  loginBtn: {
    backgroundColor: '#B6F797',
    padding: 10,
    marginTop: 30,
    borderRadius: 5
  },
  loginBtnText: {
    color: 'black',
    textAlign: 'center'
  },
  forgotText: {
    color: '#1F9033',
    textAlign: 'center',
    marginTop: 20
  }
});

export default ContactUs