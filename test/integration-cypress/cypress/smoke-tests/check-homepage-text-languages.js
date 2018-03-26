Cypress.on('uncaught:exception', () => {
    return false;
});

['de', 'en', 'fr'].forEach((language, index) => {


    describe('text in Header Signed Out in ' + language, function (){
        before(function (){
            cy
                .visit('');
            cy
                .scrollTo('bottom');
            cy
                .get('.form-control')
                .select(language);
            Cypress.Cookies.preserveOnce('scratchsessionsid');
        });

        beforeEach(function (){
            cy
                .scrollTo('top');
            Cypress.Cookies.preserveOnce('scratchsessionsid');
        });

        it('check Create text', function (){
            var create = ['Entwickeln', 'Create', 'Créer'];
            cy
                .get('.link.create')
                .should('contain', create[index]);
        });

        it('check Explore text', function (){
            const explore = ['Entdecke', 'Explore', 'Explorer'];
            cy
                .get('.link.explore')
                .should('contain', explore[index]);
        });

        it('check Tips text', function (){
            const tips = ['Tipps', 'Tips', 'Astuces'];
            cy
                .get('.link.tips')
                .should('contain', tips[index]);
        });

        it('check About text', function (){
            const about = ['Über Scratch', 'About', 'À propos'];
            cy
                .get('.link.about')
                .should('contain', about[index]);
        });


        it('check Search text', function (){
            const search = ['Suche', 'Search', 'Recherche'];
            cy
                .get('.search .form .form-group div input')
                .should('have.attr', 'placeholder', search[index]);
        });

        it('check Join Scratch text', function (){
            const join = ['Scratcher werden', 'Join Scratch', 'Rejoindre Scratch'];
            cy
                .get('.link.right.join')
                .should('contain', join[index]);
        });

        it('check Sign In text', function (){
            const signIn = ['Anmelden', 'Sign in', 'Se connecter'];
            cy
                .get('.link.right.login-item')
                .should('contain', signIn[index]);
        });

    });

});
