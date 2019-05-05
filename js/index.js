firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("logged").style.display = "initial"
    document.getElementById("form").style.display = "none"
  } else {
        document.getElementById("form").style.display = "initial"
        document.getElementById("logged").style.display = "none"
  }
});

$(document).on('click', '.below button', function(){
  var belowCard = $('.below'),
  aboveCard = $('.above'),
  parent = $('.form-collection');
  parent.addClass('animation-state-1');
  setTimeout(function(){
    belowCard.removeClass('below');
    aboveCard.removeClass('above');
    belowCard.addClass('above');
    aboveCard.addClass('below');
    setTimeout(function(){
      parent.addClass('animation-state-finish');
      parent.removeClass('animation-state-1');
      setTimeout(function(){
        aboveCard.addClass('turned');
        belowCard.removeClass('turned');
        parent.removeClass('animation-state-finish');
      }, 300)
    }, 10)
  }, 300);
});

function func()
{
   var email = document.getElementById("email1").value;
  var pass = document.getElementById("pass1").value;
  
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
  });
}

function logout()
{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

function sign()
{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}