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
            console.error('There was an error fetching the companies:', error);
            return [];
        }
    }
    static async updateCompany(companyId: number, companyData: {name: string, description: string}): Promise<void> {
        try {
            await axios.put(`http://127.0.0.1:3333/api/companies/${companyId}`, companyData);
        } catch (error) {
            console.error('There was an error updating the company:', error);
            throw error;
        }
    }

    static async getCompanyById(companyId: number): Promise<Company> {
        try {
            const response = await axios.get(`http://127.0.0.1:3333/api/companies/${companyId}`);
            return response.data;
        } catch (error) {
            console.error('There was an error fetching the company:', error);
            throw error;
        }
    }
}