import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate
                loading={null}
                persistor={persistor}
            > */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
			{/* </PersistGate> */}
		</Provider>
	</React.StrictMode>
);
