import axios from 'axios';

export type Advertisement = {
    id: number;
    name: string;
    description: string;
    short_description: string;
    contract_type: string;
}

// Instead of using a hardcoded array, you can define a function to fetch the advertisements.
export async function fetchAdvertisements(): Promise<Advertisement[]> {
    try {
        const response = await axios.get('http://127.0.0.1:3333/api/advertisements');
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the advertisements:', error);
        return [];
    }
}
