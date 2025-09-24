"use server";

import { getLocale } from "next-intl/server";

const baseURL = "http://localhost:3000/";

export const getDataFake = async (endpoint, options) => {
  const locale = await getLocale();
  console.log("locale: ", locale);
  const url = `${baseURL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    // lang: lang,
    "accept-language": locale,
    // cache: "no-store",
    ...options?.headers,
  };

  const config = {
    ...options,
    headers,
  };

  //
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
