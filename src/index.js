import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// dev-5s3qs28hd5askz4w.us.auth0.com
// TNQBXteejVEucYA2yV9JnimQ7amkAdyh

root.render(
    <Auth0Provider 
            domain="dev-5s3qs28hd5askz4w.us.auth0.com"
            clientId="TNQBXteejVEucYA2yV9JnimQ7amkAdyh"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}            
            cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
