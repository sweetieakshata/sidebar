import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationdataService {

  constructor(private http:HttpClient) { }
  url:string ='https://93720b2c.ngrok.io/api/Settings/GetDesignations';
  url2:string='https://93720b2c.ngrok.io/api/Settings/InsUpdateDesignation';
 url3:string='https://93720b2c.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';

 getAllOrganizations(){
   return this.http.get(this.url);
  }
  addOrganization(item){
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(item);
    return this.http.post(this.url2,body,{headers:head});
  }
  editOrganization(item:any){
    let head = new HttpHeaders().set("Content-Type","application/json");
    let body = JSON.stringify(item);
    return this.http.post(this.url2,body,{headers:head});
  }

 deleteOrganization(DesignationId){
  let head = new HttpHeaders().set("Content-Type","application/json");
  return this.http.post(this.url3+DesignationId.id,{headers:head});
 }
//  deleteOrg(DesignationId) {
//     let head = new HttpHeaders().set("Content-Type", "application/json");

//     return this.http.post(this.url2 + DesignationId.id, { headers: head });
//   }
}

