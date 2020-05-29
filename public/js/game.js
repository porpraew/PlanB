var check = true;
        function start(){
            if(Number(document.querySelector("#proc").innerHTML) > 0){
                check = false;
                const box = document.querySelectorAll("#b");
                box[0].innerHTML = "&#160;&#160;";
                box[1].innerHTML = "&#160;&#160;";
                box[2].innerHTML = "&#160;&#160;";
                box[3].innerHTML = "&#160;&#160;";
                box[4].innerHTML = "&#160;&#160;";
                box[5].innerHTML = "&#160;&#160;";
                box[6].innerHTML = "&#160;&#160;";
                box[7].innerHTML = "&#160;&#160;";
                box[8].innerHTML = "&#160;&#160;";
                document.getElementById("starter").style.visibility = "hidden";
                document.querySelector("#proc").innerHTML = Number(document.querySelector("#proc").innerHTML) - 1;
            }
            else {
                alert("จำนวนครั้งหมด ไว้ลองใหม่คราวหน้านะ");
            }
        }
        function randomNumber(min, max) {  
            return Math.random() * (max - min) + min; 
        }  
        function talk1(){
            const rand = Math.floor(Math.random() * 4);
            if(rand === 0){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Apple pie!";
            }
            else if(rand === 1){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: I'm lovin' this feeling!";
            }
            else if(rand === 2){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Let me create a diversion!";
            }
            else{
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Rock n' roll!";
            }
        }
        function talk2(){
            const rand = Math.floor(Math.random() * 3);
            if(rand === 0){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Is it my turn?";
            }
            else if(rand === 1){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Yosh!";
            }
            else{
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Yo!";
            }
        }
        function play(i){
            if(check === true){
                return;
            }
            if(i.innerHTML !== "X" && i.innerHTML !== "O"){
                i.innerHTML = "X";
            }
            else{ return; }
            const box = document.querySelectorAll("#b");
            if(box[0].innerHTML === "X" && box[1].innerHTML === "X" && box[2].innerHTML === "X" ||
            box[3].innerHTML === "X" && box[4].innerHTML === "X" && box[5].innerHTML === "X" ||
            box[6].innerHTML === "X" && box[7].innerHTML === "X" && box[8].innerHTML === "X" ||
            box[0].innerHTML === "X" && box[3].innerHTML === "X" && box[6].innerHTML === "X" ||
            box[1].innerHTML === "X" && box[4].innerHTML === "X" && box[7].innerHTML === "X" ||
            box[2].innerHTML === "X" && box[5].innerHTML === "X" && box[8].innerHTML === "X" ||
            box[0].innerHTML === "X" && box[4].innerHTML === "X" && box[8].innerHTML === "X" ||
            box[6].innerHTML === "X" && box[4].innerHTML === "X" && box[2].innerHTML === "X" ){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Wonderful! It's your victory, leader.";
                const r1 = Math.floor(randomNumber(0, 99));
                const r2 = Math.floor(randomNumber(0, 99));
                const r3 = Math.floor(randomNumber(0, 99));
                alert("ยินดีด้วย! คุณได้รับชิ้นส่วนสลาก 3 ชิ้น!\nชิ้นส่วน " + r1 + "!\nชิ้นส่วน " + r2 + "!\nชิ้นส่วน " + r3 + "!");
                check = true;
                return;
            }
            if((box[0].innerHTML === "X" || box[0].innerHTML === "O") &&
            (box[1].innerHTML === "X" || box[1].innerHTML === "O") &&
            (box[2].innerHTML === "X" || box[2].innerHTML === "O") &&
            (box[3].innerHTML === "X" || box[3].innerHTML === "O") &&
            (box[4].innerHTML === "X" || box[4].innerHTML === "O") &&
            (box[5].innerHTML === "X" || box[5].innerHTML === "O") &&
            (box[6].innerHTML === "X" || box[6].innerHTML === "O") &&
            (box[7].innerHTML === "X" || box[7].innerHTML === "O") &&
            (box[8].innerHTML === "X" || box[8].innerHTML === "O")){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: Draw? Not bad at all.";
                const r1 = Math.floor(randomNumber(0, 99));
                alert("ยินดีด้วย! คุณได้รับชิ้นส่วนสลาก 1 ชิ้น!\nชิ้นส่วน " + r1 + "!");
                check = true;
                return;
            }
            if(box[4].innerHTML !== "X" && box[4].innerHTML !== "O"){
                box[4].innerHTML = "O"; talk1();
            }
            else{
                var defend = -1;
                for(var j = 1; j < box.length; j++){
                    if(box[j].innerHTML === box[j-1].innerHTML && j % 3 !== 0 && (box[j].innerHTML === "X" || box[j].innerHTML === "O")){
                        if(j % 3 === 1){ if(box[j+1].innerHTML !== "X" && box[j+1].innerHTML !== "O"){ 
                            if(box[j].innerHTML === "O") {box[j+1].innerHTML = "O"; defend = -1; break;}
                            else {defend = j+1;}
                        }}
                        else if(j % 3 === 2){ if(box[j-2].innerHTML !== "X" && box[j-2].innerHTML !== "O"){ 
                            if(box[j].innerHTML === "O") {box[j-2].innerHTML = "O"; defend = -1; break;}
                            else {defend = j-2;}
                        }}
                    }
                    if(j < 8) {if(box[j+1].innerHTML === box[j-1].innerHTML && j % 3 === 1 && (box[j-1].innerHTML === "X" || box[j-1].innerHTML === "O")){
                        if(box[j].innerHTML !== "X" && box[j].innerHTML !== "O"){ 
                            if(box[j+1].innerHTML === "O") {box[j].innerHTML = "O"; defend = -1; break; }
                            else {defend = j;}
                        }
                    }}
                    if(j > 2){ if(box[j].innerHTML === box[j-3].innerHTML && (box[j].innerHTML === "X" || box[j].innerHTML === "O")){
                        if(j > 5) { if(box[j-6].innerHTML !== "X" && box[j-6].innerHTML !== "O"){ 
                            if(box[j].innerHTML === "O") {box[j-6].innerHTML = "O"; defend = -1; break;}
                            else {defend = j-6;}
                        }} 
                        else if(j < 6){ if(box[j+3].innerHTML !== "X" && box[j+3].innerHTML !== "O"){ 
                            if(box[j].innerHTML === "O") {box[j+3].innerHTML = "O"; defend = -1; break;}
                            else {defend = j+3; }
                        }}
                    }}
                    if(j > 2 && j < 6){ if(box[j+3].innerHTML === box[j-3].innerHTML && (box[j+3].innerHTML === "X" || box[j+3].innerHTML === "O")){
                        if(box[j].innerHTML !== "X" && box[j].innerHTML !== "O"){ 
                            if(box[j+3].innerHTML === "O") {box[j].innerHTML = "O"; defend = -1; break;}
                            else {defend = j;}
                        }
                    }}
                    if(j === 4){
                        if(box[j+4].innerHTML === box[j].innerHTML && (box[j-4].innerHTML !== "X" && box[j-4].innerHTML !== "O")){
                            if(box[j].innerHTML === "O") {box[j-4].innerHTML = "O"; defend = -1; break;}
                            else {defend = j-4;}
                        }
                        if(box[j-4].innerHTML === box[j].innerHTML && (box[j+4].innerHTML !== "X" && box[j+4].innerHTML !== "O")){
                            if(box[j].innerHTML === "O") {box[j+4].innerHTML = "O"; defend = -1; break;}
                            else {defend = j+4;}
                        }
                        if(box[j+2].innerHTML === box[j].innerHTML && (box[j-2].innerHTML !== "X" && box[j-2].innerHTML !== "O")){
                            if(box[j].innerHTML === "O") {box[j-2].innerHTML = "O"; defend = -1; break;}
                            else {defend = j-2;}
                        }
                        if(box[j-2].innerHTML === box[j].innerHTML && (box[j+2].innerHTML !== "X" && box[j+2].innerHTML !== "O")){
                            if(box[j].innerHTML === "O") {box[j+2].innerHTML = "O"; defend = -1; break;}
                            else {defend = j+2;}
                        }
                    }
                    if(j === 8 && defend === -1){ 
                        for(;;){
                            const rand = Math.floor(Math.random() * 9);
                            if(box[rand].innerHTML !== "X" && box[rand].innerHTML !== "O"){
                                box[rand].innerHTML = "O"; talk1(); break;
                            }
                        }
                        break;
                    }
                }
                if(defend !== -1){
                    box[defend].innerHTML = "O";
                    defend = -1;
                    talk2();
                }
            }
            if(box[0].innerHTML === "O" && box[1].innerHTML === "O" && box[2].innerHTML === "O" ||
            box[3].innerHTML === "O" && box[4].innerHTML === "O" && box[5].innerHTML === "O" ||
            box[6].innerHTML === "O" && box[7].innerHTML === "O" && box[8].innerHTML === "O" ||
            box[0].innerHTML === "O" && box[3].innerHTML === "O" && box[6].innerHTML === "O" ||
            box[1].innerHTML === "O" && box[4].innerHTML === "O" && box[7].innerHTML === "O" ||
            box[2].innerHTML === "O" && box[5].innerHTML === "O" && box[8].innerHTML === "O" ||
            box[0].innerHTML === "O" && box[4].innerHTML === "O" && box[8].innerHTML === "O" ||
            box[6].innerHTML === "O" && box[4].innerHTML === "O" && box[2].innerHTML === "O" ){
                const text = document.querySelector("h6");
                text.innerHTML = "Exusiai: GGEZ, leader.";
                check = true;
                return;
            }
        }