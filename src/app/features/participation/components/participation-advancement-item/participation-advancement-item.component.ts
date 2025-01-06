import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-participation-advancement-item',
  imports: [CommonModule],
  templateUrl: './participation-advancement-item.component.html',
  styleUrl: './participation-advancement-item.component.css'
})
export class ParticipationAdvancementItemComponent {
  @Input() number !: string;
  @Input() title !: string;
  @Input() isCurrentPhase :boolean = true;
  @Input() isCompleted : boolean = false;

  getTitleClass(): string {
    return this.isCompleted || this.isCurrentPhase ? 'text-[#00A36C]' : 'text-[#000000]/50';
  }

  getCircleClass(): string {
    if (this.isCompleted) {
      return 'bg-[#00A36C] text-white';
    } else if (this.isCurrentPhase) {
      return 'border-[3px] border-[#00A36C] bg-[#00A36C] text-white';
    } else {
      return 'border-[3px] border-[#E5E7EB] bg-white text-[#9CA3AF]';
    }
  }

  getBarClass(isSecondBar: boolean = false): string {
    if (this.isCurrentPhase) {
      return isSecondBar ? 'bg-[#00A36C]/60' : 'bg-[#00A36C]';
    }
    else if(this.isCompleted){
      return isSecondBar ? 'bg-[#80bea4]/60' : 'bg-[#80bea4]';
    }
    else {
      return isSecondBar ? 'bg-[#E5E7EB]/20' : 'bg-[#E5E7EB]/40';
    }
  }
}
