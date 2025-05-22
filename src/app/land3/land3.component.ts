import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit ,OnInit,ViewEncapsulation } from '@angular/core'


@Component({
  selector: 'app-land3',
  templateUrl: './land3.component.html',
  styleUrls: ['./land3.component.css'],
 
})
export class Land3Component {
  formData1 = {
  countryCode: '+216',
  phone: ''
};
 currentStep = 0;
  formSubmitted = false;
formData: {
  name: string;
  phone: string;
  email: string;
  answers: { [key: string]: any };  // ← هذا هو المفتاح
} = {
  name: '',
  phone: '',
  email: '',
  answers: {
    }
};

ngOnInit() {
  this.steps.forEach(step => {
    if (step.type === 'select' && step.options?.length) {
      this.formData.answers[step.name] = step.options[0]; // ← valeur par défaut
    }
  });
}
  steps = [
    { type: 'input', name: 'job', placeholder: 'ما هي مهنتك؟' },
    { type: 'input', name: 'pp', placeholder: 'ما هو هدفك من هذا النموذج؟' },

    { type: 'select', name: 'interest', placeholder: 'اختر مجال اهتمامك', options: ['التسويق', 'البرمجة', 'التصميم', 'ريادة الأعمال'] },
    { type: 'input', name: 'goal', placeholder: 'ما هو هدفك من هذا النموذج؟' },
    { type: 'select', name: 'int', placeholder: 'اختر مجال اهتمامك', options: ['التسويق', 'البرمجة', 'التصميم', 'ريادة الأعمال'] },
        { type: 'input', name: 'goal', placeholder: 'ما هو هدفك من هذا النموذج؟' }
  ];
 nextStep1() {
   if (this.currentStep < this.steps.length + 1) {
    this.currentStep++;
      console.log(this.currentStep)
    this.formSubmitted=true
  }
   
  
  }
  nextStep() {
    if( this.currentStep == this.steps.length ){
   
      console.log(5)
    }
    else{
   this.currentStep++;
    }
   
    console.log(this.formData.answers)
  }

  showConfirmation() {
    this.formSubmitted = true;
    console.log(this.formData)
  }
}
