// In App.js in a new project

import React from "react";
import {View, Text, Button, TextInput} from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createAppContainer
} from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Settings Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to Profile... again"
                    onPress={() => this.props.navigation.push('Profile')}
                />
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                    title="Go back."
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Profile: ProfileScreen,
});

const TabNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    }
);
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}