import { NextResponse } from 'next/server';
import { getJobById } from '../../../../lib/jobs';

export const runtime = 'nodejs';

export async function GET(_request, { params }) {
  const { id } = await params;
  try {
    const job = await getJobById(id);
    if (!job) return NextResponse.json({ success: false, message: 'This role is no longer available.' }, { status: 404, headers: { 'Cache-Control': 'no-store' } });
    return NextResponse.json({ success: true, job }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Job detail unavailable:', error.message);
    return NextResponse.json({ success: false, message: 'Job listings are temporarily unavailable.' }, { status: process.env.DATABASE_URL ? 500 : 503, headers: { 'Cache-Control': 'no-store' } });
  }
}
