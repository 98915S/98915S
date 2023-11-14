    
    var text = "";
    var list = ["Viggo", "Grabler", "EE23a"];
    var index = 0;
    var del = false;

    function remover() {
        var header = document.getElementById("signature");

        if (del) {
            text = list[index].substring(0, text.length - 1);
            header.innerHTML = text + "|";
            if (text === "") {
                del = false;
                index = (index + 1) % list.length;
                setTimeout(remover, 500);
            }   else{
                setTimeout(remover, 70);
            }
            
        } else {
        if (text === list[index]) {
            del = true;
            setTimeout(remover, 1000);
        }   else {
            text = list[index].substring(0, text.length + 1);
            header.innerHTML = text + "|"
            setTimeout(remover, 70)
        }
        }

    }

    remover();