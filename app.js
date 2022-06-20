

 let numberBox = document.querySelector("#numberBox");
 const my_minus = document.querySelector("#minus");
 const plus = document.querySelector("#plus");
 const reset = document.querySelector("#reset");


 let my_number = 0;

plus.addEventListener("click", function () {

    let existing_num = numberBox.value;
    my_number = existing_num;

    // my_number = my_number + 1;
    my_number ++;
    numberBox.value = my_number;
});

my_minus.addEventListener("click", function () {

    let existing_num = numberBox.value;
    my_number = existing_num;

    // my_number --;
    my_number = my_number - 1;
    numberBox.value = my_number;
});

reset.addEventListener("click", () => {

    my_number = 0;
    numberBox.value = my_number;
});
