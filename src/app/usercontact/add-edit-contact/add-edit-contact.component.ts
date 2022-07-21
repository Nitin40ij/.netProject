import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() contact:any;
  Id:string;
  Name:string;
  Phonenumber:string;
  emailid:string

  ngOnInit(): void {
    this.Id=this.contact.Id;
    this.Name=this.contact.Name;
    this.Phonenumber=this.contact.Phonenumber;
    this.emailid=this.contact.emailid;
  }
  addContact(){
    var val = {Id:this.Id,
              Name:this.Name,
              Phonenumber:this.Phonenumber,
              emailid:this.emailid
            };
     this.service.addContact(val).subscribe(res=>{
      // alert(res.toString());
     // console.log(res);
     // console.log(res['Name']);
       alert(res['Name'] + " Successfully Added")
    });
  }

  UpdateContact(){
    var val = {Id:this.Id,
       Name:this.Name,
      Phonenumber:this.Phonenumber,
      emailid:this.emailid};
    this.service.UpdateContact(val).subscribe(res=>{
       alert(res.toString());
    });
  }

}
