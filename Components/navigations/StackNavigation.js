import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import LoginPage from '../LoginPage';
import DrawerNavigation from './DrawerNavigation';
import BuyLand from '../BuyLand';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen' >


            <Stack.Screen options={{
                headerShown: false
            }} name="SplashScreen" component={SplashScreen} />


            <Stack.Screen options={{
                headerShown: false
            }} name="Drawer" component={DrawerNavigation} />


            <Stack.Screen options={{
                headerShown: false,
                title: 'Login',
                headerStyle: {
                    backgroundColor: '#B6F797',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            }} name="LoginPage" component={LoginPage} />

            <Stack.Screen options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#B6F797'
                }
            }} name="BuyLand" component={BuyLand} />

        </Stack.Navigator>
    )
}

export default StackNavigation