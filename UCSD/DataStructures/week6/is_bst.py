#!/usr/bin/python3

import sys, threading

sys.setrecursionlimit(10**7) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

def IsBinarySearchTree(tree):
    if(len(tree) == 0):
        return True

    def inOrder():
        result = []
        # Finish the implementation
        # You may need to add a new recursive method to do that
        def inOrderRecur(idx):
            if idx != -1:
                leftIdx = tree[idx][1]
                rightIdx = tree[idx][2]
                inOrderRecur(leftIdx)
                result.append(tree[idx][0])
                inOrderRecur(rightIdx)

        inOrderRecur(0)

        return result
    
    res = inOrder()
    for i in range(1, len(res)): 
        if(res[i-1] > res[i]): 
            return False

    return True

def main():
  nodes = int(sys.stdin.readline().strip())
  tree = []
  for i in range(nodes):
    tree.append(list(map(int, sys.stdin.readline().strip().split())))
  if IsBinarySearchTree(tree):
    print("CORRECT")
  else:
    print("INCORRECT")

threading.Thread(target=main).start()
