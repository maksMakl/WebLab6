// Task 1
function SwapContent()
{
    var xBlock = document.getElementsByTagName("header")[0].children[0];
    var yBlock = document.getElementsByTagName("footer")[0].children[0];

    var tmp = xBlock.textContent;
    xBlock.textContent = yBlock.textContent;
    yBlock.textContent = tmp;
}

// Task 2
function CalcArea()
{
    var aLen = 10;
    var bLen = 20;
    var alpha = Math.PI / 6;

    var area = aLen * bLen * Math.sin(alpha);
    document.getElementById("area").textContent = "Area: " + area.toFixed(2);
}

// Task 3
function CountWords()
{
    var text = document.getElementById("text").value;
    
    // Count words
    var counter = 1;
    for (var c of text)
    {
        if (c == " ")
        {
            counter += 1;
        }
    }

    var words;
    if (text == "")
    {
        words = 0;
    }
    else 
    {
        words = counter;
    }

    // Show result
    alert("Words: " + words);

    // Save cookies
    var date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = `words=${words}; ${expires}; path=/; samesite=lax`;
}

function getCookie(name) {
    var cookies = document.cookie.split("; ");

    for (var cookie of cookies) 
    {
        var [cookieName, cookieValue] = cookie.split("=");

        if (cookieName === name) 
        {
            return cookieValue;
        }
    }

    return null;
}

function CheckCookies()
{
    var val = getCookie("words");

    if (val != null)
    {
        alert(`Words: ${val}\nWARNING! After pression "OK" data will be deleted from cookies`);
        document.cookie = `words=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        alert("Data has been deleted");
        location.reload();
    }
    else
    {
        document.getElementById("task3-form").style.display = "block";
    }
}


// Task 4

function ValidateInput(input) 
{
    if (+input.value < +input.min) 
    {
        input.value = input.min;
    }
    if (+input.value > +input.max) 
    {
        input.value = input.max;
    }
}



var navBlock = document.getElementsByTagName("nav")[0];

navBlock.onmouseout = function(event)
{
    if (!navBlock.contains(event.relatedTarget))
    {
        var colorInputs = document.getElementById("task4-form").children;
        navBlock.style.backgroundColor = `rgb(${colorInputs[0].value}, ${colorInputs[1].value}, ${colorInputs[2].value})`;
        localStorage.setItem("color1", colorInputs[0].value);
        localStorage.setItem("color2", colorInputs[1].value);
        localStorage.setItem("color3", colorInputs[2].value);
    }
}

function LoadNavColor()
{
    var colorInputs = document.getElementById("task4-form").children;
    colorInputs[0].value = (localStorage.getItem("color1") == null) ? 204 : localStorage.getItem("color1");
    colorInputs[1].value = (localStorage.getItem("color2") == null) ? 199 : localStorage.getItem("color2");
    colorInputs[2].value = (localStorage.getItem("color3") == null) ? 199 : localStorage.getItem("color3");
    navBlock.style.backgroundColor = `rgb(${colorInputs[0].value}, ${colorInputs[1].value}, ${colorInputs[2].value})`;
}

// Task 5
function ShowForm3()
{
    var form = document.getElementById("task5-form3");
    form.style.display = "block";
}

function ShowForm5()
{
    var form = document.getElementById("task5-form5");
    form.style.display = "block";
}

function AddBG3()
{
    var url = document.getElementById("block3-url").value;
    var block3 = document.getElementsByTagName("main")[0];
    block3.style.backgroundImage = `url('${url}')`;
    localStorage.setItem("bg3", url);
}

function DeleteBG3()
{
    var block3 = document.getElementsByTagName("main")[0];
    block3.style.backgroundImage = "none";
    if (localStorage.getItem("bg3") != null)
    {
        localStorage.removeItem("bg3");
    }
}

function AddBG5()
{
    var url = document.getElementById("block5-url").value;
    var block5 = document.getElementsByTagName("aside")[0];
    block5.style.backgroundImage = `url('${url}')`;
    localStorage.setItem("bg5", url);
}

function DeleteBG5()
{
    var block5 = document.getElementsByTagName("aside")[0];
    block5.style.backgroundImage = "none";
    if (localStorage.getItem("bg5") != null)
    {
        localStorage.removeItem("bg5");
    }
}

function LoadImages()
{
    if (localStorage.getItem("bg3") != null)
    {
        var url = localStorage.getItem("bg3");
        var block3 = document.getElementsByTagName("main")[0];
        block3.style.backgroundImage = `url('${url}')`;
    }

    if (localStorage.getItem("bg5") != null)
    {
        var url = localStorage.getItem("bg5");
        var block5 = document.getElementsByTagName("aside")[0];
        block5.style.backgroundImage = `url('${url}')`;
    }
}


window.onload = function()
{
    CheckCookies();
    LoadNavColor();
    LoadImages();
}