import { Component } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { GlobalService } from "../../app/services/global/global.service";
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector: "cart",
    templateUrl: "./cart.component.html",
    styleUrl: "./cart.component.scss", 
    imports: [NgFor, NgIf, RouterLink]
})
export class Cart {
    constructor(public globals: GlobalService) {}
}