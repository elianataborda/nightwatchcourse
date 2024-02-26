module.exports = {
    'Filling out form': (client) =>{
        client.url('http://www.ultimateqa.com/filling-out-forms')
            .waitForElementVisible('body', 1000)
            .assert.titleContains('Filling Out Forms - Ultimate QA')
            .waitForElementVisible('#et_pb_contact_name_0')
            .setValue('#et_pb_contact_name_0', 'Dimitri')
            .setValue('#et_pb_contact_message_0', 'this is a paragraph')
            .click('.et_pb_contact_submit')
            .waitForElementVisible('#et_pb_contact_form_0')
            .expect.element('#et_pb_contact_form_0').text.to.equal('Thanks for contacting us')
    }
};