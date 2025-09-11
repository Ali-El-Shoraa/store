"use server";

import { getLocale } from "next-intl/server";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getData = async (endpoint, options) => {
  const locale = await getLocale();

  const url = `${baseURL}/${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    // lang: lang,
    lang: locale,
    cache: "no-store",
    ...options?.headers,
  };

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
