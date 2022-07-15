function uniqueEmailChecker(email){
  if(localStorage.getItem('user_data')){
    let arr =JSON.parse(localStorage.getItem("user_data"))
    return !arr.filter(x=>{return x.email===email}).length>0
  }
  return true
}
export default function utilFunction(e,setErrObj,errObj,setData,data) {
    let msg="";
  if( e.target.id==="name" ){
    if(e.target.value.length<3 || e.target.value.length>20){
        console.log('please enter name between 3-20 character length')
        msg="please enter name between 3-20 character length"
         setErrObj({...errObj,name:msg})
    }
    else{
      msg=""
      setErrObj({...errObj,name:msg})
      setData({...data,name:e.target.value})
    }
  }
  else if( e.target.id==="email" ){
    let regex= /^[a-z A-Z 0-9 ]+(\.[\w 0-9 ]+)?(_[\w 0-9 ]+)?(-[\w 0-9 ]+)?[a-z A-Z 0-9]?@[a-z A-Z]+\.[a-z A-Z]+/i
            if(regex.test(e.target.value)&&uniqueEmailChecker(e.target.value)){
                console.log('')
                msg=""
                setErrObj({...errObj,email:msg})
                console.log(data,".lk")
                setData({...data,email:e.target.value})
            }
            else{
                console.log('please enter correct email')
                {msg=uniqueEmailChecker(e.target.value)?"please enter correct email":"email is occupied please try with another email"}
                 setErrObj({...errObj,email:msg})
            }

            
  }
  else if(e.target.id="mobile"){
    if(e.target.value.length===10 && Number.isInteger(Number(e.target.value))){
        console.log('saccha manus')
        msg=""
        setData({...data,mobile:e.target.value})
         setErrObj({...errObj,mobile:msg})
    }
    else{
        console.log('please enter valid 10 digit mobile number')
        msg="please enter valid 10 digit mobile number"
         setErrObj({...errObj,mobile:msg})
    }
}
  
  }

