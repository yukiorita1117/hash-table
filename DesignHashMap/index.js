// 組み込みのハッシュテーブルライブラリを使用せずにHashMapを設計します。

// 具体的には、デザインに次の機能を含める必要があります。

// put(key, value)：（キー、値）ペアをHashMapに挿入します。値がHashMapにすでに存在する場合は、値を更新します。
// get(key)：指定されたキーがマップされている値を返します。このマップにキーのマッピングが含まれていない場合は-1を返します。
// remove(key) ：このマップにキーのマッピングが含まれている場合は、値キーのマッピングを削除します。

// ex：

// MyHashMap hashMap = new MyHashMap（）;
// hashMap.put（1、1）;
// hashMap.put（2、2）;
// hashMap.get（1）; // 1を返します
// hashMap.get（3）; // -1を返します（見つかりません）
// hashMap.put（2、1）; //既存の値を更新します
// hashMap.get（2）; // 1を返します
// hashMap.remove（2）; // 2のマッピングを削除します
// hashMap.get（2）; // -1を返します（見つかりません）

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.set = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
      if (this.set.indexOf(key) === -1) {
          this.set.push({"key":key,"value":value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
　　//仮にkeyが3の場合そのオブジェクトを削除
    const key = this.set.indexOf(key);
    this.set.some((value,index)=>{
        if(value.id===key)this.set.splice(index,1)
    })
};
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */