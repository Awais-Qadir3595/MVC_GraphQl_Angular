import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

const getStudentQuery=gql`
query{
  
  getStu{
      id
      name
      age
      city
    }


}`;

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
 

  formStudent:FormGroup;
 
  studentData:any[]
  loading:true
  error:any
  idToUpdate:any
  studentDataToUpdate:any

  constructor(private apolo:Apollo,
    private fb:FormBuilder) { }

    // private refreshReq=new Subject<void>(); 

    // get RefreshReq(){
    //   return this.RefreshReq; 
    // }
  ngOnInit(): void {

     
    this.getStudentsData();
     
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

  // mathod to fetch students list from server
  getStudentsData(){
   console.log('running fething data')
    this.apolo.watchQuery({
      
      query:getStudentQuery,
    })
    .valueChanges.subscribe((result:any)=>{


       console.log(result?.data?.getStu)
       this.studentData=result?.data?.getStu;
      
    

    });

  }
// delete Student
  deleteStudent(id,index)
  {
     console.log('index of delete element',index);
 
     const deleteMutation=gql`

mutation($sid:Int!)
{
  delStu(id:$sid) 
}

`;
     this.apolo.mutate({
      mutation:deleteMutation,
      variables:{sid:id}
     }).subscribe((result)=>{
      
       

       console.log(result)
      
      
      
      
     })
   
  }



  //update data  of student
  updateStudent(){
console.log('function enter update')
    console.log(this.formStudent.value.name)
 const updateQuery=gql`
 mutation ($obj: studentInput!) {
  updStudent(obj: $obj)
}
 `;
 this.apolo.mutate({
  mutation:updateQuery,
  variables:{
    obj:{
      id:this.idToUpdate,
      name:this.formStudent.value.studentName,
      age:parseInt(this.formStudent.value.age),
      city:this.formStudent.value.city
    }
  }
  
 }).subscribe((result)=>{
  console.log('update query ran')
  console.log(result);
  this.closeModal();
  this.formStudent.reset();
  this.getStudentsData();
 })

  }
 
  //open model and fetch by id  the data of object who is going to update
  openModal(id)
  {
    const modalDiv=document.getElementById('UpdateMpdal')
    if(modalDiv!=null)
    {
      modalDiv.style.display='block';
    }

    this.idToUpdate=id;
    const querySearch=gql`

    query($gid:Int!)
{
  getStudent(sid:$gid)
  {
    id,
    name,
    city,
    age
  }
}
    `;
    this.apolo.watchQuery({
      query:querySearch,
      variables:{gid:id}
    }) .valueChanges.subscribe((result:any)=>{

      console.log(result.data.getStudent.age);

      const object={
        'studentName':result.data.getStudent.name,
        'age' :  result.data.getStudent.age,
        'city':result.data.getStudent.city
      }
      this.formStudent.setValue(object)
      
   

   });
    
     
   
  }
  closeModal()
  {
     
    const modalDiv=document.getElementById('UpdateMpdal')
    if(modalDiv!=null)
    {
      modalDiv.style.display='none';
    }
  }

}
