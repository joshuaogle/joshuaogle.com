import { useEffect, useState } from "react";

export const initColorScheme = () => {
  const currentColorScheme = getColorScheme();
  if (!!currentColorScheme) {
    setColorScheme(currentColorScheme);
  } else {
    setColorScheme("dark");
  }
}

export const getColorScheme = () => {
  if (typeof window !== "undefined") {
    const userPrefers = window.document.documentElement.getAttribute("data-prefers-color-scheme");
    const OSPrefers = window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
    return userPrefers || OSPrefers;
  }
}

export const setColorScheme = (colorScheme) => {
  if (typeof window !== "undefined") {
    window.document.documentElement.setAttribute("data-prefers-color-scheme", colorScheme);
    localStorage.setItem("colorScheme", colorScheme);
  }
}

export const switchColorScheme = () => {
  const currentColorScheme = getColorScheme();
  setColorScheme(currentColorScheme === "dark" ? "light" : "dark");
}