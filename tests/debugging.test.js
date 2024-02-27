module.exports = {
    "Should find results when searching for 'applitools'": (client) => {
        const ComplicatedPage = client.page.ComplicatedPage();
        const SearchPage = client.page.SearchPage();

        ComplicatedPage
            .navigate()
            .search('applitools')
            .verify.urlContains('/?s')

        SearchPage.getText('@post', (result) => {
            client.assert.equal(result.value, 'Applitools — JavaScript Testing Framework');
        })
    }
};