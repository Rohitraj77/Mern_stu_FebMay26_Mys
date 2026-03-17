const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addFaq");
const faqContainer = document.getElementById("faqContainer");
const msg = document.getElementById("msg");

addBtn.addEventListener("click", function () {

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question.length < 5) {
        msg.textContent = "Question must be at least 5 characters";
        return;
    }

    if (answer.length < 15) {
        msg.textContent = "Answer must be at least 15 characters";
        return;
    }

    msg.textContent = "";

    const emptyMsg = document.getElementById("emptyMsg");
    if (emptyMsg) {
        emptyMsg.remove();
    }

    const faq = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = question;

    heading.insertAdjacentHTML("beforeend", "<span> [FAQ]</span>");

    const para = document.createElement("p");
    para.textContent = answer;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function () {
        faq.remove();

        if (faqContainer.children.length === 0) {
            faqContainer.innerHTML = "<p id='emptyMsg'>No FAQs available</p>";
        }
    });

    faq.appendChild(heading);
    faq.appendChild(para);
    faq.appendChild(delBtn);

    faqContainer.appendChild(faq);

    questionInput.value = "";
    answerInput.value = "";
});