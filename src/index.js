import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware,  } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { saveData, loadData } from './service/localstorage';
import rootReducer from './redux/reducers/rootReducer';
import mainSaga from './redux/sagas/mainSaga';
import ExtendedItem from './ExtendedItem';
import Main from './Main';

const sagaMiddleware = createSagaMiddleware();

const persistedStore = loadData();
const store = createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(sagaMiddleware)
    
);

store.subscribe(() => {
    saveData(
      { items: store.getState().items }
    )
  })

sagaMiddleware.run(mainSaga);

class App extends Component {

    render() {
        return(
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path='/:id' component={ExtendedItem} />
                        <Route exact path='/' component={Main} />
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('root'));
