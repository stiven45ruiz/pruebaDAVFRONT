import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,FormControl,FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

  modalSwitch!:boolean

  form = new FormGroup({
    ingresos: new FormControl ('',[Validators.required]),
    name: new FormControl ('',[Validators.required]),
    address: new FormControl ('',[Validators.required]),
    text: new FormControl ('',[Validators.required]),
    assesorCode: new FormControl(''),
    select: new FormControl('')
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
  }
  save(event:Event){
    event.preventDefault();
    if(this.form.valid){
      console.log('forminvalid')
      // this.router.navigate(['./home/view3']);
      this.modalSwitch = true;
      // const product = this.form.value;
      // this.productsService.createProduct(product)
      // .subscribe((newProduct) =>{
      //   console.log(newProduct);
      //   this.router.navigate(['./admin/inventory']);
      // });
    }
  }

  get priceField(){
    return this.form.get('ingresos');
  }

}
