module.exports = {
    'demo Test' : function(browser) {
       browser.url('https://www.ultimateqa.com/filling-out-forms')
            .element('css selector', 'body', function(result) {
                console.log(result.value)
            });
     },

     'demo Test 2' : function(browser) {
        browser
        .url('https://www.ultimateqa.com/filling-out-forms')
        .elements('css selector', 'input[type="text"]', function(result) {
          console.log(result.value)
        });
      },

      'demo Test 3': function (browser) {
        browser
        .url('https://www.ultimateqa.com/filling-out-forms')
        //.waitForElementNotVisible('button[name="et_builder_submit_button"]')
        //.waitForElementVisible('button[name="et_builder_submit_button"]')
        .waitForElementVisible('button[name="et_builder_submit_button"]', 'Submit button is visible')
    },
   
     'es6 async demo Test': async function(browser) {
       const result = await browser.element('css selector', 'body');
       console.log('result value is:', result.value);
     }
   }