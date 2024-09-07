
import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  data: any[] = [];
  filteredClaims: any[] = [];
  newClaim: any = {};
  editMode: boolean = false;
  feedbackMessage: string = '';
  searchTerm: string = '';

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.loadClaims();
  }

  loadClaims(): void {
    this.claimService.getClaims().subscribe(data => {
      this.data = data;
      this.filteredClaims = data;
    });
  }

  addClaim(): void {
    if (this.isValidClaim(this.newClaim)) {
      if (this.editMode) {
        this.claimService.updateClaim(this.newClaim).subscribe(() => {
          this.loadClaims();
          this.resetForm();
          this.feedbackMessage = 'Claim updated successfully!';
        });
      } else {
        this.claimService.addClaim(this.newClaim).subscribe(() => {
          this.loadClaims();
          this.resetForm();
          this.feedbackMessage = 'Claim added successfully!';
        });
      }
    } else {
      this.feedbackMessage = 'Please fill in all fields.';
    }
  }

  editClaim(claim: any): void {
    this.newClaim = { ...claim };
    this.editMode = true;
    this.feedbackMessage = '';
  }

  deleteClaim(id: number): void {
    this.claimService.deleteClaim(id).subscribe(() => {
      this.loadClaims();
      this.feedbackMessage = 'Claim deleted successfully!';
    });
  }

  resetForm(): void {
    this.newClaim = {};
    this.editMode = false;
  }

  isValidClaim(claim: any): boolean {
    return claim.PurchaseId && claim.TotalAmount && claim.ClaimAmount && claim.remainingAmount && claim.ClaimDate;
  }

  searchClaims(): void {
    if (this.searchTerm) {
      this.filteredClaims = this.data.filter(claim =>
        claim.PurchaseId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        claim.ClaimDescription.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredClaims = this.data;
    }
  }
}
