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
    }
];