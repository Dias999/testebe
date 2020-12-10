import React from "react";
import { Provider } from "react-redux";
import { store } from "store";
import { Home } from "screens";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App vh-100">
        <Container>
          <Home />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
