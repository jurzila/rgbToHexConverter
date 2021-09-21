const rgbtoHex_div = document.getElementById('converter');

rgbtoHex_div.addEventListener('click', function(event){
    var input = document.getElementById('rgb').value;
    if(checkInput(input)){
        document.getElementById("result").value = rgbToHex(input);
    }else{
        document.getElementById("result").value = "Ivalid Value. Not following the format.";
         
    }
})

function rgbToHex(givenRGB){
    var rgb = givenRGB.split(',');
    var r = parseInt(rgb[0]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2]);
    return '#'+ colorToHex(r) + colorToHex(g) + colorToHex(b);
}

function colorToHex(color){
    var hexadecimal = color.toString(16);
    console.log(hexadecimal);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function checkInput(input){
    const re = new RegExp("[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}");
    return re.test(input);
}

