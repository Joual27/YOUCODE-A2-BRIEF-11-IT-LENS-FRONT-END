import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeItem, Question } from '../../../../shared/models';

@Component({
  selector: 'app-chapter-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-tree.component.html',
  styleUrls: ['./chapter-tree.component.css']
})
export class ChapterTreeComponent {
  @Input() items: TreeItem[] | undefined = [];
  @Input() level: number = 0;

  trackByFn(index: number, item: TreeItem) {
    return item.id;
  }

  getIndentClass(level: number): string {
    return level === 0 ? '' : 'ml-4';
  }

  hasChildren(item: TreeItem): boolean {
    return !!(item.subchapters?.length || item.questions?.length);
  }

  onQuestionClick(question: Question) {
    console.log('Question clicked:', question);
  }
}