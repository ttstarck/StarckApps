// In App.js in a new project

import React from 'react';
import { AppRegistry, ScrollView, Image, Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends React.Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>If you like</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>What's the best</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:96}}>Hi World</Text>
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    List: {
      screen: IScrolledDownAndWhatHappenedNextShockedMe,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}