import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class ItemService {
    constructor(private http: Http){
        
    }

    getItems(): Observable<Item[]> {
        return this.http
            .get(`https://swapi.co/api/people/`)
            .map(response => response.json())
            .map(data => {
                return data.results.map((p, index) => ({
                    id: index + 1,
                    name: p.name,
                    role: p.birth_year
                }));
            });
    }

    getItem(id: number): Observable<Item> {
        return this.http
            .get(`https://swapi.co/api/people/${id}/`)
            .map(response => response.json())
            .map(p => ({
                id: id,
                name: p.name,
                role: p.birth_year
            }));
    }
}
