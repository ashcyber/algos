class Solution:
    def sumEvenAfterQueries(self, A, queries):
        """
        :type A: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        res = []
        s = sum(filter(lambda x: x % 2 == 0, A))
        for q in queries:
            val = q[0]
            idx = q[1]
            
            if A[idx] % 2 == 0:
                if(val % 2 == 0):
                    s+=val
                else:
                    s-=A[idx]
            else:
                if(val % 2 != 0):
                    s+=A[idx]+val

            A[idx] += val
            res.append(s)

        print(list(res))
a = Solution() 
a.sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]])
        