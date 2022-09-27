import fetch from "node-fetch";

const BASE_URL = "https://atnd.ak4.jp/api/cooperation/";
const COMPANY_ID = "pkshatech";
const API_KEY = "8cd303a8-272e-413d-8ce6-d7a9e83de2ec";

(async (type = 11) => {
  const res = await fetch(
    `${BASE_URL}${COMPANY_ID}/stamps?token=${API_KEY}&type=${type}`,
    {
      method: "POST"
    }
  ).catch(e => {
    console.error(e);
  });
  console.log(await res.json());
})();
