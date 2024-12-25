import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "" ,
        redirectTo : "surveys",
        pathMatch : "full"
    },
    {
        path : "surveys",
        loadChildren : () => 
            import("./features/survey/survey.routes")
                .then(m => m.SURVEY_ROUTES)
    }
];