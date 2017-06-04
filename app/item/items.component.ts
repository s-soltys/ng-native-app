import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Observable } from "rxjs/Observable";

declare var java: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Observable<Item[]>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        let powResult = java.lang.Math.pow(2, 3);

        this.items = this.itemService.getItems();
    }
}
