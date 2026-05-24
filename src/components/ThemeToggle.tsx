"use client";

import React, { useEffect, useState } from "react";
import { Row, useTheme } from "@once-ui-system/core";
import styles from "./ThemeToggle.module.scss";

interface ThemeConfig {
  id: string;
  label: string;
  attrs: Record<string, string>;
  swatch: string;
}

const THEMES: ThemeConfig[] = [
  {
    id: "light",
    label: "Light",
    attrs: {
      "data-theme": "light",
      "data-neutral": "gray",
      "data-brand": "cyan",
      "data-accent": "red",
      "data-solid": "contrast",
      "data-solid-style": "flat",
      "data-border": "playful",
      "data-surface": "translucent",
    },
    swatch: "#ffffff",
  },
  {
    id: "dark",
    label: "Dark",
    attrs: {
      "data-theme": "dark",
      "data-neutral": "gray",
      "data-brand": "cyan",
      "data-accent": "red",
      "data-solid": "contrast",
      "data-solid-style": "flat",
      "data-border": "playful",
      "data-surface": "translucent",
    },
    swatch: "#111827",
  },
  {
    id: "warm",
    label: "Warm",
    attrs: {
      "data-theme": "light",
      "data-neutral": "sand",
      "data-brand": "orange",
      "data-accent": "moss",
      "data-solid": "contrast",
      "data-solid-style": "flat",
      "data-border": "rounded",
      "data-surface": "filled",
    },
    swatch: "#e8d5b7",
  },
  {
    id: "midnight",
    label: "Midnight",
    attrs: {
      "data-theme": "dark",
      "data-neutral": "slate",
      "data-brand": "violet",
      "data-accent": "aqua",
      "data-solid": "color",
      "data-solid-style": "plastic",
      "data-border": "playful",
      "data-surface": "translucent",
    },
    swatch: "#1a0a2e",
  },
];

const PERSIST_KEYS = [
  "data-theme",
  "data-neutral",
  "data-brand",
  "data-accent",
  "data-solid",
  "data-solid-style",
  "data-border",
  "data-surface",
] as const;

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState("light");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme-preset");
    if (saved && THEMES.find((t) => t.id === saved)) {
      setActiveId(saved);
    } else {
      // Detect the current applied theme from DOM
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const currentBrand = document.documentElement.getAttribute("data-brand");
      if (currentTheme === "dark" && currentBrand === "violet") {
        setActiveId("midnight");
      } else if (currentTheme === "light" && currentBrand === "orange") {
        setActiveId("warm");
      } else if (currentTheme === "dark") {
        setActiveId("dark");
      } else {
        setActiveId("light");
      }
    }
  }, []);

  const applyTheme = (theme: ThemeConfig) => {
    const root = document.documentElement;
    PERSIST_KEYS.forEach((key) => {
      const value = theme.attrs[key];
      root.setAttribute(key, value);
      localStorage.setItem(key, value);
    });
    // Sync Once UI's internal theme state
    setTheme(theme.attrs["data-theme"] as "light" | "dark");
    localStorage.setItem("portfolio-theme-preset", theme.id);
    setActiveId(theme.id);
  };

  if (!mounted) return null;

  return (
    <Row gap="4" vertical="center">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => applyTheme(t)}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
          className={`${styles.swatch} ${activeId === t.id ? styles.active : ""}`}
          style={{ "--swatch-color": t.swatch } as React.CSSProperties}
        />
      ))}
    </Row>
  );
};
