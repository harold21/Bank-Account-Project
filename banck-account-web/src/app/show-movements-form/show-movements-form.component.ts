import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-show-movements-form',
  templateUrl: './show-movements-form.component.html',
  styleUrls: ['./show-movements-form.component.css']
})
export class ShowMovementsFormComponent implements OnInit {

  movements: any = {};
  transactionForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/v1/transaction').subscribe((data: any) => {
      this.movements = data.transactions;
    }, error => {
      console.log('There was an error getting the movements', error);
    });
  }

  onSubmit() {
    console.log('Ok');
    this.http.get('/api/v1/transaction').subscribe((data: any) => {
      this.movements = data.transactions;
    }, error => {
      console.log('There was an error getting the movements', error);
    });
  }

}
