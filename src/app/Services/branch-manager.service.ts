import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerService {

  constructor(private http:HttpClient) { }

  //Branch Manager Registration
  registerBranchManager(branchManager:any,branchId:any) {
    return this.http.post(`http://localhost:8080/savebranchManager/${branchId}`,branchManager,branchId);
  }
  //Branch Manager Login
 

  loginBranchManager(BranchManager:any) {
    return this.http.post(`http://localhost:8080/Saveadmin`,BranchManager)
  }
  //Get all Branch Managers
  findAllBranchManager() {
    return this.http.get(`http://localhost:8080/getallbranchManager`);
  }
  //Update Branch Manager Details
  updateBranchManager(id:any, branchManager:any) {
    return this.http.put(`http://localhost:8080/updatebranchManager?id=${id}`,branchManager);
  }
}
