var thisURL = encodeURIComponent(document.URL);

var linkedinURL = "https://www.linkedin.com/sharing/share-offsite/?mini=true&url=" + thisURL;
var facebookURL = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + thisURL + "&display=popup&ref=plugin&src=share_button";
var twitterURL = "https://twitter.com/intent/tweet?url=" + thisURL;

document.getElementById("share-button").innerHTML += `
    <span style="font-size:26px; margin-bottom:10px; text-align:right">
        <a href="${facebookURL}" target="_blank" style="opacity:0.75; color:#1f1f1f; margin-right:5px"><i class='bx bxl-facebook' ></i></i></a>
        <a href="${twitterURL}" target="_blank" style="opacity:0.75; color:#1f1f1f; margin-right:5px"><i class='bx bxl-twitter'></i></a>
        <a href="${linkedinURL}" target="_blank" style="opacity:0.75; color:#1f1f1f; margin-right:5px"><i class='bx bxl-linkedin-square'></i></a>
    </span>
`;

