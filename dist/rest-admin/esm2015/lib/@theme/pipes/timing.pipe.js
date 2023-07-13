import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TimingPipe {
    transform(time) {
        if (time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.ɵfac = function TimingPipe_Factory(t) { return new (t || TimingPipe)(); };
TimingPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timing", type: TimingPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimingPipe, [{
        type: Pipe,
        args: [{ name: 'timing' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL3BpcGVzL3RpbWluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsSUFBWTtRQUNwQixJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLFFBQVEsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7b0VBYlUsVUFBVTt5RUFBVixVQUFVO3VGQUFWLFVBQVU7Y0FEdEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAndGltaW5nJyB9KVxuZXhwb3J0IGNsYXNzIFRpbWluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHRpbWUpIHtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lICUgNjApO1xuICAgICAgcmV0dXJuIGAke3RoaXMuaW5pdFplcm8obWludXRlcyl9JHttaW51dGVzfToke3RoaXMuaW5pdFplcm8oc2Vjb25kcyl9JHtzZWNvbmRzfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuICcwMDowMCc7XG4gIH1cblxuICBwcml2YXRlIGluaXRaZXJvKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpbWUgPCAxMCA/ICcwJyA6ICcnO1xuICB9XG59XG4iXX0=