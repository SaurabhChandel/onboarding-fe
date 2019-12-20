import React, { Component } from 'react';
import { Card } from 'antd';




class Content extends Component {
    render() { 
        return ( 
            <div className="list" >
          
          <div>
              

            <h2 style={{ width: "300px",
                        height: "44px",
                        padding: "18px",
                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#193757"
                        
                        
                        
                        }}>
        HR Recruiter
        </h2>

              
            <Card  bordered={false} style={{ width: 300 }} hoverable={true}>
           <p style={{

                    fontFamily: "Nunito Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "19px",
                    color: "#324D6A",

                    display: "flex",
                    alignItems:" flex-end",



           }}>Card content1</p>
           
             </Card>
             <Card style={{ width: 300 }} bordered={false} hoverable={true}>
           <p   style={{

                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#324D6A",

                        display: "flex",
                        alignItems:" flex-end",



           }}>Card content1</p>
           
             </Card>
             <Card style={{ width: 300 }} hoverable={true} bordered={false}>
           <p style={{

                    fontFamily: "Nunito Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "19px",
                    color: "#324D6A",

                    display: "flex",
                    alignItems:" flex-end",



           }}>Card content1</p>
           
             </Card>
             <input placeholder="Add new email"  
                 style={{width:300 ,
                background: "#FFFFFF",
                border: "1px solid #E5E8EC",
                boxShadow: "0px -4px 22px rgba(25, 55, 87, 0.03)",
                borderRadius: "4px",
                height: "43px"
                }}>

                </input>


        </div>



        <div>
              <h2 style={{ width: "300px",
                        height: "44px",
                        padding: "18px",
                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#193757"
                        }}>
               HR Admin        </h2>
                  <Card style={{ width: 300 }} bordered={false} hoverable={true}>
                   <p style={{

                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#324D6A",

                        display: "flex",
                        alignItems:" flex-end",



           }}>Card content2</p>
                   
                 </Card>
                 <Card style={{ width: 300 }} bordered={false} hoverable={true}>
                   <p style={{

                            fontFamily: "Nunito Sans",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "19px",
                            color: "#324D6A",

                            display: "flex",
                            alignItems:" flex-end",



           }}>Card content2</p>
                   
                 </Card>
                 <Card style={{ width: 300 }} bordered={false} hoverable={true}>
                   <p style={{

                            fontFamily: "Nunito Sans",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "19px",
                            color: "#324D6A",

                            display: "flex",
                            alignItems:" flex-end",



           }}>Card content2</p>
                   
                 </Card>

                 <input placeholder="Add new email"  
                 style={{width:300 ,
                background: "#FFFFFF",
                border: "1px solid #E5E8EC",
                boxShadow: "0px -4px 22px rgba(25, 55, 87, 0.03)",
                borderRadius: "4px",
                height: "43px"
                }}>

                </input>
        </div>


        <div>
        <h2 style={{ width: "300px",
                        height: "44px",
                        padding: "18px",
                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#193757"}}>
        Super Admin
        </h2>

                <Card style={{ width: 300 }}  bordered={false} hoverable={true}>
                 <p style={{

                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#324D6A",

                        display: "flex",
                        alignItems:" flex-end",



           }}>Card content3</p>
          
                </Card>
                <Card style={{ width: 300 }} bordered={false} hoverable={true}>
                 <p style={{

                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#324D6A",

                        display: "flex",
                        alignItems:" flex-end",



           }}>Card content3</p>
          
                </Card>
                <Card style={{ width: 300 }} bordered={false} hoverable={true}>
                 <p style={{

                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#324D6A",

                        display: "flex",
                        alignItems:" flex-end",



           }}>Card content3</p>
          
                </Card>
                <input placeholder="Add new email"  
                 style={{width:300 ,
                background: "#FFFFFF",
                border: "1px solid #E5E8EC",
                boxShadow: "0px -4px 22px rgba(25, 55, 87, 0.03)",
                borderRadius: "4px",
                height: "43px",
        


                }}>

                </input>
</div>






          </div>   
         );
    }
}
 
export default Content;
