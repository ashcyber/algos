import sys

def get_fibonacci_huge_fast(n, m):
    arr = [0, 1]
    i = 2
    while(True):
        if(arr[i-2] == 0 and arr[i-1] == 1 and i > 2):
            arr.pop()
            arr.pop() 
            break
        else:
            arr.append((arr[i-1] + arr[i-2]) % m)

        i = i + 1
        
    pisano_period = len(arr)
    return arr[(n % pisano_period)]    


def get_fibonacci_huge_naive(n, m):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % m

if __name__ == '__main__':
    input = sys.stdin.read()
    n, m = map(int, input.split())
    print(get_fibonacci_huge_fast(n,m))
