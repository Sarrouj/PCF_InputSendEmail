import * as React from "react";
import {
  FluentProvider,
  webLightTheme,
  Input,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";
import { Mail24Regular , Database24Regular} from "@fluentui/react-icons";

interface propsComponent {
  Emailvalue  : string;
  changeEmailValue : (EmailValue : string) => void;
  onSendEmail : () => void;
}

const EmailInput : React.FC<propsComponent> = ({ Emailvalue, changeEmailValue, onSendEmail }) => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Input
        placeholder="test"
        style={{ width: "100%" }}
        value={Emailvalue}
        onChange={(e, newValue) => changeEmailValue(newValue.value)}
        contentAfter={
          <Menu>
            <MenuTrigger>
              <Button
                appearance="transparent"
                icon={<Mail24Regular />}
                aria-label="Options"
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem onClick={() => window.location.href = `mailto:${Emailvalue}`}>
                  <div className="option">
                    <Mail24Regular className="Icon"/>
                    <p>Send Standard Email Message</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => onSendEmail()}>
                  <div className="option">
                    <Database24Regular className="Icon"/>
                    <p>Send Email using Dataverse</p>
                  </div>
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        }
      />
    </FluentProvider>
  );
};

export default EmailInput;
