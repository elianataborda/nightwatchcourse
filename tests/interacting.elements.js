module.exports = {
    "Interacting with Elements Demo": (browser) => {
          browser
          .url('https://ultimateqa.com/filling-out-forms/')
          //.url('[https://ultimateqa.com/filling-out-forms/](https://ultimateqa.com/filling-out-forms/)')
          .waitForElementVisible('#et_pb_contact_name_0')
          .setValue('#et_pb_contact_name_0', 'testing')
          .clearValue('#et_pb_contact_name_0')
    },

    "Interacting with Elements Demo 2": (browser) => {
        browser
        //.url('[https://ultimateqa.com/filling-out-forms/](https://ultimateqa.com/filling-out-forms/)')
        .url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible('#et_pb_contact_name_0')
        .setValue('#et_pb_contact_name_0', 'testing')
        .pause('2000')
        .clearValue('#et_pb_contact_name_0')
        .pause('2000')
    }, 

    "Interacting with Elements Demo": (browser) => {
        browser
        .url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible('button[name="et_builder_submit_button"]:nth-child(1)')
        .moveToElement('button[name="et_builder_submit_button"]:nth-child(1)', 10, 10)
        .pause(2000)
    }
};
