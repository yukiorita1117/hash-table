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
