import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  data: any[] = [];
  filteredPolicies: any[] = [];
  newPolicy: any = {};
  editMode: boolean = false;
  feedbackMessage: string = '';
  searchTerm: string = '';

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.policyService.getPolicies().subscribe(data => {
      this.data = data;
      this.filteredPolicies = data;
    });
  }

  addPolicy(): void {
    if (this.isValidPolicy(this.newPolicy)) {
      if (this.editMode) {
        this.policyService.updatePolicy(this.newPolicy).subscribe(() => {
          this.loadPolicies();
          this.resetForm();
          this.feedbackMessage = 'Policy updated successfully!';
        });
      } else {
        this.policyService.addPolicy(this.newPolicy).subscribe(() => {
          this.loadPolicies();
          this.resetForm();
          this.feedbackMessage = 'Policy added successfully!';
        });
      }
    } else {
      this.feedbackMessage = 'Please fill in all fields.';
    }
  }

  editPolicy(policy: any): void {
    this.newPolicy = { ...policy };
    this.editMode = true;
    this.feedbackMessage = '';
  }

  deletePolicy(id: number): void {
    this.policyService.deletePolicy(id).subscribe(() => {
      this.loadPolicies();
      this.feedbackMessage = 'Policy deleted successfully!';
    });
  }

  resetForm(): void {
    this.newPolicy = {};
    this.editMode = false;
  }

  isValidPolicy(policy: any): boolean {
    return policy.PolicyType && policy.PolicyName && policy.InsuranceAmount && policy.PolicyValidity && policy.PolicyDescription && policy.Available;
  }

  searchPolicies(): void {
    if (this.searchTerm) {
      this.filteredPolicies = this.data.filter(policy =>
        policy.PolicyType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        policy.PolicyName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        policy.PolicyDescription.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredPolicies = this.data;
    }
  }
}
