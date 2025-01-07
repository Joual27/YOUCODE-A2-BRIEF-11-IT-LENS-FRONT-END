import { Component } from '@angular/core';
import {
  ResultPageLayoutComponent
} from '../../features/result/components/result-page-layout/result-page-layout.component';

@Component({
  selector: 'app-result-page',
  imports: [
    ResultPageLayoutComponent
  ],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent {
}
