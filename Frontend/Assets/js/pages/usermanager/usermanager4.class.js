import Tdg from "../../tdg.class.js";

export default class UserManager extends Tdg {
    constructor(){
       super();
       self.UserManager = this;

        this.state={
           sectionName:document.querySelector("section[usermanager]"),
            element: []
        }
        this.removeLoading();
        this.init();
    }

    init = () => {
      this.append(this.state.sectionName,this.containertDiv())
   }

   containertDiv = () => {
    this.state.element.containertDiv = this.CreateElement({
       element:"div",
       class:"centr",
    },this.paragrap(),this.table(),)
    return this.state.element.containertDiv
    }

    paragrap = () =>{
      this.state.element.paragrap =this.CreateElement({
        element:"p",
        text:"ბრენდის შედარება თვეების მიხედვით",
        class:"paragrap",
      })
      return this.state.element.paragrap
    }

    table =() =>{
        this.state.element.table = this.CreateElement({
            element:"table",
            class:"tablle",
        },this.tr(),this.tr2(),this.tr3(),
        this.tr4(),this.tr5(),this.tr6(),this.tr7(),)
        return this.state.element.table
    }

    tr =() =>{
        this.state.element.tr = this.CreateElement({
            element:"tr",
            class:"tr"
        },this.th5(),this.th6(),this.th7(),)
        return this.state.element.tr
    }

    th5 = () =>{
        this.state.element.th5 = this.CreateElement({
            element:"th",
            text:" ",
            class:"th5",
        })
        return this.state.element.th5
    }

    th6 = () =>{
        this.state.element.th6 = this.CreateElement({
            element:"th",
            text:"ნიკორა",
            class:"th6",
        })
        return this.state.element.th6
    }

    th7 = () =>{
        this.state.element.th7 = this.CreateElement({
            element:"th",
            text:"ლიბრე",
            class:"th7",
        })
        return this.state.element.th7
    }


    tr2 = () => {
        this.state.element.tr2 =this.CreateElement({
            element:"tr",
            class:"tr2",
        },this.th8(),this.td1(),this.td2(),this.td3(),)
        return this.state.element.tr2 
    }

    th8 = () =>{
        this.state.element.th8 = this.CreateElement({
            element:"th",
            text:"ნოემბერი",
            class:"th8",
            rowspan:"3",
        })
        return this.state.element.th8
    }

    td1 = () =>{
        this.state.element.td1 = this.CreateElement({
            element:"td",
            text:"ზარი",
            class:"td1",
        })
        return this.state.element.td1
    }

    td2 = () =>{
        this.state.element.td2 = this.CreateElement({
            element:"td",
            text:"15469",
            class:"td2",
        })
        return this.state.element.td2
    }

    td3 = () =>{
        this.state.element.td3 = this.CreateElement({
            element:"td",
            text:"26569",
            class:"td3",
        })
        return this.state.element.td3
    }


    tr3 =()=>{
        this.state.element.tr3 =this.CreateElement({
            element:"tr",
            class:"tr3",
        },this.td4(),this.td5(),this.td6(),)
        return this.state.element.tr3
    }

    td4 = () =>{
        this.state.element.td4 = this.CreateElement({
            element:"td",
            text:"ჩათი",
            class:"td4",
        })
        return this.state.element.td4
    }

    td5 = () =>{
        this.state.element.td5 = this.CreateElement({
            element:"td",
            text:"4566",
            class:"td4",
        })
        return this.state.element.td5
    }

    td6 = () =>{
        this.state.element.td6 = this.CreateElement({
            element:"td",
            text:"157879",
            class:"td4",
        })
        return this.state.element.td6
    }



    tr4 =()=>{
        this.state.element.tr4 =this.CreateElement({
            element:"tr",
            class:"tr4",
        },this.td7(),this.td8(),this.td9(),)
        return this.state.element.tr4
    }

    td7 = () =>{
        this.state.element.td7 = this.CreateElement({
            element:"td",
            text:"ხმოვანი შეტყობინება",
            class:"td7",
        })
        return this.state.element.td7
    }

    td8 = () =>{
        this.state.element.td8 = this.CreateElement({
            element:"td",
            text:"1875632",
            class:"td8",
        })
        return this.state.element.td8
    }

    td9 = () =>{
        this.state.element.td9 = this.CreateElement({
            element:"td",
            text:"7896",
            class:"td9",
        })
        return this.state.element.td9
    }



    tr5 = () =>{
        this.state.element.tr5 =this.CreateElement({
            element:"tr",
            class:"tr5",
        },this.th9(),this.td10(),this.td11(),this.td12())
        return   this.state.element.tr5
    }

    th9 = () =>{
        this.state.element.th9 = this.CreateElement({
            element:"th",
            text:"დეკემბერი",
            class:"th9",
            rowspan:"3",
        })
        return this.state.element.th9
    }

    td10 = () =>{
        this.state.element.td10 = this.CreateElement({
            element:"td",
            text:"ზარი",
            class:"td10",
        })
        return this.state.element.td10
    }

    td11 = () =>{
        this.state.element.td10 = this.CreateElement({
            element:"td",
            text:"4578",
            class:"td11",
        })
        return this.state.element.td10
    }

    td12 = () =>{
        this.state.element.td12 = this.CreateElement({
            element:"td",
            text:"4578",
            class:"td12",
        })
        return this.state.element.td12
    }


    tr6 = () =>{
        this.state.element.tr6 =this.CreateElement({
            element:"tr",
            class:"tr6"
        },this.td13(),this.td14(),this.td15(),)
        return this.state.element.tr6
    }

    td13 = () =>{
        this.state.element.td13 = this.CreateElement({
            element:"td",
            text:"ჩათი",
            class:"td12",
        })
        return this.state.element.td13
    }

    td14 = () =>{
        this.state.element.td14 = this.CreateElement({
            element:"td",
            text:"55478",
            class:"td12",
        })
        return this.state.element.td14
    }

    td15 = () =>{
        this.state.element.td15 = this.CreateElement({
            element:"td",
            text:"7877",
            class:"td12",
        })
        return this.state.element.td15
    }


    tr7 =()=>{
        this.state.element.tr7 =this.CreateElement({
            element:"tr",
           class:"tr7",
        },this.td16(),this.td17(),this.td18())
        return this.state.element.tr7
    }
    
    td16 = () =>{
        this.state.element.td16 = this.CreateElement({
            element:"td",
            text:"ხმოვანი შეტყობინება",
            class:"td12",
        })
        return this.state.element.td16
    }
      
    td17 = () =>{
        this.state.element.td17 = this.CreateElement({
            element:"td",
            text:"7967",
            class:"td12",
        })
        return this.state.element.td17
    }

    td18 = () =>{
        this.state.element.td18 = this.CreateElement({
            element:"td",
            text:"1025",
            class:"td12",
        })
        return this.state.element.td18
    }

}