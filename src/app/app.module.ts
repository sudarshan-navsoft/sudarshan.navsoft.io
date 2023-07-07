import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './authentication/resetpassword/resetpassword.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './services/intercept/http-interceptor.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CustomDirective, customphoneformatDirective } from './services/directives/custom.directive';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { AlertModule } from './common/alert/alert.module';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost', // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#000',
    },
    button: {
      background: '#f1d600',
    },
  },
  position:'bottom-right',
  theme: 'classic',
  type: 'info',  
  layout: 'my-custom-layout',
  layouts: {
    'my-custom-layout': '{{messagelink}}{{compliance}}',
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>, 
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our 
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    dismiss: "I Consent",
    message:
      'By using our site, you acknowledge that you have read and understand our ',

    cookiePolicyLink: 'Cookie Policy',
    cookiePolicyHref: 'https://cookie.com',

    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',

    tosLink: 'Terms of Service',
    tosHref: 'https://tos.com',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    CustomDirective,
    customphoneformatDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AlertModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true },
    // { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
