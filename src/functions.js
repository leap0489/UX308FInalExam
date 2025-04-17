function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

function colour_mix (rgb_colour1, rgb_colour2){
    let rgb_colour;
    const valid_colours = ["red", "green", "blue"];
    if (!valid_colours.includes(rgb_colour1) || !valid_colours.includes(rgb_colour2)) {
        return "error";
    }else if (rgb_colour1 == "red" && rgb_colour2 == "blue"){
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

function day_of_the_week (day_num){
    let day_name;
    const valid_numbers = [1,2,3,4,5,6,7];
    if (!valid_numbers.includes(day_num)) {
        return "error";
    }else if (day_num == 1){
        day_name = "Sunday";
    }else if (day_num == 2){
        day_name = "Monday";
    }else if (day_num == 3){
        day_name = "Tuesday";
    }else if (day_num == 4){
        day_name = "Wednesday";
    }else if (day_num == 5){
        day_name = "Thursday";
    }else if (day_num == 6){
        day_name = "Friday";
    }else if (day_num == 7){
        day_name = "Saturday";
    }
    return day_name;

}

export {hello, fahrenheitToCelsius, colour_mix, largest_product, day_of_the_week}