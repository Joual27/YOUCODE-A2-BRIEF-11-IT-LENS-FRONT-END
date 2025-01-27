import { Routes } from '@angular/router';
import { HomePageComponent } from './all-access-pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path : "" ,
        component : HomePageComponent
    },
    {
        path : "surveys",
        loadChildren : () =>
            import("./features/survey/survey.routes")
                .then(m => m.SURVEY_ROUTES)
    },
    {
        path : "participate",
        loadChildren : () =>
            import("./features/participation/participation.routes")
               .then(m => m.PARTICIPATION_ROUTES)
    },
    {
        path : "results",
        loadChildren : () =>
            import("./features/result/result.routes")
               .then(m => m.RESULT_ROUTES)
    }

];
