import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Counter extends Component {
  render() {
    const { counter, counterId, handlePress } = this.props;
    return (
      <View>
        <Button onPress={() => handlePress(counterId)} title="count" />
        <Text>{counter}</Text>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: []
    };
  }
  count = counterId => {
    const { counters } = this.state;
    this.setState({
      counters: counters.map((c, i) => (i === counterId ? c + 1 : c))
    });
  };

  addCounter = () => {
    const { counters } = this.state;
    this.setState({
      counters: [...counters, 0]
    });
  };

  render() {
    const { counters } = this.state;
    return (
      <View>
        <Button title="Add counter" onPress={this.addCounter} />
        {counters.map((c, i) => (
          <Counter counterId={i} key={i} counter={c} handlePress={this.count} />
        ))}
      </View>
    );
  }
}

export default App;
