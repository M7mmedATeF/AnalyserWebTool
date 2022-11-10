const total = document.querySelector('#Graph').clientWidth / 2;
const analysisGraph = document.querySelector('#analysis');
const analysisBorder = document.querySelector('#analysisBorder');
let border = 10;

// INPUTS
const topINP = document.querySelector('#top');
const topRightINP = document.querySelector('#topRight');
const bottomRightINP = document.querySelector('#bottomRight');
const bottomINP = document.querySelector('#bottom');
const bottomLeftINP = document.querySelector('#bottomLeft');
const topLeftINP = document.querySelector('#topLeft');

const values = {
    top: total,
    topRight: total,
    bottomRight: total,
    bottom: total,
    bottomLeft: total,
    topLeft: total
}

function Separator(v1, v2, angle) {
    let cordinates = {
        x: '0%',
        y: '0%'
    }
    let value = (v1 + v2) / 8;

    cordinates.x = (100 - ((value * getSinAngle(angle) / (total * 2) * 100) + 50)) + '%';
    cordinates.y = (100 - ((value * getSinAngle(90 - angle)) / (total * 2) * 100 + 50)) + '%';
    return (cordinates);
}

function coordinatesCalculator(value, angle) {
    let cordinates = {
        x: '0%',
        y: '0%'
    }

    cordinates.x = (100 - ((value * getSinAngle(angle) / (total * 2) * 100) + 50)) + '%';
    cordinates.y = (100 - ((value * getSinAngle(90 - angle)) / (total * 2) * 100 + 50)) + '%';
    return (cordinates);
}

function makePoly() {
    let coordinates = {
        top: coordinatesCalculator(values.top, 0),
        topRightSeparator: Separator(values.topRight, values.top, 330),
        topRight: coordinatesCalculator(values.topRight, 300),
        rightSeparator: Separator(values.topRight, values.bottomRight, 270),
        bottomRight: coordinatesCalculator(values.bottomRight, 241),
        bottmRightSeparator: Separator(values.bottom, values.bottomRight, 210),
        bottom: coordinatesCalculator(values.bottom, 180),
        bottmLeftSeparator: Separator(values.bottom, values.bottomLeft, 150),
        bottomLeft: coordinatesCalculator(values.bottomLeft, 119),
        leftSeparator: Separator(values.topLeft, values.bottomLeft, 90),
        topLeft: coordinatesCalculator(values.topLeft, 60),
        topLeftSeparator: Separator(values.topLeft, values.top, 30),
    }

    let poly = `
    polygon(
        ${coordinates.top.x} ${coordinates.top.y},
        ${coordinates.topRightSeparator.x} ${coordinates.topRightSeparator.y},
        ${coordinates.topRight.x} ${coordinates.topRight.y},
        ${coordinates.rightSeparator.x} ${coordinates.rightSeparator.y},
        ${coordinates.bottomRight.x} ${coordinates.bottomRight.y},
        ${coordinates.bottmRightSeparator.x} ${coordinates.bottmRightSeparator.y},
        ${coordinates.bottom.x} ${coordinates.bottom.y},
        ${coordinates.bottmLeftSeparator.x} ${coordinates.bottmLeftSeparator.y},
        ${coordinates.bottomLeft.x} ${coordinates.bottomLeft.y},
        ${coordinates.leftSeparator.x} ${coordinates.leftSeparator.y},
        ${coordinates.topLeft.x} ${coordinates.topLeft.y},
        ${coordinates.topLeftSeparator.x} ${coordinates.topLeftSeparator.y}
        )`

    analysisGraph.style.clipPath = poly;
    return poly;
}

function makeBorderPoly() {
    let coordinates = {
        top: coordinatesCalculator(values.top + border, 0),
        topRightSeparator: Separator(values.topRight + border, values.top + border, 330),
        topRight: coordinatesCalculator(values.topRight + border, 300),
        rightSeparator: Separator(values.topRight + border, values.bottomRight + border, 270),
        bottomRight: coordinatesCalculator(values.bottomRight + border, 241),
        bottmRightSeparator: Separator(values.bottom + border, values.bottomRight + border, 210),
        bottom: coordinatesCalculator(values.bottom + border, 180),
        bottmLeftSeparator: Separator(values.bottom + border, values.bottomLeft + border, 150),
        bottomLeft: coordinatesCalculator(values.bottomLeft + border, 119),
        leftSeparator: Separator(values.topLeft + border, values.bottomLeft + border, 90),
        topLeft: coordinatesCalculator(values.topLeft + border, 60),
        topLeftSeparator: Separator(values.topLeft + border, values.top + border, 30),
    }

    let poly = `
    polygon(
        ${coordinates.top.x} ${coordinates.top.y},
        ${coordinates.topRightSeparator.x} ${coordinates.topRightSeparator.y},
        ${coordinates.topRight.x} ${coordinates.topRight.y},
        ${coordinates.rightSeparator.x} ${coordinates.rightSeparator.y},
        ${coordinates.bottomRight.x} ${coordinates.bottomRight.y},
        ${coordinates.bottmRightSeparator.x} ${coordinates.bottmRightSeparator.y},
        ${coordinates.bottom.x} ${coordinates.bottom.y},
        ${coordinates.bottmLeftSeparator.x} ${coordinates.bottmLeftSeparator.y},
        ${coordinates.bottomLeft.x} ${coordinates.bottomLeft.y},
        ${coordinates.leftSeparator.x} ${coordinates.leftSeparator.y},
        ${coordinates.topLeft.x} ${coordinates.topLeft.y},
        ${coordinates.topLeftSeparator.x} ${coordinates.topLeftSeparator.y}
        )`

    analysisBorder.style.clipPath = poly;
    return poly;
}

function getSinAngle(angle) {
    return Math.sin(angle * Math.PI / 180);
}

makePoly();
//

topINP.addEventListener('change', (e) => {
    values.top = (e.target.value / 100) * total;
    makePoly();
})

topRightINP.addEventListener('change', (e) => {
    values.topRight = (e.target.value / 100) * total;
    makePoly();
})

bottomRightINP.addEventListener('change', (e) => {
    values.bottomRight = (e.target.value / 100) * total;
    makePoly();
})

bottomINP.addEventListener('change', (e) => {
    values.bottom = (e.target.value / 100) * total;
    makePoly();
})

bottomLeftINP.addEventListener('change', (e) => {
    values.bottomLeft = (e.target.value / 100) * total;
    makePoly();
})

topLeftINP.addEventListener('change', (e) => {
    values.topLeft = (e.target.value / 100) * total;
    makePoly();
})