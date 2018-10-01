import React, { Component } from "react";
import { Button, View } from "react-native";

import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: []
    };
  }
  setCount = counterId => newValue => {
    const { counters } = this.state;
    this.setState({
      counters: counters.map((c, i) => (i === counterId ? newValue : c))
    });
  };

  resetCounters = () => {
    const { counters } = this.state;
    this.setState({
      counters: counters.map(c => 0)
    });
  };

  addCounter = () => {
    const { counters } = this.state;
    this.setState({
      counters: [...counters, 0]
    });
  };

  removeCounter = counterId => () => {
    const { counters } = this.state;
    this.setState({
      counters: counters.filter((c, i) => i !== counterId)
    });
  };

  removeCounters = () => {
    const { counters } = this.state;
    this.setState({
      counters: []
    });
  };

  render() {
    const { counters } = this.state;
    return (
      <View>
        <Button title="Add counter" onPress={this.addCounter} />
        {counters.map((c, i) => (
          <Counter
            key={i}
            counter={c}
            setCount={this.setCount(i)}
            removeCounter={this.removeCounter(i)}
          />
        ))}
        <Button onPress={this.resetCounters} title="reset all" />
        <Button onPress={this.removeCounters} title="remove all" />
      </View>
    );
  }
}

export default Counters;
