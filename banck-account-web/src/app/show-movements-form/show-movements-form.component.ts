import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-show-movements-form',
  templateUrl: './show-movements-form.component.html',
  styleUrls: ['./show-movements-form.component.css']
})
export class ShowMovementsFormComponent implements OnInit {

  movements: any;
  movementsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.formBuild();
    this.http.get('http://localhost:3000/api/v1/transaction').subscribe((data: any) => {
      this.movements = data.transactions;
      this.movementsForm.patchValue({balance: this.movements.balance});
    }, error => {
      console.log('There was an error getting the movements', error);
    });
  }

  formBuild() {
    this.movementsForm = this.formBuilder.group({
      balance: [''],
    });
  }

  onSubmit() {
    this.http.get('http://localhost:3000/api/v1/transaction').subscribe((data: any) => {
      this.movements = data.transactions;
      this.movementsForm.patchValue({balance: this.movements.balance});
    }, error => {
      console.log('There was an error getting the movements', error);
    });
  }

}
