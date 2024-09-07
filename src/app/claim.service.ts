import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private data = [
    { ClaimId: 1, PurchaseId: 101, TotalAmount: 10000, ClaimAmount: 5000, remainingAmount: 5000, ClaimDate: '2023-01-01' },
    { ClaimId: 2, PurchaseId: 102, TotalAmount: 20000, ClaimAmount: 15000, remainingAmount: 5000, ClaimDate: '2023-02-01' },
    { ClaimId: 3, PurchaseId: 103, TotalAmount: 15000, ClaimAmount: 10000, remainingAmount: 5000, ClaimDate: '2023-03-01' },
    { ClaimId: 4, PurchaseId: 104, TotalAmount: 25000, ClaimAmount: 20000, remainingAmount: 5000, ClaimDate: '2023-04-01' },
    { ClaimId: 5, PurchaseId: 105, TotalAmount: 30000, ClaimAmount: 25000, remainingAmount: 5000, ClaimDate: '2023-05-01' },
  ];

  constructor() {}

  getClaims(): Observable<any[]> {
    return of(this.data);
  }

  addClaim(claim: any): Observable<any> {
    this.data.push({ ...claim, ClaimId: this.data.length + 1 });
    return of(claim);
  }

  updateClaim(claim: any): Observable<any> {
    const index = this.data.findIndex(c => c.ClaimId === claim.ClaimId);
    if (index !== -1) {
      this.data[index] = claim;
    }
    return of(claim);
  }

  deleteClaim(id: number): Observable<any> {
    this.data = this.data.filter(c => c.ClaimId !== id);
    return of({ id });
  }
}
