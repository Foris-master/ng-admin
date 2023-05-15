import { Component, Input } from "@angular/core";
import { FileUploadControl, FileUploadValidators, } from "@iplab/ngx-file-upload";
import { NbGlobalPhysicalPosition, } from "@nebular/theme";
import * as XLSX from "xlsx";
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@iplab/ngx-file-upload";
export class UploadFileComponent {
    constructor(ref, toastrService) {
        this.ref = ref;
        this.toastrService = toastrService;
        this.positions = NbGlobalPhysicalPosition;
        this.isSubmit = false;
        this.control = new FileUploadControl({
            listVisible: true,
            discardInvalid: true,
            multiple: false,
        }, [FileUploadValidators.filesLimit(1)]);
    }
    ngOnInit() {
        this.subscription = this.control.valueChanges.subscribe((values) => {
            if (values != undefined && values.length > 0) {
                const file = values[0];
                const name = file.name.split(".");
                const ext = name[name.length - 1];
                if (ext == "xlsx" || ext == "xls") {
                    const reader = new FileReader();
                    reader.readAsBinaryString(file);
                    reader.onload = (e) => {
                        /* create workbook */
                        const binarystr = e.target.result;
                        const wb = XLSX.read(binarystr, {
                            type: "binary",
                            cellDates: true,
                        });
                        /* selected the first sheet */
                        const wsname = wb.SheetNames[0];
                        const ws = wb.Sheets[wsname];
                        /* save data */
                        const data = XLSX.utils.sheet_to_json(ws);
                        this.dataDoc = data;
                    };
                }
                else {
                    this.showToast(this.positions.BOTTOM_LEFT, "danger");
                    this.control.clear();
                }
            }
        });
    }
    addDatas() {
        this.ref.close(this.dataDoc);
    }
    close() {
        this.ref.close();
    }
    showToast(position, status) {
        this.toastrService.show(status || "Echec", `Fichier non pris en charge`, {
            position,
            status,
        });
    }
}
UploadFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UploadFileComponent, deps: [{ token: i1.NbDialogRef }, { token: i1.NbToastrService }], target: i0.ɵɵFactoryTarget.Component });
UploadFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: UploadFileComponent, selector: "ngx-upload-file", inputs: { datas: "datas", title: "title" }, ngImport: i0, template: "<nb-card accent=\"danger\" style=\"width: 370px\">\n  <nb-card-header>{{ title }}</nb-card-header>\n\n  <nb-card-body>\n    <file-upload [control]=\"control\"></file-upload>\n  </nb-card-body>\n\n  <nb-card-footer style=\"display: flex; justify-content: end\">\n    <div class=\"buttons-row\">\n      <button\n        nbButton\n        (click)=\"close()\"\n        status=\"danger\"\n        style=\"margin-right: 10px\"\n      >\n        Annuler\n      </button>\n\n      <button nbButton (click)=\"addDatas()\" status=\"success\">\n        Charger le fichier\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: [""], components: [{ type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2.FileUploadComponent, selector: "file-upload:not([simple])", inputs: ["control", "animation", "multiple"] }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UploadFileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-upload-file",
                    templateUrl: "./upload-file.component.html",
                    styleUrls: ["./upload-file.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDialogRef }, { type: i1.NbToastrService }]; }, propDecorators: { datas: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixHQUNyQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7OztBQU83QixNQUFNLE9BQU8sbUJBQW1CO0lBb0I5QixZQUNZLEdBQXFDLEVBQ3ZDLGFBQThCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQWtDO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQWR4QyxjQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFFckMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNWLFlBQU8sR0FBRyxJQUFJLGlCQUFpQixDQUNwQztZQUNFLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLEVBQ0QsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQztJQUtDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3JELENBQUMsTUFBbUIsRUFBRSxFQUFFO1lBQ3RCLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNqQyxNQUFNLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO29CQUM1QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTt3QkFDekIscUJBQXFCO3dCQUNyQixNQUFNLFNBQVMsR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUMsTUFBTSxFQUFFLEdBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUM3QyxJQUFJLEVBQUUsUUFBUTs0QkFDZCxTQUFTLEVBQUUsSUFBSTt5QkFDaEIsQ0FBQyxDQUFDO3dCQUVILDhCQUE4Qjt3QkFDOUIsTUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsTUFBTSxFQUFFLEdBQW1CLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRTdDLGVBQWU7d0JBQ2YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDdEI7YUFDRjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBYSxFQUFFLE1BQWM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRTtZQUN2RSxRQUFRO1lBQ1IsTUFBTTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7O2dIQTFFVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixtR0NsQmhDLGtuQkF3QkE7MkZETmEsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1QztnSUFFVSxLQUFLO3NCQUFiLEtBQUs7Z0JBRU4sS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEZpbGVVcGxvYWRDb250cm9sLFxuICBGaWxlVXBsb2FkVmFsaWRhdG9ycyxcbn0gZnJvbSBcIkBpcGxhYi9uZ3gtZmlsZS11cGxvYWRcIjtcbmltcG9ydCB7XG4gIE5iRGlhbG9nUmVmLFxuICBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24sXG4gIE5iVG9hc3RyU2VydmljZSxcbn0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibmd4LXVwbG9hZC1maWxlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdXBsb2FkLWZpbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3VwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YXM6IGFueTtcbiAgQElucHV0KClcbiAgdGl0bGUhOiBzdHJpbmc7XG4gIGRhdGFEb2M6IGFueTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgYXJyYXlCdWZmZXI6IGFueTtcbiAgcG9zaXRpb25zID0gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uO1xuXG4gIGlzU3VibWl0ID0gZmFsc2U7XG4gIHB1YmxpYyBjb250cm9sID0gbmV3IEZpbGVVcGxvYWRDb250cm9sKFxuICAgIHtcbiAgICAgIGxpc3RWaXNpYmxlOiB0cnVlLFxuICAgICAgZGlzY2FyZEludmFsaWQ6IHRydWUsXG4gICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgfSxcbiAgICBbRmlsZVVwbG9hZFZhbGlkYXRvcnMuZmlsZXNMaW1pdCgxKV1cbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmVmOiBOYkRpYWxvZ1JlZjxVcGxvYWRGaWxlQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHRvYXN0clNlcnZpY2U6IE5iVG9hc3RyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICh2YWx1ZXM6IEFycmF5PEZpbGU+KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZXMgIT0gdW5kZWZpbmVkICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZmlsZSA9IHZhbHVlc1swXTtcblxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBmaWxlLm5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IG5hbWVbbmFtZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoZXh0ID09IFwieGxzeFwiIHx8IGV4dCA9PSBcInhsc1wiKSB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIC8qIGNyZWF0ZSB3b3JrYm9vayAqL1xuICAgICAgICAgICAgICBjb25zdCBiaW5hcnlzdHI6IHN0cmluZyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgY29uc3Qgd2I6IFhMU1guV29ya0Jvb2sgPSBYTFNYLnJlYWQoYmluYXJ5c3RyLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJiaW5hcnlcIixcbiAgICAgICAgICAgICAgICBjZWxsRGF0ZXM6IHRydWUsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8qIHNlbGVjdGVkIHRoZSBmaXJzdCBzaGVldCAqL1xuICAgICAgICAgICAgICBjb25zdCB3c25hbWU6IHN0cmluZyA9IHdiLlNoZWV0TmFtZXNbMF07XG4gICAgICAgICAgICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IHdiLlNoZWV0c1t3c25hbWVdO1xuXG4gICAgICAgICAgICAgIC8qIHNhdmUgZGF0YSAqL1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdzKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhRG9jID0gZGF0YTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KHRoaXMucG9zaXRpb25zLkJPVFRPTV9MRUZULCBcImRhbmdlclwiKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBhZGREYXRhcygpIHtcbiAgICB0aGlzLnJlZi5jbG9zZSh0aGlzLmRhdGFEb2MpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5yZWYuY2xvc2UoKTtcbiAgfVxuXG4gIHNob3dUb2FzdChwb3NpdGlvbjogYW55LCBzdGF0dXM6IHN0cmluZykge1xuICAgIHRoaXMudG9hc3RyU2VydmljZS5zaG93KHN0YXR1cyB8fCBcIkVjaGVjXCIsIGBGaWNoaWVyIG5vbiBwcmlzIGVuIGNoYXJnZWAsIHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgc3RhdHVzLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmItY2FyZCBhY2NlbnQ9XCJkYW5nZXJcIiBzdHlsZT1cIndpZHRoOiAzNzBweFwiPlxuICA8bmItY2FyZC1oZWFkZXI+e3sgdGl0bGUgfX08L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWJvZHk+XG4gICAgPGZpbGUtdXBsb2FkIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2ZpbGUtdXBsb2FkPlxuICA8L25iLWNhcmQtYm9keT5cblxuICA8bmItY2FyZC1mb290ZXIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLXJvd1wiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBuYkJ1dHRvblxuICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCJcbiAgICAgID5cbiAgICAgICAgQW5udWxlclxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gbmJCdXR0b24gKGNsaWNrKT1cImFkZERhdGFzKClcIiBzdGF0dXM9XCJzdWNjZXNzXCI+XG4gICAgICAgIENoYXJnZXIgbGUgZmljaGllclxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1mb290ZXI+XG48L25iLWNhcmQ+XG4iXX0=