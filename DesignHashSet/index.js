// 組み込みのハッシュテーブルライブラリを使用せずにHashSetを設計します。

// 具体的には、デザインに次の機能を含める必要があります。

// add(value)：HashSetに値を挿入します。
// contains(value) ：値がHashSetに存在するかどうかを返します。
// remove(value)：HashSetの値を削除します。値がHashSetに存在しない場合は、何もしません。

// ex
// MyHashSet hashSet = new MyHashSet（）;
// hashSet.add（1）;
// hashSet.add（2）;
// hashSet.contains（1）; // trueを返します
// hashSet.contains（3）; // falseを返します（見つかりません）
// hashSet.add（2）;
// hashSet.contains（2）; // trueを返します
// hashSet.remove（2）;
// hashSet.contains（2）; // falseを返します（すでに削除されています）

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  // 値が見つからない場合はそのkeyを配列に入れる。
  if (this.set.indexOf(key) === -1) {
    this.set.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  // 配列内に入力keyと同じものがあればそれを全て削除する。
  // indexOfで配列のなんばんめに同じものがあるか探索
  const index = this.set.indexOf(key);
  if (index >= 0) {
    // その配列の要素を指定して削除する。
    delete this.set[index];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  // 配列内に入力keyと同じものがあるか調べる。
  return this.set.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
