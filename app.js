function BookFun(){
   
    
    var Name = document.getElementById("name").value
    var email = document.getElementById('email').value
    var phone = document.getElementById("phone").value
    var date = document.getElementById("date").value
    var time = document.getElementById("time").value
    var people = document.getElementById("people").value

    
        if(Name== ''){
            document.getElementById("name").style.borderColor='red'
            document.getElementById('v1').innerText='Please Enter Your Name'
            
        }
        else if (Name !=''){
            document.getElementById("name").style.borderColor='green'
            document.getElementById('v1').innerText=''

        }
        if(email == ""){
            document.getElementById("email").style.borderColor='red'
            document.getElementById('v2').innerText='Please Enter Your Email'

        }
        else  if(email != ""){
            document.getElementById("email").style.borderColor='green'
            document.getElementById('v2').innerText=''

        }
        if(phone.length < 11){
            document.getElementById("phone").style.borderColor='red'
            document.getElementById('v3').innerText='Please Enter Correct Phone Number '

        }
        else if(phone.length > 11){
            document.getElementById("phone").style.borderColor='red'
            document.getElementById('v3').innerText='Please Enter Correct Phone Number '
           

        }
        else{
            document.getElementById("phone").style.borderColor='green'
            document.getElementById('v3').innerText=' '

        }


        if(date == ""){
            document.getElementById("date").style.borderColor='red'
            document.getElementById('v4').innerText='Please Enter date'

        }
        else if(date != ""){
            document.getElementById("date").style.borderColor='green'
            document.getElementById('v4').innerText=''

        }

        if(time == ""){
            document.getElementById("time").style.borderColor='red'
            document.getElementById('v5').innerText='Please Enter Time'

        }
        else if(time != ""){
            document.getElementById("time").style.borderColor='green'
            document.getElementById('v5').innerText=''

        }

        if(people == ""){
            document.getElementById("people").style.borderColor='red'
            document.getElementById('v6').innerText='Please Enter People'

        }
        else if(people != ""){
            document.getElementById("people").style.borderColor='green'
            document.getElementById('v6').innerText=''

        }
       
    


        if(Name !='' && email !='' && phone !='' &&  date !='' && time !='' && people !=''){
           
            console.log('USER NAME :',Name)
            console.log('USER Email :',email)
            console.log('USER Phone number :',phone)
            console.log('USER book date :',date)
            console.log('USER book time :',time)
            console.log('People:',people)

            obj={
                Name:Name,
                Email:email,
                contact_no:phone,
                date:date,
                time:time,
                people:people
            }
            alert(obj.Name)
            firebase.database().ref("Book_DATA").push(obj)
            alert(firebase.database())
          
        }

      
    }



function sendmsg(){
    
}
