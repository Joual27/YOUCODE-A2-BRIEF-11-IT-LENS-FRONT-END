import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-answer-table-creation-row',
  imports: [],
  templateUrl: './answer-table-creation-row.component.html',
  styleUrl: './answer-table-creation-row.component.css'
})
export class AnswerTableCreationRowComponent implements OnInit{
  answerForm !: FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.answerForm = this.fb.group({
      text : ["" , [Validators.required , Validators.minLength(3)]]
    })
  }

  handleSubmit() : void{
    console.log()
  }

}
