import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewFormComponent } from './new-form/new-form.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: "Home", component: HomeComponent },
    {path: "SignUp", component: SignUpComponent},
    {path: 'ForgotPassword', component: ForgotPasswordComponent},
    {path: 'NewForm', component: NewFormComponent},
    {path: 'Form', component: FormComponent}
];


