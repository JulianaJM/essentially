import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));
class App extends Component {
  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello world</h1>
        <h2 className={count > 10 ? 'warning' : ''}> Count: {count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +1
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -1
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}
// avoid reload state on dev change
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
