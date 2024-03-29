import './styles/theme.scss';
import './styles/globals.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart } from './views/Cart/Cart.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { mainPageLoader } from './api/mainPageLoader.js';
import { ProductList } from './views/ProductList/ProductList.jsx';
import { productListLoader } from './api/productListLoader.js';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/koszyk',
				element: <Cart />,
			},
			{
				path: '/ulubione',
				element: <Favourites />,
			},
			{
				path: '/:gender?',
				element: <MainPage />,
				loader: mainPageLoader,
			},
			{
				path: '/:gender/:category/:subcategory?',
				element: <ProductList />,
				loader: productListLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
