import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';
import { Survey } from '../../../../shared/models';

@Component({
  selector: 'app-home-hero',
  imports: [],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent implements OnInit{
  dataService = inject(DataService);
  surveys = signal<Survey[]>([]);

  ngOnInit() : void {
     this.dataService.getSurveys().subscribe({
        next : (res) => {
          this.surveys.set(res.data.surveys);
        },
        error : (err) => {
          console.log("err" + err);
          
        }
     })
  }
}
