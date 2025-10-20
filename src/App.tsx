import React from 'react';
interface State {
  currentKey: string;
}

export class App extends React.Component {
  state: State = {
    currentKey: '',
  };

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        {currentKey.length > 0 ? (
          <p className="App__message">The last pressed key is [{currentKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
