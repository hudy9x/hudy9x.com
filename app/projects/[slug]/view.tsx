"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {

  useEffect(() => {
    const abortController = new AbortController()

    fetch("/api/view-counter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: abortController.signal,
      body: JSON.stringify({ slug }),
    });

    return () => {
      abortController.abort()
    }
  }, [slug]);

  return null;
};

