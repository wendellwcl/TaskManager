import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FormatDateService {
    public stringToLocaleDateString(initialDate: string) {
        const date = new Date(initialDate);

        const day = date.getDate() + 1;
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return new Date(`${year}-${month}-${day}`).toLocaleDateString();
    }
}
