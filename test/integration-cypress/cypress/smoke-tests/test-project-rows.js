const baseUrl = Cypress.config('baseUrl');

describe('check rows on main page while signed out', function(){
  beforeEach(function(){
    cy
      .visit('');
  });

  it('check Featured Projects row title', function(){
    cy
      .get('.inner.mod-splash :nth-child(2)')
  });

  it('check Featured Project row link', function(){

  });

  it('check Featured Studio row title', function(){

  });

  it('check Featured Studio row link', function(){

  })

});
