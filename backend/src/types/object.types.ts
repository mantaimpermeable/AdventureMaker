
export type User = {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    token?: string;
    createdAt: Date;
    lastLogin: Date;
};

export type Adventure = {
    id: number,
    userId: number,
    adventure: string,
    title: string,
    status: adventureStatus,
};
