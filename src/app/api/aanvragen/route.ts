import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

const VALID_TYPES = ["contact", "proefles", "mini-voetbalschool", "inschrijving"] as const;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const type = body?.type as string | undefined;
    if (!type || !VALID_TYPES.includes(type as (typeof VALID_TYPES)[number])) {
      return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });
    }

    if (!process.env.SANITY_API_TOKEN) {
      return NextResponse.json(
        { ok: false, error: "Missing SANITY_API_TOKEN on server" },
        { status: 500 },
      );
    }

    const doc = {
      _type: "aanvraag",
      type,
      pakket: typeof body?.pakket === "string" ? body.pakket : undefined,
      subject: typeof body?.subject === "string" ? body.subject : undefined,
      name: typeof body?.name === "string" ? body.name : undefined,
      email: typeof body?.email === "string" ? body.email : undefined,
      phone: typeof body?.phone === "string" ? body.phone : undefined,
      message: typeof body?.message === "string" ? body.message : undefined,
      createdAt: new Date().toISOString(),
    };

    const created = await writeClient.create(doc);
    return NextResponse.json({ ok: true, id: created._id });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to save aanvraag" }, { status: 500 });
  }
}
