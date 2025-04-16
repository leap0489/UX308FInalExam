function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

function colour_mix (rgb_colour1, rgb_colour2){
    let rgb_colour;
    if (rgb_colour1 == "red" && rgb_colour2 == "blue"){
        rgb_colour = "fuschia";
    }else if (rgb_colour1 == "red" && rgb_colour2 == "green"){
        rgb_colour = "yellow";
    }else if (rgb_colour1 == "green" && rgb_colour2 == "blue"){
        rgb_colour = "aqua";
    }else if (rgb_colour1 == "red" && rgb_colour2 == "red"){
        rgb_colour = "red";
    }else if (rgb_colour1 == "blue" && rgb_colour2 == "blue"){
        rgb_colour = "blue";
    }else if (rgb_colour1 == "green" && rgb_colour2 == "green"){
        rgb_colour = "green";
    }else if (rgb_colour1 !== "red" && rgb_colour1 !== "blue" && rgb_colour1 !== "green" && rgb_colour2 !== "red" && rgb_colour2 !== "blue" && rgb_colour2 !== "green"){
        rgb_colour = "error";
    }
    return rgb_colour;
}

function largest_product (val1, val2, val3){
    let product;
    if (val1 <= val2 && val1 <= val3){
        product = (val2 * val3);
    }else if (val2 <= val1 && val2 <= val3){
        product = (val1 * val3);
    }else {
        product = val1 * val2;
    }
    return product;
}

export {hello, fahrenheitToCelsius, colour_mix, largest_product}