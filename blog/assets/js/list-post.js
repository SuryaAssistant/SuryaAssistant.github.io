post_data = [
    {
        "title" : "Pentingnya Kalibrasi Pembacaan Rangkaian Voltage Divider",
        "img" : "./img/bg1.png",
        "date" : "1 Oktober 2022",
        "link" : "./pentingnya-kalibrasi-pembacaan-rangkaian-voltage-divider.html",
        "number" : 3,
        "read_time" : 5,
    },
    {
        "title" : "Kalkulasi Lebar Jalur PCB",
        "img" : "./img/tracewidth.png",
        "date" : "14 September 2022",
        "link" : "./kalkulasi-lebar-jalur-pcb.html",
        "number" : 2,
        "read_time" : 3,
    },
    {
        "title" : "Memaksimalkan Pemakaian Memori Mikrokontroler",
        "img" : "./img/error.png",
        "date" : "29 Agustus 2022",
        "link" : "./memaksimalkan-pemakaian-memori-mikrokontroler.html",
        "number" : 1,
        "read_time" : 5,
    },
]

var postCount = Object.keys(post_data).length;

// Display post
document.getElementById("list_post").innerHTML = ``;

for(let i = 0; i < postCount; i++){
    document.getElementById("list_post").innerHTML += `
        <div class="row" style="margin-bottom:20px">
            <div class="col">

            <a style="text-decoration:none;color:#182c2d" href="${post_data[i].link}"><h4 style="font-size:20px; padding-bottom:5px"><Strong>${post_data[i].title}</Strong></h4></a>
            <p style="font-size:10px; margin-bottom:0px; opacity:0.5">Dipublikasikan pada ${post_data[i].date}</p>
            <br>
            <br>
            <a class="btn btn-primary" style="font-size:12px; border-radius:20px; line-height:1" href="${post_data[i].link}">Baca Selengkapnya</a>
            <span class="badge badge-pill badge-light" style="color:#21253a; border-radius:20px; opacity:0.5; margin-left:10px; margin-top:10px">${post_data[i].read_time} min</span>

            </div>
            <div class="col-4">
                <div class="col" style="text-align:center">
                    <div class="row">
                        <img src="${post_data[i].img}" style="width:300px; height:auto; object-fit:contain; text-align:center">
                    </div>
                </div>
            </div>
        </div>
    `;

    if(i<(postCount-1)){
        document.getElementById("list_post").innerHTML += `
        <hrblog style="margin-bottom:20px"></hrblog>
        `;
    }
}
