let subjectCount = 1;

document.getElementById('add-subject').addEventListener('click', () => {
    subjectCount++;

    const subjectsContainer = document.getElementById('subjects-container');
    const gradeInput = document.createElement('div');
    gradeInput.classList.add('input-group');
    gradeInput.innerHTML = `
        <label for="grade-${subjectCount}">Grade Value for Subject ${subjectCount}</label>
        <input type="number" id="grade-${subjectCount}" placeholder="Enter grade value (e.g., 4.0)" step="0.01" min="0">
    `;

    const creditInput = document.createElement('div');
    creditInput.classList.add('input-group');
    creditInput.innerHTML = `
        <label for="credit-${subjectCount}">Credit for Subject ${subjectCount}</label>
        <input type="number" id="credit-${subjectCount}" placeholder="Enter credit value (e.g., 3)" step="0.01" min="0">
    `;

    subjectsContainer.appendChild(gradeInput);
    subjectsContainer.appendChild(creditInput);
});

document.getElementById('calculate-cgpa').addEventListener('click', () => {
    let totalMarks = 0;
    let totalCredits = 0;

    for (let i = 1; i <= subjectCount; i++) {
        const gradeValue = parseFloat(document.getElementById(`grade-${i}`).value) || 0;
        const creditValue = parseFloat(document.getElementById(`credit-${i}`).value) || 0;

        totalMarks += gradeValue * creditValue;
        totalCredits += creditValue;
    }

    const result = document.getElementById('result');

    if (totalCredits === 0) {
        result.textContent = 'Total credits cannot be zero. Please check your inputs.';
    } else {
        const cgpa = totalMarks / totalCredits;
        result.textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
    }
});
