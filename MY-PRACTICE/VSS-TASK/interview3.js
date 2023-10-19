for (var i = 0; i < 5; i++) {
  function run(i) {
    setTimeout(() => {
      console.log({ i });
    }, 0);
  }

  run(i);
}
console.log("5" - -"3");
console.log(-"6" + 2); //-> convert to -6+2 = -4
console.log(-5 + "3"); //->-53
//It will work like this
//'5' - (-3)
//8
//When we have any operator other than + it will treat the string
// as integer and do the the type cohersion
//So, 8 will be of type num;
//console.log(typeof ("5" - -"3"));->number
//-'6' + 2
// -6 + 2
// -6 + 2
// -4
