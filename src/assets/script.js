
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the register link element by its ID
//     var registerLink = document.getElementById('toRegisterPage');
    
//     // Add click event listener
//     registerLink.addEventListener('click', function(event) {
//         // Prevent the default action of the link
//         event.preventDefault();
        
//         // Redirect to the register page
//         window.location.href = 'register.html'; // Replace with your actual register page URL
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the forgot password link element by its ID
//     var forgotPasswordLink = document.getElementById('forgotPasswordLink');
    
//     // Add click event listener
//     forgotPasswordLink.addEventListener('click', function(event) {
//         // Prevent the default action of the link
//         event.preventDefault();
        
//         // Redirect to the forgot password page
//         window.location.href = 'Password.html'; // Replace with your actual forgot password page URL
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var forgotPasswordForm = document.getElementById('fogotpassword');
//     var messageElement = document.getElementById('message');

//     forgotPasswordForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Simulate sending email (replace with actual logic)
//         setTimeout(function() {
//             // Show success message
//             messageElement.textContent = 'An email has been sent to your email address. Please check your inbox.';
//         }, 1000); // Simulating a delay for demonstration purposes, replace with actual email sending logic
//     });
// });

let questionCount = 0;

function GetUserHeading(userID){
    const data = {
        'userID': userID,
        'title': document.getElementById('form-title').value,
        'description': document.getElementById('form-description').value,
        'published': 'not published'
    };

    return data
}

function getAllUserQuestions(questionaireID){
    const questions = []

    for (let index = 1; index <= questionCount; index++) {
        var userQuestions = {
            'questionnaireID': questionaireID,
            'questionText': document.getElementById(`question-${index}`).value,
            'questionType': 'TextBox',
            'isRequired': 'Required'
        }
       
        questions.push(userQuestions)
    }

    return questions

}

function addQuestion() {
    questionCount++;
    const questionContainer = document.getElementById('question-container');
    
    const questionDiv = document.createElement('div');
    questionDiv.style.backgroundColor = '#FDFEFE';
    questionDiv.style.margin = '15px';
    questionDiv.style.borderRadius = '8px';
    questionDiv.style.padding = '15px';
    // questionDiv.className = 'question-div';
    //questionDiv.id = `question-${questionCount}`;
    
    const questionLabel = document.createElement('div');
    questionLabel.style.fontSize = '15px';
    questionLabel.style.marginBottom = '10px';
    questionLabel.style.display = 'block';

    const questionInput = document.createElement('input')
    questionInput.id = `question-${questionCount}`
    questionInput.placeholder = 'Write your question here'
    questionInput.style.fontSize = '18px'
    questionInput.style.width = '100%'
    questionInput.style.border = '0'
    questionInput.style.padding = '10px'
    questionInput.style.boxSizing = 'border-box'

    questionDiv.appendChild(questionInput)

    
    // questionLabel.className = 'name';
    // questionLabel.innerHTML = `
    //     <input type="text" placeholder="Enter your question here" id="question-text-${questionCount}">
    //     <input type="checkbox" class="required-checkbox" id="question-required-${questionCount}">
    //     <label for="question-required-${questionCount}">Required</label>
    // `;
    
    // const questionType = document.createElement('select');
    // questionType.className = 'question-type';
    // questionType.id = `question-type-${questionCount}`;
    // questionType.onchange = function() {
    //     updateQuestionType(questionDiv.id, this.value);
    // };
    // questionType.innerHTML = `
    //     <option value="" disabled selected>Choose</option>
    //     <option value="text">Text</option>
    //     <option value="multiple">Multiple Choice</option>
    // `;
    
    const inputDiv = document.createElement('div');
    inputDiv.className = 'input-div';
    inputDiv.id = `input-div-${questionCount}`;

    const userInput = document.createElement('input')
    userInput.style.width ='100%'
    userInput.style.border = '0'
    userInput.style.outline = '0'
    userInput.style.borderBottom = '1.5px solid #DCD7D7'
    userInput.style.fontSize = '15px'
    userInput.style.marginBottom = '10px'

    
    const addOptionBtn = document.createElement('button');
    addOptionBtn.className = 'add-option-btn';
    addOptionBtn.innerHTML = 'Add Option';
    addOptionBtn.style.display = 'none'; // Hidden by default
    addOptionBtn.onclick = function() {
        addOption(inputDiv.id);
    };
    
    const deleteBtn = document.createElement('button');
    deleteBtn.style.backgroundColor = 'red'
    deleteBtn.style.color = 'white'
    deleteBtn.style.border = 'none'
    deleteBtn.style.borderRadius = '5px'
    deleteBtn.style.padding = '8px 15px'
    deleteBtn.style.cursor = 'pointer'
    deleteBtn.style.marginTop = '10px'
    deleteBtn.style.fontSize = '14px'
    // deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = function() {
        deleteQuestion(questionDiv.id);
    };
    
    questionDiv.appendChild(questionLabel);
    //questionDiv.appendChild(questionType);
    questionDiv.appendChild(inputDiv);
    inputDiv.appendChild(userInput)

    questionDiv.appendChild(addOptionBtn);
    questionDiv.appendChild(deleteBtn);
    
    questionContainer.appendChild(questionDiv);


}

function updateQuestionType(questionId, type) {
    const questionDiv = document.getElementById(questionId);
    const inputDiv = document.getElementById(`input-div-${questionId.split('-')[1]}`);
    const addOptionBtn = questionDiv.querySelector('.add-option-btn');
    
    inputDiv.innerHTML = '';
    inputDiv.className = type === 'text' ? 'input-div text' : 'input-div select';
    
    if (type === 'text') {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Your answer';
        inputDiv.appendChild(textInput);
        addOptionBtn.style.display = 'none'; // Hide the button for text input
    } else if (type === 'multiple') {
        addOptionBtn.style.display = 'block'; // Show the button for multiple choice
        addOption(inputDiv.id); // Add default option
    }
}

function addOption(inputDivId) {
    const inputDiv = document.getElementById(inputDivId);
    const optionCount = inputDiv.querySelectorAll('input').length + 1;
    
    const optionInput = document.createElement('input');
    optionInput.type = 'text';
    optionInput.placeholder = `Option ${optionCount}`;
    inputDiv.appendChild(optionInput);
}

function deleteQuestion(questionId) {
    const questionDiv = document.getElementById(questionId);
    questionDiv.remove();
}

function publishForm() {
    // Collect form details
    const formTitle = document.getElementById('form-title').value;
    const formDescription = document.getElementById('form-description').value;

    // Collect questions
    const questions = [];
    const questionContainer = document.getElementById('question-container');
    const questionDivs = questionContainer.querySelectorAll('.question-div');

    let allQuestionsAnswered = true;

    questionDivs.forEach(div => {
        const questionText = div.querySelector('.name input').value;
        const questionType = div.querySelector('.question-type').value;
        const isRequired = div.querySelector('.required-checkbox').checked;
        const options = [];
        
        if (questionType === 'multiple') {
            const optionInputs = div.querySelectorAll('.input-div input');
            optionInputs.forEach(input => {
                options.push(input.value);
            });
        }

        // Check if required question is unanswered
        if (isRequired && !questionText) {
            allQuestionsAnswered = false;
        }

        questions.push({
            text: questionText,
            type: questionType,
            options: options,
            required: isRequired
        });
    });

    if (!allQuestionsAnswered) {
        alert('Please answer all required questions before publishing.');
        return;
    }

    // Example: Log the collected form details and questions
    console.log('Form Title:', formTitle);
    console.log('Form Description:', formDescription);
    console.log('Form Published:', questions);

    // You can send this data to the server or handle it as needed
    // Example: Send form data to server using fetch or XMLHttpRequest

    alert('Form has been published!');
}
