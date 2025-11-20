"use server";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const getDataFake = async (endpoint, locale, options) => {
  const url = `${baseURL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    "accept-language": locale,
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
