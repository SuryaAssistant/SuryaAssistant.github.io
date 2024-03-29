// Read clock
// Dark mode will automatically processed on 6PM - 6AM

var today = new Date();
var hourTime= today.getHours();
var hourTimeFakeMorning = 8;
var hourTimeFakeNight = 20;

var darkMode = false;
var hourRule = true;


function setColor(darkMode)
{
    if(darkMode == true)
    {
        var element = document.body;
        element.classList.toggle("darkMode");
        document.getElementById("introbreak").innerHTML = `<path fill="#303F9F" fill-opacity="1" d="M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,144C420,128,480,96,540,122.7C600,149,660,235,720,229.3C780,224,840,128,900,117.3C960,107,1020,181,1080,224C1140,267,1200,277,1260,240C1320,203,1380,117,1410,74.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        `;

    }

    if(darkMode == false)
    {
        document.getElementById("introbreak").innerHTML = `<path fill="#0563BB" fill-opacity="1" d="M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,144C420,128,480,96,540,122.7C600,149,660,235,720,229.3C780,224,840,128,900,117.3C960,107,1020,181,1080,224C1140,267,1200,277,1260,240C1320,203,1380,117,1410,74.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        `;
    }
}

function readHour()
{
    if(hourRule == true)
    {
        if(hourTime < 6 || hourTime >= 18)
        {
            darkMode = true;
        }
        
        if(hourTime >= 6 && hourTime < 18)
        {
            darkMode = false;
        }

        setColor(darkMode);
    }
}


// Start Program

//hourTime = 8;
readHour();