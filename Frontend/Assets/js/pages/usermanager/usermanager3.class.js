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
      this.append(this.state.sectionName,this.containertDiv())
   }

//    button = () =>{
//       this.state.element.button = new Button({
//           text:"დამატება",
//           class:"click",
//           id:"buton",
//           onclick: () =>{
//               this.buildModal(null,{
//                   width: '1244px',
//                   height: '244px',
//                   content: this.containertDiv(),
//              })
//           }
//       })
//       return this.state.element.button 
//   }

   containertDiv = () => {
      this.state.element.containertDiv = this.CreateElement({
         element:"div",
         class:"centr",
         
      },this.contentDiv(),this.contentDiv2(),)
      return this.state.element.containertDiv
   }

   contentDiv = () =>{
      this.state.element.contentDiv = this.CreateElement({
         element:"div",
         class:"content",
      },this.inputDiv(),)
       return this.state.element.contentDiv 
   }

   inputDiv = () =>{
      this.state.element.inputDiv = this.CreateElement({
         element:"div",
         class:"inputDiv",
      },this.startDateTime(),this.endDateTime(),this.operators(),this.operators2(),
      this.operators3(),this.operators4(),this.operators5(),this.buttonFilt(),)
       return this.state.element.inputDiv 
   }

   startDateTime = () => {
      this.state.element.startDateTime = this.CreateElement({
          element: "input",
          type: "datetime",
          class:"start",
          value: this.formatDate() + " 00:00:00"
      })
      return this.state.element.startDateTime
  }

   endDateTime = () => {

      this.state.element.endDateTime = this.CreateElement({
          element: "input",
          type: "datetime",
          class:"start",
          value: this.formatDate() + " 23:59:59"
      })
      return this.state.element.endDateTime
  }

  operators = () => {
   this.state.element.operators = this.CreateElement({
       element: "kendo",
       type: "selector",
       title: "ყველა ოპერატორი",
   })
   return this.state.element.operators
   }

   operators1 = () => {
      this.state.element.operators1 = this.CreateElement({
          element: "kendo",
          type: "selector",
          title: "ყველა ოპერატორი",
      })
      return this.state.element.operators1
      }

      operators2 = () => {
         this.state.element.operators2 = this.CreateElement({
             element: "kendo",
             type: "selector",
             title: "ყველა ოპერატორი",
         })
         return this.state.element.operators2
         }

         operators3 = () => {
            this.state.element.operators3 = this.CreateElement({
                element: "kendo",
                type: "selector",
                title: "ყველა ოპერატორი",
            })
            return this.state.element.operators3
            }

            operators4 = () => {
               this.state.element.operators4 = this.CreateElement({
                   element: "kendo",
                   type: "selector",
                   title: "ყველა ოპერატორი",
               })
               return this.state.element.operators4
               }

               operators5 = () => {
                  this.state.element.operators5 = this.CreateElement({
                      element: "kendo",
                      type: "selector",
                      title: "ყველა ოპერატორი",
                  })
                  return this.state.element.operators5
                  }

      buttonFilt = () =>{
      this.state.element.buttonFilt = new Button({
          text:"ფილტრი",
          class:"click",
      })
      return this.state.element.buttonFilt 
  }


  contentDiv2 = () =>{
   this.state.element.contentDiv2 = this.CreateElement({
      element:"div",
      class:"content2",
   },this.button(),this.createTable(),)
    return this.state.element.contentDiv2 
}

   button = () =>{
      this.state.element.button = new Button({
          text:"დამატება",
          type: "add",
          class:"top",
          onclick: () =>{
              this.buildModal(null,{
                  width: '1244px',
                  height: '244px',
                  content: this.contentDiv3(),
             })
          }
      })
      return this.state.element.button 
  }

  createTable = () => {
   this.state.element.table = this.CreateElement({
      element: "kendo",
      type: "table",
      id: "incommingTable",
      column: [
         {
            field: "თარიღი",
            size: 100,
         },
         {
            field: "მომხმარებელი",
            size: 100,
         },
         {
            field: "ოპერატორი",
            size: 100,
         },
         {
            field: "სახელი,გვარი",
            size: 100,
         },
         {
            field: "ქვე-კატეგორია",
            size: 100,
         },
         {
            field: "სტატუსი",
            size: 100,
         },
         {
            field: "ჩანაწერი",
            size: 100,
         },
         {
            field: "სტატუსი",
            size: 100,
         },
      ]
   })
   return this.state.element.table
  }



  contentDiv3 = () =>{
   this.state.element.contentDiv3 = this.CreateElement({
      element:"div",
      class:"content",
   },this.paragrap(),this.inputDiv2(),)
    return this.state.element.contentDiv3 
}

paragrap = () =>{
   this.state.element.paragrap = this.CreateElement({
      element:"p",
      class:"paragrapi",
      text:"გრაფა",
   })
   return this.state.element.paragrap
}


inputDiv2 = () =>{
   this.state.element.inputDiv2 = this.CreateElement({
      element:"div",
      class:"inputDiv",
   },this.startDateTime1(),this.endDateTime1(),this.operators6(),this.operators7(),this.operators8(),
   this.operators9(),this.operators10(),this.buttonFt(),)
    return this.state.element.inputDiv2 
}

startDateTime1 = () => {
   this.state.element.startDateTime1 = this.CreateElement({
       element: "input",
       type: "datetime",
       class:"start",
       value: this.formatDate() + " 00:00:00"
   })
   return this.state.element.startDateTime1
}

endDateTime1 = () => {
   this.state.element.endDateTime1 = this.CreateElement({
       element: "input",
       type: "datetime",
       class:"start",
       value: this.formatDate() + " 23:59:59"
   })
   return this.state.element.endDateTime1
}

operators6 = () => {
   this.state.element.operators6 = this.CreateElement({
       element: "kendo",
       type: "selector",
       title: "ყველა ოპერატორი",
   })
   return this.state.element.operators6
}

operators7 = () => {
   this.state.element.operators7 = this.CreateElement({
       element: "kendo",
       type: "selector",
       title: "ყველა ოპერატორი",
   })
   return this.state.element.operators7
}
operators8 = () => {
   this.state.element.operators8 = this.CreateElement({
       element: "kendo",
       type: "selector",  
       title: "ყველა ოპერატორი",
   })
   //  multiselector
   return this.state.element.operators8
}
operators9 = () => {
   this.state.element.operators9 = this.CreateElement({
       element: "kendo",
       type: "selector",
       title: "ყველა ოპერატორი",
   })
   return this.state.element.operators9
}
operators10 = () => {
   this.state.element.operators10 = this.CreateElement({
       element: "kendo",
       type: "selector",
       title: "ყველა ოპერატორი",
   })
   return this.state.element.operators10
}

buttonFt = () =>{
   this.state.element.buttonFt = new Button({
       text:"ღილაკი",
       class:"click",
   })
   return this.state.element.buttonFt 
}
   
}


