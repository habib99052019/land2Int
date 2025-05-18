import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit ,OnInit } from '@angular/core'
import { LandingPageService } from '../services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  numeroWhatsapp=12587455
  logo=""
 products:any[]=[]
  selectedProduct:any
  constructor(public landingService:LandingPageService ){

  }
  selectValue="البرمجة"
  steps: any[] = [];
formData1 = {
  countryCode: '+216',
  phone: ''
};
formData: any 
ngOnInit(){
 


/////
this.landingService.getLandingById( "6829fed51d4ce2c9a6dc84ed").subscribe(data => {
  console.log(data,'gggg')
   this.formData = {
  name: '',
  phone: '',
  email: '',
  answers: {}
};
        var  landingData:any
        landingData = data;
        this.steps = data.questionsStep;
        this.products=data.products
        this.logo=data.logo
        this.numeroWhatsapp=data.numeroWhatsapp
        console.log(  this.products,this.numeroWhatsapp,"ty")
        // Initialiser les réponses dynamiques
//         this.steps.forEach(step => {
//   const key = step.name;
//   if (step.type === 'select' && step.options?.length) {
//     this.formData.answers[key] = step.placeholder; // ← valeur par défaut
//   } else {
//     this.formData.answers[key] = ''; // ← valeur vide pour les inputs
//   }
//   console.log(this.formData.answers ,"ffffoooo")
// });
  this.steps.forEach(step => {
          this.formData.answers[step.name] =
            step.type === 'select' && step.options?.length ? step.options[0] : '';
        });
      
      });
}
selectProduct(name: string) {
  this.selectedProduct = name;
}
// Pour récupérer le numéro complet :
get fullPhoneNumber(): string {
  return `${this.formData.countryCode}${this.formData.phone}`;
}



@ViewChildren('step') stepsRef!: QueryList<ElementRef>;
successMessage = '';
  currentStep = 0;
  productNameText = 'اختر المنتج أولاً';
  formSubmitted = false;

  ngAfterViewInit() {
      if (!this.formData.answers['interest']) {
  const interestStep = this.steps.find(s => s.name === 'interest');
this.formData.answers['interest'] = interestStep && interestStep.options?.length ? interestStep.options[0] : '';
;
  }

    this.showStep(this.currentStep);

   
  }

  

  showStep(index: number) {
    this.stepsRef.forEach((stepEl, i) => {
      const el = stepEl.nativeElement;
      el.classList.remove('show');
      el.style.display = i === index ? 'block' : 'none';
      if (i === index) {
        setTimeout(() => el.classList.add('show'), 10);
      }
    });
  }

  nextStep(i:any) {
   
  
  
 


  
       const current = this.stepsRef.toArray()[this.currentStep]?.nativeElement;
    if (current) current.classList.remove('show');

    setTimeout(() => {
      this.currentStep++;
      if (this.currentStep < this.stepsRef.length) {
        this.showStep(this.currentStep);
      }
    }, 300);
  }

   nextStep1() {
      
       const current = this.stepsRef.toArray()[this.currentStep]?.nativeElement;
    if (current) current.classList.remove('show');

    setTimeout(() => {
      this.currentStep++;
      if (this.currentStep < this.stepsRef.length) {
        this.showStep(this.currentStep);
      }
    }, 300);
  }
  showConfirmation() {
  this.formSubmitted = true;
  this.formData.phone=this.formData1.countryCode+this.formData.phone
  this.formData = {
  ...this.formData,       // الاحتفاظ بجميع الخصائص السابقة
  product: this.selectedProduct  // إضافة خاصية جديدة أو تحديثها
};
  this.successMessage = '✅ تم تسجيلك بنجاح! سنقوم بالتواصل معك قريبًا.';
  console.log('Form Data:', this.formData); // يمكنك استبدالها بإرسال إلى backend
  alert('✅ تم تسجيلك بنجاح! سنقوم بالتواصل معك قريبًا.')
}

}
