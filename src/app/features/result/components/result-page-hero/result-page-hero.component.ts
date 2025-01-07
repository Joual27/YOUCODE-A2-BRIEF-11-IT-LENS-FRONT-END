import {Component, signal} from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-result-page-hero',
  imports: [],
  templateUrl: './result-page-hero.component.html',
  styleUrl: './result-page-hero.component.css'
})
export class ResultPageHeroComponent {
  editionId = signal<number>(0);

  constructor(route : ActivatedRoute) {
    this.editionId.set(Number(route.snapshot.paramMap.get("id")));
  }
}
