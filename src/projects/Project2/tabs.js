function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "rgb(0,0,0,.534)";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content (all are set to match the background color of specific tab)
    if(pageName == "yosemite") {
      elmnt.style.backgroundColor = "rgb(75, 94, 75)";
    }
    else if (pageName == "glacier") {
      elmnt.style.backgroundColor = "rgb(41, 41, 66)";
    }
    else if (pageName == "grandCanyon") {
      elmnt.style.backgroundColor = "rgb(75, 94, 75)";
    }
    else if (pageName == "greatSmokey") {
      elmnt.style.backgroundColor = "rgb(136, 136, 136)";
    }
    else if (pageName == "yellowstone") {
      elmnt.style.backgroundColor = "rgb(41, 41, 66)";
    }

  }

  // Place id="defaultOpen" on specific html button for start of page (currently set to Glacier)
  document.getElementById("defaultOpen").click();

