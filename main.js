            var nval = document.getElementById("nval");
            var ageval = document.getElementById("ageval");
            var pval=document.getElementById("pval");
            var eval=document.getElementById("eval");
            var mar10=document.getElementById("mar10");
            var mar12=document.getElementById("mar12");
            var pay=document.getElementById("ins1");
            var pay2=document.getElementById("ins2");


            let isNameValid = false,isAgeValid = false,isPhonevalid=false,isEmailValid=false,marks12=false,marks10=false;
            
            document.forms["register"]["sname"].addEventListener("blur",valName);
            document.forms["register"]["age"].addEventListener("blur",valAge);
            document.forms["register"]["phno"].addEventListener("blur",valno);
            document.forms["register"]["email"].addEventListener("blur",valemail);
            // document.forms["register3"]["pd1"].querySelectorAll("onclick",valpd);
            // document.forms["register2"]["10th"].addEventListener("blur",valmarks(10));
            // document.forms["register2"]["12th"].addEventListener("blur",valmarks(12));

            
            document.forms["register"]["sname"].addEventListener("focus",nameReq);
            document.forms["register"]["age"].addEventListener("focus",ageReq);
            document.forms["register"]["phno"].addEventListener("focus",phreq);
            document.forms["register"]["email"].addEventListener("focus",emailreq);
            // document.forms["register3"]["pd1"].addEventListener("focus",detreq);
            // document.forms["register2"]["10th"].addEventListener("focus",marksreq(10));
            // document.forms["register2"]["12th"].addEventListener("focus",marksreq(12));

            
            let formelems  = document.forms["register"].elements;
            for (var i = 0; i < formelems.length; i++) {
                    formelems[i].addEventListener("blur",checkAll);
            }
            let formelems2  = document.forms["register2"].elements;
            for (var i = 0; i < formelems2.length; i++) {
                formelems[i].addEventListener("blur",checkAll2);
        }
    function detreq(){
        let det=document.forms["register3"]["pd1"].value;
        if(det=="Card"){
            ins1.innerHTML="Enter Card Number!!";
            ins1.style.color="green";
            ins2.innerHTML="";
            document.forms["register3"]["ins"].addEventListener("blur",valpd);
        }
        else if(det=="UPI"){
            ins2.innerHTML="Enter UPI ID !!";
            ins2.style.color="green";
            ins1.innerHTML="";
            document.forms["register3"]["ins2"].addEventListener("blur",valpd);
        }
    }
    function valpd(){
        let det=document.forms["register3"]["pd1"].value;
        if(det=="Card"){
            let nu=document.forms["register3"]["ins"].value;
            let flag=0;
            if(nu.length!=12)
                flag=1;
            for(let i=0;i<nu.length;i++){
                if(!(nu[i]>=0 && nu[i]<=9))
                    flag=2;
            }
            
            
            if(flag==2){
                ins1.innerHTML="The card number should only contain numbers!!";
                ins1.style.color="red";
            }
            else if(flag==1){
                ins1.innerHTML="The card number should be of length 12!!";
                ins1.style.color="red";
            }
            else{
                ins1.innerHTML="The card number is valid!!";
                ins1.style.color="green";
            }
        }
        else if(det=="UPI"){
            let uid=document.forms["register3"]["ins2"].value;
            let len=uid.length;
                let flag=0;
                let k=0;
                let i=0;
                for(i=0;i<len;i++){
                    if(uid[i]=='@'){
                        flag=1;
                        k=i;
                        if(k==len-1){
                        flag=0
                        break;
                        }
                        if(!((uid[k+1]>='A' && uid[k+1]<='Z') || (uid[k+1]>='a' && uid[k+1]<='z'))){
                            flag=0;
                            break;
                        }
                    } 
                }
                if(flag==0){
                    ins2.innerHTML="The UPI must contain @ followed by atleast one alphabet";
                    ins2.style.color="red";
                }
                else{
                    ins2.innerHTML="UPI is valid !!";
                    ins2.style.color="green";
                }
        }
    }
        function marksreq(b){
            if(b==10){
            mar10.innerHTML="Enter required marks";
            mar10.style.color="green";
            }
            else{
            mar12.innerHTML="Enter required marks";
            mar12.style.color="green";
            }
        }
            function valmarks(a){
                if(a==10){
                    let e=document.forms["register2"]["10th"].value;
                    if(e == " " || e == null){
                        mar10.innerHTML="This is must fill area!!";
                        mar10.style.color="red";
                    }
                    else{
                        marks10=true;
                        mar10.innerHTML="Valid!!";
                        mar10.style.color="green";

                    }
                }
                else if(a==12){
                    let e=document.forms["register2"]["12th"].value;
                    if(e=="" || e==null){
                        mar12.innerHTML="This is must fill area!!";
                        mar12.style.color="red";
                    }
                    else{
                        marks12=true;
                        mar12.innerHTML="Valid!!";
                        mar12.style.color="green";

                    }
                }
            }
            function checkAll2(){
                if(marks10 && marks12)
                    document.getElementById("btn2").disabled = false;
            }
            function emailreq(){
                eval.innerHTML="E-mail must contain @ followed by atleast 1 character"
                eval.style.color="green";
            }
            function valemail(){
                let em=document.forms["register"]["email"].value;
                let len=em.length;
                let flag=0;
                let k=0;
                let i=0;
                for(i=0;i<len;i++){
                    if(em[i]=='@'){
                        flag=1;
                        k=i;
                        if(k==len-1){
                        flag=0
                        break;
                        }
                        if(!((em[k+1]>='A' && em[k+1]<='Z') || (em[k+1]>='a' && em[k+1]<='z'))){
                            flag=0;
                            break;
                        }
                    } 
                }
                if(flag==0){
                    eval.innerHTML="The Email must contain @ followed by atleast one alphabet";
                    eval.style.color="red";
                }
                else{
                    eval.innerHTML="Email is valid !!";
                    isEmailValid=true;
                    eval.style.colorr="green";
                }
            }
            function phreq(){
                pval.innerHTML="Phone number must contain 10 numbers";
                pval.style.color="green";
            }
            function valno(){
                let pno=document.forms["register"]["phno"].value;
                let i=0;
                let flag=0;
                if(!(pno[0]>6 && pno[0]<=9))
                    flag=1;
                if(pno.length!=10)
                    flag=2;
                
                    if(flag==0){
                        pval.innerHTML="The phone number is valid!!";
                        pval.style.color="green";
                        isPhonevalid=true;
                    }
                    else if(flag==1) {
                        pval.innerHTML="The number must start from 7, 8 or 9";
                        pval.style.color="red";
                    }
                    else{
                        pval.innerHTML="The number must contain ten digits";
                        pval.style.color="red";
                    }
            }
            
            function checkAll(){
                if(isNameValid && isAgeValid && isEmailValid && isPhonevalid)
                    document.getElementById("btn").disabled = false;
            }
            
            function nameReq(){
                nval.innerHTML = "Name must contain more than 1 character.";
                nval.style.color = "green";
            }
            function ageReq(){
                ageval.innerHTML = "Age must be between 18 and 25";
                ageval.style.color = "green";
            }
             function valName(){
                let s = document.forms["register"]["sname"].value;
                let flag=0;
                let len=s.length;
                for(i=0;i<len;i++){
                    if(!((s[i]>='A' && s[i]<='Z') || (s[i]>='a' && s[i]<='z') || s[i]==" "))
                        flag=1;
                }
                if((s===null || s=="" || s.length < 2) && flag==0){
                    nval.innerHTML = "Name must contain more than 1 character.";
                    nval.style.color = "red";
                }
                else if(flag==1){
                    nval.innerHTML = "Name must not contain a special character or number!!";
                    nval.style.color = "red";
                }
                else{
                    nval.innerHTML = "Name is valid!!";
                    isNameValid = true;
                }
            }
            function valAge(){
                let a=document.forms["register"]["age"].value;
                console.log(a);
                let b=[];
                b=a.split("-");
                let dif=2022-(parseInt(b[0]));
                if(dif < 18 || a > 25 || a===null || a===undefined){
                    ageval.innerHTML = "Age must be in range 18 to 25";
                    ageval.style.color = "red";
                }
                else{
                    ageval.innerHTML = "Age is valid!!";
                    ageval.style.color = "green";
                    isAgeValid = true;
                }
            }