import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgFor, NgIf, NgClass } from "@angular/common";
import { GlobalService } from "../../app/services/global/global.service";
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    imports: [NgFor, NgIf, NgClass, RouterLink]
})
export class Home implements OnInit, OnDestroy {
    randomIndex: number = 0;
    intervalId: any;
    animate: boolean = true;

    turnOffAnimation() {
        this.animate = false;
    }

    getRandomIndex(): number {
        if (!this.globalService) return -1;
        if (this.globalService.products.length === 0) return -1;
        return Math.floor(this.globalService.products.length * Math.random());
    }

    restartInterval(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            const newIndex: number = this.getRandomIndex();
            this.randomIndex = newIndex;
            this.animate = true;
        }, 3000);
    }

    constructor(public globalService: GlobalService) {}

    ngOnInit(): void {
        this.restartInterval();
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}