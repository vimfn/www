import { NextResponse } from "next/server";
import { getLatestFilm } from "./get-latest-film";

/**
 * A Route Handler fetching the latest film I watched from Letterboxd.
 */
export async function GET() {
  const film = await getLatestFilm();

  return film
    ? NextResponse.json(film)
    : new Response(undefined, { status: 500 });
}

export const runtime = "edge";

export const dynamic = "force-dynamic";
