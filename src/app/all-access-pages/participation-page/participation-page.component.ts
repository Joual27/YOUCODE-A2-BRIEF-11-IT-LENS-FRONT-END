import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ParticipationLayoutComponent } from "../../features/participation/components/participation-layout/participation-layout.component";
import { ActivatedRoute } from '@angular/router';
import { Edition, Subchapter, Survey } from '../../shared/models';
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
  subchaptersWithAnswers = signal<Subchapter[]>([]);


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
          this.editionData.set(res);
          const filteredSubchapters = this.filterSubchaptersWithQuestions(res.chapters || []);
          this.subchaptersWithAnswers.set(filteredSubchapters);
        }
      },
      error: (err)  => {
        console.log("err" + err);
      }
    })
  }


  filterSubchaptersWithQuestions(chapters: Subchapter[]): Subchapter[] {
    let result: Subchapter[] = [];

    chapters.forEach(chapter => {
      if (chapter.subchapters && chapter.subchapters.length > 0) {
        result = result.concat(this.filterSubchaptersWithQuestions(chapter.subchapters));
      } else if (chapter.questions && chapter.questions.length > 0) {
        result.push(chapter);
      }
    });

    return result;
  }
}
