import React, { useState } from "react";

function useAlert() {
  const initAlert = { show: false, text: "", type: "danger" };
  const [alert, setAlert] = useState([initAlert]);

  const showAlert = ({ text, type = "danger" }) =>
    setAlert({
      show: true,
      text,
      type,
    });
  const hideAlert = () => setAlert(initAlert);
  return { alert, showAlert, hideAlert };
}

export default useAlert;
