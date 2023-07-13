import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.ɵfac = function NumberWithCommasPipe_Factory(t) { return new (t || NumberWithCommasPipe)(); };
NumberWithCommasPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxNumberWithCommas", type: NumberWithCommasPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberWithCommasPipe, [{
        type: Pipe,
        args: [{ name: 'ngxNumberWithCommas' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXdpdGgtY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL3BpcGVzL251bWJlci13aXRoLWNvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7O3dGQUpVLG9CQUFvQjtnR0FBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICduZ3hOdW1iZXJXaXRoQ29tbWFzJyB9KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpdGhDb21tYXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQoaW5wdXQpO1xuICB9XG59XG4iXX0=