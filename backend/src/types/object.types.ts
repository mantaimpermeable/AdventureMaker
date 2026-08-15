
export type User = {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    lastLogin: Date;
};

//TODO an adventure type