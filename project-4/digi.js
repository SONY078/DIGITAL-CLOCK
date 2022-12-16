
   setInterval(()=>
   {

    // let hours = document.getElementById('hours')
    // let minutes = document.getElementById('min')
    // let seconds = document.getElementById('sec')
    // let ampm = document.getElementById('ampm')
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let am = h>=12 ? "PM" : "AM";
    
    if(h>12)
    {
        h = h-12;
    }
    
    
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;


    const d = new Date();
    let hours = d.getHours() - 12 ;

    // let h =  d.getHours() > 12 ? "0" + hours : d.getHours()-12;
    document.getElementById("hours").innerHTML = h + "<br><span>Hours</span>" ; 
    // h = h > 10 ? "0" + h : h ;


    let ap = d.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("ampm").innerHTML = ap ;

    // let s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    document.getElementById("seconds").innerHTML = s + "<br><span>Seconds</span>" ;


    // let m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    document.getElementById("minutes").innerHTML = m + "<br><span>Minutes</span>" ;

    
        
    if( h < 12 && ap == "AM" )
    {
        document.getElementById("mrng").style.backgroundImage = "url('./goodmorning (3).png')" ;
        document.getElementById("morning").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("morningmes").innerHTML = "GOOD MORNING!! WAKE UP !!"; 
        document.getElementById('container').style.background = "url('./early-morning-cartoon-nature-landscape-sunrise_107791-10161.webp')";
        document.getElementById('bf').style.background = 'linear-gradient(#1A4314,#2C5E1A,#B2D2A4)';
        document.getElementById('times').style.backgroundColor = '#1A4314';
        document.getElementById('t').style.backgroundColor = '#1A4314';
        document.getElementById('w').style.background = 'linear-gradient(#B2D2A4,#2C5E1A,#1A4314)';
        document.getElementById('morning').style.color = 'white';
        document.getElementById('dmorning').style.backgroundColor = 'white';
        document.getElementById('dmorning').style.color = '#1A4314';
        document.getElementById('dnoon').style.backgroundColor = 'white';
        document.getElementById('dnoon').style.color = '#1A4314';
        document.getElementById('deve').style.backgroundColor = 'white';
        document.getElementById('deve').style.color = '#1A4314';
        document.getElementById('dnight').style.backgroundColor = 'white';
        document.getElementById('dnight').style.color = '#1A4314';
        document.getElementById('message').style.backgroundColor = '#1A4314';
        document.getElementById('con').style.backgroundColor = '#1A4314';
        document.getElementById('morningmes').style.color = '#1A4314';
  
    }
    else if(h == 12 && ap == "PM")
    {
        document.getElementById("afternoon").style.backgroundImage = "url('Component 31 – 1 (1).svg')" ;
        document.getElementById("noon").innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("noonmes").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if( h < 4 && ap =="PM" )
    {
        document.getElementById("afternoon").style.backgroundImage = "url('Component 31 – 1 (1).svg')" ;
        document.getElementById("noon").innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("noonmes").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if( h < 8 && ap == "PM")
    {
        document.getElementById("evening").style.backgroundImage = "url('teatime (4).jpg')" ;
    document.getElementById("eve").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("evemes").innerHTML = "GOOD EVENING !!";
    document.getElementById('container').style.background = "url('./goodeven.jpeg')no-repeat";
    document.getElementById('bf').style.background = 'linear-gradient(#fff,#0B87BA,#014D69,#0B87BA,#ffff)';
    document.getElementById('times').style.backgroundColor = '#014D69';
    document.getElementById('t').style.backgroundColor = '#014D69';
    document.getElementById('fa').style.color = '#014D69';
    document.getElementById('fas').style.color = '#014D69';
    document.getElementById('faso').style.color = '#014D69';
    document.getElementById('fasol').style.color = '#014D69';
    document.getElementById('morning').style.color = 'white';
    document.getElementById('dmorning').style.backgroundColor = 'white';
    document.getElementById('dmorning').style.color = '#1A4314';
    document.getElementById('dnoon').style.backgroundColor = 'white';
    document.getElementById('dnoon').style.color = '#1A4314';
    document.getElementById('deve').style.backgroundColor = 'white';
    document.getElementById('deve').style.color = '#1A4314';
    document.getElementById('dnight').style.backgroundColor = 'white';
    document.getElementById('dnight').style.color = '#1A4314';
    document.getElementById('message').style.backgroundColor = '#1A4314';
    document.getElementById('con').style.backgroundColor = '#014D69';
    document.getElementById('p1').style.color = '#014D69';
    document.getElementById('p2').style.color = '#014D69';
    document.getElementById('p3').style.color = '#014D69';
    document.getElementById('p4').style.color = '#014D69';
    document.getElementById('morningmes').style.color = '#1A4314';
    document.getElementById('eve').style.color = 'white';
    }
    else if( h >= 8 && h < 12 && ap =="PM")
    {
        document.getElementById("gn").style.backgroundImage = "url('./night (2).jpg')" ;
        document.getElementById("gn").style.backgroundImage.backgroundSize = "400px" ;
        document.getElementById("night").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("nightmes").innerHTML = "GOOD NIGHT !!";
        document.getElementById('container').style.background = 'url("./starry-night-sky_1048-11828.webp")';
        document.getElementById('times').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('t').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('t').style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        document.getElementById('t').style.border='none'
        document.getElementById('times').style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        document.getElementById('times').style.border='none'
        document.getElementById('zi1').style.top = '228px'
        document.getElementById('zi1').style.left = '720px'
        document.getElementById('zi1').style.width='540px'
        document.getElementById('zi1').style.height='110px'
        document.getElementById('zi1').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('zi1').style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        document.getElementById('zi2').style.top = '24px'
        document.getElementById('zi2').style.left = '60px'
        document.getElementById('zi2').style.width='200px'
        document.getElementById('zi2').style.height='100px'
        document.getElementById('bf').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('bf').style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        document.getElementById('bf').style.zIndex = '20';
        document.getElementById('night').style.color = '#ffff';
        document.getElementById('dmorning').style.backgroundColor = 'white';
        document.getElementById('dmorning').style.color = '#1A4314';
        document.getElementById('dnoon').style.backgroundColor = 'white';
        document.getElementById('dnoon').style.color = '#1A4314';
        document.getElementById('deve').style.backgroundColor = 'white';
        document.getElementById('deve').style.color = '#1A4314';
        document.getElementById('dnight').style.backgroundColor = 'white';
        document.getElementById('dnight').style.color = '#1A4314';
        document.getElementById('con').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('con').style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    
    let hrdot = document.querySelector('.hrdot');
    let mindot = document.querySelector('.mindot');
    let secdot = document.querySelector('.secdot');

    hh.style.strokeDashoffset = 282 - (282* h) / 12;
    mm.style.strokeDashoffset = 282 - (282 * m) / 60;
    ss.style.strokeDashoffset = 282 - (282 * s) / 60;
    
    hrdot.style.transform = `rotate(${h * 30}deg)`;
    mindot.style.transform = `rotate(${m * 6}deg)`;
    secdot.style.transform = `rotate(${s * 6}deg)`;
    displayValue();
    //--------------------------------------------------------------------------
    function displayValue()
    {
        // let waketime = document.getElementById("dmorning").value
        // let waketime = document.querySelector('#dmorning');
        selectElement = document.querySelector('#dmorning');
        wake = selectElement.options[selectElement.selectedIndex].value;
        document.querySelector('#wake').textContent = wake ;


        selectElement = document.querySelector('#dnoon');
        wake = selectElement.options[selectElement.selectedIndex].value;
        document.querySelector('#lunch').textContent = wake ;

        selectElement = document.querySelector('#deve');
        wake = selectElement.options[selectElement.selectedIndex].value;
        document.querySelector('#nap').textContent = wake ;


        selectElement = document.querySelector('#dnight');
        wake = selectElement.options[selectElement.selectedIndex].value;
        document.querySelector('#night2').textContent = wake ;
    }   
  
   })