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
  saved = false;
  transactionForm: FormGroup;
  serviceErrors: any = {};
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  invalidTransactionType() {
    return (this.submitted && this.transactionForm.controls.type.errors != null);
  }

  invalidAmount() {
    return (this.submitted && this.transactionForm.controls.value.errors != null);
  }

  transactionState() {
    return this.saved;
  }

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      type: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.transactionForm.invalid) {
      return;
    } else {
      const data: any = Object.assign(this.transactionForm.value);
      data.value = +data.value;
      this.http.post('http://localhost:3000/api/v1/transaction', data).subscribe(() => {
        this.saved = true;
      }, error => {
        this.serviceErrors = error.error.error;
        });

      this.registered = true;
    }
  }
}
