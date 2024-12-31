import { Component, EventEmitter, inject, Input, OnInit, Output, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionCreationModel } from '../../models';
import { QuestionService } from '../../services/question-service.service';
import { Question } from '../../../../shared/models';


@Component({
  selector: 'app-question-table-creation-row',
  imports: [ReactiveFormsModule],
  templateUrl: './question-table-creation-row.component.html',
  styleUrl: './question-table-creation-row.component.css'
})
export class QuestionTableCreationRowComponent implements OnInit{
  questionForm !: FormGroup;
  @Input() activeSubchapterId !: WritableSignal<number>;
  questionService = inject(QuestionService);
  @Output() questionCreatedEvent = new EventEmitter<Question>;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      text : ['' , [Validators.required , Validators.minLength(3)]],
      type : ['' , Validators.required ]
    })
  }

  onSubmit() : void{
    if(this.questionForm.valid){
      this.handleQuestionCreation(this.getQuestionText(), this.getQuestionType());
    }
    else{
      Object.values(this.questionForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
  }

  handleQuestionCreation(text : string , type : string) : void{
    const questionToCreate : QuestionCreationModel = {
      text : text,
      type : type,
      answerCount : 0,
      subchapterId : this.activeSubchapterId()
    }
    this.questionService.createQuestion(questionToCreate).subscribe({
      next : (res) => {
        this.questionCreatedEvent.emit(res.data.question);
        console.log(res);
        this.questionForm.reset()
      },
      error : (err) => {
        console.log("error creating ques : " + err); 
      }
    })    
  }

  getQuestionText() : string{ 
    return this.questionForm.get("text")?.value ?? "";
  }

  getQuestionType() : string{
    return this.questionForm.get("type")?.value ?? "";
  }


}
