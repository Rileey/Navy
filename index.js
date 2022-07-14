function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

//   added myEnterFunction, myLeaveFunction, myEnterFunction2, myLeaveFunction2, myEnterFunction3, myLeaveFunction3
// lines 13 t0 53

  function myEnterFunction() {
    var x = document.getElementById("over1");
    x.style.display = "flex";
    var y = document.getElementById("overr1");
    y.style.top = "70px"
  }

  function myLeaveFunction() {
    var x = document.getElementById("over1");
    x.style.display = "none";
    var y = document.getElementById("overr1");
    y.style.top = "100px"
  }

  function myEnterFunction2() {
    var x = document.getElementById("over2");
    x.style.display = "flex";
    var y = document.getElementById("overr2");
    y.style.top = "70px"
  }

  function myLeaveFunction2() {
    var x = document.getElementById("over2");
    x.style.display = "none";
    var y = document.getElementById("overr2");
    y.style.top = "100px"
  }

  function myEnterFunction3() {
    var x = document.getElementById("over3");
    x.style.display = "flex";
    var y = document.getElementById("overr3");
    y.style.top = "70px"
  }

  function myLeaveFunction3() {
    var x = document.getElementById("over3");
    x.style.display = "none";
    var y = document.getElementById("overr3");
    y.style.top = "100px"
  }

