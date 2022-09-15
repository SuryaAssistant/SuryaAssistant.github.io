document.getElementById("navbar").innerHTML = `
    <!-- Logo and Dark Mode-->
    <div class="container">
        <a class="navbar-brand" href="${homepage}" style="color: primary; font-size: 20px;font-family: 'Open Sans', sans-serif;"><Strong>Fandi Adinata</Strong></a>
        <!--<a class="nav-menu" href="#"><h2><i class='bx bxs-moon' style="color:#121212;"></i></h2></a>--> 
    </div>

    <!-- nav-menu-->
    <div class="container border-bottom" style="padding-top:10px">
        <ul style="padding-left:0px;">
        <a class="nav-item" href="${homepage}" style="text-decoration:initial; color: #121212;">Home</a>
        <a class="nav-item" href="./index.html"style="text-decoration:initial; color: #121212; padding-left:50px;">Blog</a>
        </ul>
    </div>
`;