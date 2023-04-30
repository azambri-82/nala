import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import AppContainer from "./styles";
import Routes from "./router";
import logo from "./assets/logo.jpeg";
import Header from "./components/header/Header";
import messages from "./utils/messages";
import TabMenu from "./components/tap-menu/TapMenu";

function App() {
  const [locale, setLocale] = useState<string>("en");

  const handleLocaleChange = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <AppContainer>
          <Header
            logoSrc={logo}
            buttonText={
              locale === "en" ? "Cambiar a Español" : " Change to English"
            }
            onClick={handleLocaleChange}
          />
          <Routes />
        </AppContainer>
      </IntlProvider>
    </Provider>
  );
}

export default App;
