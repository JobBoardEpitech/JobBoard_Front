
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

export const users = [
    {
        id: 1,
        firstName: "Jean",
        user_role: "Admin",
        email: "jean@email.com",
        name: "Dupont",
        phone: "0123456789",
        address: "12 Rue de la Paix, Paris",
        roleId: 101
    },
    {
        id: 2,
        firstName: "Marie",
        user_role: "User",
        email: "marie@email.com",
        name: "Martin",
        phone: "9876543210",
        address: "45 Rue Victor Hugo, Lyon",
        roleId: 102
    },
    {
        id: 3,
        firstName: "Paul",
        user_role: "Moderator",
        email: "paul@email.com",
        name: "Leclerc",
        phone: "1234567890",
        address: "67 Boulevard Saint-Michel, Paris",
        roleId: 103
    },
    {
        id: 4,
        firstName: "Nathalie",
        user_role: "User",
        email: "nathalie@email.com",
        name: "Moreau",
        phone: "0123456789",
        address: "89 Avenue des Ternes, Paris",
        roleId: 104
    },
    {
        id: 5,
        firstName: "Olivier",
        user_role: "Admin",
        email: "olivier@email.com",
        name: "Dubois",
        phone: "9876543210",
        address: "34 Rue de la République, Marseille",
        roleId: 105
    },
    {
        id: 6,
        firstName: "Claire",
        user_role: "User",
        email: "claire@email.com",
        name: "Bernard",
        phone: "1234567890",
        address: "76 Rue de Belleville, Paris",
        roleId: 106
    },
    {
        id: 7,
        firstName: "Julien",
        user_role: "Moderator",
        email: "julien@email.com",
        name: "Lefevre",
        phone: "0123456789",
        address: "53 Avenue de la Liberté, Lille",
        roleId: 107
    },
    {
        id: 8,
        firstName: "Alice",
        user_role: "User",
        email: "alice@email.com",
        name: "Mercier",
        phone: "9876543210",
        address: "91 Rue du Faubourg Saint-Antoine, Paris",
        roleId: 108
    }
];