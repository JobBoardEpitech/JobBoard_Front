import axios from 'axios';

export type Company = {
    id: number;
    description: string;
    name: string;
}

export default class CompaniesService {
    static async fetchCompanies(): Promise<Company[]> {
        try {
            const response = await axios.get('http://127.0.0.1:3333/api/companies');
            return response.data;
        } catch (error) {
            console.error('There was an error fetching the advertisements:', error);
            return [];
        }
    }
}