import Tdg from "../../tdg.class.js";
import Button from "../../components/button/button.class.js";
import { kendoResponsive } from "../../helpers/kendo.helper.js";

export default class Undone extends Tdg {

    constructor() {
        super();
        self.Undone = this;

        this.state = {
            sectionName: document.querySelector("section[Undone]"),
            element: []
        }

        this.removeLoading()
        this.init();
    }
    
    init = () => {
        let createDiv = this.CreateElement({
            element: "div",
            class: "undoneReport-div"
        })

        this.append(this.state.sectionName, this.undoneReport());
        this.append(this.state.undoneReport, createDiv);
        this.append(createDiv, this.startDateTime());
        this.append(createDiv, this.buildTire());
        this.append(createDiv, this.endDateTime());
        this.append(createDiv, this.createSelector());
        this.append(createDiv, this.Filter());
        this.append(this.state.undoneReport, this.createTable());
        kendoResponsive();
    }

    undoneReport = () => {
        this.state.undoneReport = this.CreateElement({
            element: "undoneReport"
        })

        return this.state.undoneReport
    }
    
    startDateTime = () => {

        this.state.element.startDateTime = this.CreateElement({
            element: "input",
            type: "datetime",
            value: this.formatDate() + " 00:00:00"
        })

        return this.state.element.startDateTime
    }

    
    buildTire = () => {
        this.state.element.tire = this.CreateElement({
            element: "span",
            children: "-",
            style: {
                fontSize: '24px'
            }
        })

        return this.state.element.tire
    }

    endDateTime = () => {

        this.state.element.endDateTime = this.CreateElement({
            element: "input",
            type: "datetime",
            value: this.formatDate() + " 23:59:59"
        })

        return this.state.element.endDateTime
    }

    createSelector = () => {
        this.state.element.createSelector = this.CreateElement({
            element: "kendo",
            type: "selector",
            title: "განყოფილება",
            data: {
                route: "",
                act: ""
            },
        })
        return this.state.element.createSelector
      }
    
    Filter = () => {

        this.state.element.Filter = new Button({
            text: "ფილტრი",
            onclick: async () => {

            }
        })

        return this.state.element.Filter
    }

    createTable = () => {
        this.state.element.table = this.CreateElement({
            element: "kendo",
            type: "table",
            column: [
                {
                    field: "თარიღი",
                    size: 100,
                },
                {
                    field: "წყარო",
                    size: 100,
                },
                {
                    field: "ადრესატი",
                    size: 100,
                },
                {
                    field: "ექსტენშენი",
                    size: 100,
                },
                {
                    field: "ლოდინის დრო",
                    size: 100,
                },
                {
                    field: "საუბრის ხანგრძლივობა",
                    size: 100,
                },
                {
                    field: "ჩანაწერი",
                    size: 100,
                }
            ],
            data: {
                route: "",
                act: "",
            },
            option: {
                header: true,
                numeric: false,
                export: {
                    excel: true,
                    pdf: true
                },
                selectable: 'single',
                footer: true
            },
            onload: () => {

            },
        })
       return this.state.element.table
    }

}