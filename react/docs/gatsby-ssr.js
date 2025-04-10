import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="font-roboto"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />,
    <link
      key="font-poppins"
      href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap"
      rel="stylesheet"
    />,
  ]);
};
