import { Component, EventEmitter, inject, Input, OnInit, Output, WritableSignal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerCreationModel } from '../../models/models';
import { AnswerService } from '../../services/answer-service.service';
import { Answer } from '../../../../shared/models';

@Component({
  selector: 'app-answer-table-creation-row',
  imports: [ReactiveFormsModule],
  templateUrl: './answer-table-creation-row.component.html',
  styleUrl: './answer-table-creation-row.component.css'
})
export class AnswerTableCreationRowComponent implements OnInit{
  answerForm !: FormGroup;
  answerService = inject(AnswerService);
  @Input() activeQuestionId !: WritableSignal<number>;
  @Output() answerCreated = new EventEmitter<Answer>;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.answerForm = this.fb.group({
      text : ["" , [Validators.required , Validators.minLength(3)]]
    })
  }

  handleSubmit() : void{
     const answerToCreate : AnswerCreationModel = {
       text : this.getAnswerText(),
       selectionCount : 0,
       questionId : this.activeQuestionId()
     }
     this.handleAnswerCreation(answerToCreate);
  }
  getAnswerText() : string{
    return this.answerForm.get("text")?.value ?? '';
  }

  handleAnswerCreation(answer : AnswerCreationModel) : void{
      this.answerService.createAnswer(answer).subscribe({
        next : (res) => {
          this.answerCreated.emit(res.data.answer);
          this.answerForm.reset();
        },
        error : (err) => {
          console.log("err  : " + err );
        }
      })
  }

}
