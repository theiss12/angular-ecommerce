import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
    standalone: true,
    selector: "navigation-component",
    templateUrl: "./navigation.component.html",
    imports: [ RouterLink, NgFor ],
    styleUrls: ["./navigation.component.scss"]
})
export class Navigation {
    navigationItems: any[] = [
        {label: "Home", endpointUrl: "/home"},
        {label: "Products", endpointUrl: "/products"}
    ];
}