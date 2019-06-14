class HashTable {
  constructor (size) {
    this.data = new Array(size)
  }

  _hash (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set (key, value) {
    var hashAddress = this._hash(key)
    if (this.data[hashAddress]) {
      // push new key-value
      this.data[hashAddress].push([key, value])
    } else {
      // if doesn't exist push new
      this.data[hashAddress] = [[key, value]]
    }
  }

  get (key) {
    var hashAddress = this._hash(key)
    var hashData = this.data[hashAddress]
    // if hashData exists and there is no other data
    if (hashData && hashData.length > 1) {
      // if hashdata is greater than one, loop through the array at that hash and find the key and value
      var hashArray = this.data[hashAddress]
      // loop through hashArray
      for (var i = 0; i < hashArray.length; i++) {
        var hashArrayKey = hashArray[i][0]
        if (hashArrayKey === key) return hashArray[i][1]
      }
    } else {
      return undefined
    }
  }
}

const myHashTable = new HashTable(2)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.set('oranges', 6)
myHashTable.get('oranges')
