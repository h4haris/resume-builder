export interface Personal {
    profileImage?: string;
    firstName?: string;
    lastName?: string;
    profession?: string;
    address?: string;
    email?: string;
    phone?: string;
}

export interface Social {
    name?: string;
    link?: string;
    icon?: string;
}

export interface Education {
    title?: string;
    studies?: string;
    year?: string;
}

export interface Experience {
    title?: string;
    company?: string;
    description?: string;
}

export interface Certificate {
    title?: string;
    description?: string;
}

export interface Reference {
    title?: string;
    subtitle?: string;
    phone?: string;
    email?: string;
}

export interface Interest {
    name: string;
    icon: string;
}

export interface Resume {
    personal: Personal;
    social: Social[];
    profile: string;
    education: Education[];
    languages: string[];
    experience: Experience[];
    skills: string[];
    certificates: Certificate[];
    references: Reference[];
    interests: Interest[];
}

export interface InterestData {
    data: Interest[];
}

export interface SocialData {
    data: Social[];
}