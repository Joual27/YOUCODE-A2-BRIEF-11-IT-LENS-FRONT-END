import { Routes } from "@angular/router"


export const PARTICIPATION_ROUTES : Routes = [
    {
        "path" : "edition/:id",
        loadComponent : () => 
            import("./../../all-access-pages/participation-page/participation-page.component")
              .then(m => m.ParticipationPageComponent)
    }
]

