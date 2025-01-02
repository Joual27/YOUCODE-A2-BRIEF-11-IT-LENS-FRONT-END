import { Answer } from "../../../shared/models"

export interface AnswerCreationModel{
    text : string , 
    selectionCount : number,
    questionId : number
}

export interface AnswerApiResponse{
    status : number , 
    data : {
        answer : Answer
    }
}

export interface AnswerDeleteApiResponse{
    status : number , 
    data : {
        answerId : number
    }
}
