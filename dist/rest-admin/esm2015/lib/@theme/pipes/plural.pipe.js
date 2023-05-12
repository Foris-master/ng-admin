import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.ɵfac = function PluralPipe_Factory(t) { return new (t || PluralPipe)(); };
PluralPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxPlural", type: PluralPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PluralPipe, [{
        type: Pipe,
        args: [{ name: 'ngxPlural' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL3BpcGVzL3BsdXJhbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxjQUFzQixFQUFFO1FBQzlELEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxLQUFLLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNyQixDQUFDLENBQUMsV0FBVztnQkFDWCxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksV0FBVyxFQUFFO2dCQUMzQixDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUM7SUFDN0IsQ0FBQzs7b0VBVFUsVUFBVTs0RUFBVixVQUFVO3VGQUFWLFVBQVU7Y0FEdEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnbmd4UGx1cmFsJyB9KVxuZXhwb3J0IGNsYXNzIFBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgbGFiZWw6IHN0cmluZywgcGx1cmFsTGFiZWw6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBpbnB1dCA9IGlucHV0IHx8IDA7XG4gICAgcmV0dXJuIGlucHV0ID09PSAxXG4gICAgICA/IGAke2lucHV0fSAke2xhYmVsfWBcbiAgICAgIDogcGx1cmFsTGFiZWxcbiAgICAgICAgPyBgJHtpbnB1dH0gJHtwbHVyYWxMYWJlbH1gXG4gICAgICAgIDogYCR7aW5wdXR9ICR7bGFiZWx9c2A7XG4gIH1cbn1cbiJdfQ==