import * as fabric from 'fabric'; // v6

let canvas = new fabric.Canvas('canvas');
console.log(document.body.clientWidth);
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight

const fullLock = {
  lockMovementX: true, lockMovementY: true, lockScalingFlip: true,
  lockRotation: true, lockScalingX: true, lockScalingY: true, lockSkewingX: true, lockSkewingY: true
}

const baseArm = new fabric.Line([600, 200, 600, 450], {
  stroke: '#696969',
  strokeWidth: 5,
  ...fullLock
});

const circle = new fabric.Circle({
  left: baseArm.x1 - 20,
  top: baseArm.y1 - 20,
  radius: 20,
  fill: '#696969',
  ...fullLock
});

const scaleArm = new fabric.Line([baseArm.x1 - 200, baseArm.y1, baseArm.x2 + 200, baseArm.y2 - 100], {
  stroke: '#696969',
  strokeWidth: 5,
  ...fullLock
});




const firstThreadFirstBowl = new fabric.Line([scaleArm.x1, scaleArm.y1, scaleArm.x1 + 50, scaleArm.y1 + 100], {
  stroke: '#696969',
  strokeWidth: 1,
  ...fullLock
});

const secondThreadFirstBowl = new fabric.Line([scaleArm.x1, scaleArm.y1, scaleArm.x1 - 50, scaleArm.y1 + 100], {
  stroke: '#696969',
  strokeWidth: 1,
  ...fullLock
});


const firstBowl = new fabric.Line([firstThreadFirstBowl.x2, firstThreadFirstBowl.y2, secondThreadFirstBowl.x2, secondThreadFirstBowl.y2], {
  stroke: '#696969',
  strokeWidth: 4,
  ...fullLock
});




const firstThreadSecondBowl = new fabric.Line([scaleArm.x2, scaleArm.y2, scaleArm.x2 + 50, scaleArm.y2 + 100], {
  stroke: '#696969',
  strokeWidth: 1,
  ...fullLock
});

const secondThreadSecondBowl = new fabric.Line([scaleArm.x2, scaleArm.y2, scaleArm.x2 - 50, scaleArm.y2 + 100], {
  stroke: '#696969',
  strokeWidth: 1,
  ...fullLock
});

const secondBowl = new fabric.Line([firstThreadSecondBowl.x2, firstThreadSecondBowl.y2, secondThreadSecondBowl.x2, secondThreadSecondBowl.y2], {
  stroke: '#696969',
  strokeWidth: 4,
  ...fullLock
});

let firstCircle = new fabric.Circle({
  radius: 13, fill: '#ff8888',
  left: (firstBowl.x1 + firstBowl.x2) / 2 - 13,
  top: (firstBowl.y1 + firstBowl.y2) / 2 - 26,
  lockMovementX: true, lockMovementY: true, lockScalingFlip: true,
  title: 'first',
});

let secondCircle = new fabric.Circle({
  radius: 20, fill: '#60d3db',
  left: (secondBowl.x1 + secondBowl.x2) / 2 - 20,
  top: (secondBowl.y1 + secondBowl.y2) / 2 - 40,
  lockMovementX: true, lockMovementY: true, lockScalingFlip: true,
  title: 'second',
})

// setInterval(() => {
  canvas.add(
    baseArm, circle, scaleArm,
    firstThreadFirstBowl, secondThreadFirstBowl,
    firstThreadSecondBowl, secondThreadSecondBowl,
    firstBowl, secondBowl,
    firstCircle, secondCircle
  );

function moveHandler(e) {
  console.log(e);
  console.log("top", e.target.top)
  console.log("left", e.target.left)
  console.log("width", e.target.width)
  console.log("height", e.target.height)
  console.log("angle", e.target.angle)
  console.log("endAngle", secondCircle.endAngle)
  console.log("paintFirst", e.target.paintFirst)
  console.log("strokeWidth", e.target.strokeWidth)
  console.log("radius", e.target.radius)
}

canvas.on('object:modified', moveHandler);