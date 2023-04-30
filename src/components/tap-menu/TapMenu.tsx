import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import messages from "../../utils/messages";

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f1f5f9;
  border-radius: 8px;
`;
interface ITabButton {
  active: boolean;
}

const TabButton = styled.button<ITabButton>`
  background-color: ${({ active }) => (active ? "#7694fa" : "#f1f5f9")};
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 1px 25px;
  outline: none;
  color: ${({ active }) => (active ? "#ffffff" : "black")};
  border-radius: ${({ active }) => (active ? "8px" : "0")};
  text-transform: uppercase;
`;

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const language = "es";
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <Tabs>
      <Link to="/inicio">
        <TabButton
          active={activeTab === "tab1"}
          onClick={() => handleTabClick("tab1")}
        >
          <FormattedMessage
            id="start"
            defaultMessage="Inicio"
            description="A greeting"
            tagName="p"
            values={{ greeting: messages[language].start }}
          />
        </TabButton>
      </Link>
      <Link to="/organigrama">
        <TabButton
          active={activeTab === "tab2"}
          onClick={() => handleTabClick("tab2")}
        >
          <FormattedMessage
            id="organizationchart"
            defaultMessage="Organigrama"
            description="A organizationchart"
            tagName="p"
            values={{ greeting: messages[language].organizationchart }}
          />
        </TabButton>
      </Link>
      <Link to="/colaborador">
        <TabButton
          active={activeTab === "tab3"}
          onClick={() => handleTabClick("tab3")}
        >
          <FormattedMessage
            id="collaborator"
            defaultMessage="Colaborador"
            description="A collaborator"
            tagName="p"
            values={{ greeting: messages[language].collaborator }}
          />
        </TabButton>
      </Link>
    </Tabs>
  );
};

export default TabMenu;
