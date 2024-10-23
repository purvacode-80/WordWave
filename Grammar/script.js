document.addEventListener('DOMContentLoaded', function() {
    const notes = document.getElementById('notes');
    const saveButton = document.getElementById('saveNotesButton');

    // Load saved notes
    const savedNotes = localStorage.getItem('grammarNotes');
    if (savedNotes) {
        notes.value = savedNotes;
    }

    // Save notes on button click
    saveButton.addEventListener('click', function() {
        localStorage.setItem('grammarNotes', notes.value);
        alert('Notes saved successfully!');
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('show');
});
