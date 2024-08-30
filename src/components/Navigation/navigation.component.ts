import { Component } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { RouterLink, RouterModule } from "@angular/router";
import { GlobalService } from "../../app/services/global/global.service";

@Component({
    standalone: true,
    selector: "navigation-component",
    templateUrl: "./navigation.component.html",
    imports: [ RouterLink, NgFor, NgIf ],
    styleUrls: ["./navigation.component.scss"]
})
export class Navigation {
    navigationItems: any[] = [
        {label: "Home", endpointUrl: "/home"},
        {label: "Products", endpointUrl: "/products"},
        {label: "About", endpointUrl: "/about"},
        {label: "Cart", endpointUrl: "/cart"}
    ];

    constructor(public globals: GlobalService) {}
}