interface Company {
    id: number;
    name: string;
    description: string;
    website: string;
    logo: string;
    created_at: string;
    updated_at: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

interface Job {
    id: number;
    company_id: number;
    user_id: number;
    title: string;
    description: string;
    location: string;
    salary: number;
    created_at: string;
    updated_at: string;
    company: Company;
    user: User;
}


