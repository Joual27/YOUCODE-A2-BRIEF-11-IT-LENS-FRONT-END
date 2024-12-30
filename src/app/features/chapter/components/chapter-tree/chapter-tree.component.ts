import { ChangeDetectorRef, Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, TreeItem } from '../../../../shared/models';

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
  @Output() chapterChosenEvent = new EventEmitter<Question[]>();

  trackByFn(index: number, item: TreeItem) {
    return item.id;
  }

  getIndentClass(level: number): string {
    return level === 0 ? '' : 'ml-4';
  }

  hasSubchapters(item: TreeItem): boolean {
    return !!item.subchapters?.length;
  }

  onChapterClick(item: TreeItem) {
    this.chapterChosenEvent.emit(item.questions);
  }
}
