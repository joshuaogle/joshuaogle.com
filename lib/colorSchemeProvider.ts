import { useEffect, useState } from "react";


export const initColorScheme = () => {
  const currentColorScheme = getColorScheme();
  if (!!currentColorScheme) {
    console.log("Init found a colorScheme (" + currentColorScheme + "), aligning to that");
    setColorScheme(currentColorScheme);
  } else {
    console.log("Init could not find a colorScheme, defaulting to dark");
    setColorScheme("dark");
  }
}

export const getColorScheme = () => {
  if (typeof window !== "undefined") {
    const userPrefers = window.document.documentElement.getAttribute("data-prefers-color-scheme");
    const OSPrefers = window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
    console.log("GET userPrefers: " + userPrefers + " || OSPrefers: " + OSPrefers);
    return userPrefers || OSPrefers;
  }
}

export const setColorScheme = (colorScheme) => {
  console.log("SET " + colorScheme);
  if (typeof window !== "undefined") {
    window.document.documentElement.setAttribute("data-prefers-color-scheme", colorScheme);
    localStorage.setItem("colorScheme", colorScheme);
  }
}

export const switchColorScheme = () => {
  const currentColorScheme = getColorScheme();
  setColorScheme(currentColorScheme === "dark" ? "light" : "dark");
}