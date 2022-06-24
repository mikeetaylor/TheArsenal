(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/0FR":
/*!*****************************************************************!*\
  !*** ./src/app/layout/roster-layout/roster-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: RosterLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterLayoutComponent", function() { return RosterLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ "fp1T");




class RosterLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
RosterLayoutComponent.ɵfac = function RosterLayoutComponent_Factory(t) { return new (t || RosterLayoutComponent)(); };
RosterLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RosterLayoutComponent, selectors: [["roster-layout"]], decls: 3, vars: 0, template: function RosterLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mikee\dev\TheArsenal\App\src\main.ts */"zUnb");


/***/ }),

/***/ "0yWK":
/*!************************************************************!*\
  !*** ./src/app/cards/player-card/player-card.component.ts ***!
  \************************************************************/
/*! exports provided: PlayerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCardComponent", function() { return PlayerCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/player.service */ "QIP1");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










class PlayerCardComponent {
    constructor(dialogBox, _playerService, _YearService, _breakpointObserver) {
        this.dialogBox = dialogBox;
        this._playerService = _playerService;
        this._YearService = _YearService;
        this._breakpointObserver = _breakpointObserver;
        this.competitionName = 'Team Roster';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._playerService.formData.PlayerID;
        this.position = this._playerService.formData.Position;
        this.firstName = this._playerService.formData.FirstName;
        this.lastName = this._playerService.formData.LastName;
        this.appearances = this._playerService.formData.Appearances;
        this.goals = this._playerService.formData.Goals;
        this.assists = this._playerService.formData.Assists;
        this.cleanSheets = this._playerService.formData.CleanSheets;
        this.country = this._playerService.formData.Country.toLowerCase();
        this.imageName = this._playerService.formData.ImageName;
        this.totalPlayers = this._playerService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this.nextButtonIsDisabled = false;
        this.prevButtonIsDisabled = false;
        this._playerService.listen().subscribe();
    }
    ngOnInit() {
        this._breakpointObserver
            .observe(['(min-width: 500px)'])
            .subscribe((state) => {
            if (state.matches) {
                console.log('Viewport width is 560px or greater!');
            }
            else {
                console.log('Viewport width is less than 560px!');
            }
        });
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._playerService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._playerService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    nextCompetition() {
        this.competitionName = 'English Premier League';
    }
    onClose() {
        this.dialogBox.close();
    }
}
PlayerCardComponent.ɵfac = function PlayerCardComponent_Factory(t) { return new (t || PlayerCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
PlayerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerCardComponent, selectors: [["player-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem", 3, "click"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function PlayerCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerCardComponent_Template_span_click_17_listener() { return ctx.nextCompetition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGF5ZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFDRTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBR0E7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBQTs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFQSIsImZpbGUiOiJwbGF5ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3N0ZXItY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMSAvMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLmZvdXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbmNvbG9yOiAjZmZmO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOiAxNSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxud2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbmZvbnQtc2l6ZTogM3JlbTtcclxudGV4dC1zaGFkb3c6IDJweCAxcHggIzAwMDtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIge1xyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5nYXA6IDBweCAwcHg7XHJcbmdyaWQtYXV0by1mbG93OiByb3c7XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbmdyaWQtcm93OiBhdXRvIGF1dG87XHJcbmdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5ncmlkLXJvdy1nYXA6IDFweDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5kaXNwbGF5OmlubGluZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveC1hLCAucm9zdGVyLWJveC1iIHtcclxuZ3JpZC1jb2x1bW46IDEgO1xyXG5ncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWMsIC5yb3N0ZXItYm94LWQge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxudGV4dC1zaGFkb3c6ICMwMDAgMnB4IDJweDtcclxufVxyXG5cclxuLnllYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMDQ1O1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5iIHtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG5ncmlkLWNvbHVtbjogMyA7XHJcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG59Il19 */"] });


/***/ }),

/***/ "2Lkg":
/*!***************************************************************************!*\
  !*** ./src/app/layout/header-free-layout/header-free-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderFreeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFreeLayoutComponent", function() { return HeaderFreeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderFreeLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderFreeLayoutComponent.ɵfac = function HeaderFreeLayoutComponent_Factory(t) { return new (t || HeaderFreeLayoutComponent)(); };
HeaderFreeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderFreeLayoutComponent, selectors: [["header-free-layout"]], decls: 1, vars: 0, template: function HeaderFreeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItZnJlZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "5pCp":
/*!*********************************************************!*\
  !*** ./src/app/tables/ucl-table/ucl-table.component.ts ***!
  \*********************************************************/
/*! exports provided: UCLTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCLTableComponent", function() { return UCLTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_ucl_card_ucl_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/ucl-card/ucl-card.component */ "ncfK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ucl_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ucl.service */ "padv");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function UCLTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UCLTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function UCLTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UCLTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function UCLTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UCLTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function UCLTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function UCLTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function UCLTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function UCLTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function UCLTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function UCLTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function UCLTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UCLTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function UCLTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function UCLTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function UCLTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class UCLTableComponent {
    constructor(_UCLService, _dialog) {
        this._UCLService = _UCLService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._UCLService.getUCLList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._UCLService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_ucl_card_ucl_card_component__WEBPACK_IMPORTED_MODULE_5__["UCLCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
UCLTableComponent.ɵfac = function UCLTableComponent_Factory(t) { return new (t || UCLTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_ucl_service__WEBPACK_IMPORTED_MODULE_7__["UCLService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
UCLTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UCLTableComponent, selectors: [["ucl-table"]], viewQuery: function UCLTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function UCLTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UCLTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function UCLTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UCLTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, UCLTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, UCLTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, UCLTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UCLTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, UCLTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, UCLTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, UCLTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UCLTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UCLTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, UCLTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UCLTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UCLTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UCLTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, UCLTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UCLTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UCLTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, UCLTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, UCLTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, UCLTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, UCLTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, UCLTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, UCLTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, UCLTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1Y2wtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "6+Sc":
/*!***************************************************************************************!*\
  !*** ./src/app/tables/sa-continental-cup-table/sa-continental-cup-table.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SAContinentalCupTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAContinentalCupTableComponent", function() { return SAContinentalCupTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_sa_continental_card_sa_continental_cup_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/sa-continental-card/sa-continental-cup-card.component */ "xOqi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sa_continental_cup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sa-continental-cup.service */ "ec1r");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function SAContinentalCupTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAContinentalCupTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function SAContinentalCupTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAContinentalCupTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function SAContinentalCupTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAContinentalCupTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function SAContinentalCupTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function SAContinentalCupTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function SAContinentalCupTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function SAContinentalCupTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function SAContinentalCupTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function SAContinentalCupTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function SAContinentalCupTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SAContinentalCupTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function SAContinentalCupTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function SAContinentalCupTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function SAContinentalCupTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class SAContinentalCupTableComponent {
    constructor(_SAContinentalCupService, _dialog) {
        this._SAContinentalCupService = _SAContinentalCupService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._SAContinentalCupService.getSAContinentalCupList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._SAContinentalCupService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_sa_continental_card_sa_continental_cup_card_component__WEBPACK_IMPORTED_MODULE_5__["SAContinentalCupCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
SAContinentalCupTableComponent.ɵfac = function SAContinentalCupTableComponent_Factory(t) { return new (t || SAContinentalCupTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_sa_continental_cup_service__WEBPACK_IMPORTED_MODULE_7__["SAContinentalCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
SAContinentalCupTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SAContinentalCupTableComponent, selectors: [["sa-continental-cup-table"]], viewQuery: function SAContinentalCupTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function SAContinentalCupTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SAContinentalCupTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function SAContinentalCupTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SAContinentalCupTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SAContinentalCupTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SAContinentalCupTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SAContinentalCupTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SAContinentalCupTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SAContinentalCupTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SAContinentalCupTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SAContinentalCupTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SAContinentalCupTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SAContinentalCupTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SAContinentalCupTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SAContinentalCupTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SAContinentalCupTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, SAContinentalCupTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SAContinentalCupTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SAContinentalCupTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SAContinentalCupTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SAContinentalCupTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, SAContinentalCupTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, SAContinentalCupTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SAContinentalCupTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SAContinentalCupTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, SAContinentalCupTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, SAContinentalCupTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYS1jb250aW5lbnRhbC1jdXAtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "6mZS":
/*!************************************************************!*\
  !*** ./src/app/cards/fa-cup-card/fa-cup-card.component.ts ***!
  \************************************************************/
/*! exports provided: FACupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACupCardComponent", function() { return FACupCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_fa_cup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fa-cup.service */ "wQKX");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class FACupCardComponent {
    constructor(dialogBox, _FACupService, _YearService) {
        this.dialogBox = dialogBox;
        this._FACupService = _FACupService;
        this._YearService = _YearService;
        this.competitionName = 'FA Cup';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._FACupService.formData.PlayerID;
        this.position = this._FACupService.formData.Position;
        this.firstName = this._FACupService.formData.FirstName;
        this.lastName = this._FACupService.formData.LastName;
        this.appearances = this._FACupService.formData.Appearances;
        this.goals = this._FACupService.formData.Goals;
        this.assists = this._FACupService.formData.Assists;
        this.cleanSheets = this._FACupService.formData.CleanSheets;
        this.country = this._FACupService.formData.Country.toLowerCase();
        this.imageName = this._FACupService.formData.ImageName;
        this.totalPlayers = this._FACupService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._FACupService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._FACupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._FACupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
FACupCardComponent.ɵfac = function FACupCardComponent_Factory(t) { return new (t || FACupCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_fa_cup_service__WEBPACK_IMPORTED_MODULE_3__["FACupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
FACupCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FACupCardComponent, selectors: [["fa-cup-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function FACupCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYS1jdXAtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFDRTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBR0E7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBQTs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFQSIsImZpbGUiOiJmYS1jdXAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3N0ZXItY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMSAvMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLmZvdXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbmNvbG9yOiAjZmZmO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOiAxNSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxud2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbmZvbnQtc2l6ZTogM3JlbTtcclxudGV4dC1zaGFkb3c6IDJweCAxcHggIzAwMDtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIge1xyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5nYXA6IDBweCAwcHg7XHJcbmdyaWQtYXV0by1mbG93OiByb3c7XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbmdyaWQtcm93OiBhdXRvIGF1dG87XHJcbmdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5ncmlkLXJvdy1nYXA6IDFweDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5kaXNwbGF5OmlubGluZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveC1hLCAucm9zdGVyLWJveC1iIHtcclxuZ3JpZC1jb2x1bW46IDEgO1xyXG5ncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWMsIC5yb3N0ZXItYm94LWQge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxudGV4dC1zaGFkb3c6ICMwMDAgMnB4IDJweDtcclxufVxyXG5cclxuLnllYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMDQ1O1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5iIHtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG5ncmlkLWNvbHVtbjogMyA7XHJcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG59Il19 */"] });


/***/ }),

/***/ "7/50":
/*!****************************************************************************!*\
  !*** ./src/app/competition-menus/2022-2023/competitions-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompetitionsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsMenuComponent", function() { return CompetitionsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/Team"]; };
const _c1 = function () { return ["/Epl"]; };
const _c2 = function () { return ["/FA-Cup"]; };
const _c3 = function () { return ["/League-Cup"]; };
const _c4 = function () { return ["/Champions-League"]; };
const _c5 = function () { return ["/Super-Cup"]; };
const _c6 = function () { return ["/Community-Shield"]; };
class CompetitionsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompetitionsMenuComponent.ɵfac = function CompetitionsMenuComponent_Factory(t) { return new (t || CompetitionsMenuComponent)(); };
CompetitionsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetitionsMenuComponent, selectors: [["competitions2022-2023"]], decls: 23, vars: 14, consts: [[1, "col", "s12"], [1, "tabs", "horizontalUL"], [1, "tab", "col"], [3, "routerLink"]], template: function CompetitionsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Premier League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FA Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "League Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "UEFA Champions League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "UEFA Super Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Community Shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbnMtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "7pUA":
/*!********************************************************************!*\
  !*** ./src/app/cards/league-cup-card/league-cup-card.component.ts ***!
  \********************************************************************/
/*! exports provided: LeagueCupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCupCardComponent", function() { return LeagueCupCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_league_cup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/league-cup.service */ "AfJY");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class LeagueCupCardComponent {
    constructor(dialogBox, _LeagueCupService, _YearService) {
        this.dialogBox = dialogBox;
        this._LeagueCupService = _LeagueCupService;
        this._YearService = _YearService;
        this.competitionName = 'English League Cup';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._LeagueCupService.formData.PlayerID;
        this.position = this._LeagueCupService.formData.Position;
        this.firstName = this._LeagueCupService.formData.FirstName;
        this.lastName = this._LeagueCupService.formData.LastName;
        this.appearances = this._LeagueCupService.formData.Appearances;
        this.goals = this._LeagueCupService.formData.Goals;
        this.assists = this._LeagueCupService.formData.Assists;
        this.cleanSheets = this._LeagueCupService.formData.CleanSheets;
        this.country = this._LeagueCupService.formData.Country.toLowerCase();
        this.imageName = this._LeagueCupService.formData.ImageName;
        this.totalPlayers = this._LeagueCupService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._LeagueCupService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._LeagueCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._LeagueCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
LeagueCupCardComponent.ɵfac = function LeagueCupCardComponent_Factory(t) { return new (t || LeagueCupCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_league_cup_service__WEBPACK_IMPORTED_MODULE_3__["LeagueCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
LeagueCupCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeagueCupCardComponent, selectors: [["league-cup-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function LeagueCupCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWFndWUtY3VwLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBQ0E7O0FBRUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDQTs7QUFFQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQ0U7QUFBRjs7QUFHQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUFBOztBQUdBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7QUFBQTs7QUFHQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUE7O0FBRUE7RUFDQSxxQkFBQTtBQUNBOztBQUNBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUEiLCJmaWxlIjoibGVhZ3VlLWN1cC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDAwNztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvc3Rlci1jYXJkLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDEwcHg7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnR3byB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAyO1xyXG4gIGdyaWQtcm93OiAxO1xyXG59XHJcblxyXG4udGhyZWUge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8yO1xyXG4gIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4uZm91ciB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveCB7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAxMTAsIDExNSwgMC43KTtcclxuY29sb3I6ICNmZmY7XHJcbmhlaWdodDogMTAwJTtcclxucGFkZGluZy10b3A6IDE1JTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG53aWR0aDogOTklO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveCBzcGFuOmZpcnN0LWNoaWxkIHtcclxuZm9udC1zaXplOiAzcmVtO1xyXG50ZXh0LXNoYWRvdzogMnB4IDFweCAjMDAwO1xyXG59XHJcblxyXG4uYm94ZXMtd3JhcHBlciB7XHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbmdhcDogMHB4IDBweDtcclxuZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICBcIi4gLlwiO1xyXG59XHJcblxyXG4uYm94ZXMtd3JhcHBlcjIge1xyXG5kaXNwbGF5OmdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuZ3JpZC1yb3c6IGF1dG8gYXV0bztcclxuZ3JpZC1jb2x1bW4tZ2FwOiAxcHg7XHJcbmdyaWQtcm93LWdhcDogMXB4O1xyXG59XHJcblxyXG4ucm9zdGVyLWJveCB7XHJcbmRpc3BsYXk6aW5saW5lO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWEsIC5yb3N0ZXItYm94LWIge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gtYywgLnJvc3Rlci1ib3gtZCB7XHJcbmdyaWQtY29sdW1uOiAxIDtcclxuZ3JpZC1yb3c6IDIgO1xyXG59XHJcblxyXG4ucGxheWVyLW5hbWUge1xyXG50ZXh0LXNoYWRvdzogIzAwMCAycHggMnB4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICMyMjIwNDU7XHJcbmNvbG9yOiAjZmZmO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG50ZXh0LXNoYWRvdzogI2YwMCAxcHggMXB4O1xyXG59XHJcblxyXG4uYSB7XHJcbmdyaWQtY29sdW1uOiAxIDtcclxuZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XHJcbn1cclxuLmIge1xyXG5ncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcclxufVxyXG4uYyB7XHJcbmdyaWQtY29sdW1uOiAzIDtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return ["/Team"]; };
class HomeComponent {
    constructor() {
        this.images = [
            'action-malen.jpg',
            'action-roldan.jpg',
            'action-crowd2.jpg',
            'action-community-shield.jpg',
            'action-lawton-celebrates-at-leeds.jpg',
            'action-silveira.jpg',
            'action-martinelli-at-liverpool.jpg',
            'action-odegaard.jpg',
            'action-odegaard2.jpg',
            'action-seidel.jpg',
            'aaction-seidel2.jpg',
            'action-goal-celebration.jpg',
            'action-goal-celebration2.jpg',
            'action-goal-celebration3.jpg',
            'action-goal-celebration4.jpg',
            'action-moussa.jpg',
            'action-bourgeois.jpg'
        ];
        this.path = '../../assets/images/';
    }
    ngOnInit() {
        let randomImage = Math.floor(Math.random() * this.images.length);
        this.backgroundImage = this.path + this.images[randomImage];
        console.log(this.backgroundImage);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 12, vars: 5, consts: [[1, "home", 3, "ngStyle"], [1, "container", "flex-center", "pt25"], [1, "display-3", "font-bold", "mb-2", "arsenal-h2"], [1, "text-white", "mt-2", "mb-5", "arsenal-h3"], ["data-wow-delay", "0.2s", "data-toggle", "modal", "data-target", "#modal-reservation", 1, "waves-effect", "waves-light", "btn", "home-btn", 2, "visibility", "visible", "animation-delay", "0.2s", "animation-name", "fadeInUp"], [1, "fa-solid", "fa-angles-right", "home-arrow"], [3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Arsenal FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tracking Seasonal Progress From FIFA 21.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ">>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.backgroundImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["section.home[_ngcontent-%COMP%] {\n  background-size: cover;\n  text-align: center;\n  height: 100vh;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 5rem;\n}\n\n.arsenal-h2[_ngcontent-%COMP%], .arsenal-h3[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px #DB0007;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.hr-light[_ngcontent-%COMP%] {\n  border-top: 1px solid #fff;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 3.5rem !important;\n}\n\n.home-arrow[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.home-btn[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n  width: 17rem;\n}\n\n.home-div[_ngcontent-%COMP%] {\n  padding: 40px 4.56%;\n}\n\n.mdc-touch-target-wrapper[_ngcontent-%COMP%] {\n  padding-top: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFLSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtFO0VBQUcsZUFBQTtBQURMOztBQUdFO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFBTjs7QUFHRTtFQUNFLDRCQUFBO0VBQ0EsaUNBQUE7QUFBSjs7QUFHRTtFQUNFLDBCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQ0FBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0FBQUoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQHVzZSBcIkBtYXRlcmlhbC9idXR0b24vXCI7XHJcblxyXG5zZWN0aW9uLmhvbWUgeyBcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2FjdGlvbi1tYWxlbi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIGEge2ZvbnQtc2l6ZTogNDBweDt9XHJcblxyXG4gIGgyIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFyc2VuYWwtaDIsIC5hcnNlbmFsLWgzIHtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICNEQjAwMDc7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5oci1saWdodCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIC5tYi0yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLmhvbWUtYXJyb3cge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaG9tZS1idG4ge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgIHdpZHRoOiAxN3JlbTtcclxuICB9XHJcblxyXG4gIC5ob21lLWRpdiB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQuNTYlO1xyXG4gIH1cclxuXHJcbiAgLm1kYy10b3VjaC10YXJnZXQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTB2aDtcclxuICB9Il19 */"] });


/***/ }),

/***/ "9xBL":
/*!****************************************************!*\
  !*** ./src/app/league-cup/league-cup.component.ts ***!
  \****************************************************/
/*! exports provided: LeagueCupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCupComponent", function() { return LeagueCupComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_league_cup_table_league_cup_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/league-cup-table/league-cup-table.component */ "wpLj");










function LeagueCupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "league-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function LeagueCupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "league-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function LeagueCupComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "league-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function LeagueCupComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "league-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
function LeagueCupComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "league-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r4.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class LeagueCupComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'League Cup';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
LeagueCupComponent.ɵfac = function LeagueCupComponent_Factory(t) { return new (t || LeagueCupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
LeagueCupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeagueCupComponent, selectors: [["league-cup"]], decls: 19, vars: 6, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20242025", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], ["value", "20212022", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"]], template: function LeagueCupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LeagueCupComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2024-2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeagueCupComponent_Template_mat_option_click_11_listener() { return ctx.sendValueIntoService("20212022"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LeagueCupComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LeagueCupComponent_div_15_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LeagueCupComponent_div_16_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LeagueCupComponent_div_17_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LeagueCupComponent_div_18_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_league_cup_table_league_cup_table_component__WEBPACK_IMPORTED_MODULE_9__["LeagueCupTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlYWd1ZS1jdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBQ0oiLCJmaWxlIjoibGVhZ3VlLWN1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDE2dmg7XHJcbn1cclxuXHJcbi5tYXhIZWlnaHQtOHZoIHtcclxuICAgIG1heC1oZWlnaHQ6IDh2aDtcclxufVxyXG5cclxuLnB1bGxkb3duLW1lbnVzIHtcclxuICAgIG1heC1oZWlnaHQ6IDd2aDtcclxufVxyXG5cclxuLnNvcnJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAwLCA3LCAwLjIpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6MTAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcclxufSJdfQ== */"] });


/***/ }),

/***/ "A/dk":
/*!********************************************************************************!*\
  !*** ./src/app/cards/community-shield-card/community-shield-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: CommunityShieldCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityShieldCardComponent", function() { return CommunityShieldCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_community_shield_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/community-shield.service */ "yX9B");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class CommunityShieldCardComponent {
    constructor(dialogBox, _CommunityShieldService, _YearService) {
        this.dialogBox = dialogBox;
        this._CommunityShieldService = _CommunityShieldService;
        this._YearService = _YearService;
        this.competitionName = 'Community Shield';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._CommunityShieldService.formData.PlayerID;
        this.position = this._CommunityShieldService.formData.Position;
        this.firstName = this._CommunityShieldService.formData.FirstName;
        this.lastName = this._CommunityShieldService.formData.LastName;
        this.appearances = this._CommunityShieldService.formData.Appearances;
        this.goals = this._CommunityShieldService.formData.Goals;
        this.assists = this._CommunityShieldService.formData.Assists;
        this.cleanSheets = this._CommunityShieldService.formData.CleanSheets;
        this.country = this._CommunityShieldService.formData.Country.toLowerCase();
        this.imageName = this._CommunityShieldService.formData.ImageName;
        this.totalPlayers = this._CommunityShieldService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._CommunityShieldService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._CommunityShieldService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._CommunityShieldService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
CommunityShieldCardComponent.ɵfac = function CommunityShieldCardComponent_Factory(t) { return new (t || CommunityShieldCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_community_shield_service__WEBPACK_IMPORTED_MODULE_3__["CommunityShieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
CommunityShieldCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommunityShieldCardComponent, selectors: [["community-shield-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function CommunityShieldCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunityShieldCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunityShieldCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunityShieldCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21tdW5pdHktc2hpZWxkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBQ0E7O0FBRUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDQTs7QUFFQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQ0U7QUFBRjs7QUFHQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUFBOztBQUdBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7QUFBQTs7QUFHQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUE7O0FBRUE7RUFDQSxxQkFBQTtBQUNBOztBQUNBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUEiLCJmaWxlIjoiY29tbXVuaXR5LXNoaWVsZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDAwNztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvc3Rlci1jYXJkLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDEwcHg7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnR3byB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAyO1xyXG4gIGdyaWQtcm93OiAxO1xyXG59XHJcblxyXG4udGhyZWUge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8yO1xyXG4gIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4uZm91ciB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveCB7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAxMTAsIDExNSwgMC43KTtcclxuY29sb3I6ICNmZmY7XHJcbmhlaWdodDogMTAwJTtcclxucGFkZGluZy10b3A6IDE1JTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG53aWR0aDogOTklO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveCBzcGFuOmZpcnN0LWNoaWxkIHtcclxuZm9udC1zaXplOiAzcmVtO1xyXG50ZXh0LXNoYWRvdzogMnB4IDFweCAjMDAwO1xyXG59XHJcblxyXG4uYm94ZXMtd3JhcHBlciB7XHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbmdhcDogMHB4IDBweDtcclxuZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICBcIi4gLlwiO1xyXG59XHJcblxyXG4uYm94ZXMtd3JhcHBlcjIge1xyXG5kaXNwbGF5OmdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuZ3JpZC1yb3c6IGF1dG8gYXV0bztcclxuZ3JpZC1jb2x1bW4tZ2FwOiAxcHg7XHJcbmdyaWQtcm93LWdhcDogMXB4O1xyXG59XHJcblxyXG4ucm9zdGVyLWJveCB7XHJcbmRpc3BsYXk6aW5saW5lO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWEsIC5yb3N0ZXItYm94LWIge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gtYywgLnJvc3Rlci1ib3gtZCB7XHJcbmdyaWQtY29sdW1uOiAxIDtcclxuZ3JpZC1yb3c6IDIgO1xyXG59XHJcblxyXG4ucGxheWVyLW5hbWUge1xyXG50ZXh0LXNoYWRvdzogIzAwMCAycHggMnB4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICMyMjIwNDU7XHJcbmNvbG9yOiAjZmZmO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG50ZXh0LXNoYWRvdzogI2YwMCAxcHggMXB4O1xyXG59XHJcblxyXG4uYSB7XHJcbmdyaWQtY29sdW1uOiAxIDtcclxuZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XHJcbn1cclxuLmIge1xyXG5ncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcclxufVxyXG4uYyB7XHJcbmdyaWQtY29sdW1uOiAzIDtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AfJY":
/*!************************************************!*\
  !*** ./src/app/services/league-cup.service.ts ***!
  \************************************************/
/*! exports provided: LeagueCupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCupService", function() { return LeagueCupService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LeagueCupService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getLeagueCupList(year) {
        return this.http.get(this.APIUrl + '/{year}/League_Cup' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/League_Cup' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/League_Cup' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/League_Cup', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/League_Cup', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/League_Cup', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'League_Cup/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
LeagueCupService.ɵfac = function LeagueCupService_Factory(t) { return new (t || LeagueCupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LeagueCupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LeagueCupService, factory: LeagueCupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CJxF":
/*!********************************************************************!*\
  !*** ./src/app/sa-continental-cup/sa-continental-cup.component.ts ***!
  \********************************************************************/
/*! exports provided: SAContinentalCupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAContinentalCupComponent", function() { return SAContinentalCupComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_sa_continental_cup_table_sa_continental_cup_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/sa-continental-cup-table/sa-continental-cup-table.component */ "6+Sc");










function SAContinentalCupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "sa-continental-cup-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
function SAContinentalCupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "sa-continental-cup-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
class SAContinentalCupComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'South American Continental Cup';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
SAContinentalCupComponent.ɵfac = function SAContinentalCupComponent_Factory(t) { return new (t || SAContinentalCupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
SAContinentalCupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SAContinentalCupComponent, selectors: [["sa-continental-cup"]], decls: 10, vars: 3, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20212022", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"]], template: function SAContinentalCupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SAContinentalCupComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SAContinentalCupComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20212022"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SAContinentalCupComponent_div_8_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SAContinentalCupComponent_div_9_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_sa_continental_cup_table_sa_continental_cup_table_component__WEBPACK_IMPORTED_MODULE_9__["SAContinentalCupTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNhLWNvbnRpbmVudGFsLWN1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzYS1jb250aW5lbnRhbC1jdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnZoO1xyXG59XHJcblxyXG4ubWF4SGVpZ2h0LTh2aCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5wdWxsZG93bi1tZW51cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5zb3JyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMCwgNywgMC4yKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Hg/S":
/*!****************************************************!*\
  !*** ./src/app/first-team/first-team.component.ts ***!
  \****************************************************/
/*! exports provided: FirstTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTeamComponent", function() { return FirstTeamComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_player_table_player_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/player-table/player-table.component */ "WxSS");










function FirstTeamComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "player-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function FirstTeamComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "player-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function FirstTeamComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "player-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function FirstTeamComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "player-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
function FirstTeamComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "player-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r4.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
class FirstTeamComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'Team Roster';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
FirstTeamComponent.ɵfac = function FirstTeamComponent_Factory(t) { return new (t || FirstTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
FirstTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FirstTeamComponent, selectors: [["first-team"]], decls: 19, vars: 6, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], [1, "select-campaign"], ["disableOptionCentering", "", 1, "mat-form-field-pulldown", 3, "ngModel", "ngModelChange"], ["value", "20242025", "ngDefaultControl", "", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], ["value", "20212022", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"]], template: function FirstTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FirstTeamComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirstTeamComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2024-2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirstTeamComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirstTeamComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirstTeamComponent_Template_mat_option_click_11_listener() { return ctx.sendValueIntoService("20212022"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FirstTeamComponent_div_14_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FirstTeamComponent_div_15_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FirstTeamComponent_div_16_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FirstTeamComponent_div_17_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FirstTeamComponent_div_18_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_player_table_player_table_component__WEBPACK_IMPORTED_MODULE_9__["PlayerTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2) !important;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZpcnN0LXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsaURBQUE7QUFDRjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUNKIiwiZmlsZSI6ImZpcnN0LXRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnZoO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxOSwgMCwgNywgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF4SGVpZ2h0LTh2aCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5wdWxsZG93bi1tZW51cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5zb3JyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMCwgNywgMC4yKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "NWTi":
/*!******************************************************!*\
  !*** ./src/app/cards/epl-card/epl-card.component.ts ***!
  \******************************************************/
/*! exports provided: EPLCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPLCardComponent", function() { return EPLCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_epl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/epl.service */ "Srkr");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class EPLCardComponent {
    constructor(dialogBox, _EPLService, _YearService) {
        this.dialogBox = dialogBox;
        this._EPLService = _EPLService;
        this._YearService = _YearService;
        this.competitionName = 'English Premier League';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._EPLService.formData.PlayerID;
        this.position = this._EPLService.formData.Position;
        this.firstName = this._EPLService.formData.FirstName;
        this.lastName = this._EPLService.formData.LastName;
        this.appearances = this._EPLService.formData.Appearances;
        this.goals = this._EPLService.formData.Goals;
        this.assists = this._EPLService.formData.Assists;
        this.cleanSheets = this._EPLService.formData.CleanSheets;
        this.country = this._EPLService.formData.Country.toLowerCase();
        this.imageName = this._EPLService.formData.ImageName;
        this.totalPlayers = this._EPLService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._EPLService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._EPLService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._EPLService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
EPLCardComponent.ɵfac = function EPLCardComponent_Factory(t) { return new (t || EPLCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_epl_service__WEBPACK_IMPORTED_MODULE_3__["EPLService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
EPLCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EPLCardComponent, selectors: [["epl-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function EPLCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlcGwtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFDRTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBR0E7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBQTs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFQSIsImZpbGUiOiJlcGwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3N0ZXItY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMSAvMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLmZvdXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbmNvbG9yOiAjZmZmO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOiAxNSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxud2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbmZvbnQtc2l6ZTogM3JlbTtcclxudGV4dC1zaGFkb3c6IDJweCAxcHggIzAwMDtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIge1xyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5nYXA6IDBweCAwcHg7XHJcbmdyaWQtYXV0by1mbG93OiByb3c7XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbmdyaWQtcm93OiBhdXRvIGF1dG87XHJcbmdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5ncmlkLXJvdy1nYXA6IDFweDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5kaXNwbGF5OmlubGluZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveC1hLCAucm9zdGVyLWJveC1iIHtcclxuZ3JpZC1jb2x1bW46IDEgO1xyXG5ncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWMsIC5yb3N0ZXItYm94LWQge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxudGV4dC1zaGFkb3c6ICMwMDAgMnB4IDJweDtcclxufVxyXG5cclxuLnllYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMDQ1O1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5iIHtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG5ncmlkLWNvbHVtbjogMyA7XHJcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG59Il19 */"] });


/***/ }),

/***/ "QIP1":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PlayerService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getRosterList(year) {
        return this.http.get(this.APIUrl + '/{year}/Roster' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/Roster' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/Roster' + year + '/PlayerID=' + val);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/{year}/Roster', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/{year}/Roster', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/{year}/Roster', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + '/{year}/Roster/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "R5K7":
/*!**************************************!*\
  !*** ./src/app/epl/epl.component.ts ***!
  \**************************************/
/*! exports provided: EPLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPLComponent", function() { return EPLComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_epl_table_epl_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/epl-table/epl-table.component */ "yT3m");










function EPLComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "epl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function EPLComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "epl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function EPLComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "epl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function EPLComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "epl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
function EPLComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "epl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class EPLComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'Premier League';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
EPLComponent.ɵfac = function EPLComponent_Factory(t) { return new (t || EPLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
EPLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EPLComponent, selectors: [["epl"]], decls: 19, vars: 6, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20242025", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], ["value", "20212022", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"], [3, "CompetitionYear"]], template: function EPLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EPLComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2024-2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EPLComponent_Template_mat_option_click_11_listener() { return ctx.sendValueIntoService("20212022"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EPLComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EPLComponent_div_15_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EPLComponent_div_16_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EPLComponent_div_17_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EPLComponent_div_18_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_epl_table_epl_table_component__WEBPACK_IMPORTED_MODULE_9__["EPLTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVwbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJlcGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnZoO1xyXG59XHJcblxyXG4ubWF4SGVpZ2h0LTh2aCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5wdWxsZG93bi1tZW51cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5zb3JyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMCwgNywgMC4yKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Srkr":
/*!*****************************************!*\
  !*** ./src/app/services/epl.service.ts ***!
  \*****************************************/
/*! exports provided: EPLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPLService", function() { return EPLService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EPLService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getEPLList(year) {
        return this.http.get(this.APIUrl + '/{year}/EPL' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/EPL' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/EPL' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/EPL', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/EPL', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/EPL', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'EPL/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
EPLService.ɵfac = function EPLService_Factory(t) { return new (t || EPLService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EPLService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EPLService, factory: EPLService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.title = 'Arsenal-Stats';
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 560px)'])
            .subscribe((state) => {
            if (state.matches) {
                console.log('Viewport width is 500px or greater!');
            }
            else {
                console.log('Viewport width is less than 560px!');
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "VmG2":
/*!***********************************************!*\
  !*** ./src/app/services/super-cup.service.ts ***!
  \***********************************************/
/*! exports provided: SuperCupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperCupService", function() { return SuperCupService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SuperCupService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getSuperCupList(year) {
        return this.http.get(this.APIUrl + '/{year}/UEFA_Super_Cup' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/UEFA_Super_Cup' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/UEFA_Super_Cup' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/UEFA_Super_Cup', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/UEFA_Super_Cup', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/UEFA_Super_Cup', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'UEFA_Super_Cup/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
SuperCupService.ɵfac = function SuperCupService_Factory(t) { return new (t || SuperCupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SuperCupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuperCupService, factory: SuperCupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WxSS":
/*!***************************************************************!*\
  !*** ./src/app/tables/player-table/player-table.component.ts ***!
  \***************************************************************/
/*! exports provided: PlayerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerTableComponent", function() { return PlayerTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_player_card_player_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/player-card/player-card.component */ "0yWK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/player.service */ "QIP1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function PlayerTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlayerTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function PlayerTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlayerTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const element_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.onClickPlayer(element_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r28.FirstName);
} }
function PlayerTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlayerTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.onClickPlayer(element_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r31.LastName);
} }
function PlayerTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r34.Country, " ");
} }
function PlayerTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Appearances, " ");
} }
function PlayerTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Goals, " ");
} }
function PlayerTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Assists");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Assists, " ");
} }
function PlayerTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Clean Sheets");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.CleanSheets, " ");
} }
function PlayerTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "On Loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.OnLoan, " ");
} }
function PlayerTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Loan Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PlayerTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.LoanTeam, " ");
} }
function PlayerTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 63);
} }
function PlayerTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 64);
} }
function PlayerTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class PlayerTableComponent {
    constructor(_playerService, _dialog) {
        this._playerService = _playerService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Country', 'Appearances', 'Goals', 'Assists', 'CleanSheets', 'OnLoan', 'LoanTeam'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._playerService.getRosterList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._playerService.formData = player;
        this.dataSource.sort = this.sort;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_player_card_player_card_component__WEBPACK_IMPORTED_MODULE_5__["PlayerCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.Country.toLocaleLowerCase().includes(filter)
                || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
PlayerTableComponent.ɵfac = function PlayerTableComponent_Factory(t) { return new (t || PlayerTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
PlayerTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PlayerTableComponent, selectors: [["player-table"]], viewQuery: function PlayerTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear", CompetitionName: "CompetitionName" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", "class", "PositionHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Position", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", "data-label", "First Name", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "class", "LastNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Last Name", 4, "matCellDef"], ["matColumnDef", "Country"], ["mat-header-cell", "", "mat-sort-header", "", "class", "CountryHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Country", 4, "matCellDef"], ["matColumnDef", "Appearances"], ["mat-header-cell", "", "mat-sort-header", "", "class", "AppearancesHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Appearances", 4, "matCellDef"], ["matColumnDef", "Goals"], ["mat-header-cell", "", "mat-sort-header", "", "class", "GoalsHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Goals", 4, "matCellDef"], ["matColumnDef", "Assists"], ["mat-header-cell", "", "mat-sort-header", "", "class", "AssistsHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Assists", 4, "matCellDef"], ["matColumnDef", "CleanSheets"], ["mat-header-cell", "", "mat-sort-header", "", "class", "CleanSheetsHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Clean Sheets", 4, "matCellDef"], ["matColumnDef", "OnLoan"], ["mat-header-cell", "", "mat-sort-header", "", "class", "OnLoanHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "OnLoanData left-text", "data-label", "On Loan", 4, "matCellDef"], ["matColumnDef", "LoanTeam"], ["mat-header-cell", "", "mat-sort-header", "", "class", "LoanTeamHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", "data-label", "Loan Team", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", "", 1, "PositionHeader"], ["mat-cell", "", "data-label", "Position", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", "data-label", "First Name", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", 1, "LastNameHeader"], ["mat-cell", "", "data-label", "Last Name", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "CountryHeader"], ["mat-cell", "", "data-label", "Country", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "AppearancesHeader"], ["mat-cell", "", "data-label", "Appearances", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "GoalsHeader"], ["mat-cell", "", "data-label", "Goals", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "AssistsHeader"], ["mat-cell", "", "data-label", "Assists", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "CleanSheetsHeader"], ["mat-cell", "", "data-label", "Clean Sheets", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "OnLoanHeader"], ["mat-cell", "", "data-label", "On Loan", 1, "OnLoanData", "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "LoanTeamHeader"], ["mat-cell", "", "data-label", "Loan Team", 1, "left-text"], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function PlayerTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PlayerTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function PlayerTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PlayerTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PlayerTableComponent_th_9_Template, 3, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PlayerTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PlayerTableComponent_th_12_Template, 3, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, PlayerTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PlayerTableComponent_th_15_Template, 3, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PlayerTableComponent_td_16_Template, 3, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PlayerTableComponent_th_18_Template, 3, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PlayerTableComponent_td_19_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PlayerTableComponent_th_21_Template, 3, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PlayerTableComponent_td_22_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, PlayerTableComponent_th_24_Template, 3, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, PlayerTableComponent_td_25_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, PlayerTableComponent_th_27_Template, 3, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, PlayerTableComponent_td_28_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, PlayerTableComponent_th_30_Template, 3, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, PlayerTableComponent_td_31_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, PlayerTableComponent_th_33_Template, 3, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, PlayerTableComponent_td_34_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, PlayerTableComponent_th_36_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, PlayerTableComponent_td_37_Template, 2, 1, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, PlayerTableComponent_tr_38_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, PlayerTableComponent_tr_39_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, PlayerTableComponent_mat_card_40_Template, 8, 1, "mat-card", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Y5Qz":
/*!******************************************!*\
  !*** ./src/app/services/year.service.ts ***!
  \******************************************/
/*! exports provided: YearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearService", function() { return YearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class YearService {
    constructor() {
        this.teamYear = '20242025';
    }
    setTeamYear(value) {
        this.teamYear = value;
    }
}
YearService.ɵfac = function YearService_Factory(t) { return new (t || YearService)(); };
YearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YearService, factory: YearService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _services_asia_elite_cup_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/asia-elite-cup.service */ "aG7b");
/* harmony import */ var _services_community_shield_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/community-shield.service */ "yX9B");
/* harmony import */ var _services_epl_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/epl.service */ "Srkr");
/* harmony import */ var _services_fa_cup_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/fa-cup.service */ "wQKX");
/* harmony import */ var _services_league_cup_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/league-cup.service */ "AfJY");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/player.service */ "QIP1");
/* harmony import */ var _services_sa_continental_cup_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/sa-continental-cup.service */ "ec1r");
/* harmony import */ var _services_super_cup_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/super-cup.service */ "VmG2");
/* harmony import */ var _services_ucl_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/ucl.service */ "padv");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/year.service */ "Y5Qz");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _layout_header_free_layout_header_free_layout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layout/header-free-layout/header-free-layout.component */ "2Lkg");
/* harmony import */ var _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./layout/roster-layout/roster-layout.component */ "/0FR");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./competition/competition.component */ "zXr7");
/* harmony import */ var _competition_menus_2024_2025_competitions_menu_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./competition-menus/2024-2025/competitions-menu.component */ "bE0P");
/* harmony import */ var _competition_menus_2023_2024_competitions_menu_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./competition-menus/2023-2024/competitions-menu.component */ "sBp9");
/* harmony import */ var _competition_menus_2022_2023_competitions_menu_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./competition-menus/2022-2023/competitions-menu.component */ "7/50");
/* harmony import */ var _competition_menus_2021_2022_competitions_menu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./competition-menus/2021-2022/competitions-menu.component */ "g1Hz");
/* harmony import */ var _first_team_first_team_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./first-team/first-team.component */ "Hg/S");
/* harmony import */ var _asia_elite_cup_asia_elite_cup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./asia-elite-cup/asia-elite-cup.component */ "fLmf");
/* harmony import */ var _community_shield_community_shield_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./community-shield/community-shield.component */ "zcr3");
/* harmony import */ var _epl_epl_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./epl/epl.component */ "R5K7");
/* harmony import */ var _fa_cup_fa_cup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./fa-cup/fa-cup.component */ "qsLY");
/* harmony import */ var _league_cup_league_cup_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./league-cup/league-cup.component */ "9xBL");
/* harmony import */ var _sa_continental_cup_sa_continental_cup_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sa-continental-cup/sa-continental-cup.component */ "CJxF");
/* harmony import */ var _super_cup_super_cup_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./super-cup/super-cup.component */ "xF5g");
/* harmony import */ var _ucl_ucl_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ucl/ucl.component */ "tuMx");
/* harmony import */ var _tables_player_table_player_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./tables/player-table/player-table.component */ "WxSS");
/* harmony import */ var _tables_asia_elite_cup_table_asia_elite_cup_table_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./tables/asia-elite-cup-table/asia-elite-cup-table.component */ "ZsPU");
/* harmony import */ var _tables_community_shield_table_community_shield_table_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./tables/community-shield-table/community-shield-table.component */ "iPI8");
/* harmony import */ var _tables_epl_table_epl_table_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./tables/epl-table/epl-table.component */ "yT3m");
/* harmony import */ var _tables_fa_cup_table_fa_cup_table_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./tables/fa-cup-table/fa-cup-table.component */ "zHvk");
/* harmony import */ var _tables_league_cup_table_league_cup_table_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./tables/league-cup-table/league-cup-table.component */ "wpLj");
/* harmony import */ var _tables_sa_continental_cup_table_sa_continental_cup_table_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./tables/sa-continental-cup-table/sa-continental-cup-table.component */ "6+Sc");
/* harmony import */ var _tables_super_cup_table_super_cup_table_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./tables/super-cup-table/super-cup-table.component */ "tKxS");
/* harmony import */ var _tables_ucl_table_ucl_table_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./tables/ucl-table/ucl-table.component */ "5pCp");
/* harmony import */ var _cards_player_card_player_card_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./cards/player-card/player-card.component */ "0yWK");
/* harmony import */ var _cards_asia_elite_cup_card_asia_elite_cup_card_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./cards/asia-elite-cup-card/asia-elite-cup-card.component */ "t7q1");
/* harmony import */ var _cards_community_shield_card_community_shield_card_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./cards/community-shield-card/community-shield-card.component */ "A/dk");
/* harmony import */ var _cards_epl_card_epl_card_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./cards/epl-card/epl-card.component */ "NWTi");
/* harmony import */ var _cards_fa_cup_card_fa_cup_card_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./cards/fa-cup-card/fa-cup-card.component */ "6mZS");
/* harmony import */ var _cards_league_cup_card_league_cup_card_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./cards/league-cup-card/league-cup-card.component */ "7pUA");
/* harmony import */ var _cards_sa_continental_card_sa_continental_cup_card_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./cards/sa-continental-card/sa-continental-cup-card.component */ "xOqi");
/* harmony import */ var _cards_super_cup_card_super_cup_card_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./cards/super-cup-card/super-cup-card.component */ "dH4Q");
/* harmony import */ var _cards_ucl_card_ucl_card_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./cards/ucl-card/ucl-card.component */ "ncfK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/core */ "fXoL");



































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_asia_elite_cup_service__WEBPACK_IMPORTED_MODULE_17__["AsiaEliteCupService"], _services_community_shield_service__WEBPACK_IMPORTED_MODULE_18__["CommunityShieldService"], _services_epl_service__WEBPACK_IMPORTED_MODULE_19__["EPLService"],
        _services_fa_cup_service__WEBPACK_IMPORTED_MODULE_20__["FACupService"], _services_player_service__WEBPACK_IMPORTED_MODULE_22__["PlayerService"], _services_league_cup_service__WEBPACK_IMPORTED_MODULE_21__["LeagueCupService"], _services_sa_continental_cup_service__WEBPACK_IMPORTED_MODULE_23__["SAContinentalCupService"],
        _services_super_cup_service__WEBPACK_IMPORTED_MODULE_24__["SuperCupService"], _services_ucl_service__WEBPACK_IMPORTED_MODULE_25__["UCLService"], _services_year_service__WEBPACK_IMPORTED_MODULE_26__["YearService"],
        _first_team_first_team_component__WEBPACK_IMPORTED_MODULE_39__["FirstTeamComponent"], _asia_elite_cup_asia_elite_cup_component__WEBPACK_IMPORTED_MODULE_40__["AsiaEliteCupComponent"], _community_shield_community_shield_component__WEBPACK_IMPORTED_MODULE_41__["CommunityShieldComponent"], _epl_epl_component__WEBPACK_IMPORTED_MODULE_42__["EPLComponent"],
        _fa_cup_fa_cup_component__WEBPACK_IMPORTED_MODULE_43__["FACupComponent"], _league_cup_league_cup_component__WEBPACK_IMPORTED_MODULE_44__["LeagueCupComponent"], _sa_continental_cup_sa_continental_cup_component__WEBPACK_IMPORTED_MODULE_45__["SAContinentalCupComponent"], _super_cup_super_cup_component__WEBPACK_IMPORTED_MODULE_46__["SuperCupComponent"],
        _ucl_ucl_component__WEBPACK_IMPORTED_MODULE_47__["UCLComponent"]
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
        _layout_header_free_layout_header_free_layout_component__WEBPACK_IMPORTED_MODULE_29__["HeaderFreeLayoutComponent"],
        _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_30__["RosterLayoutComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__["PageNotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
        _first_team_first_team_component__WEBPACK_IMPORTED_MODULE_39__["FirstTeamComponent"],
        _asia_elite_cup_asia_elite_cup_component__WEBPACK_IMPORTED_MODULE_40__["AsiaEliteCupComponent"],
        _community_shield_community_shield_component__WEBPACK_IMPORTED_MODULE_41__["CommunityShieldComponent"],
        _epl_epl_component__WEBPACK_IMPORTED_MODULE_42__["EPLComponent"],
        _fa_cup_fa_cup_component__WEBPACK_IMPORTED_MODULE_43__["FACupComponent"],
        _league_cup_league_cup_component__WEBPACK_IMPORTED_MODULE_44__["LeagueCupComponent"],
        _sa_continental_cup_sa_continental_cup_component__WEBPACK_IMPORTED_MODULE_45__["SAContinentalCupComponent"],
        _super_cup_super_cup_component__WEBPACK_IMPORTED_MODULE_46__["SuperCupComponent"],
        _ucl_ucl_component__WEBPACK_IMPORTED_MODULE_47__["UCLComponent"],
        _tables_player_table_player_table_component__WEBPACK_IMPORTED_MODULE_48__["PlayerTableComponent"],
        _tables_asia_elite_cup_table_asia_elite_cup_table_component__WEBPACK_IMPORTED_MODULE_49__["AsiaEliteCupTableComponent"],
        _tables_community_shield_table_community_shield_table_component__WEBPACK_IMPORTED_MODULE_50__["CommunityShieldTableComponent"],
        _tables_epl_table_epl_table_component__WEBPACK_IMPORTED_MODULE_51__["EPLTableComponent"],
        _tables_fa_cup_table_fa_cup_table_component__WEBPACK_IMPORTED_MODULE_52__["FACupTableComponent"],
        _tables_league_cup_table_league_cup_table_component__WEBPACK_IMPORTED_MODULE_53__["LeagueCupTableComponent"],
        _tables_sa_continental_cup_table_sa_continental_cup_table_component__WEBPACK_IMPORTED_MODULE_54__["SAContinentalCupTableComponent"],
        _tables_super_cup_table_super_cup_table_component__WEBPACK_IMPORTED_MODULE_55__["SuperCupTableComponent"],
        _tables_ucl_table_ucl_table_component__WEBPACK_IMPORTED_MODULE_56__["UCLTableComponent"],
        _cards_player_card_player_card_component__WEBPACK_IMPORTED_MODULE_57__["PlayerCardComponent"],
        _cards_asia_elite_cup_card_asia_elite_cup_card_component__WEBPACK_IMPORTED_MODULE_58__["AsiaEliteCupCardComponent"],
        _cards_community_shield_card_community_shield_card_component__WEBPACK_IMPORTED_MODULE_59__["CommunityShieldCardComponent"],
        _cards_epl_card_epl_card_component__WEBPACK_IMPORTED_MODULE_60__["EPLCardComponent"],
        _cards_fa_cup_card_fa_cup_card_component__WEBPACK_IMPORTED_MODULE_61__["FACupCardComponent"],
        _cards_league_cup_card_league_cup_card_component__WEBPACK_IMPORTED_MODULE_62__["LeagueCupCardComponent"],
        _cards_sa_continental_card_sa_continental_cup_card_component__WEBPACK_IMPORTED_MODULE_63__["SAContinentalCupCardComponent"],
        _cards_super_cup_card_super_cup_card_component__WEBPACK_IMPORTED_MODULE_64__["SuperCupCardComponent"],
        _cards_ucl_card_ucl_card_component__WEBPACK_IMPORTED_MODULE_65__["UCLCardComponent"],
        _competition_competition_component__WEBPACK_IMPORTED_MODULE_34__["CompetitionComponent"],
        _competition_menus_2024_2025_competitions_menu_component__WEBPACK_IMPORTED_MODULE_35__["CompetitionsMenuComponent"],
        _competition_menus_2023_2024_competitions_menu_component__WEBPACK_IMPORTED_MODULE_36__["CompetitionsMenuComponent"],
        _competition_menus_2022_2023_competitions_menu_component__WEBPACK_IMPORTED_MODULE_37__["CompetitionsMenuComponent"],
        _competition_menus_2021_2022_competitions_menu_component__WEBPACK_IMPORTED_MODULE_38__["CompetitionsMenuComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ZsPU":
/*!*******************************************************************************!*\
  !*** ./src/app/tables/asia-elite-cup-table/asia-elite-cup-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AsiaEliteCupTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsiaEliteCupTableComponent", function() { return AsiaEliteCupTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_asia_elite_cup_card_asia_elite_cup_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/asia-elite-cup-card/asia-elite-cup-card.component */ "t7q1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asia_elite_cup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/asia-elite-cup.service */ "aG7b");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function AsiaEliteCupTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AsiaEliteCupTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function AsiaEliteCupTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AsiaEliteCupTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function AsiaEliteCupTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AsiaEliteCupTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function AsiaEliteCupTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function AsiaEliteCupTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function AsiaEliteCupTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function AsiaEliteCupTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function AsiaEliteCupTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function AsiaEliteCupTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function AsiaEliteCupTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AsiaEliteCupTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function AsiaEliteCupTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function AsiaEliteCupTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function AsiaEliteCupTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class AsiaEliteCupTableComponent {
    constructor(_AsiaEliteCupService, _dialog) {
        this._AsiaEliteCupService = _AsiaEliteCupService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._AsiaEliteCupService.getAsiaEliteCupList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._AsiaEliteCupService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_asia_elite_cup_card_asia_elite_cup_card_component__WEBPACK_IMPORTED_MODULE_5__["AsiaEliteCupCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
AsiaEliteCupTableComponent.ɵfac = function AsiaEliteCupTableComponent_Factory(t) { return new (t || AsiaEliteCupTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_asia_elite_cup_service__WEBPACK_IMPORTED_MODULE_7__["AsiaEliteCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AsiaEliteCupTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AsiaEliteCupTableComponent, selectors: [["asia-elite-cup-table"]], viewQuery: function AsiaEliteCupTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear", CompetitionName: "CompetitionName" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function AsiaEliteCupTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AsiaEliteCupTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function AsiaEliteCupTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AsiaEliteCupTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AsiaEliteCupTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AsiaEliteCupTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AsiaEliteCupTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AsiaEliteCupTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AsiaEliteCupTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AsiaEliteCupTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AsiaEliteCupTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AsiaEliteCupTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AsiaEliteCupTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AsiaEliteCupTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AsiaEliteCupTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AsiaEliteCupTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AsiaEliteCupTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AsiaEliteCupTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AsiaEliteCupTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AsiaEliteCupTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AsiaEliteCupTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AsiaEliteCupTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, AsiaEliteCupTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AsiaEliteCupTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, AsiaEliteCupTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, AsiaEliteCupTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, AsiaEliteCupTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lhLWVsaXRlLWN1cC10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "aG7b":
/*!****************************************************!*\
  !*** ./src/app/services/asia-elite-cup.service.ts ***!
  \****************************************************/
/*! exports provided: AsiaEliteCupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsiaEliteCupService", function() { return AsiaEliteCupService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AsiaEliteCupService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getAsiaEliteCupList(year) {
        return this.http.get(this.APIUrl + '/{year}/Asia_Elite_Cup' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/Asia_Elite_Cup' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/Asia_Elite_Cup' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/Asia_Elite_Cup', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/Asia_Elite_Cup', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/Asia_Elite_Cup', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'Asia_Elite_Cup/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
AsiaEliteCupService.ɵfac = function AsiaEliteCupService_Factory(t) { return new (t || AsiaEliteCupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AsiaEliteCupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AsiaEliteCupService, factory: AsiaEliteCupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bE0P":
/*!****************************************************************************!*\
  !*** ./src/app/competition-menus/2024-2025/competitions-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompetitionsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsMenuComponent", function() { return CompetitionsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/Team"]; };
const _c1 = function () { return ["/Epl"]; };
const _c2 = function () { return ["/FA-Cup"]; };
const _c3 = function () { return ["/League-Cup"]; };
const _c4 = function () { return ["/Champions-League"]; };
const _c5 = function () { return ["/Super-Cup"]; };
const _c6 = function () { return ["/Community-Shield"]; };
class CompetitionsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompetitionsMenuComponent.ɵfac = function CompetitionsMenuComponent_Factory(t) { return new (t || CompetitionsMenuComponent)(); };
CompetitionsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetitionsMenuComponent, selectors: [["competitions2024-2025"]], decls: 23, vars: 14, consts: [[1, "col", "s12"], [1, "tabs", "horizontalUL"], [1, "tab", "col"], [3, "routerLink"]], template: function CompetitionsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Premier League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FA Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "League Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "UEFA Champions League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "UEFA Super Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Community Shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbnMtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dH4Q":
/*!******************************************************************!*\
  !*** ./src/app/cards/super-cup-card/super-cup-card.component.ts ***!
  \******************************************************************/
/*! exports provided: SuperCupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperCupCardComponent", function() { return SuperCupCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_super_cup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/super-cup.service */ "VmG2");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class SuperCupCardComponent {
    constructor(dialogBox, _SuperCupService, _YearService) {
        this.dialogBox = dialogBox;
        this._SuperCupService = _SuperCupService;
        this._YearService = _YearService;
        this.competitionName = 'UEFA Super Cup';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._SuperCupService.formData.PlayerID;
        this.position = this._SuperCupService.formData.Position;
        this.firstName = this._SuperCupService.formData.FirstName;
        this.lastName = this._SuperCupService.formData.LastName;
        this.appearances = this._SuperCupService.formData.Appearances;
        this.goals = this._SuperCupService.formData.Goals;
        this.assists = this._SuperCupService.formData.Assists;
        this.cleanSheets = this._SuperCupService.formData.CleanSheets;
        this.country = this._SuperCupService.formData.Country.toLowerCase();
        this.imageName = this._SuperCupService.formData.ImageName;
        this.totalPlayers = this._SuperCupService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._SuperCupService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._SuperCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._SuperCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
SuperCupCardComponent.ɵfac = function SuperCupCardComponent_Factory(t) { return new (t || SuperCupCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_super_cup_service__WEBPACK_IMPORTED_MODULE_3__["SuperCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
SuperCupCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SuperCupCardComponent, selectors: [["super-cup-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function SuperCupCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuperCupCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuperCupCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuperCupCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdXBlci1jdXAtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFDRTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBR0E7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBQTs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFQSIsImZpbGUiOiJzdXBlci1jdXAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3N0ZXItY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMSAvMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLmZvdXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbmNvbG9yOiAjZmZmO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOiAxNSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxud2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbmZvbnQtc2l6ZTogM3JlbTtcclxudGV4dC1zaGFkb3c6IDJweCAxcHggIzAwMDtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIge1xyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5nYXA6IDBweCAwcHg7XHJcbmdyaWQtYXV0by1mbG93OiByb3c7XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbmdyaWQtcm93OiBhdXRvIGF1dG87XHJcbmdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5ncmlkLXJvdy1nYXA6IDFweDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5kaXNwbGF5OmlubGluZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveC1hLCAucm9zdGVyLWJveC1iIHtcclxuZ3JpZC1jb2x1bW46IDEgO1xyXG5ncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWMsIC5yb3N0ZXItYm94LWQge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxudGV4dC1zaGFkb3c6ICMwMDAgMnB4IDJweDtcclxufVxyXG5cclxuLnllYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMDQ1O1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5iIHtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG5ncmlkLWNvbHVtbjogMyA7XHJcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG59Il19 */"] });


/***/ }),

/***/ "ec1r":
/*!********************************************************!*\
  !*** ./src/app/services/sa-continental-cup.service.ts ***!
  \********************************************************/
/*! exports provided: SAContinentalCupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAContinentalCupService", function() { return SAContinentalCupService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SAContinentalCupService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getSAContinentalCupList(year) {
        return this.http.get(this.APIUrl + '/{year}/SA_Continental_Cup' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/SA_Continental_Cup' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/SA_Continental_Cup' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/SA_Continental_Cup', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/SA_Continental_Cup', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/SA_Continental_Cup', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'SA_Continental_Cup/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
SAContinentalCupService.ɵfac = function SAContinentalCupService_Factory(t) { return new (t || SAContinentalCupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SAContinentalCupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SAContinentalCupService, factory: SAContinentalCupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/", "/"]; };
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.title = "Arsenal Football Club";
        this.founded = "Established 1886";
        this.isHeader = false;
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 5, consts: [[1, "container-fluid", 2, "background-color", "#DB0007"], [1, "row"], [1, "col-xs-4", 2, "display", "contents"], [1, "brand-logo", 3, "routerLink"], ["src", "/assets/images/arsenal-logo100x00.png", "alt", "", "width", "100", "height", "100", 1, "d-inline-block"], [1, "col-xs-8", 2, "display", "contents"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".founded[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fff;\n  display: contents;\n  text-shadow: 1px 1px #000;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background: #db0007 !important;\n  position: fixed;\n  height: 100px;\n  top: 0;\n  z-index: 1020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvdW5kZWQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICMwMDA7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTksIDAsIDcsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAyMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "fLmf":
/*!************************************************************!*\
  !*** ./src/app/asia-elite-cup/asia-elite-cup.component.ts ***!
  \************************************************************/
/*! exports provided: AsiaEliteCupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsiaEliteCupComponent", function() { return AsiaEliteCupComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_asia_elite_cup_table_asia_elite_cup_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/asia-elite-cup-table/asia-elite-cup-table.component */ "ZsPU");










function AsiaEliteCupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "asia-elite-cup-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function AsiaEliteCupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "asia-elite-cup-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class AsiaEliteCupComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'Asia Elite Cup';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
AsiaEliteCupComponent.ɵfac = function AsiaEliteCupComponent_Factory(t) { return new (t || AsiaEliteCupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
AsiaEliteCupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AsiaEliteCupComponent, selectors: [["asia-elite-cup"]], decls: 10, vars: 3, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20232024", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"], [3, "CompetitionYear"]], template: function AsiaEliteCupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AsiaEliteCupComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AsiaEliteCupComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AsiaEliteCupComponent_div_8_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AsiaEliteCupComponent_div_9_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_asia_elite_cup_table_asia_elite_cup_table_component__WEBPACK_IMPORTED_MODULE_9__["AsiaEliteCupTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzaWEtZWxpdGUtY3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUNKIiwiZmlsZSI6ImFzaWEtZWxpdGUtY3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZ2aDtcclxufVxyXG5cclxuLm1heEhlaWdodC04dmgge1xyXG4gICAgbWF4LWhlaWdodDogOHZoO1xyXG59XHJcblxyXG4ucHVsbGRvd24tbWVudXMge1xyXG4gICAgbWF4LWhlaWdodDogN3ZoO1xyXG59XHJcblxyXG4uc29ycnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksIDAsIDcsIDAuMik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzoxMDBweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xyXG59Il19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "text"], ["href", "http://www.mikeetaylor.com/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This .NET Angular project courtesy of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "mikeetaylor.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #d70007;\n  bottom: 0;\n  color: white;\n  height: 50px;\n  left: 0;\n  margin-top: 50px;\n  padding: 13px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUM7RUFDSSxXQUFBO0FBQ0w7O0FBRUM7RUFDSSxxQ0FBQTtBQUNMIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDAwNztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuIC5mb290ZXIgYSB7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiB9XHJcblxyXG4gLmZvb3RlciBhOmhvdmVyIHtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ "g1Hz":
/*!****************************************************************************!*\
  !*** ./src/app/competition-menus/2021-2022/competitions-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompetitionsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsMenuComponent", function() { return CompetitionsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/Team"]; };
const _c1 = function () { return ["/Epl"]; };
const _c2 = function () { return ["/FA-Cup"]; };
const _c3 = function () { return ["/League-Cup"]; };
const _c4 = function () { return ["/Champions-League"]; };
const _c5 = function () { return ["/SA-Continental-Cup"]; };
class CompetitionsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompetitionsMenuComponent.ɵfac = function CompetitionsMenuComponent_Factory(t) { return new (t || CompetitionsMenuComponent)(); };
CompetitionsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetitionsMenuComponent, selectors: [["competitions2021-2022"]], decls: 20, vars: 12, consts: [[1, "col", "s12"], [1, "tabs", "horizontalUL"], [1, "tab", "col"], [3, "routerLink"]], template: function CompetitionsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Premier League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FA Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "League Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "UEFA Champions League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SA Continental Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbnMtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "iPI8":
/*!***********************************************************************************!*\
  !*** ./src/app/tables/community-shield-table/community-shield-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CommunityShieldTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityShieldTableComponent", function() { return CommunityShieldTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_community_shield_card_community_shield_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/community-shield-card/community-shield-card.component */ "A/dk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_community_shield_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/community-shield.service */ "yX9B");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function CommunityShieldTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CommunityShieldTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function CommunityShieldTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CommunityShieldTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function CommunityShieldTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CommunityShieldTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function CommunityShieldTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function CommunityShieldTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function CommunityShieldTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function CommunityShieldTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function CommunityShieldTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function CommunityShieldTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function CommunityShieldTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CommunityShieldTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function CommunityShieldTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function CommunityShieldTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function CommunityShieldTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class CommunityShieldTableComponent {
    constructor(_CommunityShieldService, _dialog) {
        this._CommunityShieldService = _CommunityShieldService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._CommunityShieldService.getCommunityShieldList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._CommunityShieldService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_community_shield_card_community_shield_card_component__WEBPACK_IMPORTED_MODULE_5__["CommunityShieldCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
CommunityShieldTableComponent.ɵfac = function CommunityShieldTableComponent_Factory(t) { return new (t || CommunityShieldTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_community_shield_service__WEBPACK_IMPORTED_MODULE_7__["CommunityShieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
CommunityShieldTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CommunityShieldTableComponent, selectors: [["community-shield-table"]], viewQuery: function CommunityShieldTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function CommunityShieldTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CommunityShieldTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function CommunityShieldTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CommunityShieldTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CommunityShieldTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CommunityShieldTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CommunityShieldTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CommunityShieldTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CommunityShieldTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, CommunityShieldTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CommunityShieldTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, CommunityShieldTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CommunityShieldTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CommunityShieldTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CommunityShieldTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, CommunityShieldTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CommunityShieldTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, CommunityShieldTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CommunityShieldTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, CommunityShieldTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, CommunityShieldTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CommunityShieldTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CommunityShieldTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CommunityShieldTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, CommunityShieldTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CommunityShieldTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CommunityShieldTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tdW5pdHktc2hpZWxkLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ncfK":
/*!******************************************************!*\
  !*** ./src/app/cards/ucl-card/ucl-card.component.ts ***!
  \******************************************************/
/*! exports provided: UCLCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCLCardComponent", function() { return UCLCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_ucl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ucl.service */ "padv");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class UCLCardComponent {
    constructor(dialogBox, _UCLService, _YearService) {
        this.dialogBox = dialogBox;
        this._UCLService = _UCLService;
        this._YearService = _YearService;
        this.competitionName = 'UEFA Champions League';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._UCLService.formData.PlayerID;
        this.position = this._UCLService.formData.Position;
        this.firstName = this._UCLService.formData.FirstName;
        this.lastName = this._UCLService.formData.LastName;
        this.appearances = this._UCLService.formData.Appearances;
        this.goals = this._UCLService.formData.Goals;
        this.assists = this._UCLService.formData.Assists;
        this.cleanSheets = this._UCLService.formData.CleanSheets;
        this.country = this._UCLService.formData.Country.toLowerCase();
        this.imageName = this._UCLService.formData.ImageName;
        this.totalPlayers = this._UCLService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._UCLService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._UCLService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._UCLService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
UCLCardComponent.ɵfac = function UCLCardComponent_Factory(t) { return new (t || UCLCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ucl_service__WEBPACK_IMPORTED_MODULE_3__["UCLService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
UCLCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UCLCardComponent, selectors: [["ucl-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function UCLCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1Y2wtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFDRTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBR0E7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBQTs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFQSIsImZpbGUiOiJ1Y2wtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3N0ZXItY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMSAvMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLmZvdXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbmNvbG9yOiAjZmZmO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOiAxNSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxud2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbmZvbnQtc2l6ZTogM3JlbTtcclxudGV4dC1zaGFkb3c6IDJweCAxcHggIzAwMDtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIge1xyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5nYXA6IDBweCAwcHg7XHJcbmdyaWQtYXV0by1mbG93OiByb3c7XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbmdyaWQtcm93OiBhdXRvIGF1dG87XHJcbmdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5ncmlkLXJvdy1nYXA6IDFweDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5kaXNwbGF5OmlubGluZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveC1hLCAucm9zdGVyLWJveC1iIHtcclxuZ3JpZC1jb2x1bW46IDEgO1xyXG5ncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWMsIC5yb3N0ZXItYm94LWQge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxudGV4dC1zaGFkb3c6ICMwMDAgMnB4IDJweDtcclxufVxyXG5cclxuLnllYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMDQ1O1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5iIHtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG5ncmlkLWNvbHVtbjogMyA7XHJcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG59Il19 */"] });


/***/ }),

/***/ "padv":
/*!*****************************************!*\
  !*** ./src/app/services/ucl.service.ts ***!
  \*****************************************/
/*! exports provided: UCLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCLService", function() { return UCLService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UCLService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getUCLList(year) {
        return this.http.get(this.APIUrl + '/{year}/UEFA_Champions_League' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/UEFA_Champions_League' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/UEFA_Champions_League' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/UEFA_Champions_League', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/UEFA_Champions_League', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/UEFA_Champions_League', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'UEFA_Champions_League/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
UCLService.ɵfac = function UCLService_Factory(t) { return new (t || UCLService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UCLService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UCLService, factory: UCLService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qsLY":
/*!********************************************!*\
  !*** ./src/app/fa-cup/fa-cup.component.ts ***!
  \********************************************/
/*! exports provided: FACupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACupComponent", function() { return FACupComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_fa_cup_table_fa_cup_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/fa-cup-table/fa-cup-table.component */ "zHvk");










function FACupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function FACupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function FACupComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function FACupComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
function FACupComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-cup-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r4.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class FACupComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'FA Cup';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
FACupComponent.ɵfac = function FACupComponent_Factory(t) { return new (t || FACupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
FACupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FACupComponent, selectors: [["fa-cup"]], decls: 19, vars: 6, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20242025", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], ["value", "20212022", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"]], template: function FACupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FACupComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2024-2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FACupComponent_Template_mat_option_click_11_listener() { return ctx.sendValueIntoService("20212022"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FACupComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FACupComponent_div_15_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FACupComponent_div_16_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FACupComponent_div_17_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FACupComponent_div_18_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_fa_cup_table_fa_cup_table_component__WEBPACK_IMPORTED_MODULE_9__["FACupTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhLWN1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJmYS1jdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnZoO1xyXG59XHJcblxyXG4ubWF4SGVpZ2h0LTh2aCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5wdWxsZG93bi1tZW51cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5zb3JyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMCwgNywgMC4yKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return ["/Team"]; };
class PageNotFoundComponent {
    constructor() {
        this.isHeader = false;
        this.images = [
            'action-dufour.jpg',
            'action-van-der-linden.jpg',
            'action-dufour-reckless.jpg',
            'action-neves-reckless.jpg'
        ];
        this.path = '../../assets/images/';
    }
    ngOnInit() {
        let randomImage = Math.floor(Math.random() * this.images.length);
        this.backgroundImage = this.path + this.images[randomImage];
        console.log(this.backgroundImage);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["page-not-found"]], decls: 14, vars: 5, consts: [[1, "class404", 3, "ngStyle"], [1, "container", "flex-center", "pt25"], [1, "display-3", "font-bold", "mb-2", "arsenal-h2"], [1, "hr-light"], [1, "text-white", "mt-2", "mb-5", "arsenal-h3"], ["data-wow-delay", "0.2s", "data-toggle", "modal", "data-target", "#modal-reservation", 1, "waves-effect", "waves-light", "btn", "home-btn", 2, "visibility", "visible", "animation-delay", "0.2s", "animation-name", "fadeInUp"], [1, "fa-solid", "fa-angles-right", "home-arrow"], [3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Arsenal FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Well that didn't go as planned...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.backgroundImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["section.class404[_ngcontent-%COMP%] {\n  background-size: cover;\n  text-align: center;\n  height: 100vh;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 5rem;\n}\n\n.arsenal-h2[_ngcontent-%COMP%], .arsenal-h3[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px #DB0007;\n}\n\n.hr-light[_ngcontent-%COMP%] {\n  border-top: 1px solid #fff;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 3.5rem !important;\n}\n\n.home-arrow[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.home-btn[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n  width: 17rem;\n}\n\n.home-div[_ngcontent-%COMP%] {\n  padding: 40px 4.56%;\n}\n\n.mdc-touch-target-wrapper[_ngcontent-%COMP%] {\n  padding-top: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBS0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUFHLGVBQUE7QUFESDs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQHVzZSBcIkBtYXRlcmlhbC9idXR0b24vXCI7XHJcblxyXG5zZWN0aW9uLmNsYXNzNDA0IHsgXHJcbiAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWN0aW9uLW1hbGVuLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtmb250LXNpemU6IDQwcHg7fVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbn1cclxuXHJcbi5hcnNlbmFsLWgyLCAuYXJzZW5hbC1oMyB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggI0RCMDAwNztcclxufVxyXG5cclxuLmhyLWxpZ2h0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLm1iLTIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob21lLWFycm93IHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLmhvbWUtYnRuIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gIHdpZHRoOiAxN3JlbTtcclxufVxyXG5cclxuLmhvbWUtZGl2IHtcclxuICBwYWRkaW5nOiA0MHB4IDQuNTYlO1xyXG59XHJcblxyXG4ubWRjLXRvdWNoLXRhcmdldC13cmFwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogNTB2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "sBp9":
/*!****************************************************************************!*\
  !*** ./src/app/competition-menus/2023-2024/competitions-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompetitionsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsMenuComponent", function() { return CompetitionsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/Team"]; };
const _c1 = function () { return ["/Epl"]; };
const _c2 = function () { return ["/FA-Cup"]; };
const _c3 = function () { return ["/League-Cup"]; };
const _c4 = function () { return ["/Champions-League"]; };
const _c5 = function () { return ["/Super-Cup"]; };
const _c6 = function () { return ["/Community-Shield"]; };
const _c7 = function () { return ["/Asia-Elite-Cup"]; };
class CompetitionsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompetitionsMenuComponent.ɵfac = function CompetitionsMenuComponent_Factory(t) { return new (t || CompetitionsMenuComponent)(); };
CompetitionsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetitionsMenuComponent, selectors: [["competitions2023-2024"]], decls: 26, vars: 16, consts: [[1, "col", "s12"], [1, "tabs", "horizontalUL"], [1, "tab", "col"], [3, "routerLink"]], template: function CompetitionsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Premier League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FA Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "League Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "UEFA Champions League");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "UEFA Super Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Community Shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Asia Elite Cup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbnMtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "t7q1":
/*!****************************************************************************!*\
  !*** ./src/app/cards/asia-elite-cup-card/asia-elite-cup-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: AsiaEliteCupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsiaEliteCupCardComponent", function() { return AsiaEliteCupCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_asia_elite_cup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/asia-elite-cup.service */ "aG7b");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class AsiaEliteCupCardComponent {
    constructor(dialogBox, _AsiaEliteCupService, _YearService) {
        this.dialogBox = dialogBox;
        this._AsiaEliteCupService = _AsiaEliteCupService;
        this._YearService = _YearService;
        this.competitionName = 'Asia Elite Cup';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._AsiaEliteCupService.formData.PlayerID;
        this.position = this._AsiaEliteCupService.formData.Position;
        this.firstName = this._AsiaEliteCupService.formData.FirstName;
        this.lastName = this._AsiaEliteCupService.formData.LastName;
        this.appearances = this._AsiaEliteCupService.formData.Appearances;
        this.goals = this._AsiaEliteCupService.formData.Goals;
        this.assists = this._AsiaEliteCupService.formData.Assists;
        this.cleanSheets = this._AsiaEliteCupService.formData.CleanSheets;
        this.country = this._AsiaEliteCupService.formData.Country.toLowerCase();
        this.imageName = this._AsiaEliteCupService.formData.ImageName;
        this.totalPlayers = this._AsiaEliteCupService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._AsiaEliteCupService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._AsiaEliteCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._AsiaEliteCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
AsiaEliteCupCardComponent.ɵfac = function AsiaEliteCupCardComponent_Factory(t) { return new (t || AsiaEliteCupCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_asia_elite_cup_service__WEBPACK_IMPORTED_MODULE_3__["AsiaEliteCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
AsiaEliteCupCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AsiaEliteCupCardComponent, selectors: [["asia-elite-cup-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function AsiaEliteCupCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AsiaEliteCupCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AsiaEliteCupCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AsiaEliteCupCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc2lhLWVsaXRlLWN1cC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUNFO0FBQUo7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0QsV0FBQTtBQUFEOztBQUdBO0VBQ0UsY0FBQTtFQUNELFdBQUE7QUFBRDs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUVGIiwiZmlsZSI6ImFzaWEtZWxpdGUtY3VwLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9zdGVyLWNhcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbi5vbmUge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgfVxyXG5cclxuLnR3byB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICB9XHJcblxyXG4udGhyZWUge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICB9XHJcblxyXG4uZm91ciB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICB9XHJcbiAgXHJcbi5yb3N0ZXItYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHRleHQtc2hhZG93OiAycHggMXB4ICMwMDA7XHJcbn1cclxuXHJcbi5ib3hlcy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBnYXA6IDBweCAwcHg7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gIGdyaWQtcm93OiBhdXRvIGF1dG87XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcHg7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxcHg7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94IHtcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gtYSwgLnJvc3Rlci1ib3gtYiB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgO1xyXG5cdGdyaWQtcm93OiAxIDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gtYywgLnJvc3Rlci1ib3gtZCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgO1xyXG5cdGdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxuICB0ZXh0LXNoYWRvdzogIzAwMCAycHggMnB4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjA0NTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG4gIGdyaWQtY29sdW1uOiAxIDtcclxuICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxufVxyXG4uYiB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG4gIGdyaWQtY29sdW1uOiAzIDtcclxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "tKxS":
/*!*********************************************************************!*\
  !*** ./src/app/tables/super-cup-table/super-cup-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: SuperCupTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperCupTableComponent", function() { return SuperCupTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_super_cup_card_super_cup_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/super-cup-card/super-cup-card.component */ "dH4Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_super_cup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/super-cup.service */ "VmG2");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function SuperCupTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SuperCupTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function SuperCupTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SuperCupTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function SuperCupTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SuperCupTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function SuperCupTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function SuperCupTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function SuperCupTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function SuperCupTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function SuperCupTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function SuperCupTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function SuperCupTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SuperCupTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function SuperCupTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function SuperCupTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function SuperCupTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class SuperCupTableComponent {
    constructor(_SuperCupService, _dialog) {
        this._SuperCupService = _SuperCupService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._SuperCupService.getSuperCupList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._SuperCupService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_super_cup_card_super_cup_card_component__WEBPACK_IMPORTED_MODULE_5__["SuperCupCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
SuperCupTableComponent.ɵfac = function SuperCupTableComponent_Factory(t) { return new (t || SuperCupTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_super_cup_service__WEBPACK_IMPORTED_MODULE_7__["SuperCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
SuperCupTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SuperCupTableComponent, selectors: [["super-cup-table"]], viewQuery: function SuperCupTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function SuperCupTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SuperCupTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function SuperCupTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SuperCupTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SuperCupTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SuperCupTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SuperCupTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SuperCupTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SuperCupTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SuperCupTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SuperCupTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SuperCupTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SuperCupTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SuperCupTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SuperCupTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SuperCupTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, SuperCupTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SuperCupTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SuperCupTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SuperCupTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SuperCupTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, SuperCupTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, SuperCupTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SuperCupTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SuperCupTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, SuperCupTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, SuperCupTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci1jdXAtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "tuMx":
/*!**************************************!*\
  !*** ./src/app/ucl/ucl.component.ts ***!
  \**************************************/
/*! exports provided: UCLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCLComponent", function() { return UCLComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_ucl_table_ucl_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/ucl-table/ucl-table.component */ "5pCp");










function UCLComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ucl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function UCLComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ucl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function UCLComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ucl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function UCLComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ucl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20212022")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20212022");
} }
function UCLComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ucl-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class UCLComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'UEFA Champions League';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
UCLComponent.ɵfac = function UCLComponent_Factory(t) { return new (t || UCLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
UCLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UCLComponent, selectors: [["ucl"]], decls: 19, vars: 6, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20242025", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], ["value", "20212022", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"], [3, "CompetitionYear"]], template: function UCLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UCLComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2024-2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UCLComponent_Template_mat_option_click_11_listener() { return ctx.sendValueIntoService("20212022"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UCLComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UCLComponent_div_15_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UCLComponent_div_16_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UCLComponent_div_17_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UCLComponent_div_18_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_ucl_table_ucl_table_component__WEBPACK_IMPORTED_MODULE_9__["UCLTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVjbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJ1Y2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnZoO1xyXG59XHJcblxyXG4ubWF4SGVpZ2h0LTh2aCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5wdWxsZG93bi1tZW51cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5zb3JyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMCwgNywgMC4yKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/roster-layout/roster-layout.component */ "/0FR");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _first_team_first_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-team/first-team.component */ "Hg/S");
/* harmony import */ var _asia_elite_cup_asia_elite_cup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asia-elite-cup/asia-elite-cup.component */ "fLmf");
/* harmony import */ var _community_shield_community_shield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community-shield/community-shield.component */ "zcr3");
/* harmony import */ var _epl_epl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./epl/epl.component */ "R5K7");
/* harmony import */ var _fa_cup_fa_cup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fa-cup/fa-cup.component */ "qsLY");
/* harmony import */ var _league_cup_league_cup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./league-cup/league-cup.component */ "9xBL");
/* harmony import */ var _sa_continental_cup_sa_continental_cup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sa-continental-cup/sa-continental-cup.component */ "CJxF");
/* harmony import */ var _super_cup_super_cup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./super-cup/super-cup.component */ "xF5g");
/* harmony import */ var _ucl_ucl_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ucl/ucl.component */ "tuMx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'Home' },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'PageNotFound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
    { path: 'Team', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _first_team_first_team_component__WEBPACK_IMPORTED_MODULE_4__["FirstTeamComponent"] }] },
    { path: 'Asia-Elite-Cup', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _asia_elite_cup_asia_elite_cup_component__WEBPACK_IMPORTED_MODULE_5__["AsiaEliteCupComponent"] }] },
    { path: 'Community-Shield', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _community_shield_community_shield_component__WEBPACK_IMPORTED_MODULE_6__["CommunityShieldComponent"] }] },
    { path: 'Epl', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _epl_epl_component__WEBPACK_IMPORTED_MODULE_7__["EPLComponent"] }] },
    { path: 'FA-Cup', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _fa_cup_fa_cup_component__WEBPACK_IMPORTED_MODULE_8__["FACupComponent"] }] },
    { path: 'League-Cup', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _league_cup_league_cup_component__WEBPACK_IMPORTED_MODULE_9__["LeagueCupComponent"] }] },
    { path: 'SA-Continental-Cup', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _sa_continental_cup_sa_continental_cup_component__WEBPACK_IMPORTED_MODULE_10__["SAContinentalCupComponent"] }] },
    { path: 'Super-Cup', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _super_cup_super_cup_component__WEBPACK_IMPORTED_MODULE_11__["SuperCupComponent"] }] },
    { path: 'Champions-League', component: _layout_roster_layout_roster_layout_component__WEBPACK_IMPORTED_MODULE_2__["RosterLayoutComponent"], children: [{ path: '', component: _ucl_ucl_component__WEBPACK_IMPORTED_MODULE_12__["UCLComponent"] }] },
    { path: '**', redirectTo: '/PageNotFound' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wQKX":
/*!********************************************!*\
  !*** ./src/app/services/fa-cup.service.ts ***!
  \********************************************/
/*! exports provided: FACupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACupService", function() { return FACupService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FACupService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getFACupList(year) {
        return this.http.get(this.APIUrl + '/{year}/FA_Cup' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/FA_Cup' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/FA_Cup' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/FA_Cup', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/FA_Cup', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/FA_Cup', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'FA_Cup/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
FACupService.ɵfac = function FACupService_Factory(t) { return new (t || FACupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FACupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FACupService, factory: FACupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wpLj":
/*!***********************************************************************!*\
  !*** ./src/app/tables/league-cup-table/league-cup-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: LeagueCupTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCupTableComponent", function() { return LeagueCupTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_league_cup_card_league_cup_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/league-cup-card/league-cup-card.component */ "7pUA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_league_cup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/league-cup.service */ "AfJY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function LeagueCupTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LeagueCupTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function LeagueCupTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LeagueCupTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function LeagueCupTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LeagueCupTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function LeagueCupTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function LeagueCupTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function LeagueCupTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function LeagueCupTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function LeagueCupTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function LeagueCupTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function LeagueCupTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LeagueCupTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function LeagueCupTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function LeagueCupTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function LeagueCupTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class LeagueCupTableComponent {
    constructor(_LeagueCupService, _dialog) {
        this._LeagueCupService = _LeagueCupService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._LeagueCupService.getLeagueCupList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._LeagueCupService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_league_cup_card_league_cup_card_component__WEBPACK_IMPORTED_MODULE_5__["LeagueCupCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
LeagueCupTableComponent.ɵfac = function LeagueCupTableComponent_Factory(t) { return new (t || LeagueCupTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_league_cup_service__WEBPACK_IMPORTED_MODULE_7__["LeagueCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
LeagueCupTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LeagueCupTableComponent, selectors: [["league-cup-table"]], viewQuery: function LeagueCupTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function LeagueCupTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LeagueCupTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function LeagueCupTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LeagueCupTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, LeagueCupTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, LeagueCupTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, LeagueCupTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, LeagueCupTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, LeagueCupTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, LeagueCupTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, LeagueCupTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, LeagueCupTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, LeagueCupTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, LeagueCupTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LeagueCupTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, LeagueCupTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, LeagueCupTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, LeagueCupTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, LeagueCupTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, LeagueCupTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, LeagueCupTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, LeagueCupTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, LeagueCupTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, LeagueCupTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, LeagueCupTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, LeagueCupTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, LeagueCupTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFndWUtY3VwLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "xF5g":
/*!**************************************************!*\
  !*** ./src/app/super-cup/super-cup.component.ts ***!
  \**************************************************/
/*! exports provided: SuperCupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperCupComponent", function() { return SuperCupComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_super_cup_table_super_cup_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/super-cup-table/super-cup-table.component */ "tKxS");










function SuperCupComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "super-cup-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function SuperCupComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "super-cup-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function SuperCupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "super-cup-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function SuperCupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "super-cup-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class SuperCupComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'UEFA Super Cup';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
SuperCupComponent.ɵfac = function SuperCupComponent_Factory(t) { return new (t || SuperCupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
SuperCupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SuperCupComponent, selectors: [["super-cup"]], decls: 16, vars: 5, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20242025", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"]], template: function SuperCupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SuperCupComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuperCupComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuperCupComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuperCupComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SuperCupComponent_div_12_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SuperCupComponent_div_13_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SuperCupComponent_div_14_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SuperCupComponent_div_15_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_super_cup_table_super_cup_table_component__WEBPACK_IMPORTED_MODULE_9__["SuperCupTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1cGVyLWN1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzdXBlci1jdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnZoO1xyXG59XHJcblxyXG4ubWF4SGVpZ2h0LTh2aCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5wdWxsZG93bi1tZW51cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5zb3JyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMCwgNywgMC4yKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "xOqi":
/*!********************************************************************************!*\
  !*** ./src/app/cards/sa-continental-card/sa-continental-cup-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: SAContinentalCupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAContinentalCupCardComponent", function() { return SAContinentalCupCardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_sa_continental_cup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sa-continental-cup.service */ "ec1r");
/* harmony import */ var src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class SAContinentalCupCardComponent {
    constructor(dialogBox, _SAContinentalCupService, _YearService) {
        this.dialogBox = dialogBox;
        this._SAContinentalCupService = _SAContinentalCupService;
        this._YearService = _YearService;
        this.competitionName = 'South American Continental Cup';
        this.campaign = this._YearService.teamYear;
        this.hyphen = '-';
        this.campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
        this.playerID = this._SAContinentalCupService.formData.PlayerID;
        this.position = this._SAContinentalCupService.formData.Position;
        this.firstName = this._SAContinentalCupService.formData.FirstName;
        this.lastName = this._SAContinentalCupService.formData.LastName;
        this.appearances = this._SAContinentalCupService.formData.Appearances;
        this.goals = this._SAContinentalCupService.formData.Goals;
        this.assists = this._SAContinentalCupService.formData.Assists;
        this.cleanSheets = this._SAContinentalCupService.formData.CleanSheets;
        this.country = this._SAContinentalCupService.formData.Country.toLowerCase();
        this.imageName = this._SAContinentalCupService.formData.ImageName;
        this.totalPlayers = this._SAContinentalCupService.formData.TotalPlayers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        this._SAContinentalCupService.listen().subscribe();
    }
    ngOnInit() {
        if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
        }
        if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
        }
    }
    prevPlayerOnRoster() {
        this.nextButtonIsDisabled = false;
        this._SAContinentalCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID - 2;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == 1) {
                this.prevButtonIsDisabled = true;
            }
            else {
                this.prevButtonIsDisabled = false;
            }
        });
    }
    nextPlayerOnRoster() {
        this.prevButtonIsDisabled = false;
        this._SAContinentalCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result => {
            let value = this.playerID;
            if (result.hasOwnProperty(value)) {
                this.position = result[value].Position;
                this.playerID = result[value].PlayerID;
                this.firstName = result[value].FirstName;
                this.lastName = result[value].LastName;
                this.goals = result[value].Goals;
                this.assists = result[value].Assists;
                this.cleanSheets = result[value].CleanSheets;
                this.appearances = result[value].Appearances;
                this.country = result[value].Country.toLowerCase();
                this.imageName = result[value].ImageName;
            }
            if (this.playerID == this.totalPlayers) {
                this.nextButtonIsDisabled = true;
            }
        });
    }
    onClose() {
        this.dialogBox.close();
    }
}
SAContinentalCupCardComponent.ɵfac = function SAContinentalCupCardComponent_Factory(t) { return new (t || SAContinentalCupCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_sa_continental_cup_service__WEBPACK_IMPORTED_MODULE_3__["SAContinentalCupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_year_service__WEBPACK_IMPORTED_MODULE_4__["YearService"])); };
SAContinentalCupCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SAContinentalCupCardComponent, selectors: [["sa-continental-cup-card"]], inputs: { PlayerToFirstTeam: "PlayerToFirstTeam", CompetitionName: "CompetitionName" }, decls: 52, vars: 13, consts: [["PlayerToFirstTeam", "teamYear"], [1, "p-0"], [1, "d-flex", "justify-content-between"], [1, "player-name"], ["mat-button", "", 3, "click"], ["cols", "1"], [1, "boxes-wrapper"], [1, "box", "a"], ["mat-card-image", "", 1, "player-card", 3, "src"], [1, "box", "year"], [2, "font-size", "1.25rem"], [1, "box", "b"], [1, "boxes-wrapper2"], [1, "roster-box", "e"], [1, "roster-box", "f"], [1, "roster-box", "g"], [1, "roster-box", "h"], [1, "box", "c"], ["mat-card-image", "", 1, "flag", 3, "src"], [1, "btn", "btn-danger", 2, "color", "#fff !important", "width", "50%", 3, "disabled", "click"]], template: function SAContinentalCupCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SAContinentalCupCardComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Assists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Clean Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SAContinentalCupCardComponent_Template_button_click_48_listener() { return ctx.prevPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SAContinentalCupCardComponent_Template_button_click_50_listener() { return ctx.nextPlayerOnRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.position, " ", ctx.firstName, " ", ctx.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/players/" + ctx.imageName + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.campaignYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.competitionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.goals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cleanSheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appearances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.country + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.prevButtonIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nextButtonIsDisabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"]], styles: [".header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #DB0007;\n  color: #fff;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.roster-card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.three[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2;\n}\n\n.four[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  grid-row: 2;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  background-color: rgba(238, 110, 115, 0.7);\n  color: #fff;\n  height: 100%;\n  padding-top: 15%;\n  text-align: center;\n  vertical-align: middle;\n  width: 99%;\n}\n\n.roster-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 3rem;\n  text-shadow: 2px 1px #000;\n}\n\n.boxes-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \". .\";\n}\n\n.boxes-wrapper2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: auto auto;\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n}\n\n.roster-box[_ngcontent-%COMP%] {\n  display: inline;\n  align-items: center;\n  justify-content: center;\n}\n\n.roster-box-a[_ngcontent-%COMP%], .roster-box-b[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.roster-box-c[_ngcontent-%COMP%], .roster-box-d[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: #000 2px 2px;\n}\n\n.year[_ngcontent-%COMP%] {\n  background-color: #222045;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  text-shadow: #f00 1px 1px;\n}\n\n.a[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n}\n\n.b[_ngcontent-%COMP%] {\n  grid-column: 2/span 2;\n}\n\n.c[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-column: 2/span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYS1jb250aW5lbnRhbC1jdXAtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFDRTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBR0E7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBQTs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFQSIsImZpbGUiOiJzYS1jb250aW5lbnRhbC1jdXAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3N0ZXItY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMSAvMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLmZvdXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTEwLCAxMTUsIDAuNyk7XHJcbmNvbG9yOiAjZmZmO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOiAxNSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxud2lkdGg6IDk5JTtcclxufVxyXG5cclxuLnJvc3Rlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbmZvbnQtc2l6ZTogM3JlbTtcclxudGV4dC1zaGFkb3c6IDJweCAxcHggIzAwMDtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIge1xyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5nYXA6IDBweCAwcHg7XHJcbmdyaWQtYXV0by1mbG93OiByb3c7XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCIuIC5cIjtcclxufVxyXG5cclxuLmJveGVzLXdyYXBwZXIyIHtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbmdyaWQtcm93OiBhdXRvIGF1dG87XHJcbmdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5ncmlkLXJvdy1nYXA6IDFweDtcclxufVxyXG5cclxuLnJvc3Rlci1ib3gge1xyXG5kaXNwbGF5OmlubGluZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG4ucm9zdGVyLWJveC1hLCAucm9zdGVyLWJveC1iIHtcclxuZ3JpZC1jb2x1bW46IDEgO1xyXG5ncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbi5yb3N0ZXItYm94LWMsIC5yb3N0ZXItYm94LWQge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAyIDtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxudGV4dC1zaGFkb3c6ICMwMDAgMnB4IDJweDtcclxufVxyXG5cclxuLnllYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMDQ1O1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6ICNmMDAgMXB4IDFweDtcclxufVxyXG5cclxuLmEge1xyXG5ncmlkLWNvbHVtbjogMSA7XHJcbmdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5iIHtcclxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbn1cclxuLmMge1xyXG5ncmlkLWNvbHVtbjogMyA7XHJcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG59Il19 */"] });


/***/ }),

/***/ "yT3m":
/*!*********************************************************!*\
  !*** ./src/app/tables/epl-table/epl-table.component.ts ***!
  \*********************************************************/
/*! exports provided: EPLTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPLTableComponent", function() { return EPLTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_epl_card_epl_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/epl-card/epl-card.component */ "NWTi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_epl_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/epl.service */ "Srkr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function EPLTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EPLTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function EPLTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EPLTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function EPLTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EPLTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function EPLTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function EPLTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function EPLTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function EPLTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function EPLTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function EPLTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function EPLTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EPLTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function EPLTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 35);
} }
function EPLTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 36);
} }
function EPLTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class EPLTableComponent {
    constructor(_EPLService, _dialog) {
        this._EPLService = _EPLService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._EPLService.getEPLList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._EPLService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_epl_card_epl_card_component__WEBPACK_IMPORTED_MODULE_5__["EPLCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
EPLTableComponent.ɵfac = function EPLTableComponent_Factory(t) { return new (t || EPLTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_epl_service__WEBPACK_IMPORTED_MODULE_7__["EPLService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
EPLTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EPLTableComponent, selectors: [["epl-table"]], viewQuery: function EPLTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear", CompetitionName: "CompetitionName" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", "class", "PositionHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "PositionData left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", "", 1, "PositionHeader"], ["mat-cell", "", 1, "PositionData", "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function EPLTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EPLTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function EPLTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EPLTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EPLTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EPLTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, EPLTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, EPLTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, EPLTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, EPLTableComponent_td_16_Template, 3, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, EPLTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, EPLTableComponent_td_19_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, EPLTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, EPLTableComponent_td_22_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, EPLTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, EPLTableComponent_td_25_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EPLTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, EPLTableComponent_td_28_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, EPLTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, EPLTableComponent_td_31_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, EPLTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, EPLTableComponent_td_34_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, EPLTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, EPLTableComponent_td_37_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, EPLTableComponent_tr_38_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, EPLTableComponent_tr_39_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, EPLTableComponent_mat_card_40_Template, 8, 1, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcGwtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yX9B":
/*!******************************************************!*\
  !*** ./src/app/services/community-shield.service.ts ***!
  \******************************************************/
/*! exports provided: CommunityShieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityShieldService", function() { return CommunityShieldService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CommunityShieldService {
    //readonly PhotoURL="http://localhost:59229/Photos";
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:59229/api";
        this._listeners = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getCommunityShieldList(year) {
        return this.http.get(this.APIUrl + '/{year}/Community_Shield' + year);
    }
    getNextPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/Community_Shield' + year + '/PlayerID=' + val);
    }
    getPrevPlayer(val, year) {
        return this.http.get(this.APIUrl + '/{year}/Community_Shield' + year + '/PlayerID=' + val);
    }
    addPlayerToRoster(val) {
        return this.http.post(this.APIUrl + '/Community_Shield', val);
    }
    updatePlayerOnRoster(val) {
        return this.http.put(this.APIUrl + '/Community_Shield', val);
    }
    deletePlayerFromRoster(val) {
        return this.http.delete(this.APIUrl + '/Community_Shield', val);
    }
    uploadPhoto(val) {
        return this.http.post(this.APIUrl + 'Community_Shield/SaveFile', val);
    }
    listen() {
        return this._listeners.asObservable();
    }
    filter(filterBy) {
        this._listeners.next(filterBy);
    }
}
CommunityShieldService.ɵfac = function CommunityShieldService_Factory(t) { return new (t || CommunityShieldService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommunityShieldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommunityShieldService, factory: CommunityShieldService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zHvk":
/*!***************************************************************!*\
  !*** ./src/app/tables/fa-cup-table/fa-cup-table.component.ts ***!
  \***************************************************************/
/*! exports provided: FACupTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACupTableComponent", function() { return FACupTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_cards_fa_cup_card_fa_cup_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cards/fa-cup-card/fa-cup-card.component */ "6mZS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_fa_cup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fa-cup.service */ "wQKX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function FACupTableComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FACupTableComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.Position, " ");
} }
function FACupTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FACupTableComponent_td_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const element_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.onClickPlayer(element_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.FirstName);
} }
function FACupTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FACupTableComponent_td_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.onClickPlayer(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.LastName);
} }
function FACupTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.Country, " ");
} }
function FACupTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appearances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.Appearances, " ");
} }
function FACupTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.Goals, " ");
} }
function FACupTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Assists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.Assists, " ");
} }
function FACupTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Clean Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.CleanSheets, " ");
} }
function FACupTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "On Loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.OnLoan, " ");
} }
function FACupTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loan Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function FACupTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.LoanTeam, " ");
} }
function FACupTableComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
} }
function FACupTableComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function FACupTableComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "We couldn't find data for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Sorry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r24.dataSource.filter, "\"");
} }
const _c0 = function () { return [5, 10, 25, 50]; };
class FACupTableComponent {
    constructor(_FACupService, _dialog) {
        this._FACupService = _FACupService;
        this._dialog = _dialog;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.displayedColumns = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.getThisRoster(this.PlayerYear);
        this.displayNoRecords = false;
        this.filterTable();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getThisRoster(result) {
        result = this._FACupService.getFACupList(this.PlayerYear);
        result.subscribe((report) => this.dataSource.data = report);
    }
    onClickPlayer(player) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this._FACupService.formData = player;
        this.resultLength = this.dataSource.data.length;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = "594px";
        dialogConfig.width = "821px";
        this._dialog.open(src_app_cards_fa_cup_card_fa_cup_card_component__WEBPACK_IMPORTED_MODULE_5__["FACupCardComponent"], dialogConfig);
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
    }
    filterTable() {
        this.dataSource.filterPredicate = (data, filter) => {
            return (data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
                || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter));
        };
    }
    clearSearchField() {
        this.searchField = '';
        this.dataSource.filter = '';
        this.displayNoRecords = false;
    }
}
FACupTableComponent.ɵfac = function FACupTableComponent_Factory(t) { return new (t || FACupTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_fa_cup_service__WEBPACK_IMPORTED_MODULE_7__["FACupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
FACupTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FACupTableComponent, selectors: [["fa-cup-table"]], viewQuery: function FACupTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { PlayerYear: "PlayerYear" }, decls: 42, vars: 10, consts: [[1, "mat-elevation-z1", "table-container"], ["appearance", "standard"], [1, "search-label"], ["matInput", "", "placeholder", "Ex. David", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "striped", "highlight", 3, "dataSource"], ["matColumnDef", "Position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left-text", 4, "matCellDef"], ["matColumnDef", "FirstName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "FirstNameHeader", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "FirstNameData left-text", 4, "matCellDef"], ["matColumnDef", "LastName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Appearances"], ["matColumnDef", "Goals"], ["matColumnDef", "Assists"], ["matColumnDef", "CleanSheets"], ["matColumnDef", "OnLoan"], ["matColumnDef", "LoanTeam"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "sorry", 4, "ngIf"], ["aria-label", "Select page", "showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left-text"], ["mat-header-cell", "", "mat-sort-header", "", 1, "FirstNameHeader"], ["mat-cell", "", 1, "FirstNameData", "left-text"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "sorry"], [2, "text-align", "center"], [2, "color", "#DB0007"]], template: function FACupTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FACupTableComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function FACupTableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, FACupTableComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, FACupTableComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, FACupTableComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, FACupTableComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, FACupTableComponent_td_13_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, FACupTableComponent_th_15_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, FACupTableComponent_td_16_Template, 3, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, FACupTableComponent_th_18_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, FACupTableComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, FACupTableComponent_th_21_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, FACupTableComponent_td_22_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, FACupTableComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, FACupTableComponent_td_25_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, FACupTableComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, FACupTableComponent_td_28_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, FACupTableComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, FACupTableComponent_td_31_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, FACupTableComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, FACupTableComponent_td_34_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, FACupTableComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, FACupTableComponent_td_37_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, FACupTableComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, FACupTableComponent_tr_39_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, FACupTableComponent_mat_card_40_Template, 8, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayNoRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", 50)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYS1jdXAtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXr7":
/*!******************************************************!*\
  !*** ./src/app/competition/competition.component.ts ***!
  \******************************************************/
/*! exports provided: CompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionComponent", function() { return CompetitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_menus_2024_2025_competitions_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../competition-menus/2024-2025/competitions-menu.component */ "bE0P");
/* harmony import */ var _competition_menus_2023_2024_competitions_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../competition-menus/2023-2024/competitions-menu.component */ "sBp9");
/* harmony import */ var _competition_menus_2022_2023_competitions_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../competition-menus/2022-2023/competitions-menu.component */ "7/50");
/* harmony import */ var _competition_menus_2021_2022_competitions_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../competition-menus/2021-2022/competitions-menu.component */ "g1Hz");






function CompetitionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "competitions2024-2025");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompetitionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "competitions2023-2024");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompetitionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "competitions2022-2023");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompetitionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "competitions2021-2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompetitionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompetitionComponent {
    constructor() {
        this.hyphen = '-';
    }
    ngOnInit() {
        this.campaignYear = [this.CompetitionYear.slice(0, 4), this.hyphen, this.CompetitionYear.slice(4)].join('');
    }
}
CompetitionComponent.ɵfac = function CompetitionComponent_Factory(t) { return new (t || CompetitionComponent)(); };
CompetitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetitionComponent, selectors: [["competition"]], inputs: { CompetitionYear: "CompetitionYear", CompetitionName: "CompetitionName" }, decls: 8, vars: 7, consts: [[1, "seasonCampaign"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function CompetitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompetitionComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompetitionComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompetitionComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompetitionComponent_div_6_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompetitionComponent_div_7_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.campaignYear, " ", ctx.CompetitionName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.CompetitionYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "20222023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "20212022");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _competition_menus_2024_2025_competitions_menu_component__WEBPACK_IMPORTED_MODULE_2__["CompetitionsMenuComponent"], _competition_menus_2023_2024_competitions_menu_component__WEBPACK_IMPORTED_MODULE_3__["CompetitionsMenuComponent"], _competition_menus_2022_2023_competitions_menu_component__WEBPACK_IMPORTED_MODULE_4__["CompetitionsMenuComponent"], _competition_menus_2021_2022_competitions_menu_component__WEBPACK_IMPORTED_MODULE_5__["CompetitionsMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "zcr3":
/*!****************************************************************!*\
  !*** ./src/app/community-shield/community-shield.component.ts ***!
  \****************************************************************/
/*! exports provided: CommunityShieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityShieldComponent", function() { return CommunityShieldComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/year.service */ "Y5Qz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../competition/competition.component */ "zXr7");
/* harmony import */ var _tables_community_shield_table_community_shield_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/community-shield-table/community-shield-table.component */ "iPI8");










function CommunityShieldComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "community-shield-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20242025")("CompetitionName", ctx_r0.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20242025");
} }
function CommunityShieldComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "community-shield-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r1.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
function CommunityShieldComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "community-shield-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20222023")("CompetitionName", ctx_r2.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20222023");
} }
function CommunityShieldComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "competition", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "community-shield-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CompetitionYear", "20232024")("CompetitionName", ctx_r3.competitionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("PlayerYear", "20232024");
} }
class CommunityShieldComponent {
    constructor(_YearService) {
        this._YearService = _YearService;
        this.teamYear = this._YearService.teamYear;
        this.competitionName = 'Community Shield';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.sendValueIntoService(this.teamYear);
    }
    sendValueIntoService(value) {
        this._YearService.setTeamYear(value);
    }
}
CommunityShieldComponent.ɵfac = function CommunityShieldComponent_Factory(t) { return new (t || CommunityShieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"])); };
CommunityShieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommunityShieldComponent, selectors: [["community-shield"]], decls: 16, vars: 5, consts: [[1, "container", "clear-7vh"], ["appearance", "fill", 1, "mat-form-field-pulldown"], ["disableOptionCentering", "", 3, "ngModel", "ngModelChange"], ["value", "20242025", 3, "click"], ["value", "20232024", 3, "click"], ["value", "20222023", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "CompetitionYear", "CompetitionName"], [3, "PlayerYear"]], template: function CommunityShieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CommunityShieldComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.teamYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunityShieldComponent_Template_mat_option_click_5_listener() { return ctx.sendValueIntoService("20242025"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2024-2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunityShieldComponent_Template_mat_option_click_7_listener() { return ctx.sendValueIntoService("20232024"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2023-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunityShieldComponent_Template_mat_option_click_9_listener() { return ctx.sendValueIntoService("20222023"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CommunityShieldComponent_div_12_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CommunityShieldComponent_div_13_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CommunityShieldComponent_div_14_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CommunityShieldComponent_div_15_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.teamYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20242025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20232024");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "20222023");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _competition_competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"], _tables_community_shield_table_community_shield_table_component__WEBPACK_IMPORTED_MODULE_9__["CommunityShieldTableComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n}\n\n.maxHeight-8vh[_ngcontent-%COMP%] {\n  max-height: 8vh;\n}\n\n.pulldown-menus[_ngcontent-%COMP%] {\n  max-height: 7vh;\n}\n\n.sorry[_ngcontent-%COMP%] {\n  background-color: rgba(219, 0, 7, 0.2);\n  color: white;\n  padding: 100px;\n  text-shadow: 1px 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW11bml0eS1zaGllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBQ0oiLCJmaWxlIjoiY29tbXVuaXR5LXNoaWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDE2dmg7XHJcbn1cclxuXHJcbi5tYXhIZWlnaHQtOHZoIHtcclxuICAgIG1heC1oZWlnaHQ6IDh2aDtcclxufVxyXG5cclxuLnB1bGxkb3duLW1lbnVzIHtcclxuICAgIG1heC1oZWlnaHQ6IDd2aDtcclxufVxyXG5cclxuLnNvcnJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAwLCA3LCAwLjIpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6MTAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcclxufSJdfQ== */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map