import { NextResponse } from "next/server";
import { getLatestSong } from "./get-latest-song";

export const runtime = "edge";
/**
 * A Route Handler fetching the latest song I listened to from Last.fm.
 */
export async function GET() {
  const song = await getLatestSong();

  return song
    ? NextResponse.json(song)
    : new Response(undefined, { status: 500 });
}

export const dynamic = "force-dynamic";
