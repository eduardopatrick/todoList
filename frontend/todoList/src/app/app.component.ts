import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'todoList';
  formGroup: FormGroup;

  constructor( private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
   }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  loginProcess(){
    console.log('entrou');
    console.log(this.formGroup);
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe( result => {
        if(result.success){
          console.log(result);
          alert(result.message);
        }else {
          alert(result.message);
        }
      })
    }
  }


}
