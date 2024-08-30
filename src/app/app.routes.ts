import { Routes } from '@angular/router';
import { Home } from '../screens/Home/home.component';
import { Products } from '../screens/Products/products.component';
import { Product } from '../screens/Product/product.component';
import { About } from '../screens/About/about.component';
import { Cart } from '../screens/Cart/cart.component';
import { Checkout } from '../screens/Checkout/checkout.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: Home},
    {path: "products", component: Products},
    {path: "products/:slug", component: Product},
    {path: "about", component: About},
    {path: "cart", component: Cart},
    {path: "checkout", component: Checkout}
];
