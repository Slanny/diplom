const test = [1, 1, 1, 1, 1, 1, 1, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
              
              
function checkAnswers(correctAnswers){
    let totalQuestions = correctAnswers.length;
    let score = 0;
    
    for(let i = 1; i <= totalQuestions; i++){
        let selectedOption = document.querySelector(
        'input[name="q' + i + '"]:checked'
        );
        if(selectedOption){
            let selectedValue = parseInt(selectedOption.value)
            if (selectedValue === correctAnswers[i-1]){
                score++;
            }
        }
    }
    
    var result = document.getElementById('result');
    result.innerHTML = 'Ваш результат ' + score + ' из ' + totalQuestions;
    result.style.color = '#3294EF';
}