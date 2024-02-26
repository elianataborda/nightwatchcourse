module.exports = {
    "Expect Library demo tests" : (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')        
        .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit')
    },

    "Assert Library demo tests" : (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    }, 

    "Assert Library demo tests 2" : (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        //.assert.not.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    }
};
