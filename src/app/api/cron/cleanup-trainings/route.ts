import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/writeClient';
import { getTodayInAmsterdam } from '@/sanity/lib/today';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.SANITY_API_TOKEN) {
    return NextResponse.json(
      { error: 'Missing SANITY_API_TOKEN on server' },
      { status: 500 },
    );
  }

  const today = getTodayInAmsterdam();

  const pastTrainings = await writeClient.fetch<{ _id: string }[]>(
    `*[_type == "training" && date < $today]{ _id }`,
    { today },
  );

  if (pastTrainings.length === 0) {
    return NextResponse.json({ ok: true, deleted: 0 });
  }

  const transaction = writeClient.transaction();
  for (const { _id } of pastTrainings) {
    transaction.delete(_id);
  }
  await transaction.commit();

  return NextResponse.json({ ok: true, deleted: pastTrainings.length });
}
