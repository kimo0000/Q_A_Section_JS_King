const boxs = document.querySelectorAll('.box');
const btns = document.querySelectorAll('.btn');
const answers = document.querySelectorAll('.answer');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Methode 1:
      // const answerEl = e.currentTarget.parentElement.nextElementSibling;
      // answerEl.classList.toggle("show_answer");

      //   if(answerEl.classList.contains("show_answer")) {
      //     btn.textContent = "-";
      //   } else {
      //     btn.textContent = "+";
      //   }

      // Methode 2:
      boxs.forEach((box, index, array) => {
        // console.log(array.indexOf(box[index]));
        console.log(box);
        console.log(e.target.parentElement.parentElement);
        if (box === e.target.parentElement.parentElement) {
          box.children[1].classList.toggle("show_answer");
          if (box.children[1].classList.contains("show_answer")) {
            btn.textContent = "-";
          } else {
            btn.textContent = "+";
          }
        }
      });
    })
})