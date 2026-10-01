import { NextResponse } from 'next/server';
import { getJobs } from '../../../lib/jobs';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const jobs = await getJobs();
    return NextResponse.json({ success: true, jobs }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Careers listing unavailable:', error.message);
    return NextResponse.json({ success: false, jobs: [], message: 'Job listings are temporarily unavailable. Please contact hr@csharptek.com.' }, { status: process.env.DATABASE_URL ? 500 : 503, headers: { 'Cache-Control': 'no-store' } });
  }
}
