module.exports = {
    "Should naviagte by default URL": (client) => {
        client.init()
       //.pause(2000)
       .getTitle( (title) => console.log(title))
       .url('https://ultimateqa.com/filling-out-forms')
       .getTitle( (title) => console.log(title))
        .back()
        .getTitle( (title) => console.log(title))
        .forward()
        .getTitle( (title) => console.log(title))
    }
}