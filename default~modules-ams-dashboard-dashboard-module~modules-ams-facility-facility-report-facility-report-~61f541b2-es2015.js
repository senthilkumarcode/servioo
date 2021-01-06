(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-ams-facility-facility-report-facility-report-~61f541b2"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n    \t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n                <mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n                    <div class=\"helpdesk-filter-drawer p-5\">\n                        <div class=\"title row\">\n                            <h4> Filter By </h4>\n                            <div class=\"ml-auto\">\n                                <button mat-icon-button (click)=\"goBack()\">\n                                    <mat-icon [svgIcon]=\"'close'\"></mat-icon>\n                                </button>\n                            </div>\n                        </div>\n                        <condo-card>\n                            <div CondoCardHeader>\n                \n                                <form>\n                \n                                        <div class=\"filter-box cleafix\">\n                                                <div class=\"row align-items-center mb-4\">\n                                                    \n                                            \n                                                        <button mat-flat-button class=\"mr-3 mb-2\" [ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllBlockData('all')\">All\n                                                            Towers</button>\n                                                        <button mat-flat-button [ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n                                                        <mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleBlockActions=\"matMenu\">\n                                                            <ng-container *ngFor=\"let block of unitBlocksData\">\n                                                                <button mat-menu-item (click)=\"getSingleBlock(block)\">\n                                                                    {{block.apartmentBlockNumber}}\n                                                                </button>\n                                                            </ng-container>\n                                                        </mat-menu>\n                                            \n                                                        \n                                                    \n                                                </div>\n                                            </div>\n                                \n                \n                                </form>\n                            </div>\n                        </condo-card>\n                    \n                    </div>\n                </mat-drawer>\n                <mat-drawer-content>\n    <div class=\"main\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n    <condo-card *ngIf=\"isDataLoaded && (isListOfFacilitiesBookingCount())\">\n        <div CondoCardHeader>\n        \n                <div class=\"d-flex\">\n                    <div class=\"float-right\" *ngIf=\"!allLink\">\n                \n                        <a href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports\" routerLinkActive=\"active\"\n                            [routerLinkActiveOptions]=\"{exact:true}\">\n                            <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n                \n                        </a>\n                \n                    </div>\n                </div>\n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <!-- <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div> -->\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofBookedFacilities())\">\n        <div CondoCardHeader>\n        \n                <div class=\"d-flex\">\n                        <div class=\"float-right\" *ngIf=\"!allLink\">\n                    \n                            <a href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports\" routerLinkActive=\"active\"\n                                [routerLinkActiveOptions]=\"{exact:true}\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n                    \n                            </a>\n                    \n                        </div>\n                    </div>\n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <!-- <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div> -->\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofPendingBooked())\">\n        <div CondoCardHeader>\n        \n                <div class=\"d-flex\">\n                        <div class=\"float-right\" *ngIf=\"!allLink\">\n                    \n                            <a href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports\" routerLinkActive=\"active\"\n                                [routerLinkActiveOptions]=\"{exact:true}\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n                    \n                            </a>\n                    \n                        </div>\n                    </div>\n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <!-- <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div> -->\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofFacilityBookingRejected())\">\n        <div CondoCardHeader>\n        \n                <div class=\"d-flex\">\n                        <div class=\"float-right\" *ngIf=\"!allLink\">\n                    \n                            <a href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports\" routerLinkActive=\"active\"\n                                [routerLinkActiveOptions]=\"{exact:true}\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n                    \n                            </a>\n                    \n                        </div>\n                    </div>\n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <!-- <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div> -->\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofcancelledbooking())\">\n        <div CondoCardHeader>\n        \n                <div class=\"d-flex\">\n                        <div class=\"float-right\" *ngIf=\"!allLink\">\n                    \n                            <a href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports\" routerLinkActive=\"active\"\n                                [routerLinkActiveOptions]=\"{exact:true}\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n                    \n                            </a>\n                    \n                        </div>\n                    </div>\n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <!-- <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div> -->\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    </div>\n\n</mat-drawer-content>\n</mat-drawer-container>\n    \n    </div>");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LXJlcG9ydC9mYWNpbGl0eS1yZXBvcnRzL2ZhY2lsaXR5LXJlcG9ydC1kYXRhL2ZhY2lsaXR5LXJlcG9ydC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: FacilityReportDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityReportDataComponent", function() { return FacilityReportDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var _ui_select_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");













let FacilityReportDataComponent = class FacilityReportDataComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, sessionService, ticketService, facilityService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.ticketService = ticketService;
        this.facilityService = facilityService;
        this.pageName = "";
        this.pageDesp = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isDataLoaded = false;
        this.blockId = parseInt(localStorage.getItem('apartmentBlockID'));
        this.blockNo = "All Blocks";
        this.allLink = false;
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    isListOfResidents() {
        return this.pageName == "List of Residents";
    }
    isListOfFacilitiesBookingCount() {
        return this.pageName == "List of Facilities Booking count";
    }
    isListofBookedFacilities() {
        return this.pageName == "List of Booked Facilities";
    }
    isListofPendingBooked() {
        return this.pageName == "Facility booking, approval pending";
    }
    isListofFacilityBookingRejected() {
        return this.pageName == "Facility booking, Rejected";
    }
    isListofcancelledbooking() {
        return this.pageName == "List of cancelled booking";
    }
    isListofAgedtickets() {
        return this.pageName == "List of Aged tickets";
    }
    isListofUnassignedtickets() {
        return this.pageName == "List of Unassigned tickets";
    }
    isListOfApprovedUsers() {
        return this.pageName == "List of Approved Users";
    }
    isListOfDeactivatedUsers() {
        return this.pageName == "List of De-activated Users";
    }
    isListOfResidentsVehicleInfo() {
        return this.pageName == "List of Residents Vehicle Info";
    }
    isListOfExpiringRental() {
        return this.pageName == "List of Expiring Rental  Lease Agreements";
    }
    isListOfUsersWithPets() {
        return this.pageName == "List of Users with Pets";
    }
    isListOfUnits() {
        return this.pageName == "List of Units";
    }
    isListOfBlocks() {
        return this.pageName == "List of Blocks";
    }
    isListOfOwners() {
        return this.pageName == "List of Owners";
    }
    isListOfTenants() {
        return this.pageName == "List of Tenants";
    }
    isListOfAdmins() {
        return this.pageName == "List of Admins";
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.time);
    }
    getSelectedType(event) {
        this.blockId = event[0].apartmentBlockId;
        this.blockNo = event[0].apartmentBlockId;
        if (this.blockId != "" && this.blockId != null) {
            let filterGroup = new jqx.filter();
            let filterOperator = 1;
            let filterValue = event[0].apartmentBlockNumber;
            let filterCondition = 'contains';
            let filterData = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            filterGroup.operator = 'or';
            filterGroup.addfilter(filterOperator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield === 'blockNo') {
                    this.datagrid.addfilter(item.datafield, filterGroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    onSearchFilter() {
        if (this.userReportData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.userReportData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    getBlockDetails() {
        //jqx column generating
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.isDataLoaded = false;
        if (this.isListOfFacilitiesBookingCount()) {
            this.columnData = [{
                    text: 'Facility Name',
                    datafield: 'facilityName',
                    width: 300,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Facility Booking Count',
                    datafield: 'facilityBookingCount',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var details = {
                apartmentId: this.sessionService.apartmentId
            };
            this.facilityService.getReportsFacilityBookingCount(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.totalItems = this.userReportDataList.length;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofBookedFacilities()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofPendingBooked()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var facilitydetails = {
                apartmentId: this.sessionService.apartmentId,
                apartmentFacilityID: 0,
                facilityBookingStatusID: 0,
                bookedOn_From: null,
                bookedOn_To: null,
                eventDate_From: null,
                eventDate_To: null,
            };
            //   var paramdetails = {
            //     ApartmentID: this.sessionService.apartmentId,
            //     ApartmentBlockID: this.sessionService.apartmentBlockID,
            //     FacilityTypeID: 184
            //   }
            // this.facilityService.getReportsFacilityForPendingBookedFacilityMultiFilter(paramdetails).subscribe((res: any) => {
            // 	let gridSourceData = {
            // 		localdata: res,
            // 		datatype: "array"
            // 	}
            // 	this.userReportDataList = new jqx.dataAdapter(gridSourceData);
            // 	this.isDataLoaded = true;
            // 	this.showItems();
            // })
            this.facilityService.getApartmentFacilityBookingsByApartmentId(facilitydetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofFacilityBookingRejected()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForRejectedBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofcancelledbooking()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForCancelledBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        // else if (this.isListofUnassignedtickets()) {
        // 	this.columnData = [{
        // 		text: 'User Name',
        // 		datafield: 'userName',
        // 		width: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Block Number',
        // 		datafield: 'blockNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Unit Number',
        // 		datafield: 'unitNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Ticket Type',
        // 		datafield: 'ticketType',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'User Type',
        // 		datafield: 'userTypeName',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Subject',
        // 		datafield: 'subject',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Ticket Priority',
        // 		datafield: 'ticketPriority',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	}
        // 	];
        // 	this.userService.getReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe((res: any) => {
        // 		let gridSourceData = {
        // 			localdata: res,
        // 			datatype: "array"
        // 		}
        // 		this.userReportDataList = new jqx.dataAdapter(gridSourceData);
        // 		this.isDataLoaded = true;
        // 		this.showItems();
        // 	})
        // }
        // else if (this.isListOfDeactivatedUsers()) {
        // 	this.columnData = [{
        // 		text: 'User Name',
        // 		datafield: 'unitUserName',
        // 		width: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Block Number',
        // 		datafield: 'blockNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Unit Number',
        // 		datafield: 'unitNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Email Id',
        // 		datafield: 'emailID',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'User Type',
        // 		datafield: 'userTypeName',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Mobile',
        // 		datafield: 'mobile',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	}
        // 	];
        // 	this.userService.getReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe((res: any) => {
        // 		let gridSourceData = {
        // 			localdata: res,
        // 			datatype: "array"
        // 		}
        // 		this.userReportDataList = new jqx.dataAdapter(gridSourceData);
        // 		this.isDataLoaded = true;
        // 		this.showItems();
        // 	})
        // }
        // else if (this.isListOfResidentsVehicleInfo()) {
        // 	this.columnData = [{
        // 		text: 'User Name',
        // 		datafield: 'unitUserName',
        // 		width: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Block Number',
        // 		datafield: 'blockNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Unit Number',
        // 		datafield: 'unitNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Vehicle Number',
        // 		datafield: 'vehicleNumber',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Vehicle Model',
        // 		datafield: 'vehicleModel',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Email Id',
        // 		datafield: 'emailID',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Mobile',
        // 		datafield: 'mobile',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	}
        // 	];
        // 	this.userService.getReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe((res: any) => {
        // 		let gridSourceData = {
        // 			localdata: res,
        // 			datatype: "array"
        // 		}
        // 		this.userReportDataList = new jqx.dataAdapter(gridSourceData);
        // 		this.isDataLoaded = true;
        // 		this.showItems();
        // 	})
        // }
    }
    showItems() {
        this.totalItems = this.userReportDataList["_source"].localdata.length;
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
        }
        else {
            this.ItemEndIndex = this.totalItems;
        }
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        this.pageName = this.route.params['value'].name;
        this.allLink = this.route.params['value'].link;
        let unitBlockParams = {
            apartmentId: this.sessionService.apartmentId
        };
        this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe((res) => {
            this.unitBlocksData = res;
        });
        // let params = {
        // 	LookupTypeId: 87
        // }
        // this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res: any) => {
        // 	var data = res.filter(item => {
        // 		return item.lookupValueId == this.route.params['value'].id
        // 	})
        // 	this.pageName = data[0].lookupValueName.replace('/', '');
        // 	this.pageDesp = data[0].description;
        // });
        this.getBlockDetails();
    }
};
FacilityReportDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_11__["FacilityService"] }
];
FacilityReportDataComponent.propDecorators = {
    gridResident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gridResident', { static: false },] }],
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }]
};
FacilityReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-report-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-report-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.html")).default,
        providers: [_ui_select_select_module__WEBPACK_IMPORTED_MODULE_12__["SelectModule"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-report-data.component.scss */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_11__["FacilityService"]])
], FacilityReportDataComponent);



/***/ })

}]);
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-ams-facility-facility-report-facility-report-~61f541b2-es2015.js.map