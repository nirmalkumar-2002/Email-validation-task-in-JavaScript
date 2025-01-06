
function validate()
{
    let regx=/([a-zA-Z0-9]{3,20})+@+([a-z]{3,6})+\.+([a-z]{2,5})/
    let mail=document.querySelector("#email")
    let mylable=document.querySelector("#label")



if(regx.test(mail.value))

    {
        console.log("working")
        mylable.innerHTML="valid"
        mylable.style.color="green"
        // console.log("valid")
    }

    else{
        mylable.innerHTML="invalid"
        mylable.style.color="red"
        // console.log("invalid")
    }

}