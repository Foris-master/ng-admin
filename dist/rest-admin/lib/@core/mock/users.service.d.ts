import { Observable } from 'rxjs';
import { Contacts, RecentUsers, UserData } from '../data/users';
import * as i0 from "@angular/core";
export declare class UserService extends UserData {
    private time;
    private users;
    private types;
    private contacts;
    private recentUsers;
    getUsers(): Observable<any>;
    getContacts(): Observable<Contacts[]>;
    getRecentUsers(): Observable<RecentUsers[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
