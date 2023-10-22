import axios from "axios";

export type UserRole =  {
    id: number
    name: string
    created_at: string
    updated_at: string
}

export default class UserRolesService  {
    static async getUserRoles(): Promise<UserRole[]> {
        try {
            const response = await axios.get('http://127.0.0.1:3333/api/roles');
            return response.data;
        } catch (error) {
            console.error('There was an error fetching the user roles:', error);
            return [];
        }
    }
}