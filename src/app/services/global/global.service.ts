import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GlobalService {
    products: any[] = [];

    setProducts(newProducts: any[]): void {
        this.products = newProducts;
    }

    getProducts(): any[] {
        return this.products;
    }
}