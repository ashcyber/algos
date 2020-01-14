"""
    Collecting Signatures 
        - Safe Move => Selecting the right most point of the segment
        Algorithm: 
            - Until all segments are visited 
            - Let prevIdx record the index of point at which it was placed: 
                 - this is the right point point of first segment 
            - Check if the x-coord of the prevIdx is between the next segment 
            - If yes => mv to next segment 
            - else update the prevIdx to right most point of new index 
                - increment the count of counter for num of points 

        Time Complexity: O(n) + O(nLogn) => O(nLogn)
"""

# Uses python3
import sys
from collections import namedtuple

Segment = namedtuple('Segment', 'start end')

def optimal_points(segments):
    points = []

    def secondKey(val):
            return val[1]

    segments.sort(key=secondKey)
    i = 0
    while i < len(segments):
        j = i + 1
        prevPoint = segments[i].end
        while j < len(segments) and (prevPoint <= segments[j].end and prevPoint >= segments[j].start):
            j+=1
        points.append(prevPoint)
        i=j
    return points

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *data = map(int, input.split())
    segments = list(map(lambda x: Segment(x[0], x[1]), zip(data[::2], data[1::2])))
    points = optimal_points(segments)
    print(len(points))
    for p in points:
        print(p, end=' ')
