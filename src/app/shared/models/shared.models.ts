import { Survey } from "../../features/survey/models";

export interface ApiResponse {
    status: number;
    data: {
      surveys: Survey[];
    };
}