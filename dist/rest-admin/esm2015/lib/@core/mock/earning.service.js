import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { EarningData } from '../data/earning';
import * as i0 from "@angular/core";
export class EarningService extends EarningData {
    constructor() {
        super(...arguments);
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        this.ONE_DAY = 24 * 3600 * 1000;
        this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
    }
    getDefaultLiveChartData(elementsNumber) {
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map(item => this.generateRandomLiveChartData());
    }
    generateRandomLiveChartData() {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    }
    getEarningLiveUpdateCardData(currency) {
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        const newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return observableOf(data.liveChart);
    }
    getEarningCardData(currency) {
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return observableOf(data);
    }
    getEarningPieChartData() {
        return observableOf(this.pieChartData);
    }
}
EarningService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: EarningService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
EarningService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: EarningService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: EarningService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFybmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0Bjb3JlL21vY2svZWFybmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUE2QixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekUsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUFXO0lBRC9DOztRQUdVLGdCQUFXLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEMsWUFBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGlCQUFZLEdBQUc7WUFDckI7Z0JBQ0UsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsUUFBUTthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFVBQVU7YUFDakI7U0FDRixDQUFDO1FBRU0sd0JBQW1CLEdBQVE7WUFDakMsT0FBTyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxFQUFFO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsSUFBSTtvQkFDUixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNELE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUUsRUFBRTtnQkFDYixLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLEtBQUs7b0JBQ1QsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsV0FBVyxFQUFFLElBQUk7YUFDbEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxLQUFLO29CQUNULEtBQUssRUFBRSxFQUFFO2lCQUNWO2dCQUNELFdBQVcsRUFBRSxHQUFHO2FBQ2pCO1NBQ0YsQ0FBQztLQW1ESDtJQWpEQyx1QkFBdUIsQ0FBQyxjQUFzQjtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXpDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsMkJBQTJCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFaEUsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDekM7UUFFRCxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMO29CQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO29CQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDOUI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDRCQUE0QixDQUFDLFFBQWdCO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM5RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUVwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBZ0I7UUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzJHQWhHVSxjQUFjOytHQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGl2ZVVwZGF0ZUNoYXJ0LCBQaWVDaGFydCwgRWFybmluZ0RhdGEgfSBmcm9tICcuLi9kYXRhL2Vhcm5pbmcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWFybmluZ1NlcnZpY2UgZXh0ZW5kcyBFYXJuaW5nRGF0YSB7XG5cbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgY3VycmVudFZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDEwMDA7XG4gIHByaXZhdGUgT05FX0RBWSA9IDI0ICogMzYwMCAqIDEwMDA7XG5cbiAgcHJpdmF0ZSBwaWVDaGFydERhdGEgPSBbXG4gICAge1xuICAgICAgdmFsdWU6IDUwLFxuICAgICAgbmFtZTogJ0JpdGNvaW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IDI1LFxuICAgICAgbmFtZTogJ1RldGhlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogMjUsXG4gICAgICBuYW1lOiAnRXRoZXJldW0nLFxuICAgIH0sXG4gIF07XG5cbiAgcHJpdmF0ZSBsaXZlVXBkYXRlQ2hhcnREYXRhOiBhbnkgPSB7XG4gICAgYml0Y29pbjoge1xuICAgICAgbGl2ZUNoYXJ0OiBbXSxcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHVwOiB0cnVlLFxuICAgICAgICB2YWx1ZTogNCxcbiAgICAgIH0sXG4gICAgICBkYWlseUluY29tZTogNDU4OTUsXG4gICAgfSxcbiAgICB0ZXRoZXI6IHtcbiAgICAgIGxpdmVDaGFydDogW10sXG4gICAgICBkZWx0YToge1xuICAgICAgICB1cDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiA5LFxuICAgICAgfSxcbiAgICAgIGRhaWx5SW5jb21lOiA1ODYyLFxuICAgIH0sXG4gICAgZXRoZXJldW06IHtcbiAgICAgIGxpdmVDaGFydDogW10sXG4gICAgICBkZWx0YToge1xuICAgICAgICB1cDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiAyMSxcbiAgICAgIH0sXG4gICAgICBkYWlseUluY29tZTogNTg0LFxuICAgIH0sXG4gIH07XG5cbiAgZ2V0RGVmYXVsdExpdmVDaGFydERhdGEoZWxlbWVudHNOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDEwMDA7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShlbGVtZW50c051bWJlcikpXG4gICAgICAubWFwKGl0ZW0gPT4gdGhpcy5nZW5lcmF0ZVJhbmRvbUxpdmVDaGFydERhdGEoKSk7XG4gIH1cblxuICBnZW5lcmF0ZVJhbmRvbUxpdmVDaGFydERhdGEoKSB7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCt0aGlzLmN1cnJlbnREYXRlICsgdGhpcy5PTkVfREFZKTtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlICsgTWF0aC5yYW5kb20oKSAqIDIwIC0gMTE7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUgPCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBbXG4gICAgICAgIFtcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBdLmpvaW4oJy8nKSxcbiAgICAgICAgTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnRWYWx1ZSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRFYXJuaW5nTGl2ZVVwZGF0ZUNhcmREYXRhKGN1cnJlbmN5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMubGl2ZVVwZGF0ZUNoYXJ0RGF0YVtjdXJyZW5jeS50b0xvd2VyQ2FzZSgpXTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21MaXZlQ2hhcnREYXRhKCk7XG5cbiAgICBkYXRhLmxpdmVDaGFydC5zaGlmdCgpO1xuICAgIGRhdGEubGl2ZUNoYXJ0LnB1c2gobmV3VmFsdWUpO1xuXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZihkYXRhLmxpdmVDaGFydCk7XG4gIH1cblxuICBnZXRFYXJuaW5nQ2FyZERhdGEoY3VycmVuY3k6IHN0cmluZyk6IE9ic2VydmFibGU8TGl2ZVVwZGF0ZUNoYXJ0PiB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMubGl2ZVVwZGF0ZUNoYXJ0RGF0YVtjdXJyZW5jeS50b0xvd2VyQ2FzZSgpXTtcblxuICAgIGRhdGEubGl2ZUNoYXJ0ID0gdGhpcy5nZXREZWZhdWx0TGl2ZUNoYXJ0RGF0YSgxNTApO1xuXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZihkYXRhKTtcbiAgfVxuXG4gIGdldEVhcm5pbmdQaWVDaGFydERhdGEoKTogT2JzZXJ2YWJsZTxQaWVDaGFydFtdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnBpZUNoYXJ0RGF0YSk7XG4gIH1cbn1cbiJdfQ==