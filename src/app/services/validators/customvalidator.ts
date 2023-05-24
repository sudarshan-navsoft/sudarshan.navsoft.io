import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Customvalidator {
     regexp= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}/g; 
     // [ regexp checkes wheather it has:- 
     //1. Capital letter , 
     //2. small letter , 
     //3. has given one of special characters , 
     //4. has length between 8 to 15 ]
    static patternValidator(regex: RegExp , error: ValidationErrors ): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null!
          }
      
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
      
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null! : error;
        };
    }
    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('cpassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('cpassword').setErrors({ NoPassswordMatch: true });
        }
      }
}
