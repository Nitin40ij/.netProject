import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:7021/api";


  constructor(private http:HttpClient) {  }

  getContactList(): Observable<any[]>{
   
    return this.http.get<any>(this.APIUrl+'/Callers');   
  }
  addContact(val:any){
    return this.http.post(this.APIUrl+'/Callers',val);
  }
  UpdateContact(val:any){
    return this.http.put(this.APIUrl+'/Callers/'+val.Id,val);
  }
  deleteContact(val:any){
    return this.http.delete(this.APIUrl+'/Callers/'+val);
  }
  


}
