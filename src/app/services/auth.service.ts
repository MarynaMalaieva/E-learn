import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

const TOKEN_KEY = "token-auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public setToken(token: string) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    }

    public getHeaders(): HttpHeaders {
        return new HttpHeaders(`Authorization: Bearer ${this.getToken()}`);
    }
}
