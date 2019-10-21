import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationService } from "primeng/api";
import { OrganizationdataService } from "../organizationdata.service";
import { Organization } from "./organization";
import * as _ from "lodash";

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.css"]
})
export class OrganizationComponent implements OnInit {
  selectedOrganizationOption: string;
  arr: Organization[] = [];
  id: number;
  name: string;
  description: string;
  isactive: boolean;
  updatedItem: string;
  search: string;
  searchstr:string;
  // msg = "Are You Sure!";
   config: any;
   collection = [];
  constructor(
    private modalService: NgbModal,
    private _data: OrganizationdataService,
    private confirmationService: ConfirmationService,

  ) {
    this.config = {
    itemsPerPage: 5,
    currentPage: 2,
    totalItems: this.collection.length
  };
}

  ngOnInit() {
    this.getOrganization();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  getOrganization() {
    this._data.getAllOrganizations().subscribe((data: Organization[]) => {
      this.arr = data;
    });
  }
  // Add modal
  openAdd(content, passedTitle) {
    this.selectedOrganizationOption = passedTitle;
    this.name = "";
    this.description = "";
    this.isactive=null;
    var req = {
      backdrop: false
    };
    this.modalService.open(content, req);
  }
  onFormSubmit(f) {
    if (this.selectedOrganizationOption == "Add") {
      console.log(this.id);
      this._data.addOrganization(f.value).subscribe((data: any) => {
        // console.log(f.value);
        alert("Successfully added!!!")

        this.getOrganization();
      });

    } else {
      console.log(f.value);
      console.log(f.value.Name);
      console.log(f.value.Isactive);
      var req = {
        id: this.id,
          description: f.value.Description,
          name: f.value.Name,
          isactive:f.value.Isactive
      };
      console.log(req);

      this._data.editOrganization(req).subscribe((data: any) => {
        alert("updated");
        this.getOrganization();
      });
    }


    this.modalService.dismissAll();
  }

  // Edit modal popup
  openEdit(content, passedTitle, i, arr) {
    this.selectedOrganizationOption = passedTitle;
    console.log(arr.id);
    this.id = arr.id;
  this.name = arr.name;
  this.description =arr.description;
  this.isactive=arr.isactive;

    this.updatedItem = i;

    this.modalService.open(content);
  }

  onOrgDelete(id:number) {
console.log(this.id);
    this._data.deleteOrganization(id).subscribe((data: any) => {
      // alert('successfully deleted');
      this.ngOnInit();
    });
  }

  onSearch(value) {
    console.log(value);
    if (!_.isEmpty(value)) {
        var arry = this.arr.filter(
            x => x.name.indexOf(value) != -1
        );
        this.arr = _.forEach(this.arr, f => {

            var m = _.some(f.name, el => _.includes(value, el));
            if (m == false) {
                return f;
            }
        });
    } else {
        this._data.getAllOrganizations().subscribe(
            (data:  Organization[]) => {
                this.arr = data;
            },
            function(error) {
                this.getOrganization();
            }
        );
    }
}

  confirmDelete(id: number) {

    this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.onOrgDelete(id);
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

}
