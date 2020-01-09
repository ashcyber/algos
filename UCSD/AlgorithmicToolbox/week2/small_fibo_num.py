# Uses python3
def calc_fib(n):
    if (n <= 1):
        return n

    return calc_fib(n - 1) + calc_fib(n - 2)

def calc_fib_fast(n): 
    a = 1
    b = 1 
    c = a+b
    
    if n == 0:
        return 0
    elif n <= 2:
        return a
    else: 
        for _ in range(2, n): 
            c = a + b 
            a = b
            b = c 
            
    return c

n = int(input())
print(calc_fib_fast(n))
# print(calc_fib(n))