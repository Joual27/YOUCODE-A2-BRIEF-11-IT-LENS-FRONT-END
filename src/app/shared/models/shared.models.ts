
export interface ApiResponse {
    status: number;
    data: {
      surveys: Survey[];
    };
}

export interface Owner{
  id : number;
  name : string
}

export interface Question {
  id: number;
  text: string;
  type: 'SINGLE_CHOICE' | 'MULTI_CHOICE';
  answerCount: number;
  answers : Answer[]
}

export interface TreeItem {
  id: number;
  title: string;
  subchapters?: TreeItem[];
  questions : Question[];
}

export type Chapter = TreeItem;
export type Subchapter = TreeItem;

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

export interface Answer{
  id : number;
  text : string ;
  selectionCount : number
}

export interface ChapterChosenEventData{
  questions : Question[],
  subchapterId : number
}
