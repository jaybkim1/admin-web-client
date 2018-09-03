import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {

    isUserAuthenticated: string = '';

    constructor() {
        this.isUserAuthenticated = 'false';
    }

}