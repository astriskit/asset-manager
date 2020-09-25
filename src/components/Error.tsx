import React from "react";
import { Alert, Button } from "antd";

interface Props {
  error: string;
  onReload: any;
}

const Message: React.FC<Props> = ({ error, onReload }) => (
  <div id="message-error">
    <div>{error}</div>
    <Button onClick={onReload} type="ghost">
      Retry loading
    </Button>
  </div>
);

export const Error: React.FC<Props> = (props) => (
  <Alert type="error" message={<Message {...props} />} showIcon />
);
