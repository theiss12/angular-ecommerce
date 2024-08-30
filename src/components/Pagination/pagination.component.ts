import { Component, Output, Input, EventEmitter, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
    standalone: true,
    selector: "pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.scss"],
    imports: [NgFor]
})
export class Pagination implements OnInit {
    @Input() activePage: number = 0;
    @Input() itemsPerPage: number = 1;
    @Input() maxItems: number = 1;
    @Output() pageOutput = new EventEmitter<number>();

    pageNumbers: number[] = [];

    getPageNumbers(): number[] {
        return [...new Array(Math.ceil(this.maxItems / this.itemsPerPage))].map((_, index) => index);
    }

    emitPage(click: any): void {
        const page: number = parseInt(click.target.value);
        this.activePage = page;
        this.pageOutput.emit(page);
    }

    ngOnInit(): void {
        this.pageNumbers = this.getPageNumbers();
    }
}