import { Component } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { GlobalService } from "../../app/services/global/global.service";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    selector: "checkout",
    templateUrl: "./checkout.component.html",
    styleUrl: "./checkout.component.scss",
    imports: [ NgIf, NgFor]
})
export class Checkout {
    constructor(public globals: GlobalService, public router: Router) {}

    step: number = 0;

    steps: string[] = [
        "Shipping",
        "Summary"
    ]

    formData: any = {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: ""
    }

    inputs: any = [
        {label: "First Name", property: "firstName"},
        {label: "Last Name", property: "lastName"},
        {label: "Address", property: "address"},
        {label: "Email", property: "email"},
        {label: "Phone", property: "phone"},
    ]

    setFormData(newFormData: any): void {
        this.formData = newFormData;
    }

    setFormDataProperty(property: string, event: any): void {
        this.formData[property] = event.target.value;
    }

    setStep(newStep: number) {
        this.step = newStep;
    }

    submitOrder() {
        console.log(this.formData);
        this.globals.setCart([]);
        this.router.navigateByUrl("/");
    }

    changeStepByAmount(amount: number): void {
        let newStep = this.step + amount;
        if (newStep < 0) {
            newStep = 0;
        }
        if (newStep >= this.steps.length) {
            newStep = this.steps.length - 1;
        }
        this.step = newStep;
    }
}