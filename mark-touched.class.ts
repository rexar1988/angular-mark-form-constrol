import { FormGroup } from '@angular/forms';

export class MarkTouchedClass {
  static mark(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.mark(control);
      }
    });
  }
}
