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
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(i0.ɵɵdirectiveInject(i1.NbDialogRef), i0.ɵɵdirectiveInject(i1.NbToastrService)); };
UploadFileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["ngx-upload-file"]], inputs: { datas: "datas", title: "title" }, decls: 11, vars: 2, consts: [["accent", "danger", 2, "width", "370px"], [3, "control"], [2, "display", "flex", "justify-content", "end"], [1, "buttons-row"], ["nbButton", "", "status", "danger", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "success", 3, "click"]], template: function UploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-card-body");
        i0.ɵɵelement(4, "file-upload", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nb-card-footer", 2);
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelementStart(7, "button", 4);
        i0.ɵɵlistener("click", function UploadFileComponent_Template_button_click_7_listener() { return ctx.close(); });
        i0.ɵɵtext(8, " Annuler ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵlistener("click", function UploadFileComponent_Template_button_click_9_listener() { return ctx.addDatas(); });
        i0.ɵɵtext(10, " Charger le fichier ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("control", ctx.control);
    } }, directives: [i1.NbCardComponent, i1.NbCardHeaderComponent, i1.NbCardBodyComponent, i2.FileUploadComponent, i1.NbCardFooterComponent, i1.NbButtonComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UploadFileComponent, [{
        type: Component,
        args: [{
                selector: "ngx-upload-file",
                templateUrl: "./upload-file.component.html",
                styleUrls: ["./upload-file.component.scss"],
            }]
    }], function () { return [{ type: i1.NbDialogRef }, { type: i1.NbToastrService }]; }, { datas: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixHQUNyQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7OztBQU83QixNQUFNLE9BQU8sbUJBQW1CO0lBb0I5QixZQUNZLEdBQXFDLEVBQ3ZDLGFBQThCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQWtDO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQWR4QyxjQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFFckMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNWLFlBQU8sR0FBRyxJQUFJLGlCQUFpQixDQUNwQztZQUNFLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLEVBQ0QsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQztJQUtDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxD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OEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs0RkFFVSxLQUFLO2tCQUFiLEtBQUs7WUFFTixLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgRmlsZVVwbG9hZENvbnRyb2wsXG4gIEZpbGVVcGxvYWRWYWxpZGF0b3JzLFxufSBmcm9tIFwiQGlwbGFiL25neC1maWxlLXVwbG9hZFwiO1xuaW1wb3J0IHtcbiAgTmJEaWFsb2dSZWYsXG4gIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbixcbiAgTmJUb2FzdHJTZXJ2aWNlLFxufSBmcm9tIFwiQG5lYnVsYXIvdGhlbWVcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtdXBsb2FkLWZpbGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi91cGxvYWQtZmlsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhczogYW55O1xuICBASW5wdXQoKVxuICB0aXRsZSE6IHN0cmluZztcbiAgZGF0YURvYzogYW55O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBhcnJheUJ1ZmZlcjogYW55O1xuICBwb3NpdGlvbnMgPSBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb247XG5cbiAgaXNTdWJtaXQgPSBmYWxzZTtcbiAgcHVibGljIGNvbnRyb2wgPSBuZXcgRmlsZVVwbG9hZENvbnRyb2woXG4gICAge1xuICAgICAgbGlzdFZpc2libGU6IHRydWUsXG4gICAgICBkaXNjYXJkSW52YWxpZDogdHJ1ZSxcbiAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICB9LFxuICAgIFtGaWxlVXBsb2FkVmFsaWRhdG9ycy5maWxlc0xpbWl0KDEpXVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPFVwbG9hZEZpbGVDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogTmJUb2FzdHJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKHZhbHVlczogQXJyYXk8RmlsZT4pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaWxlID0gdmFsdWVzWzBdO1xuXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGZpbGUubmFtZS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgY29uc3QgZXh0ID0gbmFtZVtuYW1lLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChleHQgPT0gXCJ4bHN4XCIgfHwgZXh0ID09IFwieGxzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgLyogY3JlYXRlIHdvcmtib29rICovXG4gICAgICAgICAgICAgIGNvbnN0IGJpbmFyeXN0cjogc3RyaW5nID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICBjb25zdCB3YjogWExTWC5Xb3JrQm9vayA9IFhMU1gucmVhZChiaW5hcnlzdHIsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJpbmFyeVwiLFxuICAgICAgICAgICAgICAgIGNlbGxEYXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLyogc2VsZWN0ZWQgdGhlIGZpcnN0IHNoZWV0ICovXG4gICAgICAgICAgICAgIGNvbnN0IHdzbmFtZTogc3RyaW5nID0gd2IuU2hlZXROYW1lc1swXTtcbiAgICAgICAgICAgICAgY29uc3Qgd3M6IFhMU1guV29ya1NoZWV0ID0gd2IuU2hlZXRzW3dzbmFtZV07XG5cbiAgICAgICAgICAgICAgLyogc2F2ZSBkYXRhICovXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od3MpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGFEb2MgPSBkYXRhO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QodGhpcy5wb3NpdGlvbnMuQk9UVE9NX0xFRlQsIFwiZGFuZ2VyXCIpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLmNsZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGFkZERhdGFzKCkge1xuICAgIHRoaXMucmVmLmNsb3NlKHRoaXMuZGF0YURvYyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnJlZi5jbG9zZSgpO1xuICB9XG5cbiAgc2hvd1RvYXN0KHBvc2l0aW9uOiBhbnksIHN0YXR1czogc3RyaW5nKSB7XG4gICAgdGhpcy50b2FzdHJTZXJ2aWNlLnNob3coc3RhdHVzIHx8IFwiRWNoZWNcIiwgYEZpY2hpZXIgbm9uIHByaXMgZW4gY2hhcmdlYCwge1xuICAgICAgcG9zaXRpb24sXG4gICAgICBzdGF0dXMsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuYi1jYXJkIGFjY2VudD1cImRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDM3MHB4XCI+XG4gIDxuYi1jYXJkLWhlYWRlcj57eyB0aXRsZSB9fTwvbmItY2FyZC1oZWFkZXI+XG5cbiAgPG5iLWNhcmQtYm9keT5cbiAgICA8ZmlsZS11cGxvYWQgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvZmlsZS11cGxvYWQ+XG4gIDwvbmItY2FyZC1ib2R5PlxuXG4gIDxuYi1jYXJkLWZvb3RlciBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZW5kXCI+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtcm93XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5iQnV0dG9uXG4gICAgICAgIChjbGljayk9XCJjbG9zZSgpXCJcbiAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIlxuICAgICAgPlxuICAgICAgICBBbm51bGVyXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiAoY2xpY2spPVwiYWRkRGF0YXMoKVwiIHN0YXR1cz1cInN1Y2Nlc3NcIj5cbiAgICAgICAgQ2hhcmdlciBsZSBmaWNoaWVyXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9uYi1jYXJkLWZvb3Rlcj5cbjwvbmItY2FyZD5cbiJdfQ==