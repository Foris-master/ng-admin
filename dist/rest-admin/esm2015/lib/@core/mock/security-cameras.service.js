import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { SecurityCamerasData } from '../data/security-cameras';
import * as i0 from "@angular/core";
export class SecurityCamerasService extends SecurityCamerasData {
    constructor() {
        super(...arguments);
        this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
    }
    getCamerasData() {
        return observableOf(this.cameras);
    }
}
SecurityCamerasService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SecurityCamerasService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
SecurityCamerasService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SecurityCamerasService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SecurityCamerasService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktY2FtZXJhcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0Bjb3JlL21vY2svc2VjdXJpdHktY2FtZXJhcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFVLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR3ZFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7SUFEL0Q7O1FBR1UsWUFBTyxHQUFhO1lBQzFCO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixNQUFNLEVBQUUsMkJBQTJCO2FBQ3BDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRSwyQkFBMkI7YUFDcEM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsTUFBTSxFQUFFLDJCQUEyQjthQUNwQztZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixNQUFNLEVBQUUsMkJBQTJCO2FBQ3BDO1NBQ0YsQ0FBQztLQUtIO0lBSEMsY0FBYztRQUNaLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOzttSEF2QlUsc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FtZXJhLCBTZWN1cml0eUNhbWVyYXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9zZWN1cml0eS1jYW1lcmFzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q2FtZXJhc1NlcnZpY2UgZXh0ZW5kcyBTZWN1cml0eUNhbWVyYXNEYXRhIHtcblxuICBwcml2YXRlIGNhbWVyYXM6IENhbWVyYVtdID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQ2FtZXJhICMxJyxcbiAgICAgIHNvdXJjZTogJ2Fzc2V0cy9pbWFnZXMvY2FtZXJhMS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDYW1lcmEgIzInLFxuICAgICAgc291cmNlOiAnYXNzZXRzL2ltYWdlcy9jYW1lcmEyLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NhbWVyYSAjMycsXG4gICAgICBzb3VyY2U6ICdhc3NldHMvaW1hZ2VzL2NhbWVyYTMuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ2FtZXJhICM0JyxcbiAgICAgIHNvdXJjZTogJ2Fzc2V0cy9pbWFnZXMvY2FtZXJhNC5qcGcnLFxuICAgIH0sXG4gIF07XG5cbiAgZ2V0Q2FtZXJhc0RhdGEoKTogT2JzZXJ2YWJsZTxDYW1lcmFbXT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5jYW1lcmFzKTtcbiAgfVxufVxuIl19