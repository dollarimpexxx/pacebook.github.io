// function showHidePass() {
//     var element = document.getElementById("u_0_4_CT");
//     console.log("Jai Hind");
//     element.innerHTML = `<img src="./images/hidePassEye.png" alt="" srcset="">`;
//     console.log("Jai Hind");
//   }

function showHidePass() {
    var passInp = document.getElementById("password");
    var element = document.getElementById("u_0_4_CT");

    if (passInp.type === 'password') {
        passInp.type = "text";
        element.innerHTML = `<img src="./images/hidePassEye.png" alt="" srcset="">`;
    }
    else {
        passInp.type = "password";
        element.innerHTML = `<img src="./images/showPassEye.png" alt="" srcset="">`;
    }
}