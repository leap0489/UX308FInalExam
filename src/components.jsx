import {fahrenheitToCelsius, hello, colour_mix, largest_product, day_of_the_week, pay_raise} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
<p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
<p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
<p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>
}

function Question1Real(){
    return <section>
1. Colour function 
<h2>results</h2>
<p>colour_mix(red,blue) == "{colour_mix("red", "blue")}"</p>
<p>colour_mix(blue,blue) == "{colour_mix("blue", "blue")}"</p>
<p>colour_mix(red,green) == "{colour_mix("red", "green")}"</p>
    </section>
}

function Question2Real(){
    return <section>
2. Largest product function
<h2>results</h2>
<p>largest_product(1,2,3) == "{largest_product(1,2,3)}"</p>
<p>largest_product(11,5,3) == "{largest_product(11,5,3)}"</p>
<p>largest_product(20,10,6) == "{largest_product(20,10,6)}"</p>
    </section>
}

function Question3 (){
    return <section>
<h2>results</h2>
<p>day_of_the_week(17) == "{day_of_the_week(17)}"</p>
<p>day_of_the_week(3) == "{day_of_the_week(3)}"</p>
<p>day_of_the_week(6) == "{day_of_the_week(6)}"</p>
    </section>
}

function Question4 (){
    return <section>
<h2>results</h2>
<p>pay_raise("F",11,100) == "{pay_raise("F",11,100)}"</p>
<p>pay_raise("F",2,100) == "{pay_raise("F",2,100)}"</p>
<p>pay_raise("P",3,100) == "{pay_raise("P",3,100)}"</p>
    </section>
}

export {Question1, Question2, Question1Real, Question2Real, Question3, Question4}