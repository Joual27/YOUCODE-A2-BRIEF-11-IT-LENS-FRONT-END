import { Question } from "../../../shared/models";


export interface QuestionCreationModel {
    text : string , 
    type : string , 
    answerCount : number ,
    subchapterId : number
}

export interface QuestionApiResponse{
    status: number;
    data: {
      question : Question
    };
}

export interface DeleteQuestionApiResponse{
    status: number;
    data: {
      questionId : number
    };
}