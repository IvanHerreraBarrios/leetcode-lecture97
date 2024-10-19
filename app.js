var maximumTime = function(time) {
    if (time[0] === "?") {
      time = (time[1] !== "?" && parseInt(time[1]) > 3 ? "1" : "2") + time.substring(1)
    }  
  
    if(time[1] === "?"){
      time = time.replace("?", time[0] === "2" ? "3" : "9")
    }
  
    if (time[3] === "?"){
      time = time.replace("?", "5")
    }
  
    if(time[4] === "?"){
      time = time.replace("?", "9")
    }
  
    return time
  };