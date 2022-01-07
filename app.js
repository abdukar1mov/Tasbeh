let root = document.getElementById("root");
let sub = "Subhanallax";
let al = "Alhamdulillah";
let ol = "Allohu akbar";
let h2 = document.getElementById("sub");
let ekran = document.querySelector(".ekran");
document.querySelector(".btn").addEventListener("click", function () {
  console.log(+ekran.value + 1);
  ekran.value = parseInt(ekran.value) + 1;

  if (ekran.value == 33) {
    h2.innerHTML = al;
    console.log(al);
  } else if (ekran.value == 66) {
    h2.innerHTML = ol;
    console.log(ol);
  }else if (ekran.value == 99){
    h2.innerHTML = ("Refresh page!!!")
  }
  else if (ekran.value == 0) {
    h2.innerHTML = sub;
  }
});

document.querySelector(".nol").addEventListener("click", function () {
  document.querySelector(".ekran").value = -1;
});
