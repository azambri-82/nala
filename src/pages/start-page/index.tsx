import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../../utils/messages";
import CSVLoader from "../../components/csvLoader/CsvLoader";

const StartPage = () => {
  const language = "es";

  return (
    <div>
      <CSVLoader />
      <FormattedMessage
        id="greeting"
        defaultMessage="Hola"
        description="A greeting"
        tagName="p"
        values={{ greeting: messages[language].greeting }}
      />
    </div>
  );
};

export default StartPage;
