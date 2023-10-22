import axios from 'axios';

export type Advertisement = {
    id: number;
    name: string;
    description: string;
    short_description: string;
    contract_type: string;
    userAlreadyApplied: boolean
}

// Instead of using a hardcoded array, you can define a function to fetch the advertisements.
export async function fetchAdvertisements(): Promise<Advertisement[]> {
    try {
        const token = localStorage.getItem('auth_token')

        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const response = await axios.get('http://127.0.0.1:3333/api/advertisements', { headers });
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

export async function getAdvertisementById(adId: number): Promise<Advertisement> {
    try {
        const response = await axios.get(`http://127.0.0.1:3333/api/advertisements/${adId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'annonce:', error);
        throw error;
    }
}

export async function updateAdvertisement(adId: number, updatedAdData: Advertisement): Promise<any> {
    try {
        console.log("Updating advertisement with ID:", adId);
        const response = await axios.put(`http://127.0.0.1:3333/api/advertisements/${adId}`, updatedAdData);
        console.log('Annonce mise à jour avec succès.', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'annonce:', error);
        throw error;
    }
}


