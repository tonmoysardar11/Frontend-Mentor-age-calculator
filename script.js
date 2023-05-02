
document.getElementById('day').addEventListener('focus', () => { document.getElementById('dayErr').innerHTML="Enter Day" })
document.getElementById('month').addEventListener('focus', () => { document.getElementById('monthErr').innerHTML="Enter Month"  })
document.getElementById('year').addEventListener('focus', () => { document.getElementById('yearErr').innerHTML="Enter Year"  })
document.getElementById('day').addEventListener('blur', () => { document.getElementById('dayErr').innerHTML="" })
document.getElementById('month').addEventListener('blur', () => { document.getElementById('monthErr').innerHTML="" })
document.getElementById('year').addEventListener('blur', () => { document.getElementById('yearErr').innerHTML="" })


const change = () => {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let a = new Date();
    let currentMonth = a.getMonth();
    birthday = new Date(Number(year), Number(month), Number(day));




    if (day > 28 && month == 2 && year % 4 != 0) {
        document.getElementById('dayErr').innerHTML="Enter Valid Day"

        
    }
    else if (day > 30 && (month == 9 || month == 11 || month == 4 || month == 6)) {
        document.getElementById('dayErr').innerHTML="Enter Valid Day"

    }

    else if (birthday > a) {
        document.getElementById('dayErr').innerHTML="Enter Valid Day"
        document.getElementById('monthErr').innerHTML="Enter Valid Month"
        document.getElementById('yearErr').innerHTML="Enter Valid Year"

    }
    else if (day == 0 || month == 0 || year == 0) {
        document.getElementById('dayErr').innerHTML="Enter Valid Day"
        document.getElementById('monthErr').innerHTML="Enter Valid Month"
        document.getElementById('yearErr').innerHTML="Enter Valid Year"
    }
    else {
        document.getElementById('dayErr').innerHTML=""
        document.getElementById('monthErr').innerHTML=""
        document.getElementById('yearErr').innerHTML=""

        const diff = Math.abs(a - birthday);
        let yearDiff = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
        let monthDiff;
        if (currentMonth > month) {
            monthDiff = currentMonth - month;
        } else {
            monthDiff = 12 + currentMonth - month;
        }
        if (monthDiff>=12){
            yearDiff+=1;
            monthDiff=0;
        }
        else{
            monthDiff;
        }
        let dayDiff = Math.ceil((diff / 1000 / 60 / 60 / 24) % 30);
        document.getElementById('years').innerHTML = yearDiff;
        document.getElementById('months').innerHTML = monthDiff;
        document.getElementById('days').innerHTML = dayDiff;

        day='';
        month='';
        year='';
    }

}
