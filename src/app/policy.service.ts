// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Policy } from './policy.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PolicyService {
//   private apiUrl = 'https://localhost:5001/api/policies'; // Replace with your API URL

//   constructor(private http: HttpClient) {}

//   getPolicies(): Observable<Policy[]> {
//     return this.http.get<Policy[]>(this.apiUrl);
//   }

//   getPolicy(id: number): Observable<Policy> {
//     return this.http.get<Policy>(`${this.apiUrl}/${id}`);
//   }

//   createPolicy(policy: Policy): Observable<Policy> {
//     return this.http.post<Policy>(this.apiUrl, policy);
//   }

//   updatePolicy(policy: Policy): Observable<Policy> {
//     return this.http.put<Policy>(`${this.apiUrl}/${policy.id}`, policy);
//   }

//   deletePolicy(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private data = [
    { PolicyID: 1, PolicyType: 'Health', PolicyName: 'Health Plus', InsuranceAmount: 500000, PolicyValidity: 10, PolicyDescription: 'Comprehensive health insurance', Available: 'Y' },
    { PolicyID: 2, PolicyType: 'Life', PolicyName: 'Life Secure', InsuranceAmount: 1000000, PolicyValidity: 20, PolicyDescription: 'Life insurance with benefits', Available: 'Y' },
    { PolicyID: 3, PolicyType: 'Auto', PolicyName: 'Auto Shield', InsuranceAmount: 300000, PolicyValidity: 5, PolicyDescription: 'Auto insurance for vehicles', Available: 'Y' },
    { PolicyID: 4, PolicyType: 'Home', PolicyName: 'Home Guard', InsuranceAmount: 2000000, PolicyValidity: 15, PolicyDescription: 'Home insurance for property', Available: 'Y' },
    { PolicyID: 5, PolicyType: 'Travel', PolicyName: 'Travel Safe', InsuranceAmount: 100000, PolicyValidity: 1, PolicyDescription: 'Travel insurance for trips', Available: 'Y' },
  ];

  constructor() {}

  getPolicies(): Observable<any[]> {
    return of(this.data);
  }

  addPolicy(policy: any): Observable<any> {
    this.data.push({ ...policy, PolicyID: this.data.length + 1 });
    return of(policy);
  }

  updatePolicy(policy: any): Observable<any> {
    const index = this.data.findIndex(p => p.PolicyID === policy.PolicyID);
    if (index !== -1) {
      this.data[index] = policy;
    }
    return of(policy);
  }

  deletePolicy(id: number): Observable<any> {
    this.data = this.data.filter(p => p.PolicyID !== id);
    return of({ id });
  }
}
