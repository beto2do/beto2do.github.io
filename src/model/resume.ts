export interface Resume {
    name: string;
    shortName: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    languages: string[];
}

export interface Education {
    degree: string;
    university: string;
    location: string;
    startDate: string;
    endDate: string;
    courses: string[];
}

export interface Experience {
    company: string;
    location: string;
    projects: Project[];
}

export interface Project {
    name: string;
    startDate: string;
    endDate: string;
    title: string;
    responsibilities: string[];
    tools: string[];
}

export enum SkillLevel {
    EXPERT = "EXPERT",
    FAMILIAR = "FAMILIAR",

}

export interface Skill {
    name: string;
    level: SkillLevel;
}

