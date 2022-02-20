{
  if(window.location.href.startsWith("https://m.facebook.com/messages/read/")){
    let input = document.querySelector("#composerInput")
    let form = document.querySelector("form")
    let i = 0
    
    let interval = setInterval(sendMsg, 1500)
  
    function sendMsg(){
      input.value = `Test ${i}`
      setTimeout(function(){ form.submit() }, 1000)
      i++
      if(i == 10) stop()
    }
  
    function stop(){
      clearInterval(interval)
    }
  }
}