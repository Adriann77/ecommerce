import "./styles/theme.scss"
import "./styles/globals.scss"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Cart } from "./views/Cart/Cart.jsx";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Cart />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
