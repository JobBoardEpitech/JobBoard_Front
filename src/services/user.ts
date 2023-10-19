import axios from "axios";

export type User = {
    id: number
    email: string
    firstName: string
    name: string
    phone: string
    address: string
    roleId: number
    user_role: string
}

export interface UserUpdate {
    email: string;
    first_name: string;
    name: string;
    phone: string;
    address: string;
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

export async function updateUser(userId: number, updatedUserData: UserUpdate): Promise<any> { // Notez le changement de type de retour
    try {
        console.log("Updating user with ID:", userId);
        const response = await axios.put(`http://127.0.0.1:3333/api/users/${userId}`, updatedUserData);
        console.log('Utilisateur mis à jour avec succès.', response.data);
        return response.data; // Renvoyez la réponse
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
        throw error;
    }
}


export async function getUserById(userId: number): Promise<UserUpdate> {
    try {
        const response = await axios.get(`http://127.0.0.1:3333/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        throw error;
    }
}