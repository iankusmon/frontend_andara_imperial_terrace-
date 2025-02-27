"use client"

import { useEffect, useState } from "react";

const FreshChat = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setCustomer(storedUser);
    }

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
  }, []);

  const initializeFreshChat = (user) => {
    if (window.fcWidget) {
      console.log("Initializing Freshchat...");

      window.fcWidget.init({
        token: "eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmcmVzaGNoYXQiLCJhdWQiOiJmcmVzaGNoYXQiLCJpYXQiOjE3NDA2NDAxNDcsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGFjY291bnQ6cmVhZCBkYXNoYm9hcmQ6cmVhZCB1c2VyOnJlYWQgdXNlcjpjcmVhdGUgdXNlcjp1cGRhdGUgdXNlcjpkZWxldGUgb3V0Ym91bmRtZXNzYWdlOnNlbmQgb3V0Ym91bmRtZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6bWVzc2FnZTpzZW5kIG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6dGVtcGxhdGU6Y3JlYXRlIG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpnZXQgZmlsdGVyaW5ib3g6cmVhZCBmaWx0ZXJpbmJveDpjb3VudDpyZWFkIHJvbGU6cmVhZCBpbWFnZTp1cGxvYWQiLCJ0eXAiOiJCZWFyZXIiLCJjbGllbnRJZCI6ImZjLTliM2M1MmUxLWEyM2YtNDM4NS04NjA3LTU0ODc1ZTc2ZjkwOSIsInN1YiI6IjY2MTQzNzZhLTRmZGEtNGQ3MC1iMmM3LTI3OWY0YWZmNzk0ZCIsImp0aSI6IjcxMzI3OGVhLTVlMzktNGM5YS04ZDg5LTJjNDQ0Nzk5NjZlOCIsImV4cCI6MjA1NjE3Mjk0N30.xDGN-TiUnwbR6vv3LbVQbo_jjz3DVmnGJyCuj4GTPvk",
        host: "https://wchat.freshchat.com",
      });

      window.fcWidget.on("widget:loaded", () => {
        console.log("Freshchat Widget Loaded!");
        window.fcWidget.show(); // Memastikan tombol chat muncul
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

  return null;
};

export default FreshChat;
