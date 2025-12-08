'use client';

import './globals.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import { MONTSERRAT } from './lib/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${MONTSERRAT.className}`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
