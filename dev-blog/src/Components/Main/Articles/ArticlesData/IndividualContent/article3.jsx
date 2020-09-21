import React, { Fragment } from "react";
import MultiLineCodeBlock from "./MultiLineCodeBlock";
import mainImage from "../../../../../Images/ArticleImages/003/main_image.webp";
import mainImageBU from "../../../../../Images/ArticleImages/003/main_image.jpeg";
import previewImage from "../../../../../Images/ArticleImages/003/main_image.webp";
import previewImageBU from "../../../../../Images/ArticleImages/003/main_image.jpeg";
import diagram1 from "../../../../../Images/ArticleImages/003/math_operation.webp";
import diagram1BU from "../../../../../Images/ArticleImages/003/math_operation.jpeg";
import zeroInputs from "../../../../../Images/ArticleImages/003/0_Inputs.webp";
import zeroInputsBU from "../../../../../Images/ArticleImages/003/0_Inputs.jpeg";
import oneInputs from "../../../../../Images/ArticleImages/003/1_Inputs.webp";
import oneInputsBU from "../../../../../Images/ArticleImages/003/1_Inputs.jpeg";
import twoInputs from "../../../../../Images/ArticleImages/003/2_Inputs.webp";
import twoInputsBU from "../../../../../Images/ArticleImages/003/2_Inputs.jpeg";
import threeInputs from "../../../../../Images/ArticleImages/003/3_Inputs.webp";
import threeInputsBU from "../../../../../Images/ArticleImages/003/3_Inputs.jpeg";
import afterCalc from "../../../../../Images/ArticleImages/003/afterCalc.webp";
import afterCalcBU from "../../../../../Images/ArticleImages/003/afterCalc.jpeg";

const oldCalculatorCode = `const handleClick = (event) => {
    //handleClick Variables
    let buttonPress = event.currentTarget;
    let buttonInput = event.target.innerHTML;
    let display = document.getElementById('display');
    let displayScreen = document.querySelector('.display');

    displayScreen.classList.add('displayFlash');
    setTimeout(() => displayScreen.classList.remove('displayFlash'), 100);
    buttonPress.classList.add('displayFlash');
    setTimeout(() => buttonPress.classList.remove('displayFlash'), 100);

    if (buttonInput === '=' && eval(display.innerText) >= 10000000000) {
        display.innerText = eval(display.innerText).toExponential();
    } else if (buttonInput === '=') {

        if (display.innerText === '69') {
            display.innerText = 'nice';
        } else if (display.innerText === '01134') {
            display.innerText = 'Hi, there!';
        } else if (display.innerText === '1134') {
            display.innerText = 'Turn me upside down, you heathen...';
        } else {
            display.innerText = eval(display.innerText);
        }
        //could add toLocaleString() above
    } else if (buttonInput === 'C') {
        display.innerText = '';
    } else if (buttonInput === 'x') {
        display.innerText = display.innerText + '*';
    } else if (buttonInput === '÷') {
        display.innerText = display.innerText + '/';
    } else {
        display.innerText = display.innerText + buttonInput;
    }

};

const addEventListener = () => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', handleClick);
    });
};

addEventListener();`;

const displayFlashCode = `const displayFlash = (event) => {
	const buttonPress = event.currentTarget;
	const displayScreen = document.querySelector(".display");

	displayScreen.classList.add("displayFlash");
	setTimeout(() => displayScreen.classList.remove("displayFlash"), 100);
	buttonPress.classList.add("displayFlash");
	setTimeout(() => buttonPress.classList.remove("displayFlash"), 100);
};`;
const inputDisplayCode = `const inputDisplay = (buttonInput) => {
	const display = document.getElementById("display");
	let displayItems = display.innerText.split(" ");

	if (buttonInput !== "C") {
		if (displayItems.length === 1 && displayItems[0] === "") {
			handleZeroInputs(buttonInput);
		} else if (displayItems.length === 1 && displayItems[0] !== "") {
			handleOneInputs(buttonInput, displayItems[0]);
		} else if (displayItems.length === 2) {
			handleTwoInputs(display, buttonInput);
		} else if (displayItems.length === 3) {
			handleThreeInputs(display, displayItems[2], buttonInput, displayItems);
		}
	}
};`;

const handleZeroInputsCode = `const handleZeroInputs = (buttonInput) => {
	if (buttonInput === "-") {
		updateDisplay(buttonInput);
	} else if (!isNaN(buttonInput)) {
		updateDisplay(buttonInput);
	}
};`;

const handleOneInputsCode = `const handleOneInputs = (buttonInput, firstInput) => {
	if (!isNaN(buttonInput)) {
		updateDisplay(\`\${display.innerText}\${buttonInput} \`);
	} else if (firstInput === "-") {
		updateDisplay(\`\${firstInput}\`);
	} else if (buttonInput !== "=") {
		updateDisplay(\`\${display.innerText} \${buttonInput} \`);
	} else if (
		buttonInput === "=" &&
		Object.keys(easterEggs).includes(firstInput)
	) {
		easterEggResponses(firstInput);
	}
};`;

const handleTwoInputsCode = `const handleTwoInputs = (display, buttonInput) => {
	if (!isNaN(buttonInput) || buttonInput === "-") {
		updateDisplay(\`\${display.innerText} \${buttonInput} \`);
	}
};`;

const handleThreeInputsCode = `const handleThreeInputs = (display, thirdInput, buttonInput, displayItems) => {
	if ((thirdInput === "-" || !isNaN(thirdInput)) && !isNaN(buttonInput)) {
		updateDisplay(\`\${display.innerText}\${buttonInput} \`);
	} else if (!isNaN(thirdInput) && isNaN(buttonInput)) {
		parseOperators(
			Number(displayItems[0]),
			displayItems[1],
			Number(displayItems[2]),
			buttonInput
		);
	}
};`;

const exponentialCode = `const exponentialCheck = (result, operator2) => {
	const checkExpoNm = handleExponential(result);
	if (operator2 !== "=") {
		updateDisplay(\`\${checkExpoNm} \${operator2}\`);
	} else {
		updateDisplay(checkExpoNm);
	}
};

const parseOperators = (num1, operator, num2, operator2) => {
	let result;
	switch (operator) {
		case "+":
			result = addNumbers(num1, num2);
			break;
		case "-":
			result = subtractNumbers(num1, num2);
			break;
		case "×":
			result = multiplyNumbers(num1, num2);
			break;
		case "÷":
			result = divideNumbers(num1, num2);
			break;
	}

	exponentialCheck(result, operator2);
};`;

const operatorFunctionsCode = `const addNumbers = (num1, num2) => {
	return num1 + num2;
};

const multiplyNumbers = (num1, num2) => {
	return num1 * num2;
};

const subtractNumbers = (num1, num2) => {
	return num1 - num2;
};

const divideNumbers = (num1, num2) => {
	if (num2 === 0 || num2 === -0) {
		return NaN;
	} else {
		return num1 / num2;
	}
};

const updateDisplay = (input) => {
	display.innerText = input;
};`;

const easterEggCode = `const easterEggs = {
	69: "nice.",
	"01134": "hello there.",
	1134: "turn me upside down you heathen.",
	50208: "yeah they are a bunch of bozos",
	53045: "nike, adidas, reebok but never attack force.",
};

const easterEggResponses = (code) => {
	updateDisplay(easterEggs[code]);
	setTimeout(() => {
		updateDisplay("");
	}, 3000);
};`;

const finalCodeExample = `const clearDisplayCheck = (buttonInput) => {
	if (buttonInput === "C") {
		updateDisplay("");
	}
};

const handleButtonPress = (event) => {
	const buttonInput = event.target.innerText;

	clearDisplayCheck(buttonInput);
	displayFlash(event);
	inputDisplay(buttonInput);
};

//This adds an event listener for all the buttons in the arr "buttons"
const addEventListeners = () => {
	const buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", handleButtonPress);
	});
};

addEventListeners();`;

export const article = {
	"Refactoring-My-First-App-1-Year-Later_9-20-20": {
		title: "Refactoring My First App: 1 Year Later",
		mainImage: (
			<Fragment>
				<picture>
					<source srcSet={mainImageBU} />
					<source srcSet={mainImage} />
					<img
						src={mainImage}
						alt='The Calculator app UI'
						className='article-main-image'
					/>
					<figcaption>A Modern Classic</figcaption>
				</picture>
			</Fragment>
		),
		previewImage: (
			<Fragment>
				<picture>
					<source srcSet={previewImageBU} />
					<source srcSet={previewImage} />
					<img
						className='more-articles-image'
						src={previewImage}
						alt='The calculator app ui'
					/>
				</picture>
			</Fragment>
		),
		date: new Date("September 20, 2020"),
		version: "0.03",
		dbToQuery: "article 3",
		synopsis:
			"After my latest development project (this blog!) I decided to take a breather and focus on a couple skills that I think I need to brush up on. The first is writing better, more modular code. The second is testing my code and becoming comfortable with unit and integration testing paradigms. In the next two posts I’m going to touch on some things that I learned by reviewing my old code, and then delve into a really cool testing platform called Cypress.js.",
		content: (
			<Fragment>
				<h2 className='section-subtitle'>::Before</h2>
				<h3 className='emphasis-header'>
					<strong>The Problem:</strong>
				</h3>
				<p className='first-paragraph'>
					It’s kind of interesting to go back and look at your old work. As I
					may have mentioned I’m a composer as well as a developer, and on rare
					occasion I’ll sometimes go back and listen to my really early
					compositions and enjoy them for what they are, but also wonder how I
					could have ever been so bad at this whole composition thing. Well, I’m
					happy to report that a similar phenomenon seems to occur when looking
					at old code. If the pattern holds, I’m certain that I’ll be in the
					shower thinking about the cringe in this post 5 (or 1) years from now.
				</p>
				<h3 className='emphasis-header'>
					<strong>
						Error #1: <code>eval()</code>
					</strong>
				</h3>
				<p>
					Yep, I went right ahead and used<code> eval() </code>in my original
					design. I do remember while writing the code that I had the hardest
					time understanding how I could manipulate the numbers and account for
					all the different possibilities for user input. I was searching for
					simpler solutions and ran across <code>eval()</code> . It seemed like
					a godsend. It basically is a calculator already! I did read some Stack
					Overflow data about how it can be dangerous to use, but I barely
					understood what Stack Overflow was at the time and happily ignored
					that for the convenience.
				</p>

				<p>
					Either way, using <code>eval()</code> just isn’t appropriate or
					interesting for me to use at this point. I’ll need to go write that
					custom calculator logic myself.
				</p>

				<h3 className='emphasis-header'>
					<strong>Error #2: Nesting Conditionals</strong>
				</h3>

				<p>
					With <code> eval() </code>there wasn’t a ton of code as you can see.
					But what code was there was also pretty haphazard and confusing. I’ve
					learned since then that I want to make my functions have as few
					responsibilities as possible, and to be as pure as possible.
					Refactoring this was a big priority to me this time around.
				</p>

				<p>
					So, with these two issues highlighted I’ll walk you through how I
					accomplished the refactor to something much cleaner while hopefully
					setting myself up for an easier future expansion should I want to add
					things like decimals, percentages, or any other number of new button
					functions.
				</p>

				<h3 className='emphasis-header'>
					<strong>The Original Code: The Good And (Mostly) Bad.</strong>
				</h3>

				<MultiLineCodeBlock lang='jsx' code={oldCalculatorCode} />
				<p>
					My original code wasn’t completely terrible. I was able to encapsulate
					my eventListener logic, and even used a forEach array method to add
					them for every button. I was at least attempting to use the more
					modern <code>let</code>/<code>const</code> variable syntax. And look I
					used <code>innerText</code> instead of <code>innerHTML</code> ! The
					problem pretty clearly starts with the <code>handleClick()</code>{" "}
					function.
				</p>
				<p>
					My first area of concern is that I can’t rely on<code> eval() </code>
					to do the heavy lifting. I’m going to need to read, parse, calculate,
					and display all of the user input. I realized that the kinds of input
					in a calculator basically come down to numbers and operators with a
					few special cases where they can overlap. So I needed to abstract the
					actual calculation logic for each button into a separate function, and
					then see where else it would make sense to abstract logic that could
					be reusable.
				</p>
				<p>
					Two things that I knew I would need to reuse would be the actual
					mathematical processes (addition, subtraction, multiplication, and
					division), and updating the display. So, I went ahead and wrote out
					that simple logic first.
				</p>

				<MultiLineCodeBlock lang='js' code={operatorFunctionsCode} />

				<p>
					The slightly more verbose code in the <code>divideNumbers()</code>{" "}
					function is to handle the JS quirk where dividing any number by zero
					results in infinity.
				</p>

				<p>
					I also saw the flash logic, which is entirely cosmetic as something
					that should have its own function. So I went ahead and abstracted that
					into a function called <code>displayFlash()</code>.
				</p>

				<MultiLineCodeBlock lang='js' code={displayFlashCode} />
				<h3 className='emphasis-header'>
					<strong>
						The Hardest Road: Making My Calculator Understand Math Syntax.
					</strong>
				</h3>
				<p>
					The next part of this project was developing the interface so that
					users would be able to type in different number and operator
					combinations without creating invalid statements.
				</p>
				<figure className='article-image-figure'>
					<picture>
						<source srcSet={diagram1} />
						<source srcSet={diagram1BU} />
						<img
							className='article-image'
							src={diagram1}
							alt='the four steps of a basic calculation'
						/>
					</picture>

					<figcaption>The four steps of a basic calculation</figcaption>
				</figure>

				<p>
					This is a straight-forward setup in general. The trickier part is
					accounting for user behavior that complicates this simple diagram. For
					example, a user might want any number to be negative, which is an
					operator mostly, but sometimes can function like the first part of a
					number. A user might accidentally push an operator button twice. I
					don’t want users to be able to do that. Also, a user might want to do
					something like the following: 4+5+6+7+8. There has to be a way to
					handle the logic when users don’t take the “happy path”.{" "}
				</p>

				<p>
					Taking all of that into account I decided to treat each input state of
					the calculator (first number, first operator, second number, second
					operator) as its own specific function. I’ll quickly walk through the
					basic logic in the next code blocks:
				</p>
				<h3 className='emphasis-header'>
					<strong>Zero Inputs</strong>
				</h3>
				<figure className='full-figure'>
					<picture>
						<source srcSet={zeroInputs} />
						<source srcSet={zeroInputsBU} />
						<img
							className='article-image-figure-alt'
							src={zeroInputs}
							alt='The calculator display with nothing showing'
						/>
						<figcaption>Zero inputs.</figcaption>
					</picture>
				</figure>
				<MultiLineCodeBlock lang='js' code={inputDisplayCode} />
				<MultiLineCodeBlock lang='js' code={handleZeroInputsCode} />
				<p>
					The first step is to get the display element so that I can update it
					whenever I need. Then I wanted to be able to parse the info from that
					string and separate it into one of the four parts listed above. The
					user pressing C is kind of a unique case where everything is reset. I
					that case we would avoid this code entirely. If it wasn’t C then we
					set up a simple conditional statement depending on how many items are
					in our display Items array. When there is only an empty string as an
					element (e.g. zero elements), then we just need to allow users to
					either input “-“ for a negative number, or input a number. Anything
					else (=,+,×,÷) will simply end nowhere and not update the display
					using the aforementioned updateDisplay function. The{" "}
					<code>isNaN()</code> function is really useful here as a check.
				</p>

				<h3 className='emphasis-header'>
					<strong>One Input</strong>
				</h3>
				<figure className='full-figure'>
					<picture>
						<source srcSet={oneInputs} />
						<source srcSet={oneInputsBU} />
						<img
							className='article-image-figure-alt'
							src={oneInputs}
							alt='The calculator display with -1 showing'
						/>
					</picture>
					<figcaption>One input.</figcaption>
				</figure>
				<MultiLineCodeBlock lang='js' code={handleOneInputsCode} />
				<p>
					When there is something present in the first input (a “-“ or a number)
					then the logic will push us to <code>handleOneInput()</code>. In this
					function our main concerns are allowing users to continue building a
					larger number, making sure they enter some kind of integer in the case
					of having entered a “-“, and later implementing the (admittedly silly)
					easter egg elements.
				</p>
				<p>
					The logic is pretty painless to implement with string interpolation.
					If the user is continuously adding integers to a what’s already there
					it just adds them with no space. When the display string is parsed it
					sees that as one element. If a valid element is present and the user
					pushes an operator key then it inserts a space so that we know we have
					two separate entities. When that happens we have now pushed to
					<code>handleTwoInputs()</code> .
				</p>
				<h3 className='emphasis-header'>
					<strong>Two Inputs</strong>
				</h3>
				<figure className='full-figure'>
					<picture>
						<source srcSet={twoInputs} />
						<source srcSet={twoInputsBU} />
						<img
							className='article-image-figure-alt'
							src={oneInputs}
							alt='calculator display with -1 + showing'
						/>
						<figcaption>Two inputs.</figcaption>
					</picture>
				</figure>
				<MultiLineCodeBlock lang='js' code={handleTwoInputsCode} />

				<p>
					When there are two inputs the concerns are similar to when there are
					none. Basically, we can only allow either a negative or a number. If
					the input is either of those types we tack that on to the display
					string with a space. If there is anything else as an input nothing
					changes. So, we are preventing the user from using incorrect syntax.
				</p>

				<h3 className='emphasis-header'>
					<strong>Three Inputs</strong>
				</h3>
				<figure className='full-figure'>
					<picture>
						<source srcSet={threeInputs} />
						<source srcSet={threeInputsBU} />
						<img
							className='article-image-figure-alt'
							src={threeInputs}
							alt='calculator display with -1 + 5 showing'
						/>
						<figcaption>Three inputs.</figcaption>
					</picture>
				</figure>
				<MultiLineCodeBlock lang='js' code={handleThreeInputsCode} />

				<p>
					Once the user does input the correct next input we move to the last
					step in our input display logic. In this step we need to do a couple
					things that are unique.{" "}
				</p>

				<ul>
					<li>Allow users to keep adding numbers to the current 3rd entry.</li>
					<li>
						Access the correct math operation function depending on the button
						pressed.
					</li>
					<li>
						Handle for cases where users want to chain logic ( e.g. 4+5+6+7)
					</li>
				</ul>
				<p>
					I tried a few different ways of setting this logic up and I think the
					last way is the best. I do a check of the current third input to see
					if it is either a number or the “-“ symbol AND that the input is a
					number. In that case the input will be added to the third element with
					no space, creating a larger number.
				</p>

				<p>
					Otherwise, if the third input is a valid number and the input is an
					operator we move on to the parse operators function. This is a simple
					switch statement that uses the first operator to perform a math
					function and return a result. That result is run through an
					exponential check where if it is large enough it is converted to
					exponential notation. If not , it is either returned as is (if the
					user pressed “=”) or interpolated with the last operator used to
					handle the third case above. (e.g. 7 - ). In this case we are
					immediately back to the handleTwoInputs part of our internal logic.
				</p>
				<figure className='full-figure'>
					<picture>
						<source srcSet={afterCalc} />
						<source srcSet={afterCalcBU} />
						<img
							className='article-image-figure-alt'
							src={afterCalc}
							alt='calculator display with -1 + 5 showing'
						/>
					</picture>
					<figcaption>
						The calculation result if '×' was the second operator.
					</figcaption>
				</figure>

				<MultiLineCodeBlock lang='js' code={exponentialCode} />

				<h3 className='emphasis-header'>
					<strong>Easter Eggs</strong>
				</h3>

				<p>
					So that’s basically the extent of the main logic. It’s much more
					modular than before. I think it’s easier to understand, follow and
					debug. The last little thing that I needed to abstract was the little
					easter egg functionality. I found a site that had every single
					possibility for calculator words and I briefly toyed with the idea of
					making it an API and using that API in this app. I might end up doing
					that next year when I come back to laugh at how terrible my coding was
					on this date.
				</p>

				<p>
					For the easter egg feature I just needed a way so that if a user
					spelled whatever secret code message was stores and then pressed “=”
					The display would show some kind of (theoretically) funny answer.
					Implementing it simply added a bit of complexity to the
					handleOneInputs portion of the code.
				</p>
				<MultiLineCodeBlock lang='js' code={easterEggCode} />

				<h3 className='emphasis-header'>
					<strong>
						The New <code>handleClick()</code>{" "}
					</strong>
				</h3>
				<p>
					Circling back to the beginning we can also see that in the new version
					of <code>handleClick()</code> (now called{" "}
					<code>handleButtonPress()</code> ) We have a nice, clean set of
					functions with <code>clearDisplayCheck()</code> clearing the display
					if applicable, then the display flash, and then all the elements that
					tie into the inputDisplay and that chain of logic. We’ve changed{" "}
					<code>addEventListener()</code> to <code>addEventListeners()</code>{" "}
					since that is a more accurate description.
				</p>
				<MultiLineCodeBlock lang='js' code={finalCodeExample} />
				<h2 className='section-subtitle'>::After</h2>
				<p>
					And that’s all! A year later and I feel much more able to work through
					a surprisingly complex little problem of user input to create a very
					basic calculator that should be much more able to handle upgrades in
					the future. The next time I write about this app I will be adding
					features to make it a fully operational calculator that rivals the
					thousands already existing online{" "}
					<span aria-label='wink emoji' role='img'>
						😉
					</span>{" "}
					. Until next time.
				</p>
			</Fragment>
		),
	},
};

const article2 = Object.entries(article)[0];

export default article2;
