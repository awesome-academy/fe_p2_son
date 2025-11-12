import { Package } from '@/types/Package';
import { NextResponse } from 'next/server';
import { DATABASE_URL } from '@/constants/packages';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const res = await fetch(`${DATABASE_URL}/packages/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch package id ${id}: ${res.statusText}`);
    }
    const packageData: Package = await res.json();
    return NextResponse.json(packageData, { status: 200 });
  } catch (error) {
    console.error('Error fetching package id:', error);
    return NextResponse.json(
      { message: 'Failed to fetch package', error: (error as Error).message },
      { status: 404 }
    );
  }
}
