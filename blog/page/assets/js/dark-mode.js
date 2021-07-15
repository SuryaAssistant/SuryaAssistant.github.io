var countClick = 0;

//-------------------------------------------------------------
function darkFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    countClick = countClick + 1;


    if (countClick == 0){
        document.getElementById("to-dark").innerHTML = 'Dark Mode';

        document.getElementById("to-dark").classList.remove('btn-light');
        document.getElementById("to-dark").classList.add('btn-dark');
    }
    if (countClick == 1){
        document.getElementById("to-dark").innerHTML = 'Light Mode';

        document.getElementById("to-dark").classList.add('btn-light');
        document.getElementById("to-dark").classList.remove('btn-dark');
    }
    if (countClick == 2){
        countClick = 0;

        document.getElementById("to-dark").innerHTML = 'Dark Mode';

        document.getElementById("to-dark").classList.remove('btn-light');
        document.getElementById("to-dark").classList.add('btn-dark');
    }

    // save cookie
    document.cookie = "dark="+countClick+";";


  }