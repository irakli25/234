// import Tdg from "../../tdg.class.js";
// import Button from "../../components/button/button.class.js";
// import { kendo__appendToHeader } from "../../helpers/kendo.helper.js";
// import Input from "../../components/input/input.class.js";

// export default class UserManager extends Tdg {
//     constructor(){
//        super();
//        self.UserManager = this;

//         this.state={
//            sectionName:document.querySelector("section[usermanager]"),
//             element: []
//         }
//         this.removeLoading();
//            sectionName:document.querySele
//         this.init();
//     }

//     init = () => {
//         this.append(this.state.sectionName,this.containerDiv())
//         this.paragrap()
//    } 

//    containerDiv = () =>{
//     this.state.element.containerDiv =this.CreateElement({
//         element:"div",
//         class:"centr",
//         id:"demo2",
//     })
//     return this.state.element.containerDiv
//    }
 
paragrap = () =>{
    let myobj = [{name:"John",age:30 }, {name:"Tom" ,age:35 }, {name:"Jak" ,age:30 }];
     myobj.forEach((value)=>{
    document.getElementById("demo2").append((`${value.name} ${value.age},`));
  })      
}



// imgp = () =>{
//     let  = [{name:"ანი გაბუნია",img:"Frontend/Assets/images/icons/10.svg"},
//     {name:"გიორგი გაბუნია", img:"Frontend/Assets/images/icons/1568.svg"},
//      {name:"ნინო გაბუნია", img:"Frontend/Assets/images/icons/10.svg" }];
//      myobj.forEach((value)=>{
//         this.state.element.createImg5 = this.CreateElement({
//             element:"img",
//             src: value.img
//         })
//         this.state.element.paragrap5 = this.CreateElement({
//             element:"p",
//             class:"texti",
//             text: value.name
//         })
//      })
//      this.state.element.pimgDiv = this.CreateElement({
//        element:"div",
//        class:"pimgDiv", 
//      },this.state.element.createImg5,this.state.element.paragrap5)         
//      return this.state.element.pimgDiv
// }




    // userName = () =>{
    //     this.state.element.userName = this.CreateElement({
    //         element:"div",
    //         class:"user",
    //         id:"demo",
    //     },this.forEach())
    //      return this.state.element.userName
    // }

    // forEach = () =>{
    //         let myobj = [{name:"User_Name",name:"11 haurs",name:"15.07.2022 10:05",img:"Frontend/Assets/images/icons/eli.svg"}, ];
    //          myobj.forEach((value)=>{
    //         document.getElementById("demo").append((`${value.name} ${value.name} ${value.img}`));
    //       })      
    //     }
    //  }  