import {AbstractControl,ValidationErrors} from '@angular/forms'


export class passwordValidator{
    static matchingOldPassword(control: AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value==='oldpw'){
                    resolve(null);
                }
                else{
                    resolve(
                        {'passwordMatchingError': true}
                    )
                }
            }, 2000);
        })
    }

    static matchingNewPassword(wholeForm:AbstractControl):ValidationErrors| null{
        if(wholeForm.get('newpw')?.value===wholeForm.get('confirmpw')?.value){
            return null;
        }
        else{
            return {'confirmpwMatchingError': true};
        }
    }
}