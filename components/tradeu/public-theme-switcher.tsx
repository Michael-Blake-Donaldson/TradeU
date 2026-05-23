"use client";

import { useEffect, useState } from "react";

type PublicTheme = {
  id: string;
  label: string;
  primary: string;
  primaryStrong: string;
  secondary: string;
  heroWash: string;
  shadowColor: string;
};

const PUBLIC_THEMES: PublicTheme[] = [
  {
    id: "campus-blue",
    label: "Campus Blue",
    primary: "#2563EB",
    primaryStrong: "#1D4ED8",
    secondary: "#38BDF8",
    heroWash: "#E0F2FE",
    shadowColor: "rgba(37, 99, 235, 0.22)",
  },
  {
    id: "studio-coral",
    label: "Studio Coral",
    primary: "#F43F5E",
    primaryStrong: "#E11D48",
    secondary: "#FB7185",
    heroWash: "#FFE4E6",
    shadowColor: "rgba(244, 63, 94, 0.2)",
  },
  {
    id: "growth-green",
    label: "Growth Green",
    primary: "#059669",
    primaryStrong: "#047857",
    secondary: "#34D399",
    heroWash: "#D1FAE5",
    shadowColor: "rgba(5, 150, 105, 0.2)",
  },
  {
    id: "creator-orange",
    label: "Creator Orange",
    primary: "#EA580C",
    primaryStrong: "#C2410C",
    secondary: "#FB923C",
    heroWash: "#FFEDD5",
    shadowColor: "rgba(234, 88, 12, 0.2)",
  },
];

const STORAGE_KEY = "tradeu-public-theme";

function applyTheme(theme: PublicTheme) {
  const root = document.documentElement;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-strong", theme.primaryStrong);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--hero-wash", theme.heroWash);
  root.style.setProperty("--shadow-color", theme.shadowColor);
}

export function PublicThemeSwitcher() {
  const [activeThemeId, setActiveThemeId] = useState(() => {
    if (typeof window === "undefined") {
      return PUBLIC_THEMES[0].id;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    return PUBLIC_THEMES.find((theme) => theme.id === saved)?.id ?? PUBLIC_THEMES[0].id;
  });

  useEffect(() => {
    const activeTheme =
      PUBLIC_THEMES.find((theme) => theme.id === activeThemeId) ?? PUBLIC_THEMES[0];

    applyTheme(activeTheme);
  }, [activeThemeId]);

  const handleSelect = (theme: PublicTheme) => {
    setActiveThemeId(theme.id);
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme.id);
  };

  return (
    <div className="hidden items-center lg:flex">
      <label htmlFor="theme-picker" className="sr-only">
        Choose theme vibe
      </label>
      <select
        id="theme-picker"
        value={activeThemeId}
        onChange={(event) => {
          const theme = PUBLIC_THEMES.find((item) => item.id === event.target.value);
          if (theme) {
            handleSelect(theme);
          }
        }}
        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:border-primary focus:outline-none"
      >
        {PUBLIC_THEMES.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
}