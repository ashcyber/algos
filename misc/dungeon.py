from collections import deque

# The main game grid 
grid = [
    ["S",".",".","#",".",".","."],
    [".","#",".",".",".","#","."],
    [".","#",".",".",".",".","."],
    [".",".","#","#",".",".","."],
    ["#",".","#","",".","#","."]
]

# size of rows and colums 
R = len(grid)
C = len(grid[0])

# visited matrix stores boolean value 
# to indicate whether the cell has been visited 
visited = [[False for col in range(C)] for row in range(R) ]

# row and column queues 
rq = deque([0])
cq = deque([0])

# bool for end game check 
reached_end = False
cells_explored = 0

while(rq and not reached_end):
    sr = rq.popleft()
    sc = cq.popleft()

    cells_explored+=1

    if grid[sr][sc] == "E":
        reached_end = True
        break
    
    # row and column direction vectors 
    dr = [1,0,0,-1]
    dc = [0,1,-1,0]

    # explore neighbours and add in Qs 
    for i, _ in enumerate(dr):
        
        rr = sr - dr[i]
        cc = sc - dc[i]

        if rr < 0 or cc < 0: continue
        if rr >= R or cc >= C: continue
        if grid[rr][cc] == "#": continue
        if visited[rr][cc] : continue

        rq.append(rr)
        cq.append(cc)
        visited[rr][cc] = True

if(reached_end):
    print("Reached the end")
else:
    print("End not Found")
print("Cells explored: %s" % cells_explored)
