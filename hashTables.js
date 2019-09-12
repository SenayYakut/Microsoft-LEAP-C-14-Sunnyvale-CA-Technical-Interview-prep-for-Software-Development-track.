const h = new Object();//or just {}
h["one"]=1;
h["two"]=2;
h["three"]=3;
//show the values stored
for(let k in h){
    if(h.hasOwnProperty(k)) {
        alert("key is: "+k+ ". value is: "+h[k]);
        }
    }


const a = new Array();
a[0]=0;
a["one"]=1;
a["two"]=2;
a["three"]=3;

for(let k in a){
    if(a.hasOwnProperty(k)){
        alert("key is: "+k+ ". value is: "+a[k]);
    }
}
alert(a.length);


function HashTable(obj){
    this.length=0;
    this.items={};
    for(var p in obj){
        if(obj.hasOwnProperty(p)){
            this.items[p]=obj[p];
            this.length++;
        }
    }
    this.setItem=function(key, value){
        var previous = undefined;
        if(this.hasItem(key)){
            previous = this.items[key];
        }else{
            this.length++;
        }
        this.items[key]=value;
        return previous;
    }
    this.getItem=function(key){
        return this.hasItem(key) ? this.items[key] : undefined;
    }
    this.hasItem=function(key)
    {
        return this.items.hasOwnProperty(key);
    }
    this.removeItem=function(key)
    {
        if(this.hasItem(key)){
            previous=this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }else{
            return undefined;
        }
    }
    this.keys=function(){
        let keys=[];
        for(var k in this.items){
            if(this.hasItem(k)){
                keys.push(k);
            }
        }
        return keys;
    }
    this.values=function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }  
        return values;
    }
    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }
    this.clear=function(){
        this.items={}
        this.length=0;
    }
    }

    alert('original length: ' + h.length);
    alert('value of key "one": ' + h.getItem('one'));
    alert('has key "foo"? ' + h.hasItem('foo'));
    alert('previous value of key "foo": ' + h.setItem('foo', 'bar'));
    alert('length after setItem: ' + h.length);
    alert('value of key "foo": ' + h.getItem('foo'));
    alert('value of key "im no 4": ' + h.getItem("i'm no 4"));
    h.clear();
    alert('length after clear: ' + h.length);
   
    