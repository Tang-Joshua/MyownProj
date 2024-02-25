var btn = document.getElementById("savebtn");
            var canc_btn = document.getElementById("cancelbtn");
            var x = document.getElementById("myDIV");

            btn.onclick = function() {
              const text = document.getElementById("fname").value;
              const text2 = document.getElementById("fname2").value;
              const text3 = document.getElementById("fname3").value;
              let warning_mess = "Names must be filled out!";


              if(text =="" || text2 == "" || text3 == ""){alert(warning_mess)}
              else{
                document.getElementById("t1").innerText = text;
                document.getElementById("t2").innerText = text2;
                document.getElementById("t3").innerText = text3;
              
                x.style.visibility = "visible";
              }

            }

            canc_btn.onclick = function() {
              document.getElementById("fname").value = null;
              document.getElementById("fname2").value = null;
              document.getElementById("fname3").value = null;
              x.style.visibility = "hidden ";
            }