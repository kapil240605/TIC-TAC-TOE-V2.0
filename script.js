let boxes = document.querySelectorAll('.box');
let rstbtn = document.querySelector('#rstbtn');
let newbtn = document.querySelector('.stbtn');
let msgcl = document.querySelector('.msgcl');
let msg = document.querySelector(`#msg`);

let turno = true;

const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    let turno = true;
    enb();
    msgcl.classList.add('hide');
}

const dis = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const enb = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turno) {
            box.innerHTML = "<i>K</i>";
            box.style.color = "blue";
            turno = false;
        } else {
            box.innerHTML = "<i>Y</i>";
            box.style.color = "red";
            turno = true;
        }
        box.disabled = true;

        checkwin();
    })
})

const showwin = (winner) => {
    msg.innerHTML = `<i>Congratulations the winner is  ${winner}.</i>`;
    msgcl.classList.remove("hide");
    dis();
}

const checkwin = () => {
    let count = true;
    for (const box of boxes) {
        if (box.innerText === "") {
            count = false;
            break;
        }
    }

    if (count) {
        msg.innerHTML = "<i>It's a draw!</i>";
        msgcl.classList.remove("hide");
        dis();
        return;
    }
    
    for (const pattern of winpat) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showwin(posval1);
            }
        }
    }
}


newbtn.addEventListener('click', resetgame);
rstbtn.addEventListener('click', resetgame);