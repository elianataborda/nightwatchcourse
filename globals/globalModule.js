const fs = require('fs')

module.exports = {
        //Executed before selenium session is created
        before: (done) => {
            console.log('before');
            done();
        },

        //Executed after closing the selenium session
        after: (done) => {
        console.log('after');
        done();
        },

        beforeEach: (client, done) => {
            console.log('beforeEach');
            client.status(result => {
                console.log(result.value)
                done()
            });
        },

        afterEach: (client, done) => {
            console.log('afterEach');
            console.log(client.currentTest);
            done()
        },
        reporter: (results, done) => {
            fs.writeFile('testresults.json', JSON.stringify(results, null, '\t'), (err) => {
                if(err) throw err;
    
                //then the save is saved
                console.log('report saved');
                done();
            });
        }
    }