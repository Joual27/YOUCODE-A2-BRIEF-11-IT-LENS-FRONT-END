
export interface Owner{
    id : number;
    name : string
}

export interface Question {
    id: number;
    text: string;
    type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
    answerCount: number;
}

export interface Subchapter {
    id: number;
    title: string;
    subchapters: Subchapter[];
    questions: Question[];
}

export interface Chapter {
    id: number;
    title: string;
    subchapters: Subchapter[];
}

export interface Edition {
    id: number;
    creationDate: string;
    startDate: string;
    chapters: Chapter[];
}

export interface Survey {
    id: number;
    title: string;
    description: string;
    owner: Owner;
    editions: Edition[];
}
