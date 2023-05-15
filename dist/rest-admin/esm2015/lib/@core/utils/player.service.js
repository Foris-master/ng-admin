import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Track {
}
export class PlayerService {
    constructor() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    random() {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    }
    next() {
        return this.getNextTrack();
    }
    prev() {
        return this.getPrevTrack();
    }
    getNextTrack() {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    }
    getPrevTrack() {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    }
}
PlayerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PlayerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PlayerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PlayerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PlayerService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvdXRpbHMvcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsTUFBTSxPQUFPLEtBQUs7Q0FLakI7QUFHRCxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUdFLGFBQVEsR0FBWTtZQUNsQjtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QixHQUFHLEVBQUUsd0VBQXdFO2dCQUM3RSxLQUFLLEVBQUUsMEJBQTBCO2FBQ2xDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLEdBQUcsRUFBRSx3RUFBd0U7Z0JBQzdFLEtBQUssRUFBRSwwQkFBMEI7YUFDbEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLEdBQUcsRUFBRSx3RUFBd0U7Z0JBQzdFLEtBQUssRUFBRSwwQkFBMEI7YUFDbEM7U0FDRixDQUFDO0tBa0NIO0lBaENDLE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OzBHQXREVSxhQUFhOzhHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFRyYWNrIHtcbiAgbmFtZSE6IHN0cmluZztcbiAgYXJ0aXN0ITogc3RyaW5nO1xuICB1cmwhOiBzdHJpbmc7XG4gIGNvdmVyITogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XG4gIGN1cnJlbnQhOiBudW1iZXI7XG4gIHBsYXlsaXN0OiBUcmFja1tdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdEb25cXCd0IFdhbm5hIEZpZ2h0JyxcbiAgICAgIGFydGlzdDogJ0FsYWJhbWEgU2hha2VzJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzYxNTZjZGJjYTQyNWE4OTQ5NzJjMDJmY2E5ZDc2YzBiNzBlMDAxYWYnLFxuICAgICAgY292ZXI6ICdhc3NldHMvaW1hZ2VzL2NvdmVyMS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhcmRlcicsXG4gICAgICBhcnRpc3Q6ICdEYWZ0IFB1bmsnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOTJhMDRjN2MwZTk2YmY5M2ExYjFiMWNhZTdkZmZmMTkyMTk2OWE3YicsXG4gICAgICBjb3ZlcjogJ2Fzc2V0cy9pbWFnZXMvY292ZXIyLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ29tZSBUb2dldGhlcicsXG4gICAgICBhcnRpc3Q6ICdCZWF0bGVzJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzgzMDkwYTRkYjY4OTllYWNhNjg5YWUzNWY2OTEyNmRiZTY1ZDk0YzknLFxuICAgICAgY292ZXI6ICdhc3NldHMvaW1hZ2VzL2NvdmVyMy5qcGcnLFxuICAgIH0sXG4gIF07XG5cbiAgcmFuZG9tKCk6IFRyYWNrIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXlsaXN0Lmxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXMucGxheWxpc3RbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIG5leHQoKTogVHJhY2sge1xuICAgIHJldHVybiB0aGlzLmdldE5leHRUcmFjaygpO1xuICB9XG5cbiAgcHJldigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmV2VHJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFRyYWNrKCk6IFRyYWNrIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBsYXlsaXN0W3RoaXMuY3VycmVudF07XG4gIH1cblxuICBwcml2YXRlIGdldFByZXZUcmFjaygpOiBUcmFjayB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wbGF5bGlzdC5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wbGF5bGlzdFt0aGlzLmN1cnJlbnRdO1xuICB9XG59XG4iXX0=