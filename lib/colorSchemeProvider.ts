import { useEffect, useState } from "react";

function colorSchemeProvider() {
  const [oldColorScheme, setColorScheme] = useState(
    typeof window !== "undefined" ? localStorage.colorScheme : "dark"
  );
  console.log("old: " + oldColorScheme);
  const newColorScheme = oldColorScheme === "dark" ? "light" : "dark";
  console.log("new: " + newColorScheme);


  useEffect(() => {
    const root = window.document.documentElement;

    root.setAttribute("data-prefers-color-scheme", newColorScheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("colorScheme", newColorScheme);
    }
  }, [newColorScheme]);

  return [oldColorScheme, setColorScheme];
}

export default colorSchemeProvider;