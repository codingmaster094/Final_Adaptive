"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON }) {
  useEffect(() => {
    if (!schemaJSON) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "rank-math-schema";
    script.text = schemaJSON;

    // Remove old one if exists
    const oldScript = document.getElementById("rank-math-schema");
    if (oldScript) oldScript.remove();

    document.head.appendChild(script);
  }, [schemaJSON]);

  return null;
}
