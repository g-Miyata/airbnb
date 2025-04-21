import { Accommodation, AirbnbAPI } from '@/types/AirbnbData';

export async function fetchData(): Promise<AirbnbAPI> {
  try {
    const response = await fetch('https://web.codans.com.br/airbnb');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchDataBySlug(slug: string): Promise<Accommodation | null> {
  try {
    const data = await fetchData();
    const accommodation = data.accommodation.find((item) => item.slug === slug);
    return accommodation || null;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
