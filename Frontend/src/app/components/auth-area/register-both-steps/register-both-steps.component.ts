import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-register-both-steps',
  templateUrl: './register-both-steps.component.html',
  styleUrls: ['./register-both-steps.component.css']
})
export class RegisterBothStepsComponent {
  user = new UserModel()

  constructor(private notify: NotifyService, private authService: AuthService, private router: Router) { }

  @ViewChild('stepper') private myStepper: MatStepper;

  userInfoFromStepOne(userStepOne: UserModel) {

    this.user.idNumber = userStepOne.idNumber
    this.user.username = userStepOne.username
    this.user.password = userStepOne.password
    this.myStepper.next();

  }

  async userInfoFromStepTwo(userStepTwo: UserModel) {

    this.user.firstName = userStepTwo.firstName
    this.user.lastName = userStepTwo.lastName
    this.user.city = userStepTwo.city
    this.user.street = userStepTwo.street

    try {
      await this.authService.register(this.user)
      this.notify.success('You have been registered')
      this.router.navigateByUrl('/home')

    } catch (err: any) {
      this.notify.error(err)
    }
  }
}


