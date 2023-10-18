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

export async function createAdvertisement(advertisement: Partial<Advertisement>): Promise<any> {
    try {
        const response = await axios.post('http://127.0.0.1:3333/api/advertisements', advertisement);
        if (!response.data || response.status < 200 || response.status >= 300) {
            throw new Error("Réponse non valide du serveur.");
        }
        return response;
    } catch (error) {
        console.error('Erreur lors de la création de l annonce :', error);
        throw error;
    }
}


