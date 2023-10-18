import axios from 'axios';

type Credentials = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
    user: {
        id: number;
        email: string;
        first_name: string;
        name: string;
        phone: string;
        address: string;
        role_id: number;

    }
};

type RegisterCredentials = {
    email: string;
    password: string;
    firstName: string;
    name: string;
    phone: string;
    address?: string;
    role_id?: number;
};

export async function login(credentials: Credentials): Promise<LoginResponse> {
    try {
        const response = await axios.post('http://127.0.0.1:3333/api/login', credentials);

        const { user } = response.data;
        console.log(user)
        console.log(JSON.stringify(user))
        localStorage.setItem('user_info', JSON.stringify(user));

        return response.data;
    } catch (error) {
        console.error('Erreur de connexion:', error);
        throw error;
    }
}

export async function logout(token: string): Promise<void> {
    try {
        await axios.post('http://127.0.0.1:3333/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        localStorage.removeItem('auth_token');
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        throw error;
    }
}

export async function register(credentials: RegisterCredentials): Promise<LoginResponse> {
    try {
        const response = await axios.post('http://127.0.0.1:3333/api/register', credentials);

        const { user } = response.data;
        localStorage.setItem('user_info', JSON.stringify(user));

        return response.data;
    } catch (error) {
        console.error('Erreur d’inscription:', error);
        throw error;
    }
}