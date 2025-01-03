import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ParticipationLayoutComponent } from "../../features/participation/components/participation-layout/participation-layout.component";
import { ActivatedRoute } from '@angular/router';
import { Edition, Survey } from '../../shared/models';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-participation-page',
  imports: [ParticipationLayoutComponent],
  templateUrl: './participation-page.component.html',
  styleUrl: './participation-page.component.css'
})
export class ParticipationPageComponent implements OnInit{
  editionId = signal<number>(0);
  editionData = signal<Edition | null>(null)
  dataService = inject(DataService);

  constructor(private route : ActivatedRoute){
    this.editionId.set(Number(route.snapshot.paramMap.get('id')));
  }

  ngOnInit(): void {
     this.loadData();
  }

  loadData(){
    this.dataService.getEditionData(this.editionId()).subscribe({
      next : (res) => {
        if(res){
          this.editionData.set(res)
        }
      },
      error: (err)  => {
        console.log("err" + err); 
      }
    })
  }
}
