



// create the rows
for (var i=0; i<8; i++) {
  if ((i+1)%2 == 0) {
    createSquareRow("rowEven", ("row_" + (i+1)));
  } else {
    createSquareRow("rowOdd", ("row_" + (i+1)));
  }
}

// set up the pieces
drawPieces();
allowPieceMove();


//
// supporting functions
//
function allowPieceMove() {
  var pieces = document.getElementsByClassName('checker');
  for (var i=0; i<pieces.length; i++) {
    pieces[i].addEventListener('click', function() {
      console.log('hi');
    });
  }
  //pieces.addEventListener('click', console.log('hi'));
}


function drawPieces() {
  var squares = document.getElementsByName('square');
  for (var i=0; i<squares.length; i++) {
    if ((i > 39 && i < 47) || (i > 55)) {
      if ((i+1)%2 != 0) {
        squares[i].innerHTML += '<img class="checker" src="https://www.freeiconspng.com/uploads/red-circle-icon-7.png" width="60" alt="Red circle icon" /></a>';
      }
    } else if (i > 47 && i < 56) {
      if ((i+1)%2 == 0) {
        squares[i].innerHTML += '<img class="checker" src="https://www.freeiconspng.com/uploads/red-circle-icon-7.png" width="60" alt="Red circle icon" /></a>';
      }
    }
    else if ((i > 0 && i < 8) || (i > 15 && i < 24)) {
      if ((i+1)%2 == 0) {
        squares[i].innerHTML += '<img class="checker" src="https://www.freeiconspng.com/uploads/black-circle-icon-23.png" width="60" alt="Black circle icon" /></a>';
      }
    } else if (i > 7 && i < 16) {
      if ((i+1)%2 != 0) {
        squares[i].innerHTML += '<img class="checker" src="https://www.freeiconspng.com/uploads/black-circle-icon-23.png" width="60" alt="Black circle icon" /></a>';
      }
    }

  }
}


function createSquareRow(rowClassName, rowId) {
  var row = document.createElement('div');
  document.getElementById('square-container').appendChild(row);

  for (var i=0; i<8; i++) {
    var square = document.createElement('div');
    square.setAttribute('name', 'square');
    row.className = rowClassName;
    row.setAttribute('id', rowId);
    square.id = "square" + (i+1);

    row.appendChild(square);

  };
}
