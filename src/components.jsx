import {fahrenheitToCelsius, hello, colour_mix} from './functions.js';

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
<p>colour_mix(red,blue)) == "{colour_mix("red", "blue")}"</p>
<p>colour_mix(blue,blue)) == "{colour_mix("blue", "blue")}"</p>
<p>colour_mix(red,green)) == "{colour_mix("red", "green")}"</p>
    </section>
}

export {Question1, Question2, Question1Real}