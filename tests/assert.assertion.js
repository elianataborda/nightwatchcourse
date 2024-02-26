module.exports = {
    "Assert Library demo tests" : (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    },

    "Should assert form field value": (client) => {
        client.setValue('#et_pb_contact_name_0', 'Dimitri Harding')
        client.assert.valueContains('#et_pb_contact_name_0', 'Dimitri')
        client.expect.element('#et_pb_contact_name_0').to.have.value.equal('Dimitri Harding')
    }, 
    
    "Should assert current url": (client) => {
        //client.assert.urlEquals('https://ultimateqa.com/filling-out-forms/')
        client.expect.url().to.equal('https://ultimateqa.com/filling-out-forms/')
    }, 
    
    "Should assert title of current page": (client) => {
        //client.verify.title('Filling out Forms - Ultimate QA')
        client.expect.title().to.contains('Filling Out Forms') //Filling Out Forms - Ultimate QA
    }, 

    "Should assert attribute contains expected value": (client) => {
        //client.verify.attributeContains('#et_pb_contact_name_0', 'placeholder', "Name")
        client.expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name')
    }, 

    "Should assert containing text": (client) => {
        //client.verify.containsText('button[name="et_builder_submit_button"]:nth-child(1)', "Submit")
        client.expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit')
   }, 
   
    "Should assert css Class Present": (client) => {
        //client.verify.cssClassPresent('#et_pb_contact_name_0', 'input')
        client.expect.element('#et_pb_contact_name_0').to.have.attribute('class').which.startWith('in')
    }
};