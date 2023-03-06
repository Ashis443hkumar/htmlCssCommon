
const optionMenu = document.querySelector(".select-menu"),
      optionBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      Sbtn_text = optionMenu.querySelector(".Sbtn-text");

      selectBtn = addEventListener("click", () => optionMenu.classList.toggle("active"));
      
     options.forEach( option =>{
        option.addEventListener("click" , ()=>{
          let selectOption = option.querySelector(".option_text").innerHTML;
          Sbtn_text.innerHTML = selectOption
          console.log(option)
        })
      })

 