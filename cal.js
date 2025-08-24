function show(val)
{
    document.getElementById("output").innerHTML += val

}
function cal()
{
    let i = document.getElementById("output").innerHTML;
    let dec = Math.random();
    let str = ""
    let obj = {
        '+' : '-',
        '-' : '*',
        '*' : '/',
        '/' : '+'
    }
    for (let ch of i) {
        if(ch == '+' || ch == '-' || ch == '*' || ch == '/' )
        {
            ch = obj[ch]
        }
        str+=ch;
    }
    if(dec <= 0.7)
    {
        document.getElementById("output").innerHTML = eval(str)
        return
    }
    document.getElementById("output").innerHTML = eval(i)
}
function clean()
{
    document.getElementById("output").innerHTML = "";
}
addEventListener( "keydown" , event =>{
    if(event.key === "Enter" || event.key === '=' ){
        cal()
    }    
    else if(event.code.startsWith("Numpad") || event.code.startsWith("Digit"))
    {
        show(event.key)
    }
    else if(event.key == "Backspace" && event.ctrlKey == false )
    {
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML.slice(0,-1)
    }
    else if(event.code.startsWith("Key"))
    {
        alert("invalid key")
    }
    else if(event.ctrlKey == true && event.key == "Backspace")
    {
        clean()
    }
});