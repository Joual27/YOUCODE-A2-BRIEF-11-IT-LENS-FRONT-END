import {Routes} from '@angular/router';

export const RESULT_ROUTES : Routes = [
  {
    "path" : "edition/:id",
    loadComponent : () =>
      import("./../../all-access-pages/result-page/result-page.component")
        .then(m => m.ResultPageComponent)
  }
]
