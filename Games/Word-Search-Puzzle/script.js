const wordSets = [
  ['ROUTINE', 'TURQUOISE', 'MODULE', 'EACH', 'ELEGANT'],
  ['GOALS', 'LANGUAGE', 'BUNCH', 'TULIP', 'CUCUMBER'],
  ['CAULIFLOWER', 'HIBISCUS', 'SQUIRREL', 'WOLF', 'CELERY'],
  ['SPEAK', 'LISTEN', 'BRIGHT', 'ACROSS', 'QUIET'],
  ['AROUND', 'LAUGH', 'WARM', 'MOUNTAIN', 'THROUGH'],
  ['OUTSIDE', 'HEAVY', 'FRIENDLY', 'BEAUTIFUL', 'BEACH'],
  ['GARDEN', 'NEWSPAPER', 'OPPOSITE', 'AMONG', 'DARK'],
  ['FOLLOW', 'FORGET', 'CHANGE', 'DELICIOUS', 'ASK'],
  ['PHONE', 'RESTAURANT', 'PARK', 'JACKET', 'BEYOND'],
  ['SUGGEST', 'EXPLAIN', 'NOTICE', 'CHOOSE', 'SILENT'],
];

let currentSetIndex = 0; // Track the current word set
let grid = [];
let wordPositions = {};
let foundWords = new Set();
const gridSize = 10;

// Shuffle function to randomize the word sets on reset
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Initialize the puzzle grid
function initGrid() {
  const words = wordSets[currentSetIndex]; // Get the current word set
  grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
  wordPositions = {};
  foundWords.clear();
  selectedCells = [];
  populateGrid(words);
  fillEmptyCells();
  renderGrid();
  displayWordList(words);
  document.getElementById('message').textContent = '';
}

// Populate the grid with words
function populateGrid(words) {
  words.forEach(word => {
    let placed = false;
    while (!placed) {
      const direction = Math.floor(Math.random() * 2);
      const startRow = Math.floor(Math.random() * gridSize);
      const startCol = Math.floor(Math.random() * gridSize);
      if (canPlaceWord(word, startRow, startCol, direction)) {
        placeWord(word, startRow, startCol, direction);
        placed = true;
      }
    }
  });
}

// Check if a word can be placed
function canPlaceWord(word, row, col, direction) {
  if (direction === 0) { // Horizontal
    if (col + word.length > gridSize) return false;
    for (let i = 0; i < word.length; i++) {
      if (grid[row][col + i] !== '' && grid[row][col + i] !== word[i]) return false;
    }
  } else { // Vertical
    if (row + word.length > gridSize) return false;
    for (let i = 0; i < word.length; i++) {
      if (grid[row + i][col] !== '' && grid[row + i][col] !== word[i]) return false;
    }
  }
  return true;
}

// Place a word in the grid
function placeWord(word, row, col, direction) {
  if (direction === 0) { // Horizontal
    for (let i = 0; i < word.length; i++) {
      grid[row][col + i] = word[i];
    }
    wordPositions[word] = { row, col, direction, length: word.length };
  } else { // Vertical
    for (let i = 0; i < word.length; i++) {
      grid[row + i][col] = word[i];
    }
    wordPositions[word] = { row, col, direction, length: word.length };
  }
}

// Fill empty cells with random letters
function fillEmptyCells() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === '') {
        grid[rowIndex][colIndex] = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    });
  });
}

// Render the grid to the table
function renderGrid() {
  const table = document.getElementById('wordSearchTable');
  table.innerHTML = '';
  grid.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');
    row.forEach((cell, colIndex) => {
      const td = document.createElement('td');
      td.textContent = cell;
      td.dataset.row = rowIndex;
      td.dataset.col = colIndex;
      td.addEventListener('click', () => selectCell(td));
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

// Display the word list
function displayWordList(words) {
  const wordsToFind = document.getElementById('wordsToFind');
  wordsToFind.innerHTML = '';
  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    wordsToFind.appendChild(li);
  });
}

// Handle cell selection
let selectedCells = [];
function selectCell(cell) {
  cell.classList.toggle('selected');
  const index = selectedCells.findIndex(c => c === cell);
  if (index !== -1) {
    selectedCells.splice(index, 1); // Deselect cell
  } else {
    selectedCells.push(cell); // Add cell to selection
  }
  checkWord(); // Check if a word is selected
}

// Check if the selected cells form any word
function checkWord() {
  if (selectedCells.length === 0) {
    document.getElementById('message').textContent = 'Please select some cells!';
    return;
  }

  const selectedWord = selectedCells.map(cell => cell.textContent).join('');
  const reversedSelectedWord = selectedCells.map(cell => cell.textContent).reverse().join('');

  const words = wordSets[currentSetIndex];
  const word = words.find(w => w === selectedWord || w === reversedSelectedWord);
  
  if (word) {
    if (!foundWords.has(word)) {
      foundWords.add(word);
      selectedCells.forEach(cell => cell.classList.add('found'));
      selectedCells = [];

      document.getElementById('message').textContent = `You found: ${word}!`;

      if (foundWords.size === words.length) {
        document.getElementById('message').textContent = 'All words are found!';
      }
    }
  } else {
    document.getElementById('message').textContent = 'Incorrect selection, try again.';
  }
}

// Reset the game with the next word set
function resetGame() {
  selectedCells.forEach(cell => cell.classList.remove('selected', 'found')); // Clear previous selections
  selectedCells = [];
  foundWords.clear();
  document.getElementById('message').textContent = '';

  // Shuffle to the next word set
  currentSetIndex = (currentSetIndex + 9) % wordSets.length;

  initGrid(); // Reinitialize the grid with a new set of words
}

// Attach event listeners to buttons
document.getElementById('resetBtn').addEventListener('click', resetGame);

// Initialize the game when the page loads
initGrid();
