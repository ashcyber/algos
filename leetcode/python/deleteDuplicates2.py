# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        prev = None
        slow = head 
        fast = slow 

        while slow:
            while fast and fast.val == slow.val:
                fast = fast.next 
            
            if slow.next == fast:
                prev = slow 
            else:
                if prev == None:
                    head = fast
                else:
                    prev.next = fast

            slow = fast
        
        return head 