import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import { GlobalService } from "../../app/services/global/global.service";

@Component({
    standalone: true,
    selector: "products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"],
    imports: [ NgFor ]
})
export class Products {
    constructor(public globals: GlobalService) {}
}