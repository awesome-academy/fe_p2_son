import { Package } from '@/types/Package';
import { NextResponse } from 'next/server';
import {
  DEFAULT_SORT_TYPE,
  DEFAULT_PRICE_MIN,
  DEFAULT_PRICE_MAX,
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  DATABASE_URL,
} from '@/constants/packages';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const sortType = searchParams.get('sortType') || DEFAULT_SORT_TYPE;
  const priceMin = Number(searchParams.get('priceMin') ?? DEFAULT_PRICE_MIN);
  const priceMax = Number(searchParams.get('priceMax') ?? DEFAULT_PRICE_MAX);
  const search = searchParams.get('search') || '';
  const where = searchParams.get('where') || '';
  const date = searchParams.get('date') || null;
  const page = Number(searchParams.get('page')) ?? DEFAULT_PAGE;
  const limit = Number(searchParams.get('limit')) ?? DEFAULT_LIMIT;

  try {
    const res = await fetch(`${DATABASE_URL}/packages`);
    if (!res.ok) {
      throw new Error(`Failed to fetch packages: ${res.statusText}`);
    }
    const initialPackages: Package[] = await res.json();

    let filteredAndSortedPackages = [...initialPackages];

    // Filter by price range
    filteredAndSortedPackages = filteredAndSortedPackages.filter(pkg =>
      pkg.price >= priceMin && pkg.price <= priceMax
    );

    // Filter by search query (title)
    if (search) {
      filteredAndSortedPackages = filteredAndSortedPackages.filter(pkg =>
        pkg.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by 'where' query (location)
    if (where) {
      filteredAndSortedPackages = filteredAndSortedPackages.filter(pkg =>
        pkg.location.toLowerCase().includes(where.toLowerCase())
      );
    }

    if (date) {
      filteredAndSortedPackages = filteredAndSortedPackages.filter(pkg =>
        new Date(pkg.deadline) < new Date(date)
      );
    }

    // Sort packages
    filteredAndSortedPackages.sort((a, b) => {
      switch (sortType) {
        case 'low-high':
          return a.price - b.price;
        case 'high-low':
          return b.price - a.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'date':
        default:
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
    });

    // Pagination
    const totalPages = Math.ceil(filteredAndSortedPackages.length / limit);
    const paginatedPackages = filteredAndSortedPackages.slice(
      (page - 1) * limit,
      page * limit
    );

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      packages: paginatedPackages,
      totalPages,
      currentPage: page,
      totalItems: filteredAndSortedPackages.length,
    });
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { message: 'Failed to fetch packages', error: (error as Error).message },
      { status: 500 }
    );
  }
}
