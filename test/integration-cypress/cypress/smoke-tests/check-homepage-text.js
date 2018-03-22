const languages = ['english'];
var i = 0;

describe('text in Header Signed Out', function(){
  before(function(){
    cy
      .visit('');
  });

  it('check Create text', function(){
    var create = ['Create'];
    cy
      .get('.link.create')
      .should('contain', create[i]);
  });

  it('check Explore text', function(){
    const explore = ['Explore']
    cy
      .get('.link.explore')
      .should('contain', explore[i]);
  });

  it('check Tips text', function(){
    const tips = ['Tips'];
    cy
      .get('.link.tips')
      .should('contain', tips[i]);
  });

  it('check About text', function(){
    const about = ['About'];
    cy
      .get('.link.about')
      .should('contain', about[i]);
  });


  it.skip('check Search text', function(){
    const search = ['Search'];
    cy
      .get('.search .form .form-group div input')
      .should('to.have.attr', ("placeholder", search[i]) );
  });

  it('check Join Scratch text', function(){
    const join = ['Join Scratch'];
    cy
      .get('.link.right.join')
      .should('contain', join[i])
  });

  it.skip('check Sign In text', function(){
    const signIn = ['Sign In'];
    cy
      .get('.link.right.login-item')
      .should('contain', signIn[i]);

  });

});
