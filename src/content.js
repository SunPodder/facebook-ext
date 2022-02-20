{
  setTimeout(function(){
    if(window.location.href.startsWith("https://m.facebook.com/messages/read/")){
      let input = document.querySelector("#composerInput")
      let submitBtn = document.getElementsByName("send")[0]
      let i = 1
      
      let interval = setInterval(sendMsg, 800)
    
      function sendMsg(){
        input.value = `Test ${i}`
        setTimeout(function(){
          submitBtn.disabled = false
          console.log(input.value)
          if(input.value != "") submitBtn.click()
          i++
          if(i == 5) stop()
        }, 1200)
      }
    
      function stop(){
        clearInterval(interval)
      }
    }
  }, 2000)
}