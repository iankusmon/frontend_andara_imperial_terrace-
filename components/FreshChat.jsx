"use client"

import { useEffect, useState } from "react";

const FreshChat = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Get customer data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setCustomer(storedUser);
    }

    // Check if the script is already added
    if (!document.getElementById("freshchat-script")) {
      const script = document.createElement("script");
      script.id = "freshchat-script";
      script.src = "https://wchat.freshchat.com/js/widget.js";
      script.async = true;
      script.onload = () => {
        console.log("Freshchat script loaded.");
        initializeFreshChat(storedUser);
      };
      document.body.appendChild(script);
    } else {
      initializeFreshChat(storedUser);
    }

    return () => {
      // Cleanup function if necessary
    };
  }, []);

  const initializeFreshChat = (user) => {
    if (window.fcWidget) {
      console.log("Initializing Freshchat...");

      window.fcWidget.init({
        token: "YOUR_FRESHCHAT_TOKEN",
        host: "https://wchat.freshchat.com",
      });

      if (user) {
        window.fcWidget.user.setProperties({
          firstName: user.username || "Guest",
          lastName: "",
          email: user.email || "guest@example.com",
          phone: user.phone || "",
        });
      }
    } else {
      console.error("Freshchat widget not available.");
    }
  };

  return null; // No UI needed
};

export default FreshChat;
