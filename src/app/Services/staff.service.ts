import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  //Staff Registration
  registerStaff(staff:any,branchManagerId:any) {
    return this.http.post(`http://localhost:8080/savestaff/${branchManagerId}`,staff,branchManagerId);
  }
  //Staff Login
   loginStaff(Staff:any) {
    return this.http.post(`http://localhost:8080/Saveadmin`,Staff);
  }

  //Get all Staffs
  findAllStaff() {
    return this.http.get(`http://localhost:8080/getallstaff`);
  }
  //Update Staff Details
  updateStaff(id:any, staff:any) {
    return this.http.put(`http://localhost:8080/updatestaff?id=${id}`,staff);
  }
}
