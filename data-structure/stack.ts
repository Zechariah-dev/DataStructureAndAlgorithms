class Stack {
  public top: number;
  public capacity: number;
  public array: (number | null)[];

  private MAXSIZE = 10;

  constructor() {
    this.top = -1;
    this.capacity = this.MAXSIZE;
    this.array = new Array(this.MAXSIZE);
  }

  public isEmpty() {
    return this.top === -1;
  }

  public isFull() {
    return this.top === this.capacity - 1;
  }

  public push(n: number) {
    if (this.isFull()) {
      console.log("Stack is full");
    } else {
      ++this.top;
      this.array[this.top] = n;
    }
  }

  public pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      this.array[this.top] = null;
      --this.top;
    }
  }

  public empty() {
    this.array = new Array(this.MAXSIZE);
  }

  public print() {
    console.log(this.array.join(", "));
  }
}

console.time();
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

console.log(stack.isFull());
stack.pop();
console.log(stack.isEmpty());

stack.print();

console.timeEnd();
