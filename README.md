[Interest Calculator from Loan Amount and No Of Months]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `Implementation`
1.The Slider and the Input Groups are desgined using BootStrap
2.Everything Is divided into Components including Navbar,Landing,Footer.
3.The Json data is fetched from the endpoint https://ftl-frontend-test.herokuapp.com/interest?amount=<amount>
      &numMonths=<noMonths> using async-await and fetch api
4.Then to update application without any further interaction re-rendering is done through lifecycle method componentDidUpdate() and setting the states accordingly


### `Summary`
The landing Page has Two Input Sections 
1.It is a slider for selecting loan amount between 500$ to 5000$ 
2.It is an input section for Tenure or Months between 6-24 months
The Other two Input Boxes which are Read-Only are for Viewing the calculated interest rate and Monthly amount

