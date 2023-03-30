portofolio_data = [
    {
        "title" : "Kawung Network",
        "description" : "Design and prototype of LoRa public mesh network",
        "img" : "./assets/img/portofolio/kawung.png",
        "website" : "https://kawungnet.github.io",
        "github" : "https://github.com/kawungnet",
        "file" : "",
    },
    {
        "title" : "arduinofuzzy",
        "description" : "Implementation of Fuzzy Logic Control Algorithm written in Arduino ",
        "img" : "https://raw.githubusercontent.com/SuryaAssistant/arduinofuzzy/main/img/fuzzy_output_graphic.png",
        "website" : "",
        "github" : "https://github.com/SuryaAssistant/arduinofuzzy",
        "file" : "",
    },
    {
        "title" : "SIAB Recycle Front-End Demo",
        "description" : "Front-End Demo of SIAB Recycle to display water quality and filtration process of the SIAB Recycle Hardware.",
        "img" : "./assets/img/portofolio/siabrecycle.png",
        "website" : "https://suryaassistant.github.io/siabrecycle",
        "github" : "https://suryaassistant.github.io/siabrecycle",
        "file" : "",
    },
  
    {
        "title" : "Design of Theft Detection System for Museum",
        "description" : "Prototype of security system to detect thefting in museum using nRF24L01 and Arduino.",
        "img" : "./assets/img/portofolio/deteksipencurian.png",
        "website" : "",
        "github" : "",
        "file" : "./assets/files/FandiAdinata_TheftDetectionSystemPrototypeDesign.pdf",
    },

    {
        "title" : "Coap File Transfer",
        "description" : "Transfering file on Constrained Application Protocol instead of HTTP or HTTPS.",
        "img" : "./assets/img/portofolio/kirim_gambar_coap.png",
        "website" : "",
        "github" : "https://github.com/suryaassistant/coapfiletransfer",
        "file" : "",
    },

  ]

// =================================================================================
// ---------------------------- DISPLAY DATA ---------------------------------------
// =================================================================================
var idName;
var pIdName;

// READ JSON LENGTH

var jLenght = Object.keys(portofolio_data).length;

// DISPLAY IN CARD BODY

for(let i = 1; i <= jLenght; i++)
{
    idName = "porto_" + String(i);
    pIdName = idName + "p"

    document.getElementById(idName).innerHTML = `
    <div class="card text-dark bg-white mb-3 border-0 shadow" >
        <img src="${portofolio_data[i-1].img}" class="card-img-top" alt="..." style="max-height:200px; object-fit:cover;">
        <div class="card-body">
            <h5 class="card-title">${portofolio_data[i-1].title}</h5>
            <p class="card-text">${portofolio_data[i-1].description}</p>
            
            <p id="${pIdName}">
            </p>
            
        </div>
    </div>
    `;

    // DISPLAY THE LINKS

    if(portofolio_data[i-1].website != "")
    {
        document.getElementById(pIdName).innerHTML +=`
            <a href="${portofolio_data[i-1].website}" class="website" target=”_blank”><i class="bx bx-globe primecolor"></i></a>
        `;
    }
    if(portofolio_data[i-1].github != "")
    {
        document.getElementById(pIdName).innerHTML +=`
            <a href="${portofolio_data[i-1].github}" class="github" target=”_blank”><i class="bx bxl-github primecolor"></i></a>
        `;
    }
    if(portofolio_data[i-1].file != "")
    {
        document.getElementById(pIdName).innerHTML +=`
            <a href="${portofolio_data[i-1].file}" class="files" target=”_blank”><i class='bx bxs-file-pdf primecolor'></i></a>
        `;
    }
};
