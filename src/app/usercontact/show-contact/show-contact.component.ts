import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {
  constructor(private service:SharedService) { 
    
  }
  ContactList:any=[];

  ModalTitle:string;
  ActivateAddEditContact:boolean=false;
  cont:any;

  ngOnInit(): void {
    this.refreshContactlist();
  }

 
  addClick(){
    this.cont={
      Id:0,
      Name:"",
      Phonenumber:"",
      emailid:""
    }
    this.ModalTitle="Add Contact";
    this.ActivateAddEditContact=true;

  }

  editClick(item){
    this.cont=item;
    this.ModalTitle="Edit Contact";
    this.ActivateAddEditContact=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteContact(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshContactlist();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditContact=false;
    this.refreshContactlist();
  }
  refreshContactlist(){
    this.service.getContactList().subscribe((data)=>{
      //console.log(data);
    this.ContactList=data;
  })};

}

