import Tdg from "../../../tdg.class.js";
import Button from "../../../components/button/button.class.js";
import TaskModal from "../../task/task.modal.js";
import { kendo_SelectedID, kendo__refresh, kendo__multiSelectedID } from "../../../helpers/kendo.helper.js";

export default class TabTask extends Tdg {

    constructor() {
        super();

        self.Ussd.tab = [];
        self.Ussd.tab.TabTask = this;

        this.state = {
            prop: self.UssdModal.state.prop,
            interfaceName: document.querySelector("interface[workground]"),
            fieldSet: '',
            element: []
        }
    }



    init = () => {

        self.Ussd.TabTask = this.CreateElement({
            element: "div",
            attributes: ["fieldset"],
            title: "დავალება",
            style: {
                "grid-template-columns": "unset"
            }
        });

        this.state.fieldSet = self.Ussd.TabTask;

        this.append(this.state.interfaceName, this.state.fieldSet);
        this.append(this.state.fieldSet, this.buildDiv());
        this.append(this.state.div, this.buildAddButton());

        this.append(this.state.fieldSet, this.buildTable());


    }

    buildAddButton = () => {
        this.state.element.button = new Button({
            type: "add",
            text: "დამატება",
            onclick: () => {
                this.buildModal(null, {
                    width: '54vw',
                    height: '84vh',
                    content: new TaskModal({ id: 0, inc_id: this.state.prop.id }).init(),
                    buttons: {
                        save: {
                            name: "დამატება",
                            onclick: function (modal) {
                                self.Tdg.getResponse({
                                    route: "Task",
                                    act: "ADD",
                                    start_date: self.TaskCase.state.dateinput['start_date'].value,
                                    end_date: self.TaskCase.state.dateinput['end_date'].value,
                                    phone: self.TaskCase.state.inputtext['phone'].children[0].value,
                                    abonent: self.TaskCase.state.inputtext['abonent'].children[0].value,
                                    request_number: self.TaskCase.state.inputtext['mom_nuber'].children[0].value,
                                    task_status_child_id: kendo_SelectedID(self.TaskCase.state.selectorkendo['status2']),
                                    task_status_parent_id: kendo_SelectedID(self.TaskCase.state.selectorkendo['status']),
                                    dep_ids: `${kendo__multiSelectedID(self.TaskCase.state.multiselectorkendo['user_department'])}`,
                                    group_ids: `${kendo__multiSelectedID(self.TaskCase.state.multiselectorkendo['user_group'])}`,
                                    user_ids: `${kendo__multiSelectedID(self.TaskCase.state.multiselectorkendo['responsible_user'])}`,
                                    zeinkal_ids: `${kendo__multiSelectedID(self.TaskCase.state.multiselectorkendo['zeinkals'])}`,
                                    inc_id: self.Ussd.tab.TabTask.state.prop.id,
                                    comment: self.TaskCase.state.inputtext['comment'].children[0].value,
                                    task_source_id: 1
                                }).then(function (data) {
                                    modal.close().destroy()
                                    self.Tdg.buildNotice({ msg: "დავალება დამატებულია" });
                                    kendo__refresh(self.Ussd.tab.TabTask.state.table, 'table');
                                })
                            },
                            access: "add"
                        }
                    },
                    confirmOnCancel: true
                })
            },
            access: "add"
        })

        return this.state.element.button
    }

    buildDiv = () => {
        this.state.div = this.CreateElement({
            element: 'tabcontent',
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '73%',
                flexWrap: 'wrap',
                gap: '30px'
            }
        })

        return this.state.div;
    }

    buildTable = () => {

        this.state.table = this.CreateElement({
            element: "kendo",
            type: "table",
            column: [
                {
                    field: "id",
                    hidden: true
                },
                {
                    field: "თარიღი"
                },
                {
                    field: "დასაწყისი"
                },
                {
                    field: "დასასრული"
                },
                {
                    field: "სტატუსი"
                },
                {
                    field: "პასუხისმგებელი"
                }
            ],
            data: {
                route: "IncommingTabs",
                act: "getTask",
                id: this.state.prop.id
            },
            option: {
                header: true,
                numeric: false,
                export: {
                    excel: true,
                    pdf: true
                },
                footer: true
            },
            ondblclick: (callback) => {

                // this.buildModal(null, {
                //     width: '100vw',
                //     height: '100vh',
                //     content: this.getModalContent(callback),
                //     buttons: {
                //         save: {
                //             name: "შენახვა",
                //             onclick: (modal) => {

                //             }
                //         }
                //     },
                //     confirmOnCancel: true   
                // })

            }
        })

        return this.state.table;

    }


    getModalContent = (callback) => {

        console.log(callback)

    }


    destroy = () => {

        if (!self.Ussd.TabTask) return false;
        self.Ussd.TabTask.remove();

    }

}