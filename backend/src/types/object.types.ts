
export type User = {
    id: number;
    username: string;
    role: UserRole;
    token?: string;
    createdAt: Date;
    lastLogin: Date;
};

export type RegisterUserData = {
    username: string,
    password: string,
}

export type Adventure = {
    id: number,
    userId: number,
    adventure: string,
    title: string,
    status: adventureStatus,
};
