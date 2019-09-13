var HashMap=function(){
    this._size=0;
    this._map={};
}

HashMap.prototype={
    put: function(key, value){
        if(!this.containsKey(key)){
            this._size++;
        }
        this._map[key]=value;
    },
    remove:function(key){
        if(this.containsKey(key)){
            this._size--;
            
        }
    }
}