function sendMessage(){
  if(window.location.href.startsWith("https://m.facebook.com/messages/read/")){
    setTimeout(function(){
      let input = document.querySelector("#composerInput")
      let submitBtn = document.getElementsByName("send")[0]
      let i = 1, count = 10
      let msg = `🥱`
      
      let interval = setInterval(sendMsg, 800)
    
      function sendMsg(){
        input.value = msg
        setTimeout(function(){
          submitBtn.disabled = false
          if(input.value != "") submitBtn.click()
          else return false
          i++
          if(i == (count++)) stop()
        }, 1200)
      }
    
      function stop(){
        clearInterval(interval)
      }
    }, 2500)
  }
}

function postStatus(){
  if(!window.location.href == ("https://facebook.com/home.php")) return false
  setTimeout(function(){
    document.querySelector("#viewport").style.display = "none"
    document.querySelector("#composer-placeholder-form").style.display = ""
    
    let input = document.querySelector("#composer-placeholder-textarea")
    let submitBtn = document.querySelector('[name="view_post"]')
    
    setTimeout(function(){ input.value = "hello" }, 800)
    
    setTimeout(function(){
      submitBtn.disabled = false
      submitBtn.click()
    }, 2000)
  }, 3000)
}

postStatus()