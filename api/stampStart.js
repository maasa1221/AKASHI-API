import { akashiClient } from "../functions/akashi.js";

export default async function handler(_request, response) {
  await akashiClient(11);
}
