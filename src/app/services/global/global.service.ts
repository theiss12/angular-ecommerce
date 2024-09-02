import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GlobalService {
    products: any[] = [];

    cart: any[] = this.initCart();

    private initCart(): any[] {
        const sessionCartJSON = sessionStorage.getItem("buyless-cart");
        if (!sessionCartJSON) {
            sessionStorage.setItem("buyless-cart", JSON.stringify([]));
            return [];
        }
        return JSON.parse(sessionCartJSON);
    }

    setCart(newCart: any[]): void {
        this.cart = newCart;
        sessionStorage.setItem("buyless-cart", JSON.stringify(newCart));
    }

    addProductToCart(product: any):void {
        let newCart = [...this.cart];
        const exisingIndex = this.cart.findIndex(cartItem => cartItem.id === product.id);
        if (exisingIndex > -1) {
            newCart[exisingIndex].amount++;
        }
        else {
            newCart = [...newCart, {...product, amount: 1}];
        }
        this.setCart(newCart);
    }

    removeProductFromCart(product: any) {
        let newCart = [...this.cart];
        let newAmount = Infinity;
        const exisingIndex = this.cart.findIndex(cartItem => cartItem.id === product.id);
        if (exisingIndex > -1) {
            newAmount = newCart[exisingIndex].amount -= 1;
        }
        if (newAmount === 0) {
            newCart = newCart.filter(cartiItem => cartiItem.id !== product.id);
        }
        this.setCart(newCart);
    }

    deleteCartItem(product: any) {
        this.setCart(
            this.cart.filter(cartItem => cartItem.id !== product.id)
        );
    }

    getCartTotalAmount(): number {
        return this.cart.reduce((total, cartItem) => total = total + cartItem.amount, 0);
    }

    getCartTotalCost(): number {
        return this.cart.reduce((total, cartItem) => total = total + cartItem.price * cartItem.amount, 0);
    }

    setProducts(newProducts: any[]): void {
        this.products = newProducts;
    }

    getProducts(): any[] {
        return this.products;
    }
}