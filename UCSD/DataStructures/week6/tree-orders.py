# python3

import sys, threading
sys.setrecursionlimit(10**6) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

class TreeOrders:
  def read(self):
    self.n = int(sys.stdin.readline())
    self.key = [0 for i in range(self.n)]
    self.left = [0 for i in range(self.n)]
    self.right = [0 for i in range(self.n)]
    for i in range(self.n):
      [a, b, c] = map(int, sys.stdin.readline().split())
      self.key[i] = a
      self.left[i] = b
      self.right[i] = c

  def inOrder(self):
    self.result = []
    # Finish the implementation
    # You may need to add a new recursive method to do that
    def inOrderRecur(idx):
        if idx != -1:
            inOrderRecur(self.left[idx])
            self.result.append(self.key[idx])
            inOrderRecur(self.right[idx])

    inOrderRecur(0)

    return self.result

  def preOrder(self):
    self.result = []
    # Finish the implementation
    # You may need to add a new recursive method to do that
    def preOrderRecur(idx): 
        if idx != -1:
            self.result.append(self.key[idx])
            preOrderRecur(self.left[idx])
            preOrderRecur(self.right[idx])
    
    preOrderRecur(0) 

    return self.result

  def postOrder(self):
    self.result = []
    # Finish the implementation
    # You may need to add a new recursive method to do that
    def postOrderRecur(idx): 
        if idx != -1:
            postOrderRecur(self.left[idx])
            postOrderRecur(self.right[idx])
            self.result.append(self.key[idx])

    postOrderRecur(0)
    
    return self.result

def main():
	tree = TreeOrders()
	tree.read()
	print(" ".join(str(x) for x in tree.inOrder()))
	print(" ".join(str(x) for x in tree.preOrder()))
	print(" ".join(str(x) for x in tree.postOrder()))

threading.Thread(target=main).start()
