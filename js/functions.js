function calculateBMI() 
{
        let weight = document.getElementById('weight').value;
        let length = document.getElementById('length').value;
        let age = document.getElementById('age').value;
        let gender = document.getElementById('gender').value;
    
    if(weight == "" || length == "" || age == "" || gender == "")
    {
        document.getElementById('error').innerHTML="*Niet alle velden zijn ingevuld!";
    }
    else if(isNaN(weight) || isNaN(length) || isNaN(age))
    {
        document.getElementById('error').innerHTML="*Onjuist invoer in één of meerdere velden!";
    }
    else if(gender == "Kies geslacht")
    {
            document.getElementById('error').innerHTML="*Uw heeft geen geslacht gekozen";
    }
    else
    {
        document.getElementById('error').innerHTML="";
        let bmiLength = length/100;

        let bmi =  1.3 * weight / (Math.pow(bmiLength,2.5));
        //let bmi =  weight / (bmiLength*bmiLength);
        
        let fixedBMI = bmi.toFixed(1);
        // document.getElementById('bmi-message').disabled=false;
        return document.getElementById('bmi').innerHTML="Uw bmi is: " + fixedBMI;
        
    }  
}
function bmiMessage()
{
    let weight = document.getElementById('weight').value;
    let length = document.getElementById('length').value;
    let age = document.getElementById('age').value;
    
    let bmiLength = length/100;

    let bmi =  1.3 * weight / (Math.pow(bmiLength,2.5));
    //let bmi =  weight / (bmiLength*bmiLength);
    let fixedBMI = bmi.toFixed(1);

    // check for age 2-18*
    if(age<19)
    {
        return document.getElementById('bmi-info').innerHTML= "Kijk voor de juiste bmi naar de groeigrafiek van uw kind op de website voedingscentrum.com";
    }
    
    // check for age 18-69*
        // ondergewicht < 18.5
        // gezond gewicht 18.5 - 25
        // overgewicht 25 - 30
        // ernstig overgewicht obesitas 30 >

    if(age>18 && age<69)
    {
        if(fixedBMI < 18.5)
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: grey'>Je gewicht is te laag. Probeer anders te eten en drinken en maak een afspraak met uw huisarts voor controle</span>";
        }
        else if(fixedBMI >= 18.5 && fixedBMI <= 25 )
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: green'>Je gewicht is gezond. Mooi zo! Blijf gezond eten en voldoende bewegen om dat zo te houden. </span>";
        }
        else if (fixedBMI > 25 && fixedBMI <= 30)
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: #FFA400'>Je gewicht is te hoog. Het is beter voor je gezondheid om af te vallen. Maak een afspraak met je huisarts om je bloeddruk, cholesterol en bloedsuiker te controleren. </span>";
        }
        else
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: red'>Je gewicht is veel te hoog. Het is beter voor je gezondheid om af te vallen.</span>";
        }
    }

// check for age >69

    // ondergewicht < 22
    // gezond gewicht 22 - 28
    // overgewicht 28 - 30
    // ernstig overgewicht obesitas 30 >
    if(age > 69)
    {
        if(fixedBMI < 22)
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: grey'>Je gewicht is te laag.</span>";
        }
        else if(fixedBMI >= 22 && fixedBMI <= 28 )
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: green'>Je gewicht is gezond. Mooi zo! Blijf gezond eten en voldoende bewegen om dat zo te houden. </span>";
        }
        else if (fixedBMI > 28 && fixedBMI <= 30)
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: #FFA400'>Je gewicht is te hoog. Het is beter voor je gezondheid om af te vallen. Maak een afspraak met je huisarts om je bloeddruk, cholesterol en bloedsuiker te controleren. </span>";
        }
        else
        {
            return document.getElementById('bmi-info').innerHTML= "<span style='color: red;'>Je gewicht is veel te hoog. Het is beter voor je gezondheid om af te vallen.</span>";
        }
    }
}