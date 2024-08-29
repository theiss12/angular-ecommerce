import { Routes } from '@angular/router';
import { Home } from '../screens/Home/home.component';
import { Products } from '../screens/Products/products.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: Home},
    {path: "products", component: Products}
];
