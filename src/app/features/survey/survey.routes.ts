import { Routes } from "@angular/router";


export const SURVEY_ROUTES : Routes = [
    {
        path : "" ,
        loadComponent : () => 
            import("./pages/all-surveys-page/all-surveys-page.component")
                .then(m => m.AllSurveysPageComponent)
    },
    {
        path : ":id",
        loadComponent : () => 
            import("./pages/single-survey-details-page/single-survey-details-page.component")
                .then(m => m.SingleSurveyDetailsPageComponent)
    }

]