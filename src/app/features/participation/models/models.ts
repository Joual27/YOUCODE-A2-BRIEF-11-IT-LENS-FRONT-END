import {Edition} from '../../../shared/models';


export interface AnswerToQuestion{
  questionId : number | undefined,
  answerId : number
}

export interface ParticipationApiResponse{
  status : number
}

export interface EditionApiResponse{
  status : number,
  data : {
    edition : Edition
  }
}

export interface AnswerToMultipleQuestions {
  responses: Response[];
}

export interface Response {
  questionId: number;
  answers: Answer[];
}

export interface Answer {
  answerId: number;
}
