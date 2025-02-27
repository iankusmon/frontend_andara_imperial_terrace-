"use client"

import { useEffect } from "react";

const FreshChat = () => {
  useEffect(() => {
    // Ensure script is not added multiple times
    if (!document.getElementById("freshchat-script")) {
      const script = document.createElement("script");
      script.id = "freshchat-script";
      script.src = "//fw-cdn.com/12500707/4903502.js";
      script.setAttribute("chat", "true");
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Freshchat script loaded.");
      };
    }
  }, []);

  return null;
};

export default FreshChat;
