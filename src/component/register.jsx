import React, { useEffect, useState } from "react";
import utilFunction from "../utilFunction";
import "./register.css";

export const Register = () => {
  const [errObj, setErrObj] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
  });
  const [data, setData] = useState({
    name: null,
    email: null,
    mobile: null,
    dob: null,
  });
  const [formSubmit,setFormSubmit]=useState(false)
  const [registeredUser,setRegisteredUser]=useState([])
  const [ age,setAge ]= useState(null)
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("user_data"))
    setRegisteredUser(data)
  },[])
  const dataEntryChecker = (data, errObj) => {
    if (
      data.name &&
      data.email &&
      data.mobile &&
      data.dob &&
      !errObj.name &&
      !errObj.email &&
      !errObj.mobile
    ) {
      return true;
    } else return false;
  };
  function ageCal(date){
    return new Date().getFullYear() - Number(`${date}`.slice(0,4))
  }
  return (
    // <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
    //   {console.log(errObj)}
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-lg-8 col-xl-6">
    //         <div className="card rounded-3">
    //           <h2 className={errObj.headingErr?"text-danger animation":""}>{errObj.headingErr?errObj.headingErr:""}</h2>
    //           <h2 className={formSubmit?"text-success ":""}>{formSubmit?"form submitted successfully":""}</h2>
    //           {console.log(formSubmit,"fssf")}
    //           <div className="card-body p-4 p-md-5">
    //             <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
    //               Registration Info
    //             </h3>

    //             <form className="px-md-2">
    //               <div className="form-outline mb-4">
    //                 <label className="form-label" htmlFor="name">
    //                   Name
    //                 </label>
    //                 <input
    //                   type="text"
    //                   id="name"
    //                   className="form-control"
    //                   placeholder="please enter your name"
    //                   onBlur={(e) => {
    //                     utilFunction(e, setErrObj, errObj, setData, data);
    //                   }}
    //                 />

    //                 <p
    //                   className={
    //                     errObj.name.length > 0 ? "text-danger animation" : ""
    //                   }
    //                 >
    //                   {errObj.name.length > 0 ? errObj.name : ""}
    //                 </p>
    //               </div>
    //               <div className="row">
    //                 <div className="col-md-6 mb-4">
    //                   <div className="form-outline datepicker">
    //                     <label htmlFor="mobile" className="form-label">
    //                       mobile number
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="form-control"
    //                       id="mobile"
    //                       placeholder="mobile number"
    //                       onBlur={(e) => {
    //                         utilFunction(e, setErrObj, errObj, setData, data);
    //                       }}
    //                     />
    //                     <p
    //                       className={
    //                         errObj.mobile.length > 0
    //                           ? "text-danger animation"
    //                           : ""
    //                       }
    //                     >
    //                       {errObj.mobile.length > 0 ? errObj.mobile : ""}
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-6 mb-4">
    //                   <div className="form-outline datepicker">
    //                     <label htmlFor="email" className="form-label">
    //                       email
    //                     </label>
    //                     <input
    //                       type="text"
    //                       placeholder="email"
    //                       className="form-control"
    //                       id="email"
    //                       onBlur={(e) => {
    //                         utilFunction(e, setErrObj, errObj, setData, data);
    //                       }}
    //                     />
    //                     <p
    //                       className={
    //                         errObj.email.length > 0
    //                           ? "text-danger animation"
    //                           : ""
    //                       }
    //                     >
    //                       {errObj.email.length > 0 ? errObj.email : ""}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="row">
    //                 <div className="col-md-6 mb-4">
    //                   <div className="form-outline datepicker">
    //                     <label htmlFor="dob" className="form-label">
    //                       Select a date of birth
    //                     </label>
    //                     <input
    //                       type="date"
    //                       className="form-control"
    //                       id="dob"
    //                       placeholder="date of birth"
    //                       onChange={(e) => {
    //                         setData({ ...data, dob: e.target.value });
    //                       }}
    //                     />
    //                     <p
    //                       className={
    //                         errObj.dob.length > 0 ? "text-danger animation" : ""
    //                       }
    //                     >
    //                       {errObj.dob.length > 0 ? errObj.dob : ""}
    //                     </p>
    //                     <p>{data.dob ? "your birthday here" : ""}</p>
    //                   </div>
    //                 </div>
    //               </div>
                  

                  

    //               <button type="submit"  className="btn btn-success btn-lg mb-1" onClick={
    //                 (e)=>{
    //                   e.preventDefault()
    //                   console.log(dataEntryChecker(data,errObj),">>>>>>>>>>>>>>")
    //                   console.log(data,"/?/")
    //                           if(dataEntryChecker(data,errObj)){
    //                               console.log('you can save the user')
    //                               // localStorage.setItem("user_data",[...JSON.parse(localStorage.getItem("user_data")),JSON.stringify(data)])
    //                               // {localStorage.getItem("user_data")?localStorage.setItem("user_data",JSON.stringify([...JSON.parse(localStorage.getItem("user_data")),data])):localStorage.setItem("user_data",JSON.stringify([data]))}
    //                               if( localStorage.getItem("user_data") ){
    //                                 let arr =JSON.parse(localStorage.getItem("user_data"))
    //                                 localStorage.setItem("user_data",JSON.stringify([...arr,data]))
    //                                 setTimeout(()=>{
    //                                   Object.keys(data).map(x=>{
    //                                     document.getElementById(x).value=null
    //                                   })
    //                                   setData({name:null,email:null,mobile:null,dob:null})
    //                                   setErrObj({name:"",email:"",mobile:"",dob:""})
    //                                 },1000)

    //                                 setFormSubmit(true)
    //                                 setTimeout(()=>setFormSubmit(false),3300)
                                    
    //                               }
    //                               else{
    //                                 localStorage.setItem("user_data",JSON.stringify([data]))
    //                               }
    //                           }
    //                           else{
    //                               if(!data.email && !data.name&& !data.mobile&& !data.dob){
    //                                   setErrObj({...errObj,email:"please enter a email id",name:"please enter your name",mobile:"please enter your mobile number",dob:"please enter your date of birth"})
    //                               }
    //                               else{
    //                                 setErrObj({...errObj,headingErr:"please fill all entries"})
    //                               }
                  
    //                           }
    //                       }
    //               }
    //               >
    //                 Submit
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
   
    // </section>
//     <section class="h-100 bg-dark">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col">
//         <div class="card card-registration my-4">
//           <div class="row g-0">
//             <div class="col-xl-6 d-none d-xl-block">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
//                 alt="Sample photo" class="img-fluid"
//                 style={{bordertopLeftRadius: ".25rem" ,borderBottomLeftRadius: ".25rem"}} />
//             </div>
//             <div class="col-xl-6">
//             <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
//       {console.log(errObj)}
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-lg-8 col-xl-6">
//             <div className="card rounded-3">
//               <h2 className={errObj.headingErr?"text-danger animation":""}>{errObj.headingErr?errObj.headingErr:""}</h2>
//               <h2 className={formSubmit?"text-success ":""}>{formSubmit?"form submitted successfully":""}</h2>
//               {console.log(formSubmit,"fssf")}
//               <div className="card-body p-4 p-md-5">
//                 <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
//                   Registration Info
//                 </h3>

//                 <form className="px-md-2">
//                   <div className="form-outline mb-4">
//                     <label className="form-label" htmlFor="name">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="form-control"
//                       placeholder="please enter your name"
//                       onBlur={(e) => {
//                         utilFunction(e, setErrObj, errObj, setData, data);
//                       }}
//                     />

//                     <p
//                       className={
//                         errObj.name.length > 0 ? "text-danger animation" : ""
//                       }
//                     >
//                       {errObj.name.length > 0 ? errObj.name : ""}
//                     </p>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-outline datepicker">
//                         <label htmlFor="mobile" className="form-label">
//                           mobile number
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="mobile"
//                           placeholder="mobile number"
//                           onBlur={(e) => {
//                             utilFunction(e, setErrObj, errObj, setData, data);
//                           }}
//                         />
//                         <p
//                           className={
//                             errObj.mobile.length > 0
//                               ? "text-danger animation"
//                               : ""
//                           }
//                         >
//                           {errObj.mobile.length > 0 ? errObj.mobile : ""}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-4">
//                       <div className="form-outline datepicker">
//                         <label htmlFor="email" className="form-label">
//                           email
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="email"
//                           className="form-control"
//                           id="email"
//                           onBlur={(e) => {
//                             utilFunction(e, setErrObj, errObj, setData, data);
//                           }}
//                         />
//                         <p
//                           className={
//                             errObj.email.length > 0
//                               ? "text-danger animation"
//                               : ""
//                           }
//                         >
//                           {errObj.email.length > 0 ? errObj.email : ""}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-outline datepicker">
//                         <label htmlFor="dob" className="form-label">
//                           Select a date of birth
//                         </label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           id="dob"
//                           placeholder="date of birth"
//                           onChange={(e) => {
//                             setData({ ...data, dob: e.target.value });
//                           }}
//                         />
//                         <p
//                           className={
//                             errObj.dob.length > 0 ? "text-danger animation" : ""
//                           }
//                         >
//                           {errObj.dob.length > 0 ? errObj.dob : ""}
//                         </p>
//                         <p>{data.dob ? "your birthday here" : ""}</p>
//                       </div>
//                     </div>
//                   </div>
                  

                  

//                   <button type="submit"  className="btn btn-success btn-lg mb-1" onClick={
//                     (e)=>{
//                       e.preventDefault()
//                       console.log(dataEntryChecker(data,errObj),">>>>>>>>>>>>>>")
//                       console.log(data,"/?/")
//                               if(dataEntryChecker(data,errObj)){
//                                   console.log('you can save the user')
//                                   // localStorage.setItem("user_data",[...JSON.parse(localStorage.getItem("user_data")),JSON.stringify(data)])
//                                   // {localStorage.getItem("user_data")?localStorage.setItem("user_data",JSON.stringify([...JSON.parse(localStorage.getItem("user_data")),data])):localStorage.setItem("user_data",JSON.stringify([data]))}
//                                   if( localStorage.getItem("user_data") ){
//                                     let arr =JSON.parse(localStorage.getItem("user_data"))
//                                     localStorage.setItem("user_data",JSON.stringify([...arr,data]))
//                                     setTimeout(()=>{
//                                       Object.keys(data).map(x=>{
//                                         document.getElementById(x).value=null
//                                       })
//                                       setData({name:null,email:null,mobile:null,dob:null})
//                                       setErrObj({name:"",email:"",mobile:"",dob:""})
//                                     },1000)

//                                     setFormSubmit(true)
//                                     setTimeout(()=>setFormSubmit(false),3300)
                                    
//                                   }
//                                   else{
//                                     localStorage.setItem("user_data",JSON.stringify([data]))
//                                   }
//                               }
//                               else{
//                                   if(!data.email && !data.name&& !data.mobile&& !data.dob){
//                                       setErrObj({...errObj,email:"please enter a email id",name:"please enter your name",mobile:"please enter your mobile number",dob:"please enter your date of birth"})
//                                   }
//                                   else{
//                                     setErrObj({...errObj,headingErr:"please fill all entries"})
//                                   }
                  
//                               }
//                           }
//                   }
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
   
//     </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
<div className="row" >
<section className="h-100  col-lg-7" style={{ backgroundColor: "#8fc4b7",height:'100vh' }}>
      
      <div className="container py-5 h-100 mt-3">
        <div className="row d-flex justify-content-center align-items-center h-100" style={{marginTop:"inherit"}}>
          <div className="col-lg-8 col-xl-6" style={{width:"65%"}}>
            <div className="card rounded-3">
              <h2 className={errObj.headingErr?"text-danger animation":""}>{errObj.headingErr?errObj.headingErr:""}</h2>
              <h2 className={formSubmit?"text-success ":""}>{formSubmit?"form submitted successfully":""}</h2>
              {console.log(formSubmit,"fssf")}
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Registration Info
                </h3>

                <form className="px-md-2">
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="please enter your name"
                      onBlur={(e) => {
                        utilFunction(e, setErrObj, errObj, setData, data);
                      }}
                    />

                    <p
                      className={
                        errObj.name.length > 0 ? "text-danger animation" : ""
                      }
                    >
                      {errObj.name.length > 0 ? errObj.name : ""}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <label htmlFor="mobile" className="form-label">
                          mobile number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="mobile number"
                          onBlur={(e) => {
                            utilFunction(e, setErrObj, errObj, setData, data);
                          }}
                        />
                        <p
                          className={
                            errObj.mobile.length > 0
                              ? "text-danger animation"
                              : ""
                          }
                        >
                          {errObj.mobile.length > 0 ? errObj.mobile : ""}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <label htmlFor="email" className="form-label">
                          email
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          className="form-control"
                          id="email"
                          onBlur={(e) => {
                            utilFunction(e, setErrObj, errObj, setData, data);
                          }}
                        />
                        <p
                          className={
                            errObj.email.length > 0
                              ? "text-danger animation"
                              : ""
                          }
                        >
                          {errObj.email.length > 0 ? errObj.email : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <label htmlFor="dob" className="form-label">
                          Select a date of birth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          placeholder="date of birth"
                          max={new Date().toISOString().substring(0,10)}
                          onChange={(e) => {
                            console.log(typeof(e.target.value),"p[pppppppp",">>>>",e.target.value)
                            setData({ ...data, dob: e.target.value });
                            setAge(ageCal(e.target.value))
                          }}
                        />
                        <span style={{display: "flex"}}>{data.dob ?`you are ${age} year old` : ""}</span>
                        <p
                          className={
                            errObj.dob.length > 0 ? "text-danger animation" : ""
                          }
                        >
                          {errObj.dob.length > 0 ? errObj.dob : ""}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  

                  

                  <button type="submit"  className="btn btn-success btn-lg mb-1" onClick={
                    (e)=>{
                      e.preventDefault()
                      console.log(dataEntryChecker(data,errObj),">>>>>>>>>>>>>>")
                      console.log(data,"/?/")
                              if(dataEntryChecker(data,errObj)){
                                  console.log('you can save the user')
                                  // localStorage.setItem("user_data",[...JSON.parse(localStorage.getItem("user_data")),JSON.stringify(data)])
                                  // {localStorage.getItem("user_data")?localStorage.setItem("user_data",JSON.stringify([...JSON.parse(localStorage.getItem("user_data")),data])):localStorage.setItem("user_data",JSON.stringify([data]))}
                                  if( localStorage.getItem("user_data") ){
                                    let arr =JSON.parse(localStorage.getItem("user_data"))
                                    localStorage.setItem("user_data",JSON.stringify([...arr,data]))
                                    {registeredUser?setRegisteredUser([...registeredUser,data]):setRegisteredUser([data])}
                                    setTimeout(()=>{
                                      Object.keys(data).map(x=>{
                                        document.getElementById(x).value=null
                                        
                                      })
                                      setData({name:null,email:null,mobile:null,dob:null})
                                      setErrObj({name:"",email:"",mobile:"",dob:""})
                                    },800)

                                    setFormSubmit(true)
                                    
                                    
                                    setTimeout(()=>setFormSubmit(false),3300)
                                    
                                  }
                                  else{
                                    localStorage.setItem("user_data",JSON.stringify([data]))
                                    {registeredUser?setRegisteredUser([...registeredUser,data]):setRegisteredUser([data])}
                                    setTimeout(()=>{
                                      Object.keys(data).map(x=>{
                                        document.getElementById(x).value=null
                                        
                                      })
                                      console.log('resis',registeredUser)
                                      setData({name:null,email:null,mobile:null,dob:null})
                                      setErrObj({name:"",email:"",mobile:"",dob:""})
                                    },800)
                                    setFormSubmit(true)
                                    
                                    
                                    setTimeout(()=>setFormSubmit(false),3300)
                                  }
                              }
                              else{
                                  if(!data.email && !data.name&& !data.mobile&& !data.dob){
                                      setErrObj({...errObj,email:"please enter a email id",name:"please enter your name",mobile:"please enter your mobile number",dob:"please enter your date of birth"})
                                  }
                                  else{
                                    setErrObj({...errObj,headingErr:"please fill all entries"})
                                  }
                  
                              }
                          }
                  }
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </section>
    <section className="h-100 h-custom col-lg-5"  style={{height:"100vh"}}>
      
      <div className="container py-5 h-100">
        <h2 className="py-5">Registered Users</h2>
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">mobile</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    {registeredUser?registeredUser.map((x,i)=>{
      return (<tr key={i+1}>
        <th scope="row">{i+1}</th>
        <td>{x.name}</td>
        <td>{x.email}</td>
        <td>{x.mobile}</td>
        <td>{x.dob}</td>
      </tr>)
    }):""}
    
    
  </tbody>
</table>
        </div>
      </div>
   
    </section>

</div>
  );
};
