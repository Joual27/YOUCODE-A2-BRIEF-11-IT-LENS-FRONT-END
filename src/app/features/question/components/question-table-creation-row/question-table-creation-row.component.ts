import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-table-creation-row',
  imports: [ReactiveFormsModule],
  templateUrl: './question-table-creation-row.component.html',
  styleUrl: './question-table-creation-row.component.css'
})
export class QuestionTableCreationRowComponent implements OnInit{
  questionForm !: FormGroup;
  @Input() activeSubchapterId !: WritableSignal<number>;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      text : ['' , [Validators.required , Validators.minLength(3)]],
      type : ['' , Validators.required ]
    })
  }

  onSubmit() : void{
    if(this.questionForm.valid){
      console.log(this.questionForm.value);
    }
    else{
      Object.values(this.questionForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
  }

  getQuestionText(){ 
    return this.questionForm.get("text");
  }

  getQuestionType(){
    return this.questionForm.get("type");
  }


}
