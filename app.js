document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
});

function loadQuestions() {
  fetch("class4_evs.json")
    .then(response => response.json())
    .then(data => {
      let output = "";

      data.forEach((item, index) => {
        output += `
          <div class="question">
            <h3>Q${index + 1}. ${item.question}</h3>
            <p><b>Answer:</b> ${item.answer}</p>
          </div>
        `;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch(error => {
      document.getElementById("output").innerHTML =
        "Error loading questions";
      console.log(error);
    });
}