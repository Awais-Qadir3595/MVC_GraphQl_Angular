import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
const add_Student_Query=gql`

mutation($obj:studentInput!)
{
  createStudent(s:$obj){

     id
     name

  }
}
`;
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  formStudent:FormGroup;

  constructor(private fb:FormBuilder,
    private apolo:Apollo) { }

  ngOnInit(): void {

    
    this.formStudent=this.fb.group(
      {
        'studentName':new FormControl('',[
          Validators.required,
        ]),
        'age':new FormControl('',[Validators.required],
        ),
        'city':new FormControl('',[Validators.required])
      }
    )
  }

  addStudent(){
    console.log(this.formStudent.value.studentName)
    this.apolo.mutate({
      mutation:add_Student_Query,
      variables:{
        obj:{
          name:this.formStudent.value.studentName,
          age:parseInt(this.formStudent.value.age),
          city:this.formStudent.value.city,
          id:0
        }
      }
    }).subscribe((result)=>{
      console.log(result)
    })


  }
  cancel(){
    this.formStudent.reset();
  }

}
