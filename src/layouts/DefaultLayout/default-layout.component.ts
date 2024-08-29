import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Navigation } from "../../components/Navigation/navigation.component";

@Component({
    standalone: true,
    selector: "default-layout",
    templateUrl: "./default-layout.component.html",
    styleUrls: ["./default-layout.component.scss"],
    imports: [ RouterOutlet, Navigation ]
})
export class DefaultLayout {

}