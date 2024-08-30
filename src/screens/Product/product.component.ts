import { Component, OnInit } from "@angular/core";
import { NgIf, NgFor, NgClass } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { GlobalService } from "../../app/services/global/global.service";

@Component({
    standalone: true,
    selector: "product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
    imports: [NgIf, NgFor, NgClass]
})
export class Product implements OnInit {
    slugProduct: any = undefined;
    isMessageOpen: boolean = false;

    constructor(public route: ActivatedRoute, public globals: GlobalService) {}

    closeMessage(): void {
        this.isMessageOpen = false;
    }

    putProductIntoCart() {
        this.globals.addProductToCart(this.slugProduct);
        this.isMessageOpen = true;
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const slug = params.get("slug") || "";
            this.slugProduct = this.globals.products.find(product => product.id == slug);
            if (!this.slugProduct) {
                setTimeout(() => {
                    this.ngOnInit();
                }, 16);
            }
        })
    }
}