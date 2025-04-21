import { AirbnbAPI } from '@/types/AirbnbData';

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
