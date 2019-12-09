import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transaction-bancking-from',
  templateUrl: './transaction-bancking-from.component.html',
  styleUrls: ['./transaction-bancking-from.component.css']
})

export class TransactionBanckingFromComponent implements OnInit {

  registered = false;
  submitted = false;
  transactionForm: FormGroup;
  serviceErrors: any = {};
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  invalidTransactionType() {
    return (this.submitted && this.transactionForm.controls.transactionType.errors != null);
  }

  invalidAmount() {
    return (this.submitted && this.transactionForm.controls.amount.errors != null);
  }

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      transactionType: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.transactionForm.controls.amount.invalid && this.transactionForm.controls.transactionType.invalid) {
      return;
    } else {
      const data: any = Object.assign(this.transactionForm.value);

      this.http.post('/api/v1/transaction', data).subscribe(() => {
        const path = '/transactions';
        this.router.navigate([path]);
      }, error => {
        this.serviceErrors = error.error.error;
        });

      this.registered = true;
    }
  }
}
