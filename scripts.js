function getAkanName(){
    var day = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwa","Kwabena","Kwaku","Yaw","Kofi","Kwane"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").Value;
    var myGender = document.getElementsByName("gender");
    var dataOfBirth = new Date(myBirthday);
    var dayOfTheweek = dateOfBirth.getDay()
    
    if(myBirthday) === ""){
        document.getElementById('message').innerHTML = "<div> you Didn't submit avalid Date!</div"
    }

    else{
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                document.getElementById('message').innerHTML="Born on a <span>" + days[dayOfTheweek] + "</span>"
            }


            else{
                document.getElementById('message').innerHTML = "Born on a <span>"+ days[dayOfTheweek] +"</span>"
            }
            break;
        }
        else{
            document.getElementById('message').innerHTML = "<div>please select a Gender</div>"
        }
        }
    }