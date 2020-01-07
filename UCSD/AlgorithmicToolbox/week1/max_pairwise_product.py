# Uses python3
n = int(input())
a = [int(x) for x in input().split()]
assert(len(a) == n)

result = 0

a_max = -1 
b_max = -1 
a_index = -1

# find highest value 
for i in range(0, n):
    if(a[i] >= a_max):
        a_index = i 
        a_max = a[i]

#find second highest value 
for j in range(0, n): 
    if(a[j] >= b_max and j != a_index):
        b_max = a[j]
    
print(a_max * b_max)



