import { Component, Input, OnInit } from "@angular/core";
import {
  FileUploadControl,
  FileUploadValidators,
} from "@iplab/ngx-file-upload";
import {
  NbDialogRef,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from "@nebular/theme";
import { Subscription } from "rxjs";
import * as XLSX from "xlsx";

@Component({
  selector: "ngx-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.scss"],
})
export class UploadFileComponent implements OnInit {
  @Input() datas: any;
  @Input() title: string;
  dataDoc: any;

  private subscription: Subscription;
  arrayBuffer: any;
  positions = NbGlobalPhysicalPosition;

  isSubmit = false;
  public control = new FileUploadControl(
    {
      listVisible: true,
      discardInvalid: true,
      multiple: false,
    },
    [FileUploadValidators.filesLimit(1)]
  );

  constructor(
    protected ref: NbDialogRef<UploadFileComponent>,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.subscription = this.control.valueChanges.subscribe(
      (values: Array<File>) => {
        if (values != undefined && values.length > 0) {
          const file = values[0];

          const name = file.name.split(".");
          const ext = name[name.length - 1];
          if (ext == "xlsx" || ext == "xls") {
            const reader: FileReader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = (e: any) => {
              /* create workbook */
              const binarystr: string = e.target.result;
              const wb: XLSX.WorkBook = XLSX.read(binarystr, {
                type: "binary",
                cellDates: true,
              });

              /* selected the first sheet */
              const wsname: string = wb.SheetNames[0];
              const ws: XLSX.WorkSheet = wb.Sheets[wsname];

              /* save data */
              const data = XLSX.utils.sheet_to_json(ws);
              this.dataDoc = data;
            };
          } else {
            this.showToast(this.positions.BOTTOM_LEFT, "danger");
            this.control.clear();
          }
        }
      }
    );
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
