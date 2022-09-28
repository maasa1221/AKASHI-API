import fetch from "node-fetch";

export async function akashiClient(response, type) {
  const BASE_URL = process.env.BASE_URL;
  const COMPANY_ID = process.env.COMPANY_ID;
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `${BASE_URL}${COMPANY_ID}/stamps?token=${API_KEY}&type=${type}`,
    {
      method: "POST"
    }
  ).catch(e => {
    console.error(e);
  });
  const data = await res.json();
  return response.status(200).json({ data });
}
