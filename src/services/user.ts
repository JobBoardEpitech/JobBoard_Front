import axios from "axios";

export type User = {
    id: number
    email: string
    first_name: string
    name: string
    phone: string
    address: string
    roleId: number
    user_role: string
}

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await axios.get('http://127.0.0.1:3333/api/users');
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the advertisements:', error);
        return [];
    }
}