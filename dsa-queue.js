class DSA {
    item = [];
    constructor() {
        this.item = [];
    }

    isempty() {
        return this.item.length == 0;
    }

    enqueue(element) {
        this.item.push(element);

    }

    
    dequeue() {
        if (this.isempty()) {
            return "stack is empty";
        } else {
            this.item.shift();
        }
    }

    // deque(x){
    //     if(this.isempty()){
    //         return "queue is empty";
    //     }
    //     else {
    //           var ar=[];
    //         for(let i=0;i<this.item.length;i++)
    //             {
    //                 ar[i]=this.item[i+1];
    //             }
    //             this.item=ar;
    //     }
            
    // }
    // enque(x){
    //     if(this.isempty()){
    //         this.item[0]=x;
    //     }
    //     else{
    //         this.item[this.item.length]=x;
    //     }
    // }


    lastofqueue() {
        if (this.isempty()) {
            return "stack underflow";
        }
        else {
            return this.item[this.item.length - 1];
        }
    }

    size() {
        if (this.isempty()) {
            return "stack is empty";
        }
        else {
            return this.item.length;
        }
    }

    printqueue() {
        if (this.isempty()) {
            return "no elements in the stack";
        }
        else {
            for (let i = 0; i < this.item.length; i++) {
                console.log(this.item[i]);
            }
        }
    }


}

const st = new DSA(10, 20);

console.log(st.isempty());

st.enqueue(10);
st.enqueue(60);
st.enqueue(40);
st.enqueue(30);
st.enqueue(80);
st.enqueue(50);

console.log(st.lastofqueue());
console.log(st.dequeue());
st.printqueue();
console.log(st.size());
console.log(st.isempty());
st.printqueue();