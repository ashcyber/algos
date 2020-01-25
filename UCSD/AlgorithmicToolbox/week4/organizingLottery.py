#!/usr/bin/python3
import sys

def fast_count_segments(starts, ends, points):
    cnt = [0] * len(points)
    
    num_lst = []

    for s in starts: 
        num_lst.append((s,'s'))

    for l in ends: 
        num_lst.append((l, 'e'))
    
    for p in range(0, len(points)) : 
        num_lst.append((points[p], 'p', p))

    num_lst.sort(key= lambda val: val[0])
    
    count = 0
    for i in num_lst: 
        if i[1] == 's':
            count+=1
        elif i[1] == 'e':
            count-=1
        else:
            cnt[i[2]] = count          
    return cnt

def naive_count_segments(starts, ends, points):
    cnt = [0] * len(points)
    for i in range(len(points)):
        for j in range(len(starts)):
            if starts[j] <= points[i] <= ends[j]:
                cnt[i] += 1
    return cnt

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[1]
    starts = data[2:2 * n + 2:2]
    ends   = data[3:2 * n + 2:2]
    points = data[2 * n + 2:]
    #use fast_count_segments
    cnt = fast_count_segments(starts, ends, points)
    for x in cnt:
        print(x, end=' ')

