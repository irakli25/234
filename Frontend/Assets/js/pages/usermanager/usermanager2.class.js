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
         this.append(this.state.sectionName,this.button())

    }   

    button = () =>{
        this.state.element.button = new Button({
            text:"დამატება",
            class:"click",
            id:"buton",
            onclick: () =>{
                this.buildModal(null,{
                    width: '1244px',
                    height: '244px',
                    content: this.contentDiv(),
               })
            }
        })
        return this.state.element.button 
    }

    contentDiv = () => {
        this.state.element.Incomming = this.CreateElement({
            element:"div",
        })

        this.state.element.contentDiv = this.CreateElement({
            element:"div",
            attributes: ["fieldset"],
            title: "შემომავალი კომუნიკაცია",
        },this.state.element.Incomming,this.sectionsistem(),this.CreateThriDiv(),this.sistemInfo1(),)
        return this.state.element.contentDiv
    }

    sectionsistem= () => {
        this.state.element.avori = this.CreateElement({
            element:"h1",
            class:"avtor",
            text:"მომართვის ავტორი",
        })

        this.state.element.xazi = this.CreateElement({
            element:"div",
            class:"xazi",
        })

        this.state.element.createImg = this.CreateElement({
            element:"img",
            class:"img",
            src:"Frontend/Assets/images/icons/edit4.svg"
        })

        this.state.element.twoDiv = this.CreateElement({
            element:"div",
            class:"info4",

        },this.info(),this.info2(),)

        this.state.element.sectionsistem = this.CreateElement({
            element:"div",
            class:"sistem",
        }, this.state.element.avori, this.state.element.xazi, this.state.element.createImg ,this.state.element.twoDiv,this.divebi(),this.numberDiv(),)
        return this.state.element.sectionsistem
    }
    info = () =>{
        this.state.element.info = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"ტელეფონი :"
        })

        this.state.element.Creat2 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"ტელეფონი2 :",
        })

        this.state.element.statement = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"გამცხადებელი :",
        })

        this.state.element.tip = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"ტიპი :",
        })

        this.state.element.branch = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"ფილიალი :",
        })

        this.state.element.info = this.CreateElement({
            element:"div",
            class:"info1",
        },this.state.element.Creat,this.state.element.Creat2,  this.state.element.statement,this.state.element.tip,  this.state.element.branch,)
        return this.state.element.info
    }


    info2 = () =>{
        this.state.element.info2 = this.CreateElement({
            element:"div",
            class:"info2",
        }, this.state.element.tipNum,this.infoDiv(),)
        return this.state.element.info2
    }

    tipNum = () =>{
        this.state.element.tipNum = this.CreateElement({
            element:"h1",
            class:"num",
            text:"+995-559-559-5**",
        })
        return this.state.element.tipNum
    }

    infoDiv = () =>{
        this.state.element.infoDiv = this.CreateElement({
            element:"div",
            class:"info3",
        },this.Citizen(),this.sity())
        return this.state.element.infoDiv
    }

    Citizen = () =>{
        this.state.element.Citizen = this.CreateElement({
            element:"h1",
            class:"citi",
            text:"მოქალაქე",
        })
        return this.state.element.Citizen
    }

    sity = () =>{
        this.state.element.sity = this.CreateElement({
            element:"h1",
            class:"citi",
            text:"თბილისი",
        })
        return this.state.element.sity
    }

    divebi = () =>{
        this.state.element.divebi = this.CreateElement({
            element:"div",
            class:"divebi",
        },this.infoNumber(),this.twoDiv2(),)
        return this.state.element.divebi
    }

    infoNumber = () =>{
        this.state.element.infoNumber = this.CreateElement({
            element:"div",
            class:"infoNumber",
        },this.SubscriberNumber(),this.Subscriber(),this.Subscriber1(),this.data(),this.misamarti())
        return this.state.element.infoNumber
    }

    SubscriberNumber = () =>{
        this.state.element.SubscriberNumber = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"აბონენტის ნომერი :",
        })
        return this.state.element.SubscriberNumber
    }

    Subscriber = () =>{
        this.state.element.Subscriber = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"აბონენტი :",
        })
        return this.state.element.Subscriber
    }

    Subscriber1 = () =>{
        this.state.element.Subscriber1 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"აბონენტი სპ# :",
        })
        return this.state.element.Subscriber1
    }

    
    data = () =>{
        this.state.element.data = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"მიმდინარე დავალიანება :",
        })
        return this.state.element.data
    }

    misamarti = () =>{
        this.state.element.misamarti = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"მისამართი :",
        })
        return this.state.element.misamarti
    }



    twoDiv2 = () =>{
        this.state.element.twoDiv2 = this.CreateElement({
            element:"h1",
            class:"info5",
        },this.infoNumber1(),this.infoNumber2())
        return this.state.element.twoDiv2
    }

    infoNumber1 = () =>{
        this.state.element.infoNumber1 = this.CreateElement({
            element:"div",
            class:"infoNumber1",
          
        },this.isNum(),this.isnumUser())
        return  this.state.element.infoNumber1
    }

    isNum = () =>{
        this.state.element.isNum = this.CreateElement({
            element:"h1",
            class:"num",
            text:"598871157",
        })
        return this.state.element.isNum
    }

    isnumUser = () =>{
        this.state.element.isnumUser = this.CreateElement({
            element:"h1",
            class:"num",
            text:"User_Name",
        })
        return this.state.element.isnumUser
    }

    infoNumber2 = () =>{
        this.state.element.infoNumber2 = this.CreateElement({
            element:"div",
            class:"infoNumber2",
          
        },this.isNum1(),this.isnumUser1())
        return  this.state.element.infoNumber2
    }

    isNum1 = () =>{
        this.state.element.isNum = this.CreateElement({
            element:"h1",
            class:"num",
            text:"35.00 ლ",
        })
        return this.state.element.isNum
    }

    isnumUser1 = () =>{
        this.state.element.isnumUser = this.CreateElement({
            element:"h1",
            class:"num",
            text:"თბილისი",
        })
        return this.state.element.isnumUser
    }

    numberDiv = () =>{
        this.state.element.numberDiv = this.CreateElement({
            element:"div",
            class:"divebi1",
        },this.numberCanc(),this.twoDiv3(),)
        return  this.state.element.numberDiv
    }

    numberCanc = () =>{
        this.state.element.numberCanc = this.CreateElement({
            element:"div",
            class:"numberCanc",
        },this.Creat1(),this.Creat2(),this.statement1(),this.tip1(),this.branch1(),)
        return  this.state.element.numberCanc
    }

    Creat1 = () =>{
        this.state.element.Creat1 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"კანცელარიის ნომერი :"
        })
        return this.state.element.Creat1
    }

    Creat2 = () =>{
        this.state.element.Creat2 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"ფიდერის ნომერი :",
        })
        return this.state.element.Creat2
    }

    statement1 = () =>{
        this.state.element.statement1 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"გათიშვის მიზეზი :",
        })
        return this.state.element.statement1
    }

    tip1 = () =>{
        this.state.element.tip1 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"გათიშვის დრო :",
        })
        return this.state.element.tip1
    }

    branch1 = () =>{
        this.state.element.branch1 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"სავარაუდო აღდგენის დრო :",
        })
        return this.state.element.branch1
    }

    twoDiv3 = () =>{
        this.state.element.twoDiv3 = this.CreateElement({
            element:"h1",
            class:"info6",
        },this.infoNumber3(),this.infoNumber4())
        return this.state.element.twoDiv3
    }

    infoNumber3 = () =>{
        this.state.element.infoNumber3 = this.CreateElement({
            element:"div",
            class:"infoNumber1",
          
        },this.isNum2(),this.isnumUser3())
        return  this.state.element.infoNumber3
    }

    isNum2 = () =>{
        this.state.element.isNum2 = this.CreateElement({
            element:"h1",
            class:"num2",
            text:"599886623",
        })
        return this.state.element.isNum2
    }

    isnumUser3 = () =>{
        this.state.element.isnumUser3 = this.CreateElement({
            element:"h1",
            class:"num2",
            text:"65558521",
        })
        return this.state.element.isnumUser3
    }

    infoNumber4 = () =>{
        this.state.element.infoNumber4 = this.CreateElement({
            element:"div",
            class:"infoNumber4",
          
        },this.isNum3(),this.isnumUser5(),this.isnumUser6())
        return  this.state.element.infoNumber4
    }

    isNum3 = () =>{
        this.state.element.isNum3 = this.CreateElement({
            element:"h1",
            class:"num5",
            text:"ტექნიკური ხარვეზი",
        })
        return this.state.element.isNum3
    }

    isnumUser5 = () =>{
        this.state.element.isnumUser5 = this.CreateElement({
            element:"h1",
            class:"num4",
            text:"15:00",
        })
        return this.state.element.isnumUser5
    }

    isnumUser6 = () =>{
        this.state.element.isnumUser6 = this.CreateElement({
            element:"h1",
            class:"num3",
            text:"18:00",
        })
        return this.state.element.isnumUser6
    }



    CreateThriDiv = () =>{
        this.state.element.CreateThriDiv = this.CreateElement({
            element:"div",
            class:"CreateThriDiv",
        },this.thriDiv(),this.thriDivi1(),this.thriDivi2())
        return this.state.element.CreateThriDiv
    }


    thriDiv = () =>{
        this.state.element.thriDiv = this.CreateElement({
            element:"div",
            class:"thriDiv",
        },this.sistemInfo(),this.sectioStatus())
        return this.state.element.thriDiv
    }
    
    sistemInfo = () =>{
        this.state.element.sistemInfo = this.CreateElement({
            element:"div",
            class:"thriDiv1",
        },this.sistemIn())
        return this.state.element.sistemInfo
    }

    sistemIn = () =>{
        this.state.element.sistemIn = this.CreateElement({
            element:"div",
            class:"sistemIn",
        },this.avori1(),this.xazi4(),this.createImg1(),)
        return this.state.element.sistemIn
    }

    avori1 = () =>{
        this.state.element.avori1 = this.CreateElement({
      
            element:"h1",
            class:"avor",
            text:"მომართვის ინფო",
        })
        return this.state.element.avori1
    }

    xazi4 = () =>{
        this.state.element.xazi4 = this.CreateElement({
            element:"div",
            class:"xazi4",
        })
        return this.state.element.xazi4
    }

    createImg1 = () =>{
        this.state.element.createImg1 = this.CreateElement({
            element:"img",
            class:"img4",
            src:"Frontend/Assets/images/icons/edit4.svg"
        })
        return this.state.element.createImg1
    }

    sectioStatus = () =>{
        this.state.element.sectioStatus = this.CreateElement({
            element:"div",
            class:"sectioStatus",
        },this.sectioSt(),this.sectioStatus1(),)
        return this.state.element.sectioStatus
    }

    sectioSt = () =>{
        this.state.element.sectioSt = this.CreateElement({
            element:"div",
            class:"sectioSt",
        },this.Creat3(),this.Creat4(),this.statement2(),this.tip2(),)
        return this.state.element.sectioSt
    }

    Creat3 = () =>{
        this.state.element.Creat3 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"რეაგირების სტატუსი :"
        })
        return this.state.element.Creat3
    }

    Creat4 = () =>{
        this.state.element.Creat4 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"პრიორიტეტი :",
        })
        return this.state.element.Creat4
    }

    statement2 = () =>{
        this.state.element.statement2 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"კომუნიკაციის არხი :",
        })
        return this.state.element.statement2
    }

    tip2 = () =>{
        this.state.element.tip2 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"ინფორმაციის წყარო :",
        })
        return this.state.element.tip2
    }

    sectioStatus1 = () =>{
        this.state.element.sectioStatus1 = this.CreateElement({
            element:"div",
            class:"sectioStatus1",
        },this.tip3(),this.tip4())
        return this.state.element.sectioStatus1
    }

    tip3 = () =>{
        this.state.element.tip3 = this.CreateElement({
            element:"h1",
            class:"citi1",
            text:"მაღალი",
        })
        return this.state.element.tip3
    }

    tip4 = () =>{
        this.state.element.tip4 = this.CreateElement({
            element:"h1",
            class:"citi1",
            text:"მესენჯერი",
        })
        return this.state.element.tip4
    }


    

    thriDivi1 = () =>{
        this.state.element.thriDivi1 = this.CreateElement({
          element:"div",
          class:"Div",
        },this.Divi1(),this.sectioStatus2(),)
        return this.state.element.thriDivi1
    }

    Divi1 = () =>{
        this.state.element.thriDivi1 = this.CreateElement({
          element:"div",
          class:"divi1",
        },this.sistemIn1())
        return this.state.element.thriDivi1
    }

    sistemIn1 = () =>{
        this.state.element.sistemIn1 = this.CreateElement({
            element:"div",
            class:"sistemIn1",
        },this.avori2(),this.xazi5(),this.createImg2(),)
        return this.state.element.sistemIn1
    }

    avori2 = () =>{
        this.state.element.avori2 = this.CreateElement({
      
            element:"h1",
            class:"avor1",
            text:"რეგიონი",
        })
        return this.state.element.avori2
    }

    xazi5 = () =>{
        this.state.element.xazi5 = this.CreateElement({
            element:"div",
            class:"xazi5",
        })
        return this.state.element.xazi5
    }

    createImg2 = () =>{
        this.state.element.createImg2 = this.CreateElement({
            element:"img",
            class:"img4",
            src:"Frontend/Assets/images/icons/edit4.svg"
        })
        return this.state.element.createImg2
    }


    sectioStatus2 = () =>{
        this.state.element.sectioStatus2 = this.CreateElement({
          element:"div",
          class:"sectioStatus2",
        },this.sistemIn2(),this.sectioStatus3(),)
        return this.state.element.sectioStatus2
    }

    sistemIn2 = () =>{
        this.state.element.sistemIn2 = this.CreateElement({
          element:"div",
          class:"sistemIn2",
        },this.Creat5(),this.Creat6(),)
        return this.state.element.sistemIn2
    }
    
    Creat5 = () =>{
        this.state.element.Creat5 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"მომსახურების ცენტრი:"
        })
        return this.state.element.Creat5
    }

    Creat6 = () =>{
        this.state.element.Creat6 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:"უბანი:",
        })
        return this.state.element.Creat6
    }

    sectioStatus3 = () =>{
        this.state.element.sectioStatus3 = this.CreateElement({
          element:"div",
          class:"sectioStatus3",
        },this.Creat7())
        return this.state.element.sectioStatus3
    }

    Creat7 = () =>{
        this.state.element.Creat7 = this.CreateElement({
            element:"h1",
            class:"citi2",
            text:"ვაჟაფშაველა",
        })
        return this.state.element.Creat7
    }





    thriDivi2 = () =>{
        this.state.element.thriDivi2 = this.CreateElement({
          element:"div",
          class:"Div1",
        },this.Divi2(),this.sectioStatus4(),)
        return this.state.element.thriDivi2
    }

    Divi2 = () =>{
        this.state.element.Divi2 = this.CreateElement({
          element:"div",
          class:"Divi2",
        },this.sistemIn3())
        return this.state.element.Divi2
    }

    sistemIn3 = () =>{
        this.state.element.sistemIn3 = this.CreateElement({
            element:"div",
            class:"sistemIn3",
        },this.avori3(),this.xazi6(),this.createImg3(),)
        return this.state.element.sistemIn3
    }

    avori3 = () =>{
        this.state.element.avori3 = this.CreateElement({
            element:"h1",
            class:"avor2",
            text:"კომენტარი",
        })
        return this.state.element.avori3
    }

    xazi6 = () =>{
        this.state.element.xazi6 = this.CreateElement({
            element:"div",
            class:"xazi6",
        })
        return this.state.element.xazi6
    }

    createImg3 = () =>{
        this.state.element.createImg3 = this.CreateElement({
            element:"img",
            class:"img4",
            src:"Frontend/Assets/images/icons/edit4.svg"
        })
        return this.state.element.createImg3
    }

    sectioStatus4 = () =>{
        this.state.element.sectioStatus4 = this.CreateElement({
          element:"div",
          class:"sectioStatus5",
        },this.sistemIn4(),)
        return this.state.element.sectioStatus4
    }

    sistemIn4 = () =>{
        this.state.element.sistemIn4 = this.CreateElement({
          element:"div",
          class:"sistemIn4",
        },this.Creat8(),)
        return this.state.element.sistemIn4
    }
    
    Creat8 = () =>{
        this.state.element.Creat8 = this.CreateElement({
            element:"h1",
            class:"kavshiri",
            text:"კავშირის გაწყვეტის მიზეზი დაუდგენელია "
        })
        return this.state.element.Creat8
    }

    sistemInfo1 = () =>{
        this.state.element.sistemInfo1 = this.CreateElement({
          element:"div",
          class:"sistem5",
        },this.name(),this.xazi7(),this.createImg4(),this.sectioStatus6(),this.divebi2(),this.divebi3())
        return this.state.element.sistemInfo1
    }
    
    name = () =>{
        this.state.element.name = this.CreateElement({
            element:"h1",
            class:"avtor",
            text:"გაცემული ინფო",
        })
        return this.state.element.name
    }

    xazi7 = () =>{
        this.state.element.xazi7 = this.CreateElement({
            element:"div",
            class:"xazi7",
        })
        return this.state.element.xazi7
    }

    createImg4 = () =>{
        this.state.element.createImg4 = this.CreateElement({
            element:"img",
            class:"img",
            src:"Frontend/Assets/images/icons/edit4.svg"
        })
        return this.state.element.createImg4
    }


    sectioStatus6 = () =>{
        this.state.element.sectioStatus = this.CreateElement({
            element:"div",
            class:"sectioStatus8",
        },this.sectioStatus8(),this.sectioSt1(),)
        return this.state.element.sectioStatus
    }

    sectioStatus8 = () =>{
        this.state.element.sectioStatus8 = this.CreateElement({
            element:"div",
            class:"sectioSt",
         },this.Creat10(),this.Creat9(),this.statement3(),this.tip5(),)

        return this.state.element.sectioStatus8
     }
    
        Creat10 = () =>{
         this.state.element.Creat10 = this.CreateElement({
            element:"h1",
            class:"phone",
            text:" კატეგორია :"
       })
        return this.state.element.Creat10
         }
    
        Creat9 = () =>{
            this.state.element.Creat9 = this.CreateElement({
                element:"h1",
                class:"phone",
                text:"ქვე-კატეგორია :",
            })
            return this.state.element.Creat9
        }
    
        statement3 = () =>{
            this.state.element.statement3 = this.CreateElement({
                element:"h1",
                class:"phone",
                text:"ქვე-კატეგორია1 :",
            })
            return this.state.element.statement3
        }
    
        tip5 = () =>{
            this.state.element.tip5 = this.CreateElement({
                element:"h1",
                class:"phone",
                text:"მომართვის ტიპი :",
            })
            return this.state.element.tip5
        }
        
        sectioSt1 = () =>{
            this.state.element.sectioSt1 = this.CreateElement({
                element:"div",
                class:"sectioSt1",
             },this.tip6(),this.tip7(),this.tip8(),)
    
            return this.state.element.sectioSt1
         }

            tip6 = () =>{
            this.state.element.tip6 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"ტექნიკური",
            })
            return this.state.element.tip6
          }

        tip7 = () =>{
            this.state.element.tip4 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"მაღალი ძაბვა",
            })
            return this.state.element.tip4
        }

        tip8 = () =>{
            this.state.element.tip4 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"0,4 კვ",
            })
            return this.state.element.tip4
        }

        divebi2 = () =>{
            this.state.element.divebi2 = this.CreateElement({
                element:"div",
                class:"divebi2",
             },this.infoNumber5(),this.sectioSt2(),)
    
            return this.state.element.divebi2
         }

         infoNumber5 = () =>{
            this.state.element.infoNumber = this.CreateElement({
                element:"div",
                class:"sectioSt1",
             },this.Creat11(),this.Creat12(),this.Creat13(),this.Creat14())
            return this.state.element.infoNumber
         }

         
         Creat11 = () =>{
            this.state.element.Creat11 = this.CreateElement({
               element:"h1",
               class:"phone",
               text:" დამატებითი ველი 1 :"
          })
           return this.state.element.Creat11
            }
       
            Creat12 = () =>{
               this.state.element.Creat12 = this.CreateElement({
                   element:"h1",
                   class:"phone",
                   text:"დამატებითი ველი 2:",
               })
               return this.state.element.Creat12
           }
       
           Creat13 = () =>{
               this.state.element.Creat13 = this.CreateElement({
                   element:"h1",
                   class:"phone",
                   text:"დამატებითი ველი 3 :",
               })
               return this.state.element.Creat13
           }
       
           Creat14 = () =>{
               this.state.element.Creat14 = this.CreateElement({
                   element:"h1",
                   class:"phone",
                   text:"დამატებითი ველი 4:",
               })
               return this.state.element.Creat14
           }

             
        sectioSt2 = () =>{
            this.state.element.sectioSt1 = this.CreateElement({
                element:"div",
                class:"sectioSt2",
             },this.tip15(),this.tip16(),this.tip17(),)
    
            return this.state.element.sectioSt1
         }

            tip15 = () =>{
            this.state.element.tip6 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"ტექნიკური",
            })
            return this.state.element.tip6
          }

        tip16 = () =>{
            this.state.element.tip4 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"მაღალი ძაბვა",
            })
            return this.state.element.tip4
        }

        tip17 = () =>{
            this.state.element.tip4 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"0,4 კვ",
            })
            return this.state.element.tip4
        }
    
        divebi3 = () =>{
            this.state.element.divebi2 = this.CreateElement({
                element:"div",
                class:"divebi3",
             },this.infoNumber6(),this.sectioSt3(),)
    
            return this.state.element.divebi2
         }

         infoNumber6 = () =>{
            this.state.element.infoNumber = this.CreateElement({
                element:"div",
                class:"sectioSt4",
             },this.Creat11(),this.Creat12(),this.Creat13(),this.Creat14())
            return this.state.element.infoNumber
         }

         
         Creat11 = () =>{
            this.state.element.Creat11 = this.CreateElement({
               element:"h1",
               class:"phone",
               text:" დამატებითი ველი 1 :"
          })
           return this.state.element.Creat11
            }
       
            Creat12 = () =>{
               this.state.element.Creat12 = this.CreateElement({
                   element:"h1",
                   class:"phone",
                   text:"დამატებითი ველი 2:",
               })
               return this.state.element.Creat12
           }
       
           Creat13 = () =>{
               this.state.element.Creat13 = this.CreateElement({
                   element:"h1",
                   class:"phone",
                   text:"დამატებითი ველი 3 :",
               })
               return this.state.element.Creat13
           }
       
           Creat14 = () =>{
               this.state.element.Creat14 = this.CreateElement({
                   element:"h1",
                   class:"phone",
                   text:"დამატებითი ველი 4:",
               })
               return this.state.element.Creat14
            }

             
        sectioSt3 = () =>{
            this.state.element.sectioSt1 = this.CreateElement({
                element:"div",
                class:"sectioSt3",
             },this.tip18(),this.tip19(),this.tip20(),)
    
            return this.state.element.sectioSt1
         }

            tip18 = () =>{
            this.state.element.tip6 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"ტექნიკური",
            })
            return this.state.element.tip6
          }

        tip19 = () =>{
            this.state.element.tip4 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"მაღალი ძაბვა",
            })
            return this.state.element.tip4
        }

        tip20 = () =>{
            this.state.element.tip4 = this.CreateElement({
                element:"h1",
                class:"citi1",
                text:"0,4 კვ",
            })
            return this.state.element.tip4
        }



}