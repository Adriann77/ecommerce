import './styles/theme.scss';
import './styles/globals.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx';



const router = createBrowserRouter([
	{
		path: '/',
		element: <ProductDetails/>
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
