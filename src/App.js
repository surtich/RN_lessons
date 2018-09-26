import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Counter extends Component {
  render() {
    const { counter, handlePress } = this.props;
    return (
      <View>
        <Button onPress={handlePress} title="press" />
        <Text>{counter}</Text>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  count = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <View>
        <Counter counter={counter} handlePress={this.count} />
        <Counter counter={counter} handlePress={this.count} />
      </View>
    );
  }
}

export default App;
