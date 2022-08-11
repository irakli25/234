import Tdg from "../../tdg.class.js";
import Button from "../../components/button/button.class.js";
import { kendo__appendToHeader } from "../../helpers/kendo.helper.js";
import Input from "../../components/input/input.class.js";

export default class UserManager extends Tdg {
    constructor(){
       super();
       self.UserManager = this;

        this.state={
           sectionName:document.querySelector("section[usermanager]"),
            element: []
        }
        this.removeLoading();
           sectionName:document.querySele
        this.init();
    }

    init = () => {
        this.append(this.state.sectionName,this.containerDiv())
   }  

   containerDiv = () =>{
    this.state.element.containerDiv = this.CreateElement({
        element:"div",
        class:"containerDiv",
    },this.elementDiv(),this.contentDiv1(),)
     return this.state.element.containerDiv
    }

    elementDiv = () =>{
        this.state.element.elementDiv = this.CreateElement({
            element:"div",
            class:"elementDiv",
        },this.paragrapDiv(),this.paragrapDiv2(),)
        return this.state.element.elementDiv
    }

    paragrapDiv = () =>{
        this.state.element.paragrapDiv =this.CreateElement({
            element:"p",
            class:"text",
            text:"მიმდინარე",
        })
        return this.state.element.paragrapDiv
    }

    paragrapDiv2 = () =>{
        this.state.element.paragrapDiv2 =this.CreateElement({
            element:"p",
            class:"text",
            text:"არქივი",
        })
        return this.state.element.paragrapDiv2
    }



    contentDiv1= () =>{
        this.state.element.contentDiv1 = this.CreateElement({
        element:"div",
        class:"content",
        },this.button(),this.button2(),this.button3(),this.createTable(),)
        return this.state.element.contentDiv1 
    }
 
    button = () =>{
       this.state.element.button = new Button({
           text:"დამატება",
           type: "add",
           class:"top",
           onclick: () =>{
               this.buildModal(null,{
                   width: '1040px',
                   height: "607px",
                   padding: "10px",
                   content: this.contentDiv(),
                   buttons: {
                        save: {
                            name: "შენახვა",
                            onclick: (e) => {
                            
                            },
                            access: "save"
                        },
                     },
                confirmOnCancel: false,
              })
           }
       })
       return this.state.element.button 
   }
   
   button2 = () =>{
    this.state.element.button2 = new Button({
        text:"წაშლა",
        type: "delete",
        class:"top",
    })
    return this.state.element.button2 
  }

  button3 = () =>{
    this.state.element.button2 = new Button({
        text:"არქივი",
        type: "archive",
        class:"top",
    })
    return this.state.element.button2 
  }



  createTable = () => {
    this.state.element.createTable = this.CreateElement({
       element: "kendo",
       type: "table",
       id: "incommingTable",
       class:"tab",
       column: [
            {
                field: "id",
                hidden: true, 
            },
          {
             field: "მომხმარებელი",
             size: 100,
          },
          {
             field: "ექსთენშენი",
             size: 100,
          },
          {
             field: "მობილური",
             size: 100,
          },
          {
             field: "თანამდებობა",
             size: 100,
          },
          {
             field: "მისამართი",
             size: 100,
          },
       ],
       data: {
        route: 'UserManager',
        act: 'getList'
       },
       ondblclick: () => {
        this.buildModal(null, {
            width: '1040px',
            height: "607px",
            padding: "10px",
            content: this.contentDiv(),
            buttons: {
                save: {
                    name: "შენახვა",
                    onclick: (e) => {
                     
                    },
                    access: "save"
                },
            },
            confirmOnCancel: false,
        })
    }

    })
    return this.state.element.createTable
   }
 

   contentDiv = () =>{
    this.state.element.contentDiv =this.CreateElement({
        element:"div",
    },this.contentDiv2(),this.cDiv(),this.cDiv2(),)
    return this.state.element.contentDiv
   }

   contentDiv2 = () =>{
    this.state.element.contentDiv =this.CreateElement({
        element:"div",
        class:"content2",
    },this.paragrap(),this.inputDiv())
    return this.state.element.contentDiv
   }

   paragrap = () =>{
    this.state.element.paragrap = this.CreateElement({
       element:"p",
       class:"paragrap",
       text:"ძირითადი ინფორმაცია",
    })
    return this.state.element.paragrap
 }

 inputDiv = () =>{
    this.state.element.inputDiv = this.CreateElement({
       element:"div",
       class:"inputDiv",
    },this.operator(),this.operator1(),this.operator2(),
    this.operator3(),this.operator4(),this.operator5(),this.operator6(),)
    return this.state.element.inputDiv
 }

 operator = () =>{
    this.state.element.operator = new Input({
        type:"text",
        class:"oper",
        placeholderTitle: "სახელი გვარი",
        placeholder:"სოფო ღარაძე",
    }).build()
    return  this.state.element.operator
 }

 operator1 = () =>{
    this.state.element.operator1 = new Input({
        type:"text",
        class:"oper",
        placeholderTitle: "პირადი ნომერი",
        placeholder:"0101000000",
    }).build()
    return  this.state.element.operator1
 }

 operator2 = () =>{
    this.state.element.operator2 = new Input({
        type:"text",
        class:"oper",
        placeholderTitle: "ელფოსტა",
    }).build()
    return  this.state.element.operator2
 }

 operator3 = () =>{
    this.state.element.operator3 = new Input({
        type:"text",
        class:"oper",
        placeholderTitle: "მისამართი",
    }).build()
    return  this.state.element.operator3
 }

 operator4 = () =>{
    this.state.element.operator4 = new Input({
        type:"text",
        placeholderTitle: "ტელეფონი",
        class:"oper",
    }).build()
    return  this.state.element.operator4
 }

 operator5 = () => {
    this.state.element.operators6 = this.CreateElement({
        element: "kendo",
        type: "selector",
        title: "განყოფილება",
        class:"open",
        data:{
            route:"UserManager",
            act: "getDepartment",
        }
    })
    return this.state.element.operators6
 }

 operator6 = () =>{
    this.state.element.operator6 = new Input({
        type:"text",
        placeholderTitle: "შენიშვნა",
        class:"oper1",
    }).build()
    return this.state.element.operator6
}


cDiv = () =>{
    this.state.element.cDiv =this.CreateElement({
        element:"div",
        class:"cDiv",
    },this.paragrap2(),this.inputDiv2(),)
    return this.state.element.cDiv
   }

paragrap2 = () =>{
    this.state.element.paragrap2 = this.CreateElement({
       element:"p",
       class:"paragrap",
       text:"მომხმარებელი",
    })
    return this.state.element.paragrap2
 }

 inputDiv2 = () =>{
    this.state.element.inputDiv2 = this.CreateElement({
       element:"div",
       class:"inputDiv2",
    },this.operator7(),this.operator8(),this.operator9(),)
    return this.state.element.inputDiv2
 }

 operator7 = () =>{
    this.state.element.operator7 = new Input({
        type:"text",
        class:"oper",
        placeholderTitle: "მომხმარებელი",
        placeholder:"s.sagharadze"
    }).build()
    return  this.state.element.operator7
 }

 operator8 = () =>{
    this.state.element.operator8 = new Input({
        type:"text",
        class:"oper",
        placeholderTitle: "პაროლი",
    }).build()
    return  this.state.element.operator8
 }

 operator9 = () => {
    this.state.element.operator9 = this.CreateElement({
        element: "kendo",
        type: "selector",
        title: "ჯგუფი",
        data:{
            route: "UserManager",
            act:"getGroup",
        },
        class:"operator9",
    })
    return this.state.element.operator9
 }


 cDiv2 = () =>{
    this.state.element.cDiv2 =this.CreateElement({
        element:"div",
        class:"cDiv",
    },this.paragrap3(),this.button4(),this.input())
    return this.state.element.cDiv2
   }

paragrap3 = () =>{
    this.state.element.paragrap3 = this.CreateElement({
       element:"p",
       class:"paragrap",
       text:"თანამშრომლის სურათი",
    })
    return this.state.element.paragrap3
 }

 button4 = () =>{
    this.state.element.button4 = new Button({
        class:"input",
        text:"ატვირთე ფაილი",
        onclick: () =>{
            document.getElementById("upload").click()
        }
     })
     return this.state.element.button4
 }

 input = () =>{
    this.state.element.input = this.CreateElement({
        element:"input",
        class:"inut2",
        type:"file",
        id:"upload",

        onChange: (e)=> {
            const files = e.target.files
            const formData = new FormData()
            formData.append('file', files[0])
    
            fetch(`./index.php?route=UserManager&act=UploadIcon&user_id`, {
                method: 'POST',
                body: formData,
            }).then((resp) => {

                resp.json().then((result) => {
                    console.log(result)
                    if(!result.error) {
                        this.renderImg(result.url);
                        this.state.imagesrc = result.url;
                        self.Tdg.buildNotice({ msg: "ფაილი აიტვირთა" })
                        self.Header.state.element.profile.children[0].children[1].children[0].children[0].src = result.url
                    } else {
                        self.Tdg.buildNotice({ msg: "ფაილი ვერ აიტვირთა" })
                    }
                })
                e.target.remove();
            })
        }

    })
    return this.state.element.input
}




}

