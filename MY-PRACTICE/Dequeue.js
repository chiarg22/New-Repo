//mplement a EnQueue &
// DeQueue Method (Google to know
//     about it) & Allow upto 10 elements
//     in a queue only

//Enqueue -> Removing the element from 1st of the queue and limit it to 10 elements.

function DeQueue(q) {
  // empty=[];
  if (q.length < 1) {
    console.log("Queue is empty");
  } else if (q.length >= 10) {
    console.log(
      "The length of the queue that is acceptable is limited to 10 only."
    );
  } else {
    for (let i = 0; i < q.length; i++) {
      q[i] = q[i + 1];
    }
  }
  q.pop();
  console.log(q);
}

DeQueue([1, 2, 3]);
