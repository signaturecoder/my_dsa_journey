function contains(target) {

    if(this.root === null) return false;

    let temp = this.root;

    while(true) {
        if(target === temp.value) {
            return true;
        } else if(target < temp.value){
            if(temp.left === null){
                return false;
            } else {
                temp = temp.left;
            }
        } else {
            if(temp.right === null){
                return false;
            } else {
                temp = temp.right;
            } 
        }
    }

}