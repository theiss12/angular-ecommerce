import { Component, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { GlobalService } from "../../app/services/global/global.service";
import { RouterLink, ActivatedRoute, Router } from "@angular/router";

@Component({
    standalone: true,
    selector: "products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"],
    imports: [ NgFor, RouterLink ]
})
export class Products implements OnInit {
    filtered: any[] = [];
    page: number = 0;
    itemsPerPage: number = 3;

    constructor(public globals: GlobalService, public route: ActivatedRoute, public router: Router) {}

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(params => {
            const newSearchTerm = params.get("search") || "";
            this.filtered = this.globals.products.filter(product => 
                JSON.stringify(product).toLowerCase().includes(newSearchTerm.toLowerCase())
            )
            this.page = 0;
        });
    }

    getDisplayArray(): any[] {
        return this.filtered.length === 0 ? this.globals.products : this.filtered;
    }

    getPageNumbers(): number[] {
        return [...new Array(Math.ceil(this.getDisplayArray().length / this.itemsPerPage))].map((_, index) => index);
    }

    setPage(click: any) {
        this.page = parseInt(click.target.value);
    }

    navigate(input: any): void {
        const searchTerm: string = input.target.value;
        const url: string = `products?search=${searchTerm}`;
        this.router.navigateByUrl(url);
    }
}