import Script from 'next/script';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.scss';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HZN3ZX6Q9D" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HZN3ZX6Q9D');`}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
