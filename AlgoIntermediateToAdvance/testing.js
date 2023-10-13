/**
 * Exercise: Model Prediction ML JavaScript Tests

You are working for an ML company specializing in all sorts of 
complex calculations that's above your pay grade. 

The Pipeline department turns to you and asks if you can write 
a script to check and see that all their test case scenarios 
are passing. You put on your best thinking hat and exclaim, 
'No problem! I got this, buddy!'

Given the following ML Test data and their respective results

  { case_test: "Robot Takeover", pass: true },
  { case_test: "AI In The Fridge", pass: false },
  { case_test: "The Computers Are Winning", pass: true },
  { case_test: "Model Prediction 21", pass: true }

1. Input the object data into an array called mlTests. 

2. Write a function PassAllTests which takes an array as the first
argument and object properties as the second and third arguments. 

3. If all values of the pass property in mlTests are true then 
return a message indicating that all tests are passing and the length of the total tests.

4. If any of the pass properties are false then return an error message indicating 
that the test container is failing as well as which case test
specifically is failing. 

For EX:

Given: 
[
  { case_test: "Robot Takeover", pass: true },
  { case_test: "AI In The Fridge", pass: true },
  { case_test: "The Computers Are Winning", pass: true },
  { case_test: "Model Prediction 21", pass: true }
]
Expected result: All 4 Tests Passing :) 

5. Call the function and log your result passing in the appropriate arugments in order
to run the tests correctly and return an accurate and helpful result.

6. Share your solution on the discord and good luck!!
 */

const mlTests = [
    { case_test: "Robot Takeover", pass: true },
    { case_test: "AI In The Fridge", pass: false },
    { case_test: "The Computers Are Winning", pass: true },
    { case_test: "Model Prediction 21", pass: true }
  ];
  
  function passAllTests(testContainer, _pass, cases) {
    let caseFail = "";
    for (let item in testContainer) {
      if (!testContainer[item][_pass]) {
        caseFail = testContainer[item][cases];
        return "Tests Failing. Please check: ".concat(caseFail);
      }
    }
    return `All ${testContainer.length} tests passing :)`;
  }
  
  console.log("Exercise Solution I", passAllTests(mlTests, "pass", "case_test"));

  function passAllTests(testContainer, _pass, cases) {
    let caseFail = "";
    for (let item in testContainer) {
      if (!testContainer[item][_pass]) {
        caseFail = testContainer[item][cases];
        return "Tests Failing. Please check: ".concat(caseFail);
      }
    }
    return `All ${testContainer.length} tests passing :)`;
  }
  
  console.log("Exercise Solution I", passAllTests(mlTests, "pass", "case_test"));
  
  function passAllTests2(testContainer, _pass, cases) {
    let caseFail = "";
    let counter = 0;
    for (let item in testContainer) {
      if (testContainer[item][_pass]) {
        counter++;
      } else {
        caseFail = testContainer[item][cases];
      }
    }
    if (counter === testContainer.length)
      return `All ${counter} tests passing :)`;
    return "Tests Failing. Please check: ".concat(caseFail);
  }
  
  console.log(
    "Exercise Solution II",
    passAllTests2(mlTests, "pass", "case_test")
  );