
/*
*   QLdev (Quick Learn Development)
*   Created By Jack Woodrow
*   Version     1.2
*   Date Last Modified 2018-11-09
*
*   To use link in html page:
*   Hard File:  <script charset="utf-8" src="QLdev.js" type="text/javascript"></script>
*   CDN:        <script charset="utf-8" src="http://server.jackwoodrow.io/QLdev/CDN/v1.2/QLdev.js" type="text/javascript"></script>
*
*   Instantiate a new class at the top of your JS document:
*   const QL = new QLdev();
*
*   Run library commands like so:
*   QL.print("Hello World");
*/

class QLdev {

    constructor(){
        console.log("   ________  .____      ________");
        console.log("   \\_____  \\ |    |     \\______ \\   _______  __");
        console.log("    /  / \\  \\|    |      |    |  \\_/ __ \\  \\/ /");
        console.log("   /   \\_/.  \\    |___   |    `   \\  ___/\\   /");
        console.log("   \\_____\\ \\_/_______ \\ /_______  /\\___  >\\_/")
        console.log("          \\__>       \\/         \\/     \\/");
        console.log("==================================================");
    } // end constructor



    // ============================
    //            Output
    // ============================
    print(text, id){
        if (typeof text !== "undefined"){
            text = String(text);
            let foo = document.createElement("p");
            let bar = document.createTextNode(text);
            if(typeof id !== "undefined"){
                id = String(id);
                foo.setAttribute("id", id);
            }
            document.body.appendChild(foo);
            foo.appendChild(bar);
        } else {
            console.log("print - " + "(" + " VALUE IS NULL " + ")");
        } // end if
    } // end print

    break(id){
        let foo = document.createElement("br");
        if(typeof id !== "undefined"){
            id = String(id);
            foo.setAttribute("id", id);
        } // end if
        document.body.appendChild(foo);
    } // end break

    space(size, id){
        let foo = document.createElement("p");
        if(typeof size !== "undefined" && typeof id !== "undefined"){
            id = String(id);
            size = String(size);
            foo.setAttribute("id", id);
        } else if (typeof size !== "undefined"){
            size = String(size);
        } else {
            size = "25";
        } // end if
        foo.setAttribute("style", "width:"+size+"px");
        document.body.appendChild(foo);
    } // end space

    edit(id, text){
        if (typeof id !== "undefined" && typeof text !== "undefined"){
            id = String(id);
            text = String(text);
            document.getElementById(id).innerHTML = text;
        } else {
            console.log("edit - " + "(" + "ERROR - invalid parameter (id, text)" + ")");
        } // end if
    } // end edit

    clearValue(id){
        if (typeof id !== "undefined"){
            id = String(id);
            let type = document.getElementById(id).getAttribute("type");
            let nodeType = document.getElementById(id).nodeName;
            if (nodeType == "P"){
                return document.getElementById(id).innerHTML = "";
            } else if (type == "radio"){
                let name = document.getElementById(id).getAttribute("name");
                let radios = document.getElementsByName(name);
                for (let i = 0 , len=radios.length; i < len; i++){
                    radios[i].removeAttribute("checked");
                } // end for
            } else if (type == "checkbox"){
                document.getElementById(id).removeAttribute("checked");
            } else {
                document.getElementById(id).value = "";
            } // end if
        } else {
            console.log("clearValue - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end clearValue

    remove(id){
        if (typeof id !== "undefined"){
            id = String(id);
            document.getElementById(id).outerHTML = "";
        } else {
            console.log("remove - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end remove

    hide(id){
        if (typeof id !== "undefined"){
            id = String(id);
            document.getElementById(id).style.display = "none";
        }else{
            console.log("hide - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end hide

    show(id){
        if (typeof id !== "undefined"){
            id = String(id);
            document.getElementById(id).style.display = "inline-block";
        } else {
            console.log("show - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end show

    reload(){
        location.reload();
    }



    // ============================
    //           STYLES
    // ============================
	textColor(id, color){
		if (typeof id !== "undefined" && typeof color !== "undefined"){
            id = String(id);
			color = String(color);
            document.getElementById(id).style.color = color;
        }else{
            console.log("textColor - " + "(" + "ERROR - invalid parameter (id, color)" + ")");
        } // end if
	} // end textColor

	backgroundColor(id, color){
		if (typeof id !== "undefined" && typeof color !== "undefined"){
            id = String(id);
			color = String(color);
            document.getElementById(id).style.backgroundColor = color;
        }else{
            console.log("backgroundColor - " + "(" + "ERROR - invalid parameter (id, color)" + ")");
        } // end if
	} // end backgroundColor



    // ============================
    //          Logical
    // ============================
    exists(id){
        if (typeof id !== "undefined"){
            id = String(id);
            let exists = document.getElementById(id);
            if (exists !== null){
              return true;
            } else {
              return false;
            }
        } else {
            console.log("exists - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end exists

    valueOf(id){
        if (typeof id !== "undefined"){
            id = String(id);
            let type = document.getElementById(id).getAttribute("type");
            let nodeType = document.getElementById(id).nodeName;
            if (nodeType == "P"){
                return document.getElementById(id).innerHTML;
            } else if (type == "radio"){
                let name = document.getElementById(id).getAttribute("name");
                let radios = document.getElementsByName(name);
                for (let i = 0 , len=radios.length; i < len; i++){
                    if (radios[i].checked) {
                        return radios[i].value;
                    } // end if
                } // end for
            } else if (type == "checkbox"){
                return document.getElementById(id).checked;
            } else {
                return document.getElementById(id).value;
            } // end if
        } else {
            console.log("value - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end value



    // ============================
    //           Meta
    // ============================
    changeAttribute(id, att, val){
        if (typeof id !== "undefined" && typeof att !== "undefined" && typeof val !== "undefined"){
            id = String(id);
            att = String(att);
            val = String(val);
            document.getElementById(id).setAttribute(att,val);
        } else {
            console.log("addAttribute - " + "(" + "ERROR - invalid parameter (id, attribute, value)" + ")");
        } // end if
    } // end addAttribute

    removeAttribute(id, att){
        if (typeof id !== "undefined" && typeof att !== "undefined"){
            id = String(id);
            att = String(att);
            document.getElementById(id).removeAttribute(att);
        } else {
            console.log("addAttribute - " + "(" + "ERROR - invalid parameter (id, attribute, value)" + ")");
        } // end if
    } // end addAttribute

    changeClass(id, newVal){
        if (typeof id !== "undefined" && typeof newVal !== "undefined"){
            id = String(id);
            newVal = String(newVal);
            document.getElementById(id).className = newVal;
        } else {
            console.log("show - " + "(" + "ERROR - invalid parameter (id, newVal)" + ")");
        } // end if
    } // end changeClass

    removeClass(id){
        if (typeof id !== "undefined"){
            id = String(id);
            document.getElementById(id).removeAttribute("class");
        } else {
            console.log("removeClass - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end removeClass

    changeId(id, newVal){
        if (typeof id !== "undefined"){
            id = String(id);
            newVal = String(newVal);
            document.getElementById(id).id = newVal;
        } else {
            console.log("changeId - " + "(" + "ERROR - invalid parameter (id, newVal)" + ")");
        } // end if
    } // end changeId

    removeId(id){
        if (typeof id !== "undefined"){
            id = String(id);
            document.getElementById(id).removeAttribute("id");
        } else {
            console.log("removeClass - " + "(" + "ERROR - invalid parameter (id)" + ")");
        } // end if
    } // end removeId



    // ============================
    //           Input
    // ============================
    button(text, fcn, id){
		if (typeof fcn !== "undefined" && typeof text !== "undefined"){
			text = String(text);
			fcn = String(fcn);
			let foo = document.createElement("input");
			foo.setAttribute("type", "button");
			foo.setAttribute("value", text);
			foo.setAttribute("onclick", fcn);
			if(typeof id !== "undefined"){
				id = String(id);
				foo.setAttribute("id", id);
			} // end if
			document.body.appendChild(foo);
		}else {
			console.log("button - " + "(" + "ERROR - invalid parameter (text, function, id)" + ")");
		} // end if
    } // end button

    keyPress(key, fcn){
        let tmpFcn = new Function(fcn);
        document.addEventListener('keypress', (event) => {
          if (event.key == key){
              tmpFcn();
          } // end if
      }); // end event listener
    } // end keyPress

    textBox(id){
        if(id !== "undefined"){
            id = String(id);
            let foo = document.createElement("input");
            foo.setAttribute("type", "text");
            foo.setAttribute("id", id);
            document.body.appendChild(foo);
        } else {
            console.log("textBox - " + "(" + "ERROR - invalid parameter" + ")");
        } // end if
    } // end textBox

    textArea(id, r, c){
        if (typeof id !== "undefined"){
            id = String(id);
            let foo = document.createElement("textarea");
            foo.setAttribute("id", id);
            if(typeof r !== "undefined" && typeof c !== "undefined"){
                r = String(r);
                c = String(c);
            } else if (typeof r !== "undefined" && typeof c == "undefined"){
                console.log("text area - " + "(" + "ERROR - missing colum value (id, row, col)" + ")");
            } else if (typeof r == "undefined" && typeof c == "undefined"){
                r = "10";
                c = "50";
            } // end if
            foo.setAttribute("id", id);
            foo.setAttribute("rows", r);
            foo.setAttribute("cols", c);
            document.body.appendChild(foo);
        } else {
            console.log("text area - " + "(" + "ERROR - invalid parameter (id, row, col)" + ")");
        } // end if
    } // end textArea

    radioButton(id, nme, val){
        if(typeof id !== "undefined" && typeof val !== "undefined" && typeof val !== "undefined"){
            id = String(id);
            val = String(val);
            nme = String(nme);
            let foo = document.createElement("input");
            foo.setAttribute("type", "radio");
            foo.setAttribute("id", id);
            foo.setAttribute("name", nme);
            foo.setAttribute("value", val);
            document.body.appendChild(foo);
        } else {
            console.log("radio button - " + "(" + "ERROR - invalid parameter (id, name, class)" + ")");
        } // end if
    } // end radioButton

    checkBox(id, val){
        if(typeof id !== "undefined" && typeof val !== "undefined"){
            id = String(id);
            val = String(val);
            let foo = document.createElement("input");
            foo.setAttribute("type", "checkbox");
            foo.setAttribute("id", id);
            foo.setAttribute("value", val);
            document.body.appendChild(foo);
        } else {
            console.log("check box - " + "(" + "ERROR - invalid parameter (id, row, col)" + ")");
        } // end if
    } // end checkBox
} // end class
