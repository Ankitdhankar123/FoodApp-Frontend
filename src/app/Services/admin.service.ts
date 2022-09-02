import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  //Admin Registration
  registerAdmin(admin:any) {
    return this.http.post(`http://localhost:8080/Saveadmin`,admin);
  }
  //Admin Login
  loginAdmin(admin:any) {
    return this.http.post(`http://localhost:8080/Saveadmin`,admin)
  }
  //Get all Admins
  findAllAdmin() {
    return this.http.get(`http://localhost:8080/getadminall`)
  }
  //Updating the Admin details
  updateAdmin(id:any,admin:any) {
    return this.http.put(`http://localhost:8080/Updateadmin?id=${id}`,admin);
  }
}
